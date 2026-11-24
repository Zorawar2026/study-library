/* ==========================================================================
   Study Library — components
   Content blocks, quiz engine, flashcards and the concept map.
   ========================================================================== */
(function () {
  "use strict";
  const A = window.Academy;
  const esc = A.esc;

  /* ======================= Content blocks ======================= */
  const srcLine = (s) => (s ? `<div class="src-line" title="Where this comes from">↳ ${esc(s)}</div>` : "");
  const idAttr = (b) => (b.id ? ` id="${esc(b.id)}"` : "");

  const CALLOUT_TITLES = {
    note: "Note",
    tip: "Tip",
    key: "Key idea",
    warning: "Watch out",
    conflict: "⚠ Source conflict",
    added: "Added explanation — not from the course material",
    exam: "Exam focus",
  };

  A.assetUrl = (m, path) => (/^(https?:|data:|\/)/.test(path) ? path : `modules/${m.id}/${path}`);

  A.renderBlocks = (blocks, ctx) => A.arr(blocks).map((b) => A.renderBlock(b, ctx)).join("");

  A.renderBlock = (b, ctx) => {
    if (b == null) return "";
    if (typeof b === "string") return `<div class="blk blk-text">${A.md(b, ctx)}</div>`;
    const m = ctx.module;
    const md = (x) => A.md(x, ctx);
    const il = (x) => A.inline(x, ctx);
    switch (b.type) {
      case "text":
        return `<div class="blk blk-text"${idAttr(b)}>${md(b.md)}${srcLine(b.source)}</div>`;

      case "intuition":
        return `<div class="blk intuition"${idAttr(b)}><div class="blk-label">In plain words</div>${md(b.md)}${srcLine(b.source)}</div>`;

      case "heading":
        return `<h3 class="blk-h"${idAttr(b)}>${il(b.text)}</h3>`;

      case "definition": {
        const t = m.termById[b.term];
        if (!t) return `<div class="blk blk-error">Unknown term in definition block: ${esc(b.term)}</div>`;
        const aka = t.aliases.length ? `<div class="def-aka">Also called: ${t.aliases.map(esc).join(", ")}</div>` : "";
        return `<div class="blk definition"${idAttr(b)}>
          <div class="blk-label">Definition</div>
          <div class="def-term">${esc(t.term)}</div>
          <div class="def-body">${md(b.md || t.definition || t.short)}</div>${aka}
          ${t.formula && b.showFormula === true ? `<div class="def-formula">${A.math(t.formula, true)}</div>` : ""}
          ${srcLine(b.source || t.source)}</div>`;
      }

      case "formula": {
        const rows = A.arr(b.where)
          .map((w) => `<tr><td class="sym">${A.math(w.symbol || w.sym || "", false)}</td><td>${il(w.meaning)}</td><td class="unit">${il(w.unit || "")}</td></tr>`)
          .join("");
        return `<div class="blk formula"${idAttr(b)}>
          ${b.label ? `<div class="blk-label">${il(b.label)}</div>` : ""}
          <div class="formula-tex">${A.math(b.tex || "", true)}</div>
          ${rows ? `<table class="where"><thead><tr><th>Symbol</th><th>Meaning</th><th>Unit</th></tr></thead><tbody>${rows}</tbody></table>` : ""}
          ${b.md ? `<div class="formula-note">${md(b.md)}</div>` : ""}
          ${srcLine(b.source)}</div>`;
      }

      case "example": {
        const steps = A.arr(b.steps)
          .map(
            (s) => `<li><div class="step-do">${typeof s === "string" ? il(s) : md(s.do)}</div>${
              s && s.why ? `<div class="step-why"><span>Why</span>${md(s.why)}</div>` : ""
            }</li>`
          )
          .join("");
        return `<div class="blk example"${idAttr(b)}>
          <div class="blk-label">Worked example</div>
          ${b.title ? `<h4 class="ex-title">${il(b.title)}</h4>` : ""}
          <div class="ex-problem">${md(b.problem)}</div>
          <details class="ex-solution"${b.hideSolution ? "" : " open"}>
            <summary>Step-by-step solution</summary>
            <ol class="ex-steps">${steps}</ol>
            ${b.answer ? `<div class="ex-answer"><strong>Answer</strong>${md(b.answer)}</div>` : ""}
          </details>
          ${srcLine(b.source)}</div>`;
      }

      case "callout": {
        const kind = CALLOUT_TITLES[b.kind] ? b.kind : "note";
        return `<aside class="blk callout callout-${kind}"${idAttr(b)}>
          <div class="callout-title">${il(b.title || CALLOUT_TITLES[kind])}</div>${md(b.md)}${srcLine(b.source)}</aside>`;
      }

      case "quote":
        return `<blockquote class="blk quote"${idAttr(b)}>${md(b.md)}<footer>${esc(b.source || "Source")}${b.note ? " — " + il(b.note) : ""}</footer></blockquote>`;

      case "list": {
        const tag = b.ordered ? "ol" : "ul";
        return `<div class="blk blk-list"${idAttr(b)}>${b.title ? `<div class="list-title">${il(b.title)}</div>` : ""}<${tag}>${A.arr(b.items)
          .map((x) => `<li>${il(x)}</li>`)
          .join("")}</${tag}>${srcLine(b.source)}</div>`;
      }

      case "steps":
        return `<div class="blk steps"${idAttr(b)}>${b.title ? `<div class="blk-label">${il(b.title)}</div>` : '<div class="blk-label">Procedure</div>'}<ol>${A.arr(b.items)
          .map((x) => `<li>${il(x)}</li>`)
          .join("")}</ol>${srcLine(b.source)}</div>`;

      case "table": {
        const head = A.arr(b.headers).map((h) => `<th>${il(h)}</th>`).join("");
        const body = A.arr(b.rows).map((r) => `<tr>${A.arr(r).map((c) => `<td>${il(c)}</td>`).join("")}</tr>`).join("");
        return `<figure class="blk table-blk"${idAttr(b)}><div class="table-scroll"><table>${head ? `<thead><tr>${head}</tr></thead>` : ""}<tbody>${body}</tbody></table></div>${
          b.caption || b.source ? `<figcaption>${il(b.caption || "")}${b.source ? ` <span class="src-inline">↳ ${esc(b.source)}</span>` : ""}</figcaption>` : ""
        }</figure>`;
      }

      case "figure": {
        const media = b.svg
          ? `<div class="fig-svg" role="img" aria-label="${esc(b.alt || b.caption || "")}">${b.svg}</div>`
          : `<img src="${esc(A.assetUrl(m, b.src || ""))}" alt="${esc(b.alt || b.caption || "")}" loading="lazy">`;
        return `<figure class="blk figure"${idAttr(b)}>${media}${
          b.caption || b.source ? `<figcaption>${il(b.caption || "")}${b.source ? ` <span class="src-inline">↳ ${esc(b.source)}</span>` : ""}</figcaption>` : ""
        }</figure>`;
      }

      case "code":
        return `<div class="blk code-blk"${idAttr(b)}>${b.title ? `<div class="blk-label">${il(b.title)}</div>` : ""}<pre><code>${esc(b.code)}</code></pre>${srcLine(b.source)}</div>`;

      case "usage":
        return `<div class="blk usage"${idAttr(b)}>
          <div class="usage-col use"><div class="blk-label">Use it when</div><ul>${A.arr(b.use).map((x) => `<li>${il(x)}</li>`).join("")}</ul></div>
          <div class="usage-col avoid"><div class="blk-label">Don't use it when</div><ul>${A.arr(b.avoid).map((x) => `<li>${il(x)}</li>`).join("")}</ul></div>
          ${srcLine(b.source)}</div>`;

      case "misconceptions":
        return `<div class="blk misconceptions"${idAttr(b)}><div class="blk-label">${il(b.title || "Common misconceptions")}</div>${A.arr(b.items)
          .map(
            (x) => `<div class="mc-pair"><div class="mc-wrong"><span aria-hidden="true">✗</span><div>${md(x.wrong)}</div></div><div class="mc-right"><span aria-hidden="true">✓</span><div>${md(
              x.right
            )}</div></div></div>`
          )
          .join("")}${srcLine(b.source)}</div>`;

      case "details":
        return `<details class="blk more"${idAttr(b)}${b.open ? " open" : ""}><summary>${il(b.summary || "Show more detail")}</summary><div class="more-body">${A.renderBlocks(
          b.blocks,
          ctx
        )}</div></details>`;

      default:
        return `<div class="blk blk-error">Unknown block type "${esc(b.type)}". See docs/FORMAT.md for the supported types.</div>`;
    }
  };

  /* ======================= Quiz engine ======================= */
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const optIndex = (a) => (typeof a === "string" && /^[A-Z]$/i.test(a) ? a.toUpperCase().charCodeAt(0) - 65 : a);
  const optText = (o) => (o && typeof o === "object" ? o.text : o);
  const optWhy = (o) => (o && typeof o === "object" ? o.why : "");
  const parseNum = (s) => {
    let t = String(s || "").trim().replace(/\s/g, "");
    if (/^-?\d+,\d+$/.test(t)) t = t.replace(",", ".");
    t = t.replace(/×10\^?/i, "e").replace(/x10\^/i, "e");
    const n = Number(t);
    return t === "" || Number.isNaN(n) ? null : n;
  };
  let uid = 0;

  A.mountQuiz = (root, { module: m, questions, storeKey, emptyText }) => {
    const ctx = { module: m };
    const state = {}; // qid -> { firstCorrect, correct, checked }
    let list = questions || [];

    const setTitle = (q) => {
      if (q._set === "core" || q._set === "check") return "";
      const s = m.quizSets.find((x) => x.id === q._set);
      return s ? `<span class="q-badge q-badge-set">${esc(s.title)}</span>` : "";
    };

    const qHtml = (q, n) => {
      const name = `q${++uid}`;
      const opts = A.arr(q.options);
      const type = q.type || "mcq";
      let body = "";
      if (type === "mcq" || type === "multi") {
        const input = type === "mcq" ? "radio" : "checkbox";
        body =
          (type === "multi" ? '<div class="q-hint">Select all that apply.</div>' : "") +
          opts
            .map(
              (o, i) => `<label class="opt" data-i="${i}"><input type="${input}" name="${name}" value="${i}"><span class="opt-letter">${LETTERS[i]}</span><span class="opt-text">${A.inline(
                optText(o),
                ctx
              )}</span></label><div class="opt-why" data-i="${i}" hidden></div>`
            )
            .join("");
      } else if (type === "truefalse") {
        body = ["True", "False"]
          .map((t, i) => `<label class="opt" data-i="${i}"><input type="radio" name="${name}" value="${i}"><span class="opt-letter">${t[0]}</span><span class="opt-text">${t}</span></label>`)
          .join("");
      } else if (type === "numeric") {
        const unit = q.answer && q.answer.unit ? `<span class="num-unit">${A.inline(q.answer.unit, ctx)}</span>` : "";
        body = `<div class="num"><input type="text" inputmode="decimal" autocomplete="off" aria-label="Your answer" placeholder="Your answer">${unit}</div>`;
      } else if (type === "short") {
        body = `<textarea rows="3" aria-label="Your answer" placeholder="Write your answer, then compare it with the model answer."></textarea>`;
      }
      const lesson = q.lesson && m.lessonById[q.lesson];
      const meta = [
        setTitle(q),
        lesson && q._set !== "check" ? `<a class="q-badge" href="#L-${esc(lesson.id)}" data-anchor="L-${esc(lesson.id)}">Lesson ${lesson._index + 1}</a>` : "",
        q.difficulty ? `<span class="q-badge q-diff" title="Difficulty ${q.difficulty} of 3">${"●".repeat(q.difficulty)}${"○".repeat(Math.max(0, 3 - q.difficulty))}</span>` : "",
        q.source ? `<span class="q-badge q-src">↳ ${esc(q.source)}</span>` : "",
      ].join("");
      const actions =
        type === "short"
          ? `<button class="btn btn-primary q-reveal" type="button">Show model answer</button>`
          : `<button class="btn btn-primary q-check" type="button">Check answer</button><button class="btn btn-ghost q-retry" type="button" hidden>Try again</button>`;
      return `<div class="q" data-qid="${esc(q.id)}">
        <div class="q-top"><span class="q-num">${n}</span><div class="q-meta">${meta}</div></div>
        <div class="q-prompt">${A.md(q.prompt, ctx)}</div>
        <div class="q-body">${body}</div>
        <div class="q-actions">${actions}</div>
        <div class="q-feedback" hidden aria-live="polite"></div></div>`;
    };

    const summaryHtml = () => {
      const ids = list.map((q) => q.id);
      const answered = ids.filter((id) => state[id] && state[id].checked).length;
      const correct = ids.filter((id) => state[id] && state[id].firstCorrect).length;
      const pct = answered ? Math.round((correct / answered) * 100) : 0;
      const best = storeKey ? A.store.get(`${m.id}:score:${storeKey}`, null) : null;
      return `<div class="qs-stats"><strong>${answered}</strong> of ${list.length} answered · <strong>${correct}</strong> correct on first try${
        answered ? ` · ${pct}%` : ""
      }${best ? ` <span class="qs-best">Best full run: ${best.pct}%</span>` : ""}</div>
        <div class="bar"><span style="width:${list.length ? (answered / list.length) * 100 : 0}%"></span></div>
        <button class="btn btn-ghost btn-sm q-reset" type="button">Reset answers</button>`;
    };

    const updateSummary = () => {
      const s = A.$(".quiz-summary", root);
      if (s) s.innerHTML = summaryHtml();
      if (!storeKey) return;
      const done = list.length && list.every((q) => state[q.id] && state[q.id].checked);
      if (done) {
        const correct = list.filter((q) => state[q.id].firstCorrect).length;
        const pct = Math.round((correct / list.length) * 100);
        const best = A.store.get(`${m.id}:score:${storeKey}`, null);
        if (!best || pct > best.pct) {
          A.store.set(`${m.id}:score:${storeKey}`, { pct, date: new Date().toISOString().slice(0, 10) });
          if (s) s.innerHTML = summaryHtml();
        }
      }
    };

    const render = (qs) => {
      list = qs || list;
      if (!list.length) {
        root.innerHTML = `<p class="muted">${esc(emptyText || "No questions here yet.")}</p>`;
        return;
      }
      root.innerHTML = `<div class="quiz-summary">${summaryHtml()}</div><div class="q-list">${list.map((q, i) => qHtml(q, i + 1)).join("")}</div>`;
    };

    const grade = (card, q) => {
      const type = q.type || "mcq";
      const fb = A.$(".q-feedback", card);
      let correct = false;
      let extra = "";
      if (type === "mcq" || type === "truefalse") {
        const sel = A.$("input:checked", card);
        if (!sel) return flashMsg(fb, "Choose an option first.");
        const chosen = +sel.value;
        const right = type === "truefalse" ? (q.answer ? 0 : 1) : optIndex(q.answer);
        correct = chosen === right;
        A.$$(".opt", card).forEach((o) => {
          const i = +o.dataset.i;
          o.classList.toggle("is-correct", i === right);
          o.classList.toggle("is-wrong", i === chosen && !correct);
        });
      } else if (type === "multi") {
        const sel = A.$$("input:checked", card).map((x) => +x.value);
        if (!sel.length) return flashMsg(fb, "Select at least one option.");
        const right = A.arr(q.answer).map(optIndex);
        correct = sel.length === right.length && sel.every((x) => right.includes(x));
        A.$$(".opt", card).forEach((o) => {
          const i = +o.dataset.i;
          o.classList.toggle("is-correct", right.includes(i));
          o.classList.toggle("is-wrong", sel.includes(i) && !right.includes(i));
          o.classList.toggle("is-missed", right.includes(i) && !sel.includes(i));
        });
      } else if (type === "numeric") {
        const v = parseNum(A.$("input", card).value);
        if (v == null) return flashMsg(fb, "Enter a number (e.g. 2.5 or 2.5e-3).");
        const a = q.answer;
        const tol = a.tolerance != null ? a.tolerance : Math.abs(a.value) * ((a.tolerancePct != null ? a.tolerancePct : 1) / 100);
        correct = Math.abs(v - a.value) <= tol + 1e-12;
        extra = `<div class="fb-expected">Expected: <strong>${esc(a.value)}</strong>${a.unit ? " " + A.inline(a.unit, { module: m }) : ""} <span class="muted">(accepted ± ${esc(+tol.toPrecision(3))})</span></div>`;
      }
      // Per-option explanations
      if (type === "mcq" || type === "multi") {
        A.arr(q.options).forEach((o, i) => {
          const why = optWhy(o);
          const el = A.$(`.opt-why[data-i="${i}"]`, card);
          if (el && why) {
            el.innerHTML = A.inline(why, { module: m });
            el.hidden = false;
          }
        });
      }
      A.$$("input", card).forEach((x) => (x.disabled = true));
      const st = (state[q.id] = state[q.id] || {});
      if (!st.checked) st.firstCorrect = correct;
      st.checked = true;
      fb.hidden = false;
      fb.className = "q-feedback " + (correct ? "fb-right" : "fb-wrong");
      fb.innerHTML = `<div class="fb-verdict">${correct ? "✓ Correct" : "✗ Not quite"}</div>${extra}${q.explanation ? `<div class="fb-expl">${A.md(q.explanation, { module: m })}</div>` : ""}`;
      A.$(".q-check", card).hidden = true;
      A.$(".q-retry", card).hidden = false;
      card.classList.add("answered");
      updateSummary();
    };

    const flashMsg = (fb, msg) => {
      fb.hidden = false;
      fb.className = "q-feedback fb-info";
      fb.textContent = msg;
    };

    root.addEventListener("click", (e) => {
      const card = e.target.closest(".q");
      if (e.target.closest(".q-reset")) {
        list.forEach((q) => delete state[q.id]);
        render();
        return;
      }
      if (!card) return;
      const q = list.find((x) => x.id === card.dataset.qid);
      if (!q) return;
      if (e.target.closest(".q-check")) grade(card, q);
      else if (e.target.closest(".q-retry")) {
        A.$$("input", card).forEach((x) => {
          x.disabled = false;
          if (x.type === "text") x.value = "";
          else x.checked = false;
        });
        A.$$(".opt", card).forEach((o) => o.classList.remove("is-correct", "is-wrong", "is-missed"));
        A.$$(".opt-why", card).forEach((o) => (o.hidden = true));
        A.$(".q-feedback", card).hidden = true;
        A.$(".q-check", card).hidden = false;
        A.$(".q-retry", card).hidden = true;
      } else if (e.target.closest(".q-reveal")) {
        const fb = A.$(".q-feedback", card);
        fb.hidden = false;
        fb.className = "q-feedback fb-model";
        fb.innerHTML = `<div class="fb-verdict">Model answer</div><div class="fb-expl">${A.md(q.model_answer, { module: m })}</div>${
          q.explanation ? `<div class="fb-expl">${A.md(q.explanation, { module: m })}</div>` : ""
        }<div class="self-mark"><span>How did you do?</span><button class="btn btn-sm q-self" data-v="1" type="button">I had it</button><button class="btn btn-sm q-self" data-v="0" type="button">I missed parts</button></div>`;
        e.target.closest(".q-reveal").hidden = true;
      } else if (e.target.closest(".q-self")) {
        const v = e.target.closest(".q-self").dataset.v === "1";
        const st = (state[q.id] = state[q.id] || {});
        if (!st.checked) st.firstCorrect = v;
        st.checked = true;
        card.classList.add("answered");
        A.$(".self-mark", card).innerHTML = `<span>${v ? "✓ Marked as correct" : "Marked for review"}</span>`;
        updateSummary();
      }
    });
    root.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.matches(".num input")) {
        const card = e.target.closest(".q");
        const q = list.find((x) => x.id === card.dataset.qid);
        if (q) grade(card, q);
      }
    });

    render();
    return { render };
  };

  /* ======================= Flashcards ======================= */
  A.mountFlashcards = (root, m) => {
    const ctx = { module: m };
    const cards = m.terms
      .map((t) => ({
        id: "t:" + t.id,
        front: `<div class="fc-term">${esc(t.term)}</div>${t.lesson && m.lessonById[t.lesson] ? `<div class="fc-sub">${esc(m.lessonById[t.lesson].title)}</div>` : ""}`,
        back: `<div class="fc-back-term">${esc(t.term)}</div>${A.md(t.short, ctx)}${t.formula ? `<div class="fc-formula">${A.math(t.formula, true)}</div>` : ""}`,
      }))
      .concat(m.flashcards.map((f, i) => ({ id: "f:" + (f.id || i), front: `<div class="fc-term">${A.inline(f.front, ctx)}</div>`, back: A.md(f.back, ctx) })));

    const key = `${m.id}:cards`;
    let known = new Set(A.store.get(key, []));
    let onlyLearning = false;
    let order = cards.map((_, i) => i);
    let pos = 0;

    const visible = () => order.filter((i) => !onlyLearning || !known.has(cards[i].id));

    const draw = () => {
      const vis = visible();
      if (!cards.length) {
        root.innerHTML = '<p class="muted">No terms yet.</p>';
        return;
      }
      if (pos >= vis.length) pos = Math.max(0, vis.length - 1);
      const c = vis.length ? cards[vis[pos]] : null;
      root.innerHTML = `<div class="fc-toolbar">
          <span class="fc-count">${vis.length ? `Card ${pos + 1} of ${vis.length}` : "All cards known 🎉"} · ${known.size} of ${cards.length} known</span>
          <label class="fc-only"><input type="checkbox" ${onlyLearning ? "checked" : ""}> Only cards I'm still learning</label>
          <button class="btn btn-ghost btn-sm fc-shuffle" type="button">Shuffle</button>
          <button class="btn btn-ghost btn-sm fc-resetk" type="button">Reset known</button></div>
        ${
          c
            ? `<div class="fc-card ${known.has(c.id) ? "is-known" : ""}" tabindex="0" role="button" aria-label="Flashcard. Press Enter or Space to flip.">
            <div class="fc-inner"><div class="fc-face fc-front">${c.front}<div class="fc-hint">Click or press Space to flip</div></div><div class="fc-face fc-back">${c.back}</div></div></div>
            <div class="fc-actions"><button class="btn fc-prev" type="button">← Prev</button><button class="btn fc-again" type="button">Still learning</button><button class="btn btn-primary fc-known" type="button">Know it ✓</button><button class="btn fc-next" type="button">Next →</button></div>`
            : ""
        }`;
    };
    const step = (d) => {
      const n = visible().length;
      if (n) pos = (pos + d + n) % n;
      draw();
    };
    const mark = (isKnown) => {
      const vis = visible();
      if (!vis.length) return;
      const id = cards[vis[pos]].id;
      isKnown ? known.add(id) : known.delete(id);
      A.store.set(key, Array.from(known));
      if (onlyLearning && isKnown) draw();
      else step(1);
    };
    root.addEventListener("click", (e) => {
      if (e.target.closest(".fc-card")) e.target.closest(".fc-card").classList.toggle("flipped");
      else if (e.target.closest(".fc-prev")) step(-1);
      else if (e.target.closest(".fc-next")) step(1);
      else if (e.target.closest(".fc-known")) mark(true);
      else if (e.target.closest(".fc-again")) mark(false);
      else if (e.target.closest(".fc-shuffle")) {
        order = order.map((v) => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map((x) => x[1]);
        pos = 0;
        draw();
      } else if (e.target.closest(".fc-resetk")) {
        known = new Set();
        A.store.set(key, []);
        draw();
      }
    });
    root.addEventListener("change", (e) => {
      if (e.target.closest(".fc-only")) {
        onlyLearning = e.target.checked;
        pos = 0;
        draw();
      }
    });
    root.addEventListener("keydown", (e) => {
      if (e.target.closest(".fc-card") && (e.key === " " || e.key === "Enter")) {
        e.preventDefault();
        e.target.closest(".fc-card").classList.toggle("flipped");
      } else if (e.target.closest(".fc-card") && e.key === "ArrowRight") step(1);
      else if (e.target.closest(".fc-card") && e.key === "ArrowLeft") step(-1);
    });
    draw();
  };

  /* ======================= Concept map ======================= */
  A.mountConceptMap = (root, m) => {
    const cm = m.conceptMap || {};
    const nodes = cm.nodes
      ? A.arr(cm.nodes)
      : m.lessons.map((l) => ({ id: l.id, label: `${l._index + 1}. ${l.title}`, lesson: l.id }));
    const edges = cm.edges ? A.arr(cm.edges) : [].concat(...m.lessons.map((l) => A.arr(l.builds_on).map((b) => ({ from: b, to: l.id }))));
    const byId = {};
    nodes.forEach((n) => (byId[n.id] = n));
    const parents = {};
    edges.forEach((e) => (parents[e.to] = (parents[e.to] || []).concat(e.from)));
    const level = {};
    const depth = (id, seen) => {
      if (level[id] != null) return level[id];
      if (seen.has(id)) return 0; // cycle guard
      seen.add(id);
      const ps = (parents[id] || []).filter((p) => byId[p]);
      level[id] = ps.length ? 1 + Math.max(...ps.map((p) => depth(p, seen))) : 0;
      return level[id];
    };
    nodes.forEach((n) => depth(n.id, new Set()));
    const cols = [];
    nodes.forEach((n) => (cols[level[n.id]] = (cols[level[n.id]] || []).concat(n)));

    const vertical = cols.length > 4;
    root.innerHTML = `<div class="cmap${vertical ? " cmap-vertical" : ""}"><svg class="cmap-lines" aria-hidden="true"><defs><marker id="cm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs></svg>
      <div class="cmap-cols">${cols
        .map(
          (col) =>
            `<div class="cmap-col">${col
              .map((n) => {
                const tgt = n.lesson ? `L-${n.lesson}` : n.term ? "" : "";
                return n.lesson
                  ? `<a class="cmap-node" href="#${esc(tgt)}" data-anchor="${esc(tgt)}" data-node="${esc(n.id)}">${A.inline(n.label, { module: m })}</a>`
                  : n.term
                  ? `<a class="cmap-node cmap-term" href="#" data-term="${esc(n.term)}" data-node="${esc(n.id)}">${A.inline(n.label, { module: m })}</a>`
                  : `<span class="cmap-node" data-node="${esc(n.id)}">${A.inline(n.label, { module: m })}</span>`;
              })
              .join("")}</div>`
        )
        .join("")}</div></div>
      <p class="cmap-legend">Arrows point from a concept to the ones that build on it. Click a box to jump to it.</p>`;

    const svg = A.$(".cmap-lines", root);
    const box = A.$(".cmap", root);
    const draw = () => {
      const base = box.getBoundingClientRect();
      if (!base.width) return;
      svg.setAttribute("width", base.width);
      svg.setAttribute("height", base.height);
      svg.querySelectorAll("path.edge").forEach((p) => p.remove());
      edges.forEach((e) => {
        const a = A.$(`[data-node="${CSS.escape(e.from)}"]`, box);
        const b = A.$(`[data-node="${CSS.escape(e.to)}"]`, box);
        if (!a || !b) return;
        const r1 = a.getBoundingClientRect();
        const r2 = b.getBoundingClientRect();
        let d;
        if (r2.left >= r1.right - 2) {
          const x1 = r1.right - base.left, y1 = r1.top + r1.height / 2 - base.top;
          const x2 = r2.left - base.left - 2, y2 = r2.top + r2.height / 2 - base.top;
          const dx = Math.max(24, (x2 - x1) / 2);
          d = `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
        } else {
          const x1 = r1.left + r1.width / 2 - base.left, y1 = r1.bottom - base.top;
          const x2 = r2.left + r2.width / 2 - base.left, y2 = r2.top - base.top - 2;
          const dy = Math.max(16, (y2 - y1) / 2);
          d = `M${x1},${y1} C${x1},${y1 + dy} ${x2},${y2 - dy} ${x2},${y2}`;
        }
        const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        p.setAttribute("d", d);
        p.setAttribute("class", "edge");
        p.setAttribute("marker-end", "url(#cm-arrow)");
        if (e.label) {
          const t = document.createElementNS("http://www.w3.org/2000/svg", "title");
          t.textContent = e.label;
          p.appendChild(t);
        }
        svg.appendChild(p);
      });
    };
    if (window.ResizeObserver) new ResizeObserver(() => requestAnimationFrame(draw)).observe(box);
    requestAnimationFrame(draw);
    return { draw };
  };
})();
