/* ==========================================================================
   Study Library — home page: one card per module + search across all terms
   ========================================================================== */
(async function () {
  "use strict";
  const A = window.Academy;
  const esc = A.esc;
  const grid = A.$("#modules");
  const status = A.$("#status");

  try {
    await A.loadCatalog();
  } catch (e) {
    status.innerHTML = `Could not load <code>modules/catalog.js</code>. ${esc(e.message)}`;
    return;
  }
  const s = A._site;
  document.title = s.title;
  A.$("#site-title").textContent = s.title;
  A.$("#site-tagline").textContent = s.tagline || "";
  A.$("#site-owner").textContent = s.owner || "";

  // Load every module listed in the catalog (each is a small script file).
  const modules = [];
  const failed = [];
  for (const entry of A._catalog) {
    try {
      modules.push(await A.loadModule(entry.id));
    } catch (e) {
      failed.push({ id: entry.id, msg: e.message });
    }
  }
  await A.loadMath(); // only used for formulas in search results

  const categories = Array.from(new Set(modules.map((m) => m.category).filter(Boolean)));
  let activeCat = "";

  const card = (m) => {
    const p = A.progress(m);
    const q = m.allQuiz.length + m.lessons.reduce((n, l) => n + l.check.length, 0);
    const best = A.store.get(`${m.id}:score:final`, null);
    const href = `module.html?m=${encodeURIComponent(m.id)}`;
    return `<article class="mcard" style="--mod:${esc(m.color || "var(--accent)")}" data-cat="${esc(m.category || "")}">
      <div class="mcard-top"><span class="mod-icon" aria-hidden="true">${esc(m.icon || m.title.slice(0, 2))}</span>${m.category ? `<span class="eyebrow">${esc(m.category)}</span>` : ""}</div>
      <h2 class="mcard-title"><a class="mcard-main" href="${href}">${A.inline(m.title, { module: m })}</a></h2>
      ${m.subtitle ? `<p class="mcard-sub">${A.inline(m.subtitle, { module: m })}</p>` : ""}
      <div class="mcard-stats"><span>${m.lessons.length} lessons</span><span>${m.terms.length} terms</span><span>${q} questions</span></div>
      <div class="mcard-progress"><div class="bar"><span style="width:${p.pct}%"></span></div><span>${p.count}/${p.total} lessons${best ? ` · best quiz ${best.pct}%` : ""}</span></div>
      <div class="mcard-links"><a class="mcard-go" href="${href}" tabindex="-1">Deep Dive →</a><a class="mcard-ref" href="${href}&tab=ref">Quick Reference</a></div>
    </article>`;
  };

  const render = () => {
    const q = (A.$("#search").value || "").toLowerCase().trim();
    const tokens = q.split(/\s+/).filter(Boolean);
    const match = (text) => tokens.every((t) => text.includes(t));
    const shown = modules.filter(
      (m) => (!activeCat || m.category === activeCat) && (!tokens.length || match([m.title, m.subtitle, m.category, A.plain(m.overview)].join(" ").toLowerCase()))
    );
    grid.innerHTML = shown.map(card).join("");

    // Term search across every module
    const hits = [];
    if (tokens.length) {
      modules
        .filter((m) => !activeCat || m.category === activeCat)
        .forEach((m) =>
          m.terms.forEach((t) => {
            if (match([t.term, ...t.aliases, A.plain(t.short)].join(" ").toLowerCase())) hits.push({ m, t });
          })
        );
    }
    A.$("#term-results").innerHTML = hits.length
      ? `<h2 class="section-label">Matching terms <span class="count">${hits.length}</span></h2><div class="term-hits">${hits
          .slice(0, 60)
          .map(
            ({ m, t }) => `<a class="term-hit" href="module.html?m=${encodeURIComponent(m.id)}&tab=ref&term=${encodeURIComponent(t.id)}" style="--mod:${esc(m.color || "var(--accent)")}">
            <span class="th-term">${esc(t.term)}</span><span class="th-mod">${esc(A.plain(m.title))}</span><span class="th-short">${esc(A.plain(t.short).slice(0, 160))}</span></a>`
          )
          .join("")}</div>`
      : "";

    const total = modules.length;
    status.innerHTML = failed.length
      ? `<span class="warn">⚠ ${failed.length} module(s) failed to load: ${failed.map((f) => `<code>${esc(f.id)}</code>`).join(", ")}. <a href="check.html">Open the content checker</a>.</span>`
      : "";
    A.$("#module-count").textContent = tokens.length || activeCat ? `${shown.length} of ${total} modules` : `${total} module${total === 1 ? "" : "s"}`;
    A.$("#empty").hidden = shown.length > 0 || hits.length > 0;
  };

  A.$("#cats").innerHTML = categories.length
    ? `<button class="seg-btn on" data-cat="" type="button">All</button>${categories.map((c) => `<button class="seg-btn" data-cat="${esc(c)}" type="button">${esc(c)}</button>`).join("")}`
    : "";
  A.$("#cats").addEventListener("click", (e) => {
    const b = e.target.closest(".seg-btn");
    if (!b) return;
    activeCat = b.dataset.cat;
    A.$$("#cats .seg-btn").forEach((x) => x.classList.toggle("on", x === b));
    render();
  });
  A.$("#search").addEventListener("input", render);
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== A.$("#search")) {
      e.preventDefault();
      A.$("#search").focus();
    }
  });
  render();
})();
