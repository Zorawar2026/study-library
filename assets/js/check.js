/* ==========================================================================
   Study Library — content checker (check.html, optionally ?m=<module-id>)
   Lists broken links, invalid quiz answers, missing fields and coverage gaps.
   ========================================================================== */
(async function () {
  "use strict";
  const A = window.Academy;
  const esc = A.esc;
  const out = A.$("#report");
  try {
    await A.loadCatalog();
  } catch (e) {
    out.innerHTML = `<p class="warn">Could not load modules/catalog.js: ${esc(e.message)}</p>`;
    return;
  }
  const only = A.param("m");
  const ids = only ? [only] : A._catalog.map((c) => c.id);
  let html = "";
  let totalErr = 0;
  for (const id of ids) {
    A._loadWarnings = [];
    let m;
    try {
      m = await A.loadModule(id);
    } catch (e) {
      totalErr++;
      html += `<section class="chk"><h2>${esc(id)}</h2><p class="lvl-error">✗ ${esc(e.message)}</p></section>`;
      continue;
    }
    const issues = A.validate(m);
    A._loadWarnings.forEach((w) => issues.unshift({ level: "error", where: "files", msg: w }));
    const by = (lvl) => issues.filter((i) => i.level === lvl);
    totalErr += by("error").length;
    const cov = m.coverage.length;
    const covered = m.coverage.filter((c) => (c.status || "covered") === "covered").length;
    html += `<section class="chk">
      <h2><a href="module.html?m=${encodeURIComponent(m.id)}">${esc(A.plain(m.title))}</a> <code>${esc(m.id)}</code></h2>
      <div class="chk-stats">
        <span>${m.lessons.length} lessons</span><span>${m.terms.length} terms</span>
        <span>${m.allQuiz.length} assessment questions (${m.quizSets.map((s) => `${esc(s.title)}: ${m.allQuiz.filter((q) => q._set === s.id).length}`).join(", ")})</span>
        <span>${m.lessons.reduce((n, l) => n + l.check.length, 0)} lesson-check questions</span>
        <span>${A.wordCount(m).toLocaleString()} words in lessons</span>
        <span>coverage: ${cov ? `${covered}/${cov} items fully covered` : "none recorded"}</span>
      </div>
      <div class="chk-summary"><span class="lvl-error">${by("error").length} errors</span><span class="lvl-warn">${by("warn").length} warnings</span><span class="lvl-info">${by("info").length} notes</span></div>
      ${
        issues.length
          ? `<table class="chk-table"><thead><tr><th>Level</th><th>Where</th><th>Problem</th></tr></thead><tbody>${issues
              .map((i) => `<tr class="lvl-${i.level}"><td>${i.level}</td><td><code>${esc(i.where)}</code></td><td>${esc(i.msg)}</td></tr>`)
              .join("")}</tbody></table>`
          : '<p class="lvl-ok">✓ No problems found.</p>'
      }</section>`;
  }
  out.innerHTML =
    `<p class="chk-overall ${totalErr ? "lvl-error" : "lvl-ok"}">${totalErr ? `✗ ${totalErr} error(s) need fixing before publishing.` : "✓ All modules pass. Warnings and notes are worth a look but won't break anything."}</p>` +
    html;
})();
