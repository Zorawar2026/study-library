/* ==========================================================================
   Study Library — module page (module.html?m=<module-id>)
   Two tabs: Deep Dive and Quick Reference.
   ========================================================================== */
(async function () {
  "use strict";
  const A = window.Academy;
  const esc = A.esc;
  const app = A.$("#app");
  const id = A.param("m");

  const fail = (title, msg) => {
    app.innerHTML = `<div class="page-error"><h1>${esc(title)}</h1><p>${msg}</p><p><a class="btn" href="index.html">← Back to the library</a></p></div>`;
  };
  if (!id) return fail("No module selected", "Open a module from the library home page.");

  app.innerHTML = '<div class="loading">Loading module…</div>';
  let m;
  try {
    await A.loadMath();
    await A.loadCatalog().catch(() => {});
    m = await A.loadModule(id);
  } catch (e) {
    return fail("Module could not be loaded", `${esc(e.message)}<br><br>Check that <code>modules/${esc(id)}/module.js</code> exists and that the id inside it matches the folder name. The <a href="check.html">content checker</a> shows more detail.`);
  }

  const ctx = { module: m };
  const md = (x) => A.md(x, ctx);
  const il = (x) => A.inline(x, ctx);
  document.title = `${m.title} · ${A._site.title}`;
  if (m.color) document.documentElement.style.setProperty("--mod", m.color);

  /* ---------- Give every conflict callout an id so it can be listed and linked ---------- */
  const conflicts = [];
  const walk = (blocks, lesson) =>
    A.arr(blocks).forEach((b) => {
      if (!b || typeof b !== "object") return;
      if (b.type === "callout" && b.kind === "conflict") {
        b.id = b.id || `conflict-${conflicts.length + 1}`;
        conflicts.push({ block: b, lesson });
      }
      if (b.blocks) walk(b.blocks, lesson);
    });
  m.lessons.forEach((l) => walk(l.blocks, l));

  const prog = () => A.progress(m);
  const totalQ = m.allQuiz.length + m.lessons.reduce((n, l) => n + l.check.length, 0);

  /* ---------- Sections of the Deep Dive ---------- */
  const sec = (sid, title, html, extraClass) =>
    `<section class="sec ${extraClass || ""}" id="${sid}"><h2 class="sec-title">${title}</h2>${html}</section>`;

  const overviewHtml = () => {
    const objectives = m.objectives.length
      ? `<div class="ov-card"><h3>After this module you can</h3><ol class="objectives">${m.objectives.map((o) => `<li>${il(o)}</li>`).join("")}</ol></div>`
      : "";
    const prereq = m.prerequisites.length ? `<h3>Before you start</h3><ul>${m.prerequisites.map((p) => `<li>${il(p)}</li>`).join("")}</ul>` : "";
    const sources = m.sources.length
      ? `<h3>Sources</h3><ul class="src-list">${m.sources
          .map((s) => `<li><strong>${esc(s.label || s.id)}</strong>${s.detail ? ` — ${il(s.detail)}` : ""}${s.url ? ` · <a href="${esc(s.url)}" target="_blank" rel="noopener">link</a>` : ""}${s.license ? ` <span class="muted">(${esc(s.license)})</span>` : ""}</li>`)
          .join("")}</ul>`
      : "";
    return sec(
      "sec-overview",
      "Overview",
      `<div class="ov-text">${md(m.overview)}</div>
       <div class="ov-grid">${objectives}<div class="ov-card">${prereq}${m.studyTime ? `<h3>Study time</h3><p>${esc(m.studyTime)}</p>` : ""}${sources}</div></div>`
    );
  };

  const lessonHtml = (l) => {
    const done = prog().done.has(l.id);
    const builds = A.arr(l.builds_on)
      .filter((b) => m.lessonById[b])
      .map((b) => `<a class="chip" href="#L-${esc(b)}" data-anchor="L-${esc(b)}">${m.lessonById[b]._index + 1}. ${esc(m.lessonById[b].title)}</a>`)
      .join("");
    const next = m.lessons[l._index + 1];
    return `<section class="sec lesson${done ? " is-done" : ""}" id="L-${esc(l.id)}" data-lesson="${esc(l.id)}">
      <header class="lesson-head">
        <div class="lesson-num">Lesson ${l._index + 1} of ${m.lessons.length}${done ? ' <span class="done-pill">✓ Completed</span>' : ""}</div>
        <h2 class="sec-title">${il(l.title)}</h2>
        <div class="lesson-meta">${l.source ? `<span class="src-tag">↳ ${esc(l.source)}</span>` : ""}${builds ? `<span class="builds">Builds on ${builds}</span>` : ""}</div>
        ${l.summary ? `<div class="lesson-summary">${md(l.summary)}</div>` : ""}
      </header>
      <div class="lesson-body">${A.renderBlocks(l.blocks, ctx)}</div>
      ${l.takeaways.length ? `<div class="takeaways"><div class="blk-label">Key takeaways</div><ul>${l.takeaways.map((t) => `<li>${il(t)}</li>`).join("")}</ul></div>` : ""}
      ${l.check.length ? `<div class="lesson-check"><h3>Check your understanding</h3><div class="quiz-mount" data-quiz="lesson" data-lesson="${esc(l.id)}"></div></div>` : ""}
      <footer class="lesson-foot">
        <button class="btn ${done ? "" : "btn-primary"} complete-btn" type="button" data-lesson="${esc(l.id)}">${done ? "✓ Completed — mark as not done" : "Mark lesson as complete"}</button>
        ${next ? `<a class="next-link" href="#L-${esc(next.id)}" data-anchor="L-${esc(next.id)}">Next: ${il(next.title)} →</a>` : ""}
      </footer></section>`;
  };

  const assessmentHtml = () => {
    const sets = m.quizSets
      .map((s) => {
        const n = m.allQuiz.filter((q) => q._set === s.id).length;
        return `<button class="seg-btn${s.id === "all" ? " on" : ""}" type="button" data-set="${esc(s.id)}">${esc(s.title)} <span class="count">${n}</span></button>`;
      })
      .join("");
    const extras = m.quizSets.filter((s) => s.id !== "core" && (s.description || s.source));
    return sec(
      "sec-assessment",
      "Final assessment",
      `<p class="muted">${m.allQuiz.length} questions${m.quizSets.length > 1 ? ` from ${m.quizSets.length} sets` : ""}. Your first attempt at each question counts toward the score; you can retry as often as you like.</p>
      ${extras.map((s) => `<div class="set-note"><strong>${esc(s.title)}</strong>${s.description ? ` — ${il(s.description)}` : ""}${s.source ? ` <span class="src-inline">↳ ${esc(s.source)}</span>` : ""}</div>`).join("")}
      <div class="quiz-filters">
        <div class="seg" role="group" aria-label="Question set"><button class="seg-btn on" type="button" data-set="all">All <span class="count">${m.allQuiz.length}</span></button>${sets}</div>
        <select class="quiz-lesson" aria-label="Filter by lesson"><option value="">All lessons</option>${m.lessons.map((l) => `<option value="${esc(l.id)}">Lesson ${l._index + 1}: ${esc(A.plain(l.title))}</option>`).join("")}</select>
        <select class="quiz-diff" aria-label="Filter by difficulty"><option value="">Any difficulty</option><option value="1">● Easy</option><option value="2">●● Medium</option><option value="3">●●● Hard</option></select>
        <button class="btn btn-ghost btn-sm quiz-shuffle" type="button">Shuffle</button>
      </div>
      <div class="quiz-mount" data-quiz="final"></div>`
    );
  };

  const openQHtml = () => {
    if (!conflicts.length && !m.openQuestions.length) return "";
    return sec(
      "sec-open",
      "Open questions & source conflicts",
      `${conflicts.length ? `<h3>Source conflicts (${conflicts.length})</h3><ul class="conflict-list">${conflicts
        .map((c) => `<li><a href="#${esc(c.block.id)}" data-anchor="${esc(c.block.id)}">${il(c.block.title || A.plain(c.block.md).slice(0, 90) + "…")}</a> <span class="muted">— Lesson ${c.lesson._index + 1}</span></li>`)
        .join("")}</ul>` : ""}
       ${m.openQuestions.length ? `<h3>Open questions</h3><ul>${m.openQuestions.map((q) => `<li>${il(q)}</li>`).join("")}</ul>` : ""}`
    );
  };

  const coverageHtml = () => {
    if (!m.coverage.length) return "";
    const count = (s) => m.coverage.filter((c) => (c.status || "covered") === s).length;
    const where = (w) => {
      if (!w) return "—";
      if (m.lessonById[w]) return `<a href="#L-${esc(w)}" data-anchor="L-${esc(w)}">Lesson ${m.lessonById[w]._index + 1}: ${il(m.lessonById[w].title)}</a>`;
      if (w.startsWith("term:") && m.termById[w.slice(5)]) return `<a href="#" data-term="${esc(w.slice(5))}">Term: ${esc(m.termById[w.slice(5)].term)}</a>`;
      return esc(w);
    };
    return sec(
      "sec-coverage",
      "Sources & coverage",
      `<p class="muted">Every slide and note page, and where it lives in this module. Use it to confirm nothing was lost.</p>
      <div class="cov-summary"><span class="cov-pill cov-covered">${count("covered")} covered</span><span class="cov-pill cov-partial">${count("partial")} partial</span><span class="cov-pill cov-omitted">${count("omitted")} omitted</span></div>
      <div class="table-scroll"><table class="cov-table"><thead><tr><th>Source</th><th>Contains</th><th>Where in this module</th><th>Status</th></tr></thead><tbody>${m.coverage
        .map((c) => {
          const st = c.status || "covered";
          return `<tr class="cov-${esc(st)}"><td>${esc(c.source)}</td><td>${il(c.content || "")}</td><td>${where(c.where)}</td><td><span class="cov-pill cov-${esc(st)}">${esc(st)}</span>${c.note ? `<div class="muted small">${il(c.note)}</div>` : ""}</td></tr>`;
        })
        .join("")}</tbody></table></div>`
    );
  };

  /* ---------- Table of contents ---------- */
  const tocHtml = () => {
    const p = prog();
    const item = (href, label, extra) => `<li><a href="#${href}" data-anchor="${href}">${label}</a>${extra || ""}</li>`;
    return `<details class="toc" open><summary>Contents</summary><nav aria-label="Module contents">
      <div class="toc-group">Start</div><ul>${item("sec-overview", "Overview")}${item("sec-map", "Concept map")}</ul>
      <div class="toc-group">Lessons</div><ol class="toc-lessons">${m.lessons
        .map((l) => `<li class="${p.done.has(l.id) ? "done" : ""}" data-toc-lesson="${esc(l.id)}"><a href="#L-${esc(l.id)}" data-anchor="L-${esc(l.id)}"><span class="toc-n">${l._index + 1}</span><span>${il(l.title)}</span></a></li>`)
        .join("")}</ol>
      <div class="toc-group">Practice</div><ul>${item("sec-cards", "Flashcards")}${item("sec-assessment", "Final assessment")}</ul>
      <div class="toc-group">Reference</div><ul>${m.teachingNotes.length ? item("sec-teaching", "Teaching notes") : ""}${conflicts.length || m.openQuestions.length ? item("sec-open", "Open questions & conflicts") : ""}${
      m.coverage.length ? item("sec-coverage", "Sources & coverage") : ""
    }</ul></nav></details>`;
  };

  /* ---------- Quick Reference ---------- */
  const refItem = (t) => {
    const lesson = t.lesson && m.lessonById[t.lesson];
    const related = t.related.filter((r) => m.termById[r]).map((r) => `<a class="chip rel-chip" href="#" data-term="${esc(r)}">${esc(m.termById[r].term)}</a>`).join("");
    return `<details class="ref-item" id="ref-${esc(t.id)}" data-id="${esc(t.id)}">
      <summary><span class="ref-term">${esc(t.term)}</span>${t.aliases.length ? `<span class="ref-alias">${t.aliases.map(esc).join(" · ")}</span>` : ""}<span class="ref-chev" aria-hidden="true"></span></summary>
      <div class="ref-body">
        <div class="ref-short">${md(t.short)}</div>
        ${t.formula ? `<div class="ref-formula">${A.math(t.formula, true)}</div>` : ""}
        ${t.example ? `<div class="ref-row"><span class="ref-lbl">Example</span><div>${md(t.example)}</div></div>` : ""}
        ${t.pitfall ? `<div class="ref-row ref-pitfall"><span class="ref-lbl">Watch out</span><div>${md(t.pitfall)}</div></div>` : ""}
        ${related ? `<div class="ref-row"><span class="ref-lbl">Related</span><div class="chips">${related}</div></div>` : ""}
        <div class="ref-foot">${t.source ? `<span class="src-tag">↳ ${esc(t.source)}</span>` : ""}${
      t._anchor ? `<a class="ref-deep" href="#${esc(t._anchor)}" data-anchor="${esc(t._anchor)}">Full explanation${lesson ? ` · Lesson ${lesson._index + 1}` : ""} →</a>` : ""
    }</div>
      </div></details>`;
  };

  const refGroups = (mode) => {
    if (mode === "az") {
      const sorted = m.terms.slice().sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: "base" }));
      const groups = {};
      sorted.forEach((t) => {
        const L = (t.term.match(/[A-Za-z0-9]/) || ["#"])[0].toUpperCase();
        (groups[L] = groups[L] || []).push(t);
      });
      return Object.keys(groups).map((L) => ({ id: "az-" + L, title: L, terms: groups[L] }));
    }
    const out = m.lessons.map((l) => ({ id: "g-" + l.id, title: `Lesson ${l._index + 1} · ${A.plain(l.title)}`, terms: m.terms.filter((t) => t.lesson === l.id) }));
    const other = m.terms.filter((t) => !t.lesson || !m.lessonById[t.lesson]);
    if (other.length) out.push({ id: "g-other", title: "Other terms", terms: other });
    return out.filter((g) => g.terms.length);
  };

  let refMode = A.store.get("refMode", "lesson");
  const renderRefList = () => {
    const groups = refGroups(refMode);
    A.$(".ref-letters").innerHTML =
      refMode === "az" ? groups.map((g) => `<a href="#ref-${g.id}" data-ref-jump="ref-${g.id}">${esc(g.title)}</a>`).join("") : "";
    A.$(".ref-list").innerHTML = groups
      .map((g) => `<div class="ref-group" id="ref-${g.id}"><h3 class="ref-group-title">${esc(g.title)}</h3>${g.terms.map(refItem).join("")}</div>`)
      .join("");
    A.$$(".seg-btn[data-group]").forEach((b) => b.classList.toggle("on", b.dataset.group === refMode));
    applyFilter();
  };

  const applyFilter = () => {
    const q = (A.$(".ref-search").value || "").toLowerCase().trim();
    const tokens = q.split(/\s+/).filter(Boolean);
    let shown = 0;
    A.$$(".ref-item").forEach((el) => {
      const t = m.termById[el.dataset.id];
      const hay = [t.term, ...t.aliases, A.plain(t.short), A.plain(t.example)].join(" ").toLowerCase();
      const ok = tokens.every((tok) => hay.includes(tok));
      el.hidden = !ok;
      if (ok) shown++;
    });
    A.$$(".ref-group").forEach((g) => (g.hidden = !A.$$(".ref-item", g).some((x) => !x.hidden)));
    A.$(".ref-count").textContent = q ? `${shown} of ${m.terms.length} terms` : `${m.terms.length} terms`;
    A.$(".ref-empty").hidden = shown > 0;
  };

  /* ---------- Page shell ---------- */
  const p = prog();
  app.innerHTML = `
  <header class="topbar">
    <a class="back" href="index.html" title="Back to the library">← <span>Library</span></a>
    <nav class="tabs" role="tablist" aria-label="Module views">
      <button role="tab" id="tab-deep" aria-controls="panel-deep" data-tab="deep" type="button">Deep Dive</button>
      <button role="tab" id="tab-ref" aria-controls="panel-ref" data-tab="ref" type="button">Quick Reference <span class="count">${m.terms.length}</span></button>
    </nav>
    <button class="btn btn-ghost btn-sm theme-toggle" type="button"></button>
  </header>
  <div class="hero">
    <div class="hero-inner">
      <div class="mod-icon" aria-hidden="true">${esc(m.icon || m.title.slice(0, 2))}</div>
      <div class="hero-text">
        ${m.category ? `<div class="eyebrow">${esc(m.category)}</div>` : ""}
        <h1>${il(m.title)}</h1>
        ${m.subtitle ? `<p class="subtitle">${il(m.subtitle)}</p>` : ""}
        <div class="hero-meta">${[
          `${m.lessons.length} lessons`,
          `${m.terms.length} terms`,
          `${totalQ} questions`,
          m.studyTime ? `≈ ${esc(m.studyTime)}` : "",
          m.version ? `v${esc(m.version)}` : "",
          m.updated ? `updated ${esc(m.updated)}` : "",
        ]
          .filter(Boolean)
          .map((x) => `<span>${x}</span>`)
          .join("")}</div>
        <div class="hero-progress"><div class="bar"><span style="width:${p.pct}%"></span></div><span class="hp-label">${p.count} of ${p.total} lessons complete</span></div>
      </div>
    </div>
  </div>
  <main>
    <section id="panel-deep" role="tabpanel" aria-labelledby="tab-deep">
      <div class="deep-layout">
        <aside class="toc-wrap">${tocHtml()}</aside>
        <article class="deep">
          ${overviewHtml()}
          ${sec("sec-map", "Concept map", '<div class="cmap-mount"></div>')}
          ${m.lessons.map(lessonHtml).join("")}
          ${sec("sec-cards", "Flashcards", `<p class="muted">One card per term${m.flashcards.length ? ", plus extra cards" : ""}. Mark the ones you know; the rest stay in your review pile on this device.</p><div class="fc-mount"></div>`)}
          ${assessmentHtml()}
          ${m.teachingNotes.length ? sec("sec-teaching", "Teaching notes", `<div class="teaching">${A.renderBlocks(m.teachingNotes, ctx)}</div>`) : ""}
          ${openQHtml()}
          ${coverageHtml()}
        </article>
      </div>
    </section>
    <section id="panel-ref" role="tabpanel" aria-labelledby="tab-ref" hidden>
      <div class="ref-wrap">
        <div class="ref-head">
          <h2>Quick Reference</h2>
          <p class="muted">Every important term in this module. Open any item for a short overview; follow its link for the full explanation.</p>
        </div>
        <div class="ref-toolbar">
          <input class="ref-search" type="search" placeholder="Filter terms…" aria-label="Filter terms">
          <div class="seg" role="group" aria-label="Group terms"><button class="seg-btn" data-group="lesson" type="button">By lesson</button><button class="seg-btn" data-group="az" type="button">A–Z</button></div>
          <button class="btn btn-ghost btn-sm ref-expand" type="button">Expand all</button>
          <button class="btn btn-ghost btn-sm ref-collapse" type="button">Collapse all</button>
          <span class="ref-count muted"></span>
        </div>
        <div class="ref-letters"></div>
        <div class="ref-list"></div>
        <p class="ref-empty muted" hidden>No terms match your filter.</p>
      </div>
    </section>
  </main>
  <footer class="site-foot">
    <span>${esc(A._site.title)}${A._site.owner ? " · " + esc(A._site.owner) : ""}</span>
    <a href="check.html?m=${encodeURIComponent(m.id)}" class="health-link">Content check</a>
  </footer>`;

  A.applyTheme();

  /* ---------- Mount interactive parts ---------- */
  A.mountConceptMap(A.$(".cmap-mount"), m);
  A.mountFlashcards(A.$(".fc-mount"), m);
  A.$$('.quiz-mount[data-quiz="lesson"]').forEach((el) => {
    const l = m.lessonById[el.dataset.lesson];
    A.mountQuiz(el, { module: m, questions: l.check });
  });

  const finalQuiz = A.mountQuiz(A.$('.quiz-mount[data-quiz="final"]'), { module: m, questions: m.allQuiz, storeKey: "final", emptyText: "No questions match these filters." });
  const qf = { set: "all", lesson: "", diff: "", order: null };
  const applyQuizFilter = () => {
    let qs = m.allQuiz.filter((q) => (qf.set === "all" || q._set === qf.set) && (!qf.lesson || q.lesson === qf.lesson) && (!qf.diff || String(q.difficulty) === qf.diff));
    if (qf.order) qs = qs.slice().sort((a, b) => qf.order[a.id] - qf.order[b.id]);
    finalQuiz.render(qs);
  };
  A.$(".quiz-filters").addEventListener("click", (e) => {
    const b = e.target.closest(".seg-btn[data-set]");
    if (b) {
      qf.set = b.dataset.set;
      A.$$(".quiz-filters .seg-btn").forEach((x) => x.classList.toggle("on", x === b));
      applyQuizFilter();
    }
    if (e.target.closest(".quiz-shuffle")) {
      qf.order = {};
      m.allQuiz.forEach((q) => (qf.order[q.id] = Math.random()));
      applyQuizFilter();
    }
  });
  A.$(".quiz-lesson").addEventListener("change", (e) => ((qf.lesson = e.target.value), applyQuizFilter()));
  A.$(".quiz-diff").addEventListener("change", (e) => ((qf.diff = e.target.value), applyQuizFilter()));

  renderRefList();
  A.$(".ref-search").addEventListener("input", applyFilter);

  /* ---------- Navigation ---------- */
  const setUrl = (params, hash) => {
    const u = new URL(location.href);
    Object.entries(params).forEach(([k, v]) => (v == null ? u.searchParams.delete(k) : u.searchParams.set(k, v)));
    u.hash = hash || "";
    history.replaceState(null, "", u);
  };

  const showTab = (tab) => {
    A.$$(".tabs [role=tab]").forEach((b) => {
      const on = b.dataset.tab === tab;
      b.setAttribute("aria-selected", on);
      b.tabIndex = on ? 0 : -1;
    });
    A.$("#panel-deep").hidden = tab !== "deep";
    A.$("#panel-ref").hidden = tab !== "ref";
    setUrl({ tab: tab === "deep" ? null : tab, term: null });
    if (tab === "deep") requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
  };

  // Each tab remembers its own scroll position when you switch by clicking the tabs.
  const tabScroll = { deep: 0, ref: 0 };
  const switchTab = (tab) => {
    const cur = A.$("#panel-deep").hidden ? "ref" : "deep";
    if (cur === tab) return;
    tabScroll[cur] = window.scrollY;
    showTab(tab);
    const top = A.$(".hero").offsetTop + A.$(".hero").offsetHeight - 8;
    window.scrollTo(0, tabScroll[tab] || Math.min(window.scrollY, top));
  };

  const flash = (el) => {
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
  };

  const openTerm = (tid, instant) => {
    const el = A.$(`#ref-${CSS.escape(tid)}`);
    if (!el) return;
    showTab("ref");
    if (el.hidden) {
      A.$(".ref-search").value = "";
      applyFilter();
    }
    el.open = true;
    setUrl({ tab: "ref", term: tid });
    el.scrollIntoView({ block: "start", behavior: instant ? "auto" : "smooth" });
    flash(el);
  };

  const goDeep = (anchor, instant) => {
    const el = document.getElementById(anchor);
    if (!el) return;
    showTab("deep");
    for (let p = el.parentElement; p; p = p.parentElement) if (p.tagName === "DETAILS") p.open = true;
    setUrl({ tab: null, term: null }, anchor);
    el.scrollIntoView({ block: "start", behavior: instant ? "auto" : "smooth" });
    flash(el);
    if (matchMedia("(max-width: 900px)").matches) A.$(".toc").open = false;
  };

  /* ---------- Click an image to see it full screen ---------- */
  const lightbox = (img) => {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Enlarged image");
    box.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close">×</button><img src="${esc(img.currentSrc || img.src)}" alt="${esc(img.alt)}">${
      img.dataset.caption ? `<div class="lightbox-cap">${esc(img.dataset.caption)}</div>` : ""
    }`;
    const close = () => {
      box.remove();
      document.removeEventListener("keydown", onKey);
      img.focus && img.focus();
    };
    const onKey = (ev) => ev.key === "Escape" && close();
    box.addEventListener("click", (ev) => (ev.target === box || ev.target.closest(".lightbox-close") || ev.target.tagName === "IMG") && close());
    document.addEventListener("keydown", onKey);
    document.body.appendChild(box);
    A.$(".lightbox-close", box).focus();
  };

  document.addEventListener("click", (e) => {
    const zoomImg = e.target.closest("img[data-zoom]");
    if (zoomImg) return lightbox(zoomImg);
    const tab = e.target.closest(".tabs [role=tab]");
    if (tab) return switchTab(tab.dataset.tab);
    const term = e.target.closest("[data-term]");
    if (term && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      return openTerm(term.dataset.term);
    }
    const anchor = e.target.closest("[data-anchor]");
    if (anchor && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      return goDeep(anchor.dataset.anchor);
    }
    const jump = e.target.closest("[data-ref-jump]");
    if (jump) {
      e.preventDefault();
      document.getElementById(jump.dataset.refJump).scrollIntoView({ behavior: "smooth" });
      return;
    }
    const grp = e.target.closest(".seg-btn[data-group]");
    if (grp) {
      refMode = grp.dataset.group;
      A.store.set("refMode", refMode);
      return renderRefList();
    }
    if (e.target.closest(".ref-expand")) A.$$(".ref-item:not([hidden])").forEach((d) => (d.open = true));
    if (e.target.closest(".ref-collapse")) A.$$(".ref-item").forEach((d) => (d.open = false));

    const cb = e.target.closest(".complete-btn");
    if (cb) {
      const lid = cb.dataset.lesson;
      const done = new Set(A.store.get(`${m.id}:lessons`, []));
      done.has(lid) ? done.delete(lid) : done.add(lid);
      A.store.set(`${m.id}:lessons`, Array.from(done));
      refreshProgress();
    }
  });

  // Arrow-key navigation between the two tabs
  A.$(".tabs").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const cur = A.$(".tabs [aria-selected=true]").dataset.tab;
    const nxt = cur === "deep" ? "ref" : "deep";
    switchTab(nxt);
    A.$(`#tab-${nxt}`).focus();
  });

  const refreshProgress = () => {
    const pr = prog();
    A.$(".hero-progress .bar span").style.width = pr.pct + "%";
    A.$(".hp-label").textContent = `${pr.count} of ${pr.total} lessons complete`;
    m.lessons.forEach((l) => {
      const done = pr.done.has(l.id);
      const s = document.getElementById(`L-${l.id}`);
      s.classList.toggle("is-done", done);
      const num = A.$(".lesson-num", s);
      num.innerHTML = `Lesson ${l._index + 1} of ${m.lessons.length}${done ? ' <span class="done-pill">✓ Completed</span>' : ""}`;
      const btn = A.$(".complete-btn", s);
      btn.textContent = done ? "✓ Completed — mark as not done" : "Mark lesson as complete";
      btn.classList.toggle("btn-primary", !done);
      A.$(`[data-toc-lesson="${CSS.escape(l.id)}"]`).classList.toggle("done", done);
    });
  };

  /* ---------- Contents: collapse on small screens, highlight the current section ---------- */
  const toc = A.$(".toc");
  const mq = matchMedia("(max-width: 900px)");
  const syncToc = () => (toc.open = !mq.matches);
  syncToc();
  mq.addEventListener ? mq.addEventListener("change", syncToc) : mq.addListener(syncToc);

  if ("IntersectionObserver" in window) {
    const links = {};
    A.$$(".toc a[data-anchor]").forEach((a) => (links[a.dataset.anchor] = a));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && links[en.target.id]) {
            A.$$(".toc a.active").forEach((x) => x.classList.remove("active"));
            links[en.target.id].classList.add("active");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    A.$$(".deep > .sec").forEach((s) => io.observe(s));
  }

  /* ---------- Initial view from the URL ---------- */
  const startTab = A.param("tab") === "ref" ? "ref" : "deep";
  const startTerm = A.param("term"); // read these before showTab() rewrites the URL
  const startHash = location.hash.length > 1 ? decodeURIComponent(location.hash.slice(1)) : "";
  showTab(startTab);
  if (startTerm && m.termById[startTerm]) setTimeout(() => openTerm(startTerm, true), 60);
  else if (startHash) setTimeout(() => goDeep(startHash, true), 60);

  /* ---------- Content health badge ---------- */
  const issues = A.validate(m);
  const errs = issues.filter((i) => i.level === "error").length;
  if (errs || A._loadWarnings.length) {
    const link = A.$(".health-link");
    link.classList.add("has-errors");
    link.textContent = `⚠ ${errs + A._loadWarnings.length} content problem${errs + A._loadWarnings.length > 1 ? "s" : ""} — open checker`;
    console.warn("Content problems in module", m.id, issues.filter((i) => i.level === "error"), A._loadWarnings);
  }
})();
