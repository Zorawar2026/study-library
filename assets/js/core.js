/* ==========================================================================
   Study Library — core
   Registry for modules, script loader, Markdown-lite renderer, math, storage,
   theme handling and a content validator. No build step, no dependencies.
   ========================================================================== */
(function () {
  "use strict";

  const A = (window.Academy = window.Academy || {});
  A._modules = {};
  A._extras = {};
  A._catalog = [];
  A._site = { title: "Study Library", tagline: "", owner: "" };
  A._loadWarnings = [];

  /* ---------- Registration API (called from data files) ---------- */
  A.site = (cfg) => Object.assign(A._site, cfg || {});
  A.catalog = (list) => {
    A._catalog = (list || []).map((x) => (typeof x === "string" ? { id: x } : x));
  };
  A.module = (def) => {
    if (!def || !def.id) {
      console.error("Academy.module() called without an id", def);
      return;
    }
    A._modules[def.id] = def;
  };
  A.extraQuiz = (moduleId, set) => {
    (A._extras[moduleId] = A._extras[moduleId] || []).push(set || {});
  };

  /* ---------- Helpers ---------- */
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  A.esc = esc;
  A.$ = (sel, root) => (root || document).querySelector(sel);
  A.$$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  A.arr = (x) => (Array.isArray(x) ? x : x == null ? [] : [x]);
  A.slug = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  A.plain = (md) =>
    String(md || "")
      .replace(/\$\$?([^$]+)\$\$?/g, "$1")
      .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_`#>]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  A.param = (name) => new URLSearchParams(location.search).get(name);

  /* ---------- Script loading ---------- */
  A.loadScript = (src) =>
    new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error("Could not load " + src));
      document.head.appendChild(s);
    });

  A.loadCss = (href) =>
    new Promise((resolve) => {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      l.onload = resolve;
      l.onerror = resolve;
      document.head.appendChild(l);
    });

  /* KaTeX (bundled in assets/vendor/katex, MIT licence) renders $...$ math.
     If it can't load, the raw TeX is shown instead so nothing is lost. */
  const KATEX = "assets/vendor/katex/";
  A.loadMath = () => {
    if (window.katex) return Promise.resolve(true);
    const timeout = new Promise((r) => setTimeout(() => r(false), 4000));
    const load = Promise.all([A.loadCss(KATEX + "katex.min.css"), A.loadScript(KATEX + "katex.min.js")])
      .then(() => true)
      .catch(() => false);
    return Promise.race([load, timeout]);
  };

  A.math = (tex, display) => {
    if (window.katex) {
      try {
        return window.katex.renderToString(tex, { displayMode: !!display, throwOnError: false, output: "htmlAndMathml" });
      } catch (e) {
        /* fall through */
      }
    }
    return `<span class="tex${display ? " tex-display" : ""}">${esc(tex)}</span>`;
  };

  A.validId = (id) => /^[a-z0-9][a-z0-9_-]*$/i.test(id || "");

  A.loadModule = async (id) => {
    if (!A.validId(id)) throw new Error(`"${id}" is not a valid module id (letters, digits, - and _ only).`);
    if (!A._modules[id]) await A.loadScript(`modules/${id}/module.js`);
    const m = A._modules[id];
    if (!m) throw new Error(`modules/${id}/module.js loaded, but it does not register a module with id "${id}".`);
    if (!m._extrasLoaded) {
      for (const f of A.arr(m.extraFiles)) {
        try {
          await A.loadScript(`modules/${id}/${f}`);
        } catch (e) {
          A._loadWarnings.push(e.message);
          console.warn(e.message);
        }
      }
      m._extrasLoaded = true;
    }
    return A.prepare(m);
  };

  A.loadCatalog = async () => {
    if (!A._catalog.length) await A.loadScript("modules/catalog.js");
    return A._catalog;
  };

  /* ---------- Normalise a module and build lookup tables ---------- */
  A.prepare = (m) => {
    if (m._prepared) return m;
    m.lessons = A.arr(m.lessons);
    m.terms = A.arr(m.terms);
    m.quiz = A.arr(m.quiz);
    m.sources = A.arr(m.sources);
    m.coverage = A.arr(m.coverage);
    m.objectives = A.arr(m.objectives);
    m.prerequisites = A.arr(m.prerequisites);
    m.openQuestions = A.arr(m.openQuestions);
    m.flashcards = A.arr(m.flashcards);
    m.teachingNotes = A.arr(m.teachingNotes);

    m.lessonById = {};
    m.lessons.forEach((l, i) => {
      l._index = i;
      l.blocks = A.arr(l.blocks);
      l.takeaways = A.arr(l.takeaways);
      l.check = A.arr(l.check).map((q, j) => Object.assign({ id: `${l.id}-check-${j + 1}` }, q, { lesson: l.id, _set: "check" }));
      m.lessonById[l.id] = l;
    });

    m.termById = {};
    m.terms.forEach((t) => {
      m.termById[t.id] = t;
      t.aliases = A.arr(t.aliases);
      t.related = A.arr(t.related);
    });

    // Find the definition block for each term so Quick Reference can link straight to it.
    const walk = (blocks, lessonId) =>
      A.arr(blocks).forEach((b) => {
        if (!b) return;
        if (b.type === "definition" && m.termById[b.term]) {
          b.id = b.id || `def-${b.term}`;
          m.termById[b.term]._anchor = m.termById[b.term]._anchor || b.id;
          m.termById[b.term]._defLesson = lessonId;
        }
        if (b.blocks) walk(b.blocks, lessonId);
      });
    m.lessons.forEach((l) => walk(l.blocks, l.id));
    m.terms.forEach((t) => {
      if (!t._anchor && t.lesson && m.lessonById[t.lesson]) t._anchor = `L-${t.lesson}`;
    });

    // Merge the core quiz with any extra quiz sets (quiz-extra.js files).
    m.quizSets = [{ id: "core", title: m.quizTitle || "Core questions" }];
    m.allQuiz = m.quiz.map((q, i) => Object.assign({ id: `core-${i + 1}` }, q, { _set: "core" }));
    A.arr(A._extras[m.id]).forEach((set, k) => {
      const sid = set.id || `extra-${k + 1}`;
      m.quizSets.push({ id: sid, title: set.title || `Extra set ${k + 1}`, description: set.description || "", source: set.source || "" });
      A.arr(set.questions).forEach((q, i) => m.allQuiz.push(Object.assign({ id: `${sid}-${i + 1}` }, q, { _set: sid })));
    });

    m._prepared = true;
    return m;
  };

  /* ---------- Markdown-lite ----------
     Inline: **bold**, *italic*, `code`, $math$, $$display math$$, [text](url),
             [[term-id]] or [[term-id|label]] (links to the Quick Reference), \$ for a literal dollar.
     Blocks: paragraphs (blank line), "- " / "1. " lists (indent 2 spaces to nest), "### " sub-headings. */
  A.termLink = (id, label, ctx) => {
    const m = ctx && ctx.module;
    const t = m && m.termById && m.termById[id];
    if (!t) {
      if (m) (m._missingTerms = m._missingTerms || new Set()).add(id);
      return `<span class="term-missing" title="Unknown term id: ${esc(id)}">${esc(label || id)}</span>`;
    }
    const href = `module.html?m=${encodeURIComponent(m.id)}&tab=ref&term=${encodeURIComponent(id)}`;
    return `<a class="term-link" data-term="${esc(id)}" href="${href}" title="${esc(A.plain(t.short))}">${esc(label || t.term)}</a>`;
  };

  A.inline = (src, ctx) => {
    if (src == null) return "";
    let s = String(src);
    const held = [];
    const hold = (html) => {
      held.push(html);
      return `\u0000${held.length - 1}\u0000`;
    };
    s = s.replace(/\\\$/g, () => hold("$"));
    s = s.replace(/`([^`]+)`/g, (_, c) => hold(`<code>${esc(c)}</code>`));
    s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => hold(A.math(t.trim(), true)));
    s = s.replace(/\$([^\s$](?:[^$]*?[^\s$])?)\$/g, (_, t) => hold(A.math(t, false)));
    s = s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => hold(A.termLink(id.trim(), label && label.trim(), ctx)));
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, url) => {
      const safe = /^(https?:|mailto:|#|\.{0,2}\/|[a-z0-9_-]+\.html)/i.test(url) ? url : "#";
      const ext = /^https?:/i.test(safe) ? ' target="_blank" rel="noopener"' : "";
      return hold(`<a href="${esc(safe)}"${ext}>${esc(text)}</a>`);
    });
    s = esc(s);
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*\w])\*(?!\s)(.+?)(?<!\s)\*(?!\w)/g, "$1<em>$2</em>");
    s = s.replace(/==(.+?)==/g, "<mark>$1</mark>");
    return s.replace(/\u0000(\d+)\u0000/g, (_, i) => held[+i]);
  };

  A.md = (src, ctx) => {
    if (src == null || src === "") return "";
    if (Array.isArray(src)) return src.map((x) => A.md(x, ctx)).join("");
    const lines = String(src).replace(/\r/g, "").split("\n");
    const out = [];
    let para = [];
    const stack = []; // {type, indent}
    const flush = () => {
      if (para.length) {
        out.push(`<p>${A.inline(para.join(" "), ctx)}</p>`);
        para = [];
      }
    };
    const closeTo = (indent) => {
      while (stack.length && stack[stack.length - 1].indent > indent) out.push(`</li></${stack.pop().type}>`);
    };
    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];
      const line = raw.replace(/\s+$/, "");
      const indent = raw.match(/^ */)[0].length;
      const item = line.match(/^\s*([-*]|\d+[.)])\s+(.*)$/);
      const head = line.match(/^\s*(#{1,4})\s+(.*)$/);
      if (!line.trim()) {
        flush();
        // A blank line ends a list unless the next non-blank line is indented or another item.
        let j = i + 1;
        while (j < lines.length && !lines[j].trim()) j++;
        const next = lines[j] || "";
        if (stack.length && !(/^\s+\S/.test(next) || /^\s*([-*]|\d+[.)])\s+/.test(next))) closeTo(-1);
        continue;
      }
      if (head) {
        flush();
        closeTo(-1);
        const lvl = Math.min(6, head[1].length + 3);
        out.push(`<h${lvl} class="md-h">${A.inline(head[2], ctx)}</h${lvl}>`);
        continue;
      }
      if (item) {
        flush();
        const type = /\d/.test(item[1]) ? "ol" : "ul";
        closeTo(indent);
        const top = stack[stack.length - 1];
        if (top && top.indent === indent) {
          if (top.type !== type) {
            out.push(`</li></${stack.pop().type}>`);
            out.push(`<${type}><li>`);
            stack.push({ type, indent });
          } else out.push("</li><li>");
        } else {
          const start = type === "ol" && parseInt(item[1], 10) !== 1 ? ` start="${parseInt(item[1], 10)}"` : "";
          out.push(`<${type}${start}><li>`);
          stack.push({ type, indent });
        }
        out.push(A.inline(item[2], ctx));
        continue;
      }
      if (stack.length && indent > 0) {
        out.push(" " + A.inline(line.trim(), ctx));
        continue;
      }
      closeTo(-1);
      para.push(line.trim());
    }
    flush();
    closeTo(-1);
    return out.join("");
  };

  /* ---------- Storage (per viewer, in this browser) ---------- */
  A.store = {
    get(k, d) {
      try {
        const v = localStorage.getItem("acad:" + k);
        return v == null ? d : JSON.parse(v);
      } catch (e) {
        return d;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem("acad:" + k, JSON.stringify(v));
      } catch (e) {
        /* storage unavailable: progress simply isn't remembered */
      }
    },
  };

  A.progress = (m) => {
    const done = new Set(A.store.get(`${m.id}:lessons`, []));
    const total = m.lessons.length;
    const count = m.lessons.filter((l) => done.has(l.id)).length;
    return { done, count, total, pct: total ? Math.round((count / total) * 100) : 0 };
  };

  /* ---------- Theme ---------- */
  A.applyTheme = () => {
    const t = A.store.get("theme", "auto");
    if (t === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", t);
    const ICONS = {
      dark: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
      light: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
      auto: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
    };
    const label = t === "dark" ? "Dark" : t === "light" ? "Light" : "Auto";
    const icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[t] || ICONS.auto}</svg>`;
    A.$$(".theme-toggle").forEach((b) => {
      b.innerHTML = `${icon}<span class="tt-label">${label}</span>`;
      b.title = "Colour theme: " + t + " (click to change)";
      b.setAttribute("aria-label", "Colour theme: " + label);
    });
  };
  // Printing: open every collapsible so nothing is hidden on paper.
  window.addEventListener("beforeprint", () => A.$$("details").forEach((d) => (d.open = true)));
  A.cycleTheme = () => {
    const order = ["auto", "light", "dark"];
    const cur = A.store.get("theme", "auto");
    A.store.set("theme", order[(order.indexOf(cur) + 1) % order.length]);
    A.applyTheme();
  };
  document.addEventListener("click", (e) => {
    if (e.target.closest(".theme-toggle")) A.cycleTheme();
  });
  A.applyTheme();

  /* ---------- Validator (used by check.html and the module page badge) ---------- */
  A.validate = (m) => {
    const issues = [];
    const add = (level, where, msg) => issues.push({ level, where, msg });
    if (!m.title) add("error", "module", "Missing title.");
    if (!m.lessons.length) add("error", "module", "No lessons.");
    if (!m.terms.length) add("warn", "module", "No terms — the Quick Reference tab will be empty.");

    const dup = (list, kind) => {
      const seen = new Set();
      list.forEach((x) => {
        if (!x.id) add("error", kind, `A ${kind} has no id: "${A.plain(x.title || x.term || x.prompt).slice(0, 60)}"`);
        else if (seen.has(x.id)) add("error", kind, `Duplicate ${kind} id "${x.id}".`);
        seen.add(x.id);
      });
    };
    dup(m.lessons, "lesson");
    dup(m.terms, "term");
    dup(m.allQuiz.concat(...m.lessons.map((l) => l.check)), "question");

    m.lessons.forEach((l) => {
      A.arr(l.builds_on).forEach((b) => m.lessonById[b] || add("error", `lesson ${l.id}`, `builds_on refers to unknown lesson "${b}".`));
      if (!l.blocks.length) add("error", `lesson ${l.id}`, "Lesson has no content blocks.");
      if (!l.source) add("warn", `lesson ${l.id}`, "No source tag (e.g. \"Slides 4–9; Notes p.2\").");
      if (l.check.length < 3) add("info", `lesson ${l.id}`, `Only ${l.check.length} check-for-understanding question(s); 3–5 recommended.`);
      if (!l.takeaways.length) add("info", `lesson ${l.id}`, "No key takeaways.");
    });

    m.terms.forEach((t) => {
      if (!t.term) add("error", `term ${t.id}`, "Missing display name (term).");
      if (!t.short) add("error", `term ${t.id}`, "Missing short overview (used by Quick Reference).");
      if (!t.definition) add("warn", `term ${t.id}`, "Missing full definition.");
      if (t.lesson && !m.lessonById[t.lesson]) add("error", `term ${t.id}`, `lesson "${t.lesson}" does not exist.`);
      if (!t.lesson) add("warn", `term ${t.id}`, "No lesson — Quick Reference can't link it to the Deep Dive.");
      t.related.forEach((r) => m.termById[r] || add("error", `term ${t.id}`, `related term "${r}" does not exist.`));
    });

    // Every [[term]] reference and definition block must point to a real term.
    const used = new Set();
    const scan = (obj, where) => {
      if (obj == null) return;
      if (typeof obj === "string") {
        (obj.match(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g) || []).forEach((ref) => {
          const id = ref.replace(/^\[\[|\]\]$/g, "").split("|")[0].trim();
          used.add(id);
          if (!m.termById[id]) add("error", where, `[[${id}]] links to a term that does not exist.`);
        });
        return;
      }
      if (Array.isArray(obj)) return obj.forEach((x) => scan(x, where));
      if (typeof obj === "object") {
        if (obj.type === "definition") {
          used.add(obj.term);
          if (!m.termById[obj.term]) add("error", where, `definition block refers to unknown term "${obj.term}".`);
        }
        Object.keys(obj).forEach((k) => k[0] !== "_" && k !== "lessonById" && k !== "termById" && scan(obj[k], where));
      }
    };
    m.lessons.forEach((l) => scan(l, `lesson ${l.id}`));
    scan(m.overview, "overview");
    scan(m.teachingNotes, "teaching notes");
    m.terms.forEach((t) => used.has(t.id) || add("info", `term ${t.id}`, "Never referenced from a lesson (no [[link]] or definition block)."));

    const checkQ = (q, where) => {
      const n = A.arr(q.options).length;
      const idx = (a) => (typeof a === "string" && /^[A-Z]$/i.test(a) ? a.toUpperCase().charCodeAt(0) - 65 : a);
      if (!q.prompt) add("error", where, "Question has no prompt.");
      if (q.type === "mcq" || !q.type) {
        const a = idx(q.answer);
        if (!(Number.isInteger(a) && a >= 0 && a < n)) add("error", where, `answer "${q.answer}" is not a valid option (there are ${n}).`);
        if (n < 2) add("error", where, "Multiple-choice question needs at least 2 options.");
      } else if (q.type === "multi") {
        const a = A.arr(q.answer).map(idx);
        if (!a.length || a.some((x) => !(Number.isInteger(x) && x >= 0 && x < n))) add("error", where, "multi answer must list valid option positions.");
      } else if (q.type === "truefalse") {
        if (typeof q.answer !== "boolean") add("error", where, "truefalse answer must be true or false.");
      } else if (q.type === "numeric") {
        if (!q.answer || typeof q.answer.value !== "number") add("error", where, "numeric answer needs { value: number }.");
      } else if (q.type === "short") {
        if (!q.model_answer) add("error", where, "short question needs a model_answer.");
      } else add("error", where, `Unknown question type "${q.type}".`);
      if (!q.explanation && q.type !== "short") add("warn", where, "No explanation.");
      if (q.lesson && !m.lessonById[q.lesson]) add("error", where, `lesson "${q.lesson}" does not exist.`);
    };
    m.lessons.forEach((l) => l.check.forEach((q) => checkQ(q, `check ${q.id}`)));
    m.allQuiz.forEach((q) => checkQ(q, `quiz ${q.id}`));

    if (!m.coverage.length) add("warn", "coverage", "No coverage checklist — you can't verify every slide/note page made it in.");
    m.coverage.forEach((c, i) => {
      const w = String(c.where || "");
      if (w && !m.lessonById[w] && !(w.startsWith("term:") && m.termById[w.slice(5)])) add("error", `coverage #${i + 1}`, `where "${w}" is not a lesson id or term:<id>.`);
      if (c.status === "omitted") add("warn", `coverage #${i + 1}`, `${c.source} is marked as omitted: ${String(c.note || "no reason given").replace(/\.$/, "")}.`);
    });
    return issues;
  };

  A.wordCount = (m) => {
    let n = 0;
    const walk = (o) => {
      if (o == null) return;
      if (typeof o === "string") n += o.split(/\s+/).filter(Boolean).length;
      else if (Array.isArray(o)) o.forEach(walk);
      else if (typeof o === "object") Object.keys(o).forEach((k) => k[0] !== "_" && k !== "lessonById" && k !== "termById" && walk(o[k]));
    };
    walk(m.lessons);
    return n;
  };
})();
