/* ==========================================================================
   Study Library — diagrams
   Block type "diagram": { type: "diagram", kind: "...", title, caption, source, ...data }
   Kinds: flow, cycle, hub, matrix, stack, tree, continuum, equation, compare,
          cards, layers, donut, gantt.  See docs/FORMAT.md for the data of each.
   Colours: every item can take tone: violet | cyan | green | orange | pink |
            blue | yellow | red | gray | mod (the module colour).
   ========================================================================== */
(function () {
  "use strict";
  const A = window.Academy;
  const esc = A.esc;
  const TONES = ["violet", "cyan", "green", "orange", "pink", "blue", "yellow", "red"];
  A.TONES = TONES;
  let uid = 0;

  const T = (t, i) => (t && /^[a-z]+$/.test(t) ? t : TONES[(i || 0) % TONES.length]);
  const norm = (s) => (typeof s === "string" ? { title: s } : s || {});
  const il = (x, ctx) => A.inline(x, ctx);
  const f1 = (n) => (+n).toFixed(1);

  /* ---------- small icon set (stroke icons, 24×24) ---------- */
  const ICONS = {
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    repeat: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    coins: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
    users: '<circle cx="9" cy="8" r="4"/><path d="M2 21v-1a6 6 0 0 1 12 0v1"/><circle cx="17" cy="9" r="3"/><path d="M22 21v-1a4 4 0 0 0-5-3.9"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    bulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v4"/><path d="M12 18h.01"/>',
    layers: '<path d="M12 2l10 5-10 5L2 7z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/>',
    percent: '<path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    message: '<path d="M21 12a8 8 0 0 1-12 7l-6 2 2-5.5A8 8 0 1 1 21 12z"/>',
    calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
    flag: '<path d="M4 22V3"/><path d="M4 4h13l-2 4 2 4H4"/>',
    link: '<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  };
  A.icon = (name) =>
    ICONS[name]
      ? `<svg class="dg-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`
      : esc(name || "");

  /* A coloured box with title / text / bullet items */
  const box = (s, i, ctx, cls) => {
    s = norm(s);
    return `<div class="dg-box tone-${T(s.tone, i)}${cls || ""}">${s.icon ? `<div class="dg-icon">${A.icon(s.icon)}</div>` : ""}${
      s.tag ? `<div class="dg-tag">${il(s.tag, ctx)}</div>` : ""
    }${s.title != null ? `<div class="dg-title">${il(s.title, ctx)}</div>` : ""}${s.text ? `<div class="dg-text">${il(s.text, ctx)}</div>` : ""}${
      s.items ? `<ul class="dg-items">${A.arr(s.items).map((x) => `<li>${il(x, ctx)}</li>`).join("")}</ul>` : ""
    }</div>`;
  };

  const K = {};

  /* flow: steps in order. ≤5 steps → a row with arrows; more → a vertical timeline. */
  K.flow = (d, ctx) => {
    const steps = A.arr(d.steps).map(norm);
    const vertical = d.vertical || steps.length > 5;
    const num = d.numbered !== false;
    return `<ol class="dg-flow ${vertical ? "is-vertical" : "is-row"}" style="--n:${steps.length}">${steps
      .map(
        (s, i) => `<li class="dg-step tone-${T(s.tone, i)}"><span class="dg-num">${num ? i + 1 : s.icon ? A.icon(s.icon) : ""}</span><div class="dg-step-body">${
          s.tag ? `<div class="dg-tag">${il(s.tag, ctx)}</div>` : ""
        }<div class="dg-title">${il(s.title, ctx)}</div>${s.text ? `<div class="dg-text">${il(s.text, ctx)}</div>` : ""}</div></li>`
      )
      .join("")}</ol>${d.loop ? `<div class="dg-loop"><span aria-hidden="true">↺</span> ${il(d.loop, ctx)}</div>` : ""}`;
  };

  /* positions around an ellipse, in % of the container */
  const ringPos = (n, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return { a, x: 50 + 38 * Math.cos(a), y: 50 + 37 * Math.sin(a) };
  };

  /* cycle: steps around a loop with arrows. Falls back to a vertical flow on phones. */
  K.cycle = (d, ctx) => {
    const steps = A.arr(d.steps).map(norm);
    const n = steps.length;
    const W = 640, H = 480, cx = W / 2, cy = H / 2, rx = W * 0.38, ry = H * 0.37;
    const id = "dga" + ++uid;
    const pad = Math.min(0.5, (Math.PI / n) * 0.62);
    let arcs = "";
    for (let i = 0; i < n; i++) {
      if (d.open && i === n - 1) continue;
      const a1 = -Math.PI / 2 + (2 * Math.PI * i) / n + pad;
      const a2 = -Math.PI / 2 + (2 * Math.PI * (i + 1)) / n - pad;
      const p = (a) => [cx + rx * Math.cos(a), cy + ry * Math.sin(a)];
      const [x1, y1] = p(a1), [x2, y2] = p(a2);
      arcs += `<path d="M${f1(x1)},${f1(y1)} A${rx},${ry} 0 0 1 ${f1(x2)},${f1(y2)}" marker-end="url(#${id})"/>`;
    }
    const nodes = steps
      .map((s, i) => {
        const p = ringPos(n, i);
        return `<div class="dg-ring-node" style="left:${f1(p.x)}%;top:${f1(p.y)}%">${box(Object.assign({ tag: d.numbered === false ? s.tag : `${i + 1}` + (s.tag ? " · " + s.tag : "") }, s), i, ctx)}</div>`;
      })
      .join("");
    const ring = `<div class="dg-ring"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><g class="dg-ring-arcs">${arcs}</g></svg>${
      d.center ? `<div class="dg-ring-center">${il(d.center, ctx)}</div>` : ""
    }${nodes}</div>`;
    const fallback = K.flow({ steps, vertical: true, loop: d.loop || (d.open ? "" : "…and back to step 1") }, ctx);
    return `<div class="dg-wide">${ring}</div><div class="dg-narrow">${fallback}</div>`;
  };

  /* hub: a centre connected to items around it */
  K.hub = (d, ctx) => {
    const items = A.arr(d.items).map(norm);
    const n = items.length;
    const W = 640, H = 480;
    const id = "dgh" + ++uid;
    const dir = d.direction || "out";
    const lines = items
      .map((_, i) => {
        const p = ringPos(n, i);
        const x = (p.x / 100) * W, y = (p.y / 100) * H;
        const sx = W / 2 + (x - W / 2) * 0.32, sy = H / 2 + (y - H / 2) * 0.32;
        const ex = W / 2 + (x - W / 2) * 0.7, ey = H / 2 + (y - H / 2) * 0.7;
        const [a, b] = dir === "in" ? [[ex, ey], [sx, sy]] : [[sx, sy], [ex, ey]];
        return `<path d="M${f1(a[0])},${f1(a[1])} L${f1(b[0])},${f1(b[1])}"${dir === "none" ? "" : ` marker-end="url(#${id})"`}/>`;
      })
      .join("");
    const nodes = items
      .map((s, i) => {
        const p = ringPos(n, i);
        return `<div class="dg-ring-node" style="left:${f1(p.x)}%;top:${f1(p.y)}%">${box(s, i, ctx)}</div>`;
      })
      .join("");
    const center = box(Object.assign({ tone: "mod" }, norm(d.center)), 0, ctx, " dg-hub-center");
    const ring = `<div class="dg-ring is-hub"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><g class="dg-ring-arcs">${lines}</g></svg><div class="dg-ring-node" style="left:50%;top:50%">${center}</div>${nodes}</div>`;
    const fallback = `<div class="dg-hub-mobile">${center}<div class="dg-cards" style="--n:2">${items.map((s, i) => box(s, i, ctx, " dg-card")).join("")}</div></div>`;
    return `<div class="dg-wide">${ring}</div><div class="dg-narrow">${fallback}</div>`;
  };

  /* matrix: a grid with labelled axes. cells = rows from top to bottom. */
  K.matrix = (d, ctx) => {
    const rows = A.arr(d.cells);
    const nr = rows.length;
    const nc = Math.max(...rows.map((r) => r.length));
    const x = d.x || {}, y = d.y || {};
    const yt = A.arr(y.ticks), xt = A.arr(x.ticks);
    let h = "";
    h += `<div class="dg-m-ylab" style="grid-row:1 / span ${nr}">${il(y.label || "", ctx)} <span aria-hidden="true">→</span></div>`;
    rows.forEach((r, ri) => {
      h += `<div class="dg-m-ytick" style="grid-row:${ri + 1};grid-column:2">${il(yt[ri] || "", ctx)}</div>`;
      r.forEach((c, ci) => {
        h += `<div class="dg-m-cell" style="grid-row:${ri + 1};grid-column:${ci + 3}">${box(c, ri * nc + ci, ctx)}</div>`;
      });
    });
    xt.forEach((t, ci) => (h += `<div class="dg-m-xtick" style="grid-row:${nr + 1};grid-column:${ci + 3}">${il(t, ctx)}</div>`));
    h += `<div class="dg-m-xlab" style="grid-row:${nr + 2};grid-column:3 / span ${nc}">${il(x.label || "", ctx)} <span aria-hidden="true">→</span></div>`;
    return `<div class="dg-scroll"><div class="dg-matrix" style="--c:${nc};--r:${nr}">${h}</div></div>`;
  };

  /* stack: layers from top to bottom; numeric "amount" sets each bar's width */
  K.stack = (d, ctx) => {
    const L = A.arr(d.layers).map(norm);
    const max = Math.max(0, ...L.map((l) => +l.amount || 0));
    return `<div class="dg-stack">${L.map((l, i) => {
      const w = max && l.amount ? Math.max(30, (l.amount / max) * 100) : 100;
      return `<div class="dg-layer tone-${T(l.tone, i)}${l.total ? " is-total" : ""}"><div class="dg-layer-track"><div class="dg-layer-bar" style="width:${f1(w)}%"><span class="dg-title">${il(
        l.title,
        ctx
      )}</span>${l.value ? `<span class="dg-value">${il(l.value, ctx)}</span>` : ""}</div></div>${l.text ? `<div class="dg-layer-note">${il(l.text, ctx)}</div>` : '<div class="dg-layer-note"></div>'}</div>`;
    }).join("")}</div>`;
  };

  /* tree: a root with branches (each branch can list items) */
  K.tree = (d, ctx) => {
    const kids = A.arr(d.children).map(norm);
    const n = kids.length;
    const cols = n <= 5 ? n : Math.ceil(n / 2);
    return `<div class="dg-tree${n > 5 ? " no-lines" : ""}" style="--n:${cols}">${box(Object.assign({ tone: "mod" }, norm(d.root)), 0, ctx, " dg-root")}<div class="dg-branches">${kids
      .map((k, i) => `<div class="dg-branch">${box(k, i, ctx)}</div>`)
      .join("")}</div>${d.footer ? `<div class="dg-tree-foot">${box(Object.assign({ tone: "mod" }, norm(d.footer)), 0, ctx)}</div>` : ""}</div>`;
  };

  /* continuum: ordered levels along a gradient arrow */
  K.continuum = (d, ctx) => {
    const L = A.arr(d.levels).map(norm);
    return `<div class="dg-cont" style="--n:${L.length}">${
      d.from || d.to ? `<div class="dg-cont-ends"><span>${il(d.from || "", ctx)}</span><span>${il(d.to || "", ctx)}</span></div>` : ""
    }<ol class="dg-cont-levels">${L.map(
      (l, i) => `<li class="tone-${T(l.tone, i)}"><span class="dg-cont-dot">${l.mark ? esc(l.mark) : ""}</span><div class="dg-title">${il(l.title, ctx)}</div>${l.text ? `<div class="dg-text">${il(l.text, ctx)}</div>` : ""}</li>`
    ).join("")}</ol></div>`;
  };

  /* equation: boxes joined by operators; the last box is the result */
  K.equation = (d, ctx) => {
    const t = A.arr(d.terms).map(norm);
    const ops = A.arr(d.ops);
    return `<div class="dg-eq">${t
      .map((x, i) => `${i ? `<span class="dg-op">${esc(ops[i - 1] || "+")}</span>` : ""}${box(x, i, ctx, i === t.length - 1 && d.result !== false ? " dg-result" : "")}`)
      .join("")}</div>`;
  };

  /* compare: side-by-side columns */
  K.compare = (d, ctx) => {
    const c = A.arr(d.columns).map(norm);
    const vs = c.length === 2 && d.vs !== false;
    return `<div class="dg-compare${vs ? " has-vs" : ""}" style="--n:${c.length}">${c
      .map((x, i) => `${i && vs ? '<span class="dg-vs">vs</span>' : ""}${box(x, i, ctx, " dg-col")}`)
      .join("")}</div>`;
  };

  /* cards: a grid of coloured cards, optionally with icons */
  K.cards = (d, ctx) => {
    const c = A.arr(d.cards).map(norm);
    return `<div class="dg-cards" style="--n:${Math.min(c.length, d.cols || 4)}">${c.map((x, i) => box(x, i, ctx, " dg-card")).join("")}</div>`;
  };

  /* layers: rows of boxes stacked top to bottom, with arrows; optional side arrows */
  K.layers = (d, ctx) => {
    const rows = A.arr(d.rows).map((r) => (Array.isArray(r) ? { boxes: r } : r));
    const body = rows
      .map((r, ri) => {
        const boxes = A.arr(r.boxes).map(norm);
        return `${ri && d.arrows !== false ? '<div class="dg-down" aria-hidden="true"></div>' : ""}<div class="dg-lrow${r.label ? " has-label" : ""}">${
          r.label ? `<div class="dg-lrow-label">${il(r.label, ctx)}</div>` : ""
        }<div class="dg-lrow-boxes" style="--n:${boxes.length}">${boxes
          .map((b, bi) => box(Object.assign({}, b, { tone: b.tone || r.tone || TONES[ri % TONES.length] }), bi, ctx))
          .join("")}</div></div>`;
      })
      .join("");
    const side = d.side
      ? `<div class="dg-side" aria-label="${esc(A.plain(d.side.down || ""))} / ${esc(A.plain(d.side.up || ""))}"><div class="dg-side-arrow down"><span>${il(
          d.side.down || "",
          ctx
        )}</span></div><div class="dg-side-arrow up"><span>${il(d.side.up || "", ctx)}</span></div></div>`
      : "";
    return `<div class="dg-layers${side ? " has-side" : ""}">${side}<div class="dg-lrows">${body}</div></div>`;
  };

  /* donut: segments with a legend */
  K.donut = (d, ctx) => {
    const S = A.arr(d.segments).map(norm);
    const tot = S.reduce((a, s) => a + (+s.value || 0), 0) || 1;
    const cx = 130, cy = 130, R = 120, r = 74;
    let a0 = -Math.PI / 2;
    const p = (rr, a) => `${f1(cx + rr * Math.cos(a))} ${f1(cy + rr * Math.sin(a))}`;
    const arcs = S.map((s, i) => {
      const a1 = a0 + 2 * Math.PI * ((+s.value || 0) / tot);
      const large = a1 - a0 > Math.PI ? 1 : 0;
      const path = `M${p(R, a0)} A${R} ${R} 0 ${large} 1 ${p(R, a1)} L${p(r, a1)} A${r} ${r} 0 ${large} 0 ${p(r, a0)}Z`;
      a0 = a1;
      return `<path class="tone-${T(s.tone, i)}" d="${path}"/>`;
    }).join("");
    const legend = S.map(
      (s, i) => `<li class="tone-${T(s.tone, i)}"><span class="dg-swatch"></span><span class="dg-leg-val">${esc(s.display || s.value + (d.unit || ""))}</span><span class="dg-leg-lab">${il(s.title, ctx)}${
        s.text ? `<span class="dg-text">${il(s.text, ctx)}</span>` : ""
      }</span></li>`
    ).join("");
    return `<div class="dg-donut"><svg viewBox="0 0 260 260" role="img" aria-label="${esc(S.map((s) => `${A.plain(s.title)} ${s.value}${d.unit || ""}`).join(", "))}">${arcs}${
      d.center ? `<text x="130" y="136" text-anchor="middle" class="dg-donut-center">${esc(d.center)}</text>` : ""
    }</svg><ul class="dg-legend">${legend}</ul></div>`;
  };

  /* gantt: small bar charts with dependency arrows (FS, SS, FF, SF) */
  const ganttPanel = (p, ctx) => {
    const rows = A.arr(p.rows);
    const N = p.scale || Math.max(...rows.map((r) => r.start + r.len));
    const LW = 104, CW = 300, RH = 34, top = 8;
    const W = LW + CW + 16, H = top + rows.length * RH + (p.axis === false ? 4 : 24);
    const X = (t) => LW + (t / N) * CW;
    const id = "dgg" + ++uid;
    const mid = (i) => top + i * RH + RH / 2;
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(A.plain(p.title || "Gantt chart"))}"><defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>`;
    const step = N <= 12 ? 1 : N <= 30 ? 5 : 10;
    for (let t = 0; t <= N; t += step) s += `<line class="dg-g-grid" x1="${f1(X(t))}" x2="${f1(X(t))}" y1="${top}" y2="${top + rows.length * RH}"/>${p.axis === false ? "" : `<text class="dg-g-tick" x="${f1(X(t))}" y="${top + rows.length * RH + 16}" text-anchor="middle">${t}</text>`}`;
    A.arr(p.marks).forEach((m) => {
      s += `<line class="dg-g-mark" x1="${f1(X(m.at))}" x2="${f1(X(m.at))}" y1="${top - 4}" y2="${top + rows.length * RH}"/><text class="dg-g-marklab" x="${f1(X(m.at) + 4)}" y="${top + 8}">${esc(m.label || "")}</text>`;
    });
    rows.forEach((r, i) => {
      const y = top + i * RH + 7, h = RH - 14;
      const x0 = X(r.start), w = Math.max(2, X(r.start + r.len) - x0);
      s += `<text class="dg-g-label" x="${LW - 8}" y="${f1(mid(i) + 4)}" text-anchor="end">${esc(r.label)}</text>`;
      s += `<rect class="dg-g-bar tone-${T(r.tone, i)}${r.ghost ? " is-ghost" : ""}" x="${f1(x0)}" y="${y}" width="${f1(w)}" height="${h}" rx="4"/>`;
      if (r.text) s += `<text class="dg-g-bartext" x="${f1(x0 + w / 2)}" y="${f1(mid(i) + 4)}" text-anchor="middle">${esc(r.text)}</text>`;
    });
    A.arr(p.links).forEach((l) => {
      const a = rows[l.from], b = rows[l.to];
      if (!a || !b) return;
      const ty = (l.type || "FS").toUpperCase();
      const x1 = ty[0] === "F" ? X(a.start + a.len) : X(a.start);
      const x2 = ty[1] === "F" ? X(b.start + b.len) : X(b.start);
      const y1 = mid(l.from), y2 = mid(l.to);
      const aBottom = top + l.from * RH + RH - 7, bTop = top + l.to * RH + 7, bBottom = top + l.to * RH + RH - 7;
      const down = l.to > l.from;
      let path;
      if (ty === "FS" && x2 >= x1 + 12) path = `M${f1(x1)},${f1(y1)} H${f1(x1 + 9)} V${f1(y2)} H${f1(x2 - 1)}`;
      else if (ty === "FS") path = `M${f1(x1)},${f1(y1)} H${f1(x1 + 9)} V${f1(bTop - 7)} H${f1(x2 + 6)} V${f1(bTop - 1)}`; // lead: drop onto the bar's start
      else if (ty === "SS" && x2 >= x1 + 8) path = `M${f1(x1 + 4)},${f1(down ? aBottom : y1)} V${f1(y2)} H${f1(x2 - 1)}`;
      else if (ty === "SS") path = `M${f1(x1)},${f1(y1)} H${f1(Math.min(x1, x2) - 8)} V${f1(y2)} H${f1(x2 - 1)}`;
      else if (ty === "FF") path = `M${f1(x1)},${f1(y1)} H${f1(Math.max(x1, x2) + 10)} V${f1(y2)} H${f1(x2 + 1)}`;
      else path = `M${f1(x1)},${f1(down ? aBottom : y1)} V${f1(bBottom + 8)} H${f1(x2 - 4)} V${f1(bBottom + 1)}`; // SF: up into the successor's finish
      s += `<path class="dg-g-link" d="${path}" marker-end="url(#${id})"/>`;
      if (l.label) s += `<text class="dg-g-linklab" x="${f1((x1 + x2) / 2)}" y="${f1((y1 + y2) / 2 + 4)}" text-anchor="middle">${esc(l.label)}</text>`;
    });
    s += "</svg>";
    return `<div class="dg-gantt">${p.title ? `<div class="dg-g-title">${il(p.title, ctx)}</div>` : ""}${s}${p.note ? `<div class="dg-text">${il(p.note, ctx)}</div>` : ""}</div>`;
  };
  K.gantt = (d, ctx) => {
    const panels = A.arr(d.panels || [d]);
    return `<div class="dg-gantts" style="--n:${Math.min(panels.length, d.cols || 2)}">${panels.map((p) => ganttPanel(p, ctx)).join("")}</div>`;
  };

  A.diagramKinds = Object.keys(K);

  A.renderDiagram = (b, ctx) => {
    const f = K[b.kind];
    if (!f) return `<div class="blk blk-error">Unknown diagram kind "${esc(b.kind)}". Supported: ${A.diagramKinds.join(", ")}.</div>`;
    let inner;
    try {
      inner = f(b, ctx);
    } catch (e) {
      console.error("Diagram failed", b, e);
      return `<div class="blk blk-error">Diagram "${esc(b.kind)}" could not be drawn: ${esc(e.message)}</div>`;
    }
    return `<figure class="blk diagram dg-k-${esc(b.kind)}"${b.id ? ` id="${esc(b.id)}"` : ""}>${b.title ? `<div class="dg-head"><span class="dg-head-dot"></span>${il(b.title, ctx)}</div>` : ""}<div class="dg-body">${inner}</div>${
      b.caption || b.source ? `<figcaption>${il(b.caption || "", ctx)}${b.source ? ` <span class="src-inline">↳ ${esc(b.source)}</span>` : ""}</figcaption>` : ""
    }</figure>`;
  };
})();
