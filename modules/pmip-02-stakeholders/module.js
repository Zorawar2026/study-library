/* ==========================================================================
   Project Management in Practice — Module 2: Stakeholders Management
   Sources: Notes "PMP Module 2: Project Stakeholders Management" (6 pages),
            Slides "2_Stakeholders Scope Project Management", slides 1–22
            (slides 23–30 are Scope and are in Module 3),
            Kahoot 2 (in quiz-extra.js).
   ========================================================================== */

const PM2_SVG_SALIENCE = `<svg viewBox="0 0 520 380" width="520" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:12px">
<g stroke="currentColor" stroke-width="1.6" fill-opacity="0.14">
<circle style="fill:var(--t-red)" cx="190" cy="150" r="105"/><circle style="fill:var(--t-blue)" cx="330" cy="150" r="105"/><circle style="fill:var(--t-yellow)" cx="260" cy="260" r="105"/></g>
<g fill="currentColor" font-weight="700" font-size="14" text-anchor="middle">
<text x="150" y="36">POWER</text><text x="370" y="36">LEGITIMACY</text><text x="260" y="378">URGENCY</text></g>
<g fill="currentColor" text-anchor="middle">
<text x="140" y="130">Dormant</text><text x="140" y="144" font-size="10" opacity="0.8">power</text>
<text x="380" y="130">Discretionary</text><text x="380" y="144" font-size="10" opacity="0.8">legitimacy</text>
<text x="260" y="325">Demanding</text><text x="260" y="339" font-size="10" opacity="0.8">urgency</text>
<text x="260" y="98">Dominant</text><text x="260" y="112" font-size="10" opacity="0.8">power + legitimacy</text>
<text x="185" y="232">Dangerous</text><text x="185" y="246" font-size="10" opacity="0.8">power + urgency</text>
<text x="335" y="232">Dependent</text><text x="335" y="246" font-size="10" opacity="0.8">legitimacy + urgency</text>
<text x="260" y="182" font-weight="800">Core</text><text x="260" y="196" font-size="10" opacity="0.8">(definitive)</text>
<text x="470" y="320" font-size="11" opacity="0.8">Non-stakeholder:</text><text x="470" y="334" font-size="11" opacity="0.8">outside all circles</text></g></svg>`;

const PM2_SVG_KANO = `<svg viewBox="0 0 520 330" width="520" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:12px">
<defs><marker id="pm2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" stroke-width="1.4" fill="none"><path d="M40 165H490" marker-end="url(#pm2a)"/><path d="M260 310V22" marker-end="url(#pm2a)"/></g>
<g fill="currentColor" font-weight="700" text-anchor="middle"><text x="260" y="14">Satisfied</text><text x="260" y="326">Dissatisfied</text></g>
<g fill="currentColor" font-weight="700"><text x="40" y="155">Need not fulfilled</text><text x="490" y="155" text-anchor="end">Need well fulfilled</text></g>
<g fill="none" stroke-width="2.5">
<path style="stroke:var(--t-orange)" d="M50 162Q360 158 470 25"/>
<path style="stroke:var(--t-blue)" d="M90 300L460 30"/>
<path style="stroke:var(--t-green)" d="M100 300Q190 180 470 168"/>
<path style="stroke:var(--t-gray)" d="M70 165H470" stroke-dasharray="6 4"/></g>
<g font-weight="700" font-size="12"><text style="fill:var(--t-orange)" x="330" y="60">Delighters / Attractive</text><text style="fill:var(--t-blue)" x="390" y="110">Satisfiers / Desired</text><text style="fill:var(--t-green)" x="330" y="190">Dissatisfiers / Must-be</text><text style="fill:var(--t-gray)" x="120" y="182">Indifferent</text></g></svg>`;

Academy.module({
  id: "pmip-02-stakeholders",
  title: "Stakeholders Management",
  subtitle: "Strategic project thinking, identifying and analysing stakeholders, the stakeholder register, classification models, engagement levels and the Kano model.",
  category: "Project Management in Practice",
  icon: "2",
  color: "#22c7e8",
  version: "1.0",
  updated: "2026-11-24",
  studyTime: "90–105 min",
  extraFiles: ["quiz-extra.js"],

  sources: [
    { id: "N2", label: "Notes — PMP Module 2: Project Stakeholders Management", detail: "6 pages. Referred to as *Notes p.1–6*." },
    { id: "S2", label: "Slides — Project Management in Practice: Stakeholders and Scope Management Plan", detail: "Prof. José Cobo, Ph.D, PMP®, ESCP Business School. 30 slides; slides 1–22 are used here, slides 23–30 in Module 3. Referred to as *Slide 1–22*." },
    { id: "K2", label: "Kahoot 2 — Stakeholders Management", detail: "10 questions with the answer key revealed by Kahoot. Shown in the *Kahoot 2* question set." },
  ],

  overview:
    "This module starts from **strategic project thinking**: why every project must be linked to a long-term purpose in a world of constant change, and how the *3 Horizons of Strategy* frame short-, medium- and long-term initiatives.\n\nIt then covers [[stakeholder|stakeholder]] management: identifying everyone who can affect or be affected by the project, analysing their requirements, [[expectation|expectations]], interest, influence and power, recording them in the [[stakeholder-register|stakeholder register]], classifying them with mapping models, and monitoring their engagement over time.\n\nIt ends with the [[kano-model|Kano model]], which links stakeholder satisfaction to the features of the solution, and with two examples of *strategic agility*.",

  prerequisites: ["Module 1: process groups (Initiating, Planning, Executing, Monitoring & Controlling, Closing)."],

  objectives: [
    "Explain what strategy means and why projects must be linked to a long-term purpose or vision.",
    "Describe the global shifts and the 3 Horizons of Strategy that shape strategic projects.",
    "Define a stakeholder and state the main objective of stakeholder management.",
    "Carry out a stakeholder analysis in order and build a stakeholder register.",
    "Classify stakeholders with the power/interest grid, power/influence grid, salience model and stakeholder cube.",
    "Use the stakeholder engagement assessment matrix and the five engagement levels.",
    "Apply the Kano model to decide which features to build, maximise or eliminate.",
  ],

  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: "strategic-thinking",
      title: "Strategic project thinking",
      source: "Slides 1–6, 15; Kahoot 2 Q1–Q2",
      summary: "What strategy means, how strategy turns into projects, why initiatives must be linked to a long-term purpose, and the 3 Horizons of Strategy.",
      builds_on: [],
      blocks: [
        {
          type: "intuition",
          md: "A project is not chosen in isolation. It is one step on a path from **where the organisation is today** to **where it wants to be**. Strategic project thinking means asking, before planning any project: *which purpose does this serve, and how does it fit with the other initiatives?*",
        },
        { type: "heading", text: "What strategy means" },
        {
          type: "quote",
          md: "Στρατηγία — strategía = **stratós** (army) + **agein** (to lead) — \"the art of leading teams\"",
          source: "Slide 2",
        },
        { type: "heading", text: "How strategy is generated and executed" },
        {"type": "figure", "src": "img/slide-03.jpg", "alt": "Slide 3: strategy generation wheel", "caption": "Original slide 3: strategy generation between hard systems (commit and execute) and soft systems (vision and purpose), with key risks and key metrics.", "source": "Slide 3 (original)"},
        {
          type: "text",
          md: "Slide 3 places **Strategy Generation** — the process of creating [[strategy|strategy]] — at the centre of a cycle, with two directions:",
          source: "Slide 3",
        },
        {
          type: "table",
          caption: "The strategy model on Slide 3",
          headers: ["Side", "Direction from strategy generation", "Contents"],
          rows: [
            ["**Hard systems (tangible)**", "→ **Commit and Execute**", "goals, priorities, tactics, portfolios, projects, actions — running from *macro* (goals) to *micro* (actions)"],
            ["**Soft systems (intangible)**", "→ **Vision and Purpose**", "culture, values, beliefs, distinctions, shared meanings"],
          ],
          source: "Slide 3",
        },
        {
          type: "table",
          caption: "What committing and executing produces (Slide 3)",
          headers: ["", "Examples"],
          rows: [
            ["**Possible exposure (key risks)**", "change, security, innovation, political, operational, reputation, competition"],
            ["**Target outcomes (key metrics)**", "financial, operational, environmental, innovation, human capital, stakeholder engagement"],
          ],
          source: "Slide 3",
        },
        {
          type: "text",
          md: "So projects sit on the **tangible** side, between portfolios and actions, and every commitment carries both **key risks** and **target outcomes** that must be measured.",
          source: "Slide 3",
        },
        {
          type: "text",
          md: "Slide 4 shows **four world maps**, each drawn from a different viewpoint (centred on different regions, plus a satellite view).",
          source: "Slide 4",
        },
        {
          type: "callout",
          kind: "added",
          md: "Slide 4 has no text. A reasonable reading, in the context of strategic thinking: **the same world looks different depending on where you stand**, so a strategy (and its stakeholders) must be seen from several perspectives.",
        },
        { type: "heading", text: "Linking initiatives to a purpose: business model evolution" },
        {"type": "figure", "src": "img/slide-05.jpg", "alt": "Slide 5: waves of initiatives over time and capabilities", "caption": "Original slide 5: business model evolution — waves of initiatives from Today towards Purpose.", "source": "Slide 5 (original)"},
        {
          type: "list",
          title: "What Slide 5 shows",
          items: [
            "Two axes: **capabilities** (from *existing* to *new*) against **time**.",
            "The organisation moves from **Today** to its **Purpose** in **waves** (Wave 1, Wave 2 … Wave N). Each wave is a set of **initiatives** (projects).",
            "The initiatives run in five streams: **customer and influencers**; **offerings and value proposition**; **process and workflow**; **technology and data analytics**; **people, organization and partnerships**.",
          ],
          source: "Slide 5; Kahoot 2 Q1",
        },
        {
          type: "callout",
          kind: "key",
          md: "The primary purpose of linking initiatives to a long-term purpose or vision is **to ensure [[strategic-coherence|strategic coherence]]**: every wave of projects moves the organisation in the same direction.",
          source: "Kahoot 2 Q1",
        },
        { type: "heading", text: "Change is the only constant" },
        {
          type: "quote",
          md: "There is nothing permanent. The only constant is… **CHANGE**. […] the only constant in the universe is that everything is in a perpetual state of motion and transformation […]",
          source: "Slide 6",
          note: "Heraclitus, \"30 centuries ago…\" as written on the slide.",
        },
        {
          type: "callout",
          kind: "added",
          md: "Heraclitus lived around 500 BC, which is about 25 centuries ago. The slide's \"30 centuries\" is a round figure.",
        },
        { type: "heading", text: "The 3 Horizons of Strategy" },
        { type: "definition", term: "three-horizons", source: "Slide 15" },
        {"type": "diagram", "kind": "continuum", "title": "3 Horizons of Strategy", "levels": [{"title": "Horizon 1 · +1 year", "text": "**sustain** — existing markets, mature technology: improvements, extensions, variants, cost reduction", "tone": "green", "mark": "1"}, {"title": "Horizon 2 · +4 years", "text": "**adjacent growth** — emerging markets and technology: next-generation products/services", "tone": "cyan", "mark": "2"}, {"title": "Horizon 3 · +10 years", "text": "**exploration** — new markets and technology: visionary, transformative, new to the world", "tone": "violet", "mark": "3"}], "from": "Today", "to": "The future", "source": "Slide 15"},
        {"type": "figure", "src": "img/slide-15.jpg", "alt": "Slide 15: three nested horizons by market and technology", "caption": "Original slide 15: the 3 Horizons of Strategy.", "source": "Slide 15 (original)"},
        {
          type: "table",
          caption: "The 3 Horizons of Strategy (Slide 15)",
          headers: ["Horizon", "Time frame", "Market", "Technology", "Aim", "What it produces"],
          rows: [
            ["**Horizon 1**", "**+1 year**", "Existing markets (currently served)", "Mature technology (currently used)", "**sustain**", "Improvements, extensions, variants, cost reduction, n+1"],
            ["**Horizon 2**", "**+4 years**", "Emerging markets (not yet served)", "Emerging technology (not yet used)", "**adjacent growth**", "Next generation products/services/x for core markets"],
            ["**Horizon 3**", "**+10 years**", "New markets", "New technology", "**exploration into new markets**", "New categories that are visionary, transformative, and new to the world"],
          ],
          source: "Slide 15",
        },
        {
          type: "callout",
          kind: "conflict",
          title: "Which horizon creates entirely new markets?",
          md: "**Slide 15** puts *exploration into new markets* and *new categories that are visionary, transformative, and new to the world* in **Horizon 3** (+10 years).\n\n**Kahoot 2 Q2** marks **Horizon 2** as the answer to \"Which horizon is most concerned with transformative opportunities that may create entirely new markets?\". The Kahoot file itself notes that the standard model puts this in Horizon 3.\n\n**Resolution used in this module:** Horizon 3, as on the professor's slide. Check with the professor if this comes up in the final test.",
          source: "Slide 15 vs. Kahoot 2 Q2",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "Strategy is only about goals and plans.", right: "Slide 3 gives strategy a **soft side** too — culture, values, beliefs and shared meanings that create the vision and purpose." },
            { wrong: "Horizon 1 projects are unimportant because they are small.", right: "Horizon 1 **sustains** today's business; it funds the move to Horizons 2 and 3." },
          ],
          source: "Slides 3, 15",
        },
      ],
      takeaways: [
        "Strategy = \"the art of leading teams\" (stratós, army + agein, to lead).",
        "Strategy generation drives both commit-and-execute (goals → projects → actions) and vision-and-purpose (culture, values).",
        "Initiatives move from today to the purpose in waves; linking them to a vision ensures strategic coherence.",
        "3 Horizons: H1 sustain (+1 year), H2 adjacent growth (+4 years), H3 exploration of new markets (+10 years).",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Where does the word *strategy* come from?",
          options: ["Latin *strata* (layers) + *agere* (to act)", "Greek *stratós* (army) + *agein* (to lead)", "Greek *strategós* (plan) + *ia* (study)", "French *stratégie* (game plan)"],
          answer: 1,
          explanation: "Slide 2: strategía = stratós (army) + agein (to lead) — \"the art of leading teams\".",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A company improves an existing product and cuts its cost for current customers next year. Which horizon is this?",
          options: ["Horizon 1", "Horizon 2", "Horizon 3", "None of them"],
          answer: 0,
          explanation: "Horizon 1 (+1 year): sustain — improvements, extensions, variants, cost reduction in existing markets.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "On Slide 3, which of these belongs to the **soft (intangible)** systems?",
          options: ["Portfolios", "Tactics", "Shared meanings", "Actions"],
          answer: 2,
          explanation: "Soft systems: culture, values, beliefs, distinctions, shared meanings. The others are hard systems.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "context",
      title: "The changing context: global shifts, industry and generations",
      source: "Slides 7–14",
      summary: "The five shifts in the global economy, the five industrial revolutions and the generations in the marketplace that strategic projects must respond to.",
      builds_on: ["strategic-thinking"],
      blocks: [
        { type: "heading", text: "Shifts in the global economy" },
        { type: "definition", term: "global-shifts", source: "Slides 7–11" },
        {"type": "diagram", "kind": "cards", "title": "Five shifts in the global economy", "cols": 5, "cards": [{"title": "Economic power", "text": "E7 GDP \\$138.2tn vs G7 \\$69.3tn by 2050", "icon": "chart", "tone": "violet"}, {"title": "Demographics", "text": "people aged 60+: 8% → 21% (1950–2050)", "icon": "users", "tone": "pink"}, {"title": "Urbanization", "text": "urban share 50% → 72% by 2050", "icon": "layers", "tone": "orange"}, {"title": "Technology", "text": "6.58 connected devices per person (2020)", "icon": "zap", "tone": "cyan"}, {"title": "Resource scarcity", "text": "+50% energy, +40% water, +35% food by 2030", "icon": "alert", "tone": "green"}], "source": "Slides 7–11"},
        {"type": "gallery", "images": [{"src": "img/slide-07.jpg", "caption": "Slide 7: shift in global economic power", "alt": "Slide 7: G7 vs E7 GDP bubbles for 2015 and 2050"}, {"src": "img/slide-10.jpg", "caption": "Slide 10: rise in technology", "alt": "Slide 10: connected devices per person 2003–2020"}], "source": "Slides 7, 10 (original)", "cols": 2},
        {
          type: "table",
          caption: "The five shifts, with the figures shown on the slides",
          headers: ["Shift", "Figures on the slide", "Source quoted on the slide"],
          rows: [
            ["**Shift in global economic power** (Slide 7)", "GDP of G7 vs E7 countries (US\\$): **2015** — G7 \\$34.1 trillion, E7 \\$18.8 trillion. **2050** — G7 \\$69.3 trillion, E7 **\\$138.2 trillion**. G7 = US, Japan, Germany, UK, France, Italy, Canada. E7 = China, India, Brazil, Russia, Indonesia, Mexico, Turkey.", "PwC analysis"],
            ["**Demographic shift** (Slide 8)", "Proportion of the world population aged 60 years or more: **8%** (1950) → **10%** (2000) → **21%** (2050).", "UN report *World Population Ageing 1950–2050*"],
            ["**Accelerating urbanization** (Slide 9)", "The world urban population is expected to increase from **50% to 72%** of total population by 2050 — a **44% increase**.", "UN report *World Population Ageing 1950–2050*"],
            ["**Rise in technology** (Slide 10)", "World population / connected devices / devices per person: **2003** 6.3 bn / 500 m / 0.08; **2010** 6.8 bn / 12.5 bn / 1.84; **2015** 7.2 bn / 25 bn / 3.47; **2020** 7.6 bn / 50 bn / 6.58. Since about 2008 there are **more connected devices than people**.", "—"],
            ["**Resources scarcity** (Slide 11)", "With a population of **8.3 billion by 2030**, we will need **50% more energy**, **40% more water** and **35% more food**.", "National Intelligence Council, *Global Trends 2030: Alternative Worlds*"],
          ],
          source: "Slides 7–11",
        },
        {
          type: "callout",
          kind: "added",
          md: "\"Since about 2008\" is read from the chart on Slide 10, where the *more connected devices than people* marker sits between 2003 and 2010. The slide gives no exact year.",
        },
        { type: "heading", text: "The industrial revolutions" },
        { type: "definition", term: "industry-5", source: "Slide 12" },
        {"type": "diagram", "kind": "continuum", "title": "From Industry 1.0 to 5.0", "levels": [{"title": "1.0", "text": "mechanization of production", "mark": "1"}, {"title": "2.0", "text": "mass production", "mark": "2"}, {"title": "3.0", "text": "computers & digitalization", "mark": "3"}, {"title": "4.0", "text": "automation + efficiency", "mark": "4"}, {"title": "5.0", "text": "human–machine collaboration", "mark": "5"}], "source": "Slide 12"},
        {
          type: "table",
          caption: "Industry 1.0 to 5.0 (Slide 12)",
          headers: ["Stage", "Meaning"],
          rows: [
            ["Industry 1.0", "Mechanization of production"],
            ["Industry 2.0", "Mass production"],
            ["Industry 3.0", "Computers & digitalization"],
            ["Industry 4.0", "Automation + Efficiency (interconnected physical and digital systems)"],
            ["Industry 5.0", "Human–Machine Collaboration (flexible and personalized experiences)"],
          ],
          source: "Slide 12",
        },
        { type: "heading", text: "Generations in the marketplace" },
        {
          type: "text",
          md: "Slide 13 lists the generations that make up today's and tomorrow's customers and employees: **Gen X – Gen Y – Gen Z – Gen α – Gen β**.\n\nSlide 14 illustrates how fast their tools change: a rotary telephone, an early mobile phone, the first smartphone, today's range of smartphones, then smart glasses and next-generation devices.",
          source: "Slides 13–14",
        },
        {
          type: "callout",
          kind: "key",
          title: "Why this matters for projects",
          md: "These shifts change **who the stakeholders are** and **what they expect**. A project designed only for today's customers, today's technology and today's resources can be out of date by the time it is delivered.",
          source: "Slides 6–14",
        },
        {
          type: "callout",
          kind: "added",
          md: "The \"Why this matters\" box summarises the message of Slides 6–14 in the context of the module; the slides themselves show the data without a written conclusion.",
        },
      ],
      takeaways: [
        "Five global shifts: economic power (E7 overtaking G7), demographics (ageing), urbanization (50% → 72%), technology (connected devices), resource scarcity (more energy, water, food).",
        "Industry 1.0 mechanization → 2.0 mass production → 3.0 computers → 4.0 automation → 5.0 human–machine collaboration.",
        "Generations X, Y, Z, α and β change who the stakeholders are and what they expect.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "According to Slide 7, what happens to the GDP of the E7 compared with the G7 by 2050?",
          options: ["The E7 stays at about half of the G7", "The E7 overtakes the G7 (\\$138.2 trillion vs \\$69.3 trillion)", "Both stay equal", "The G7 doubles while the E7 stays flat"],
          answer: 1,
          explanation: "In 2015 the G7 was larger (\\$34.1 vs \\$18.8 trillion); by 2050 the E7 is projected at \\$138.2 trillion vs \\$69.3 trillion for the G7.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which industrial stage is defined as *Human–Machine Collaboration*?",
          options: ["Industry 2.0", "Industry 3.0", "Industry 4.0", "Industry 5.0"],
          answer: 3,
          explanation: "Slide 12: Industry 5.0 = Human–Machine Collaboration (flexible and personalized experiences).",
          difficulty: 1,
        },
        {
          type: "multi",
          prompt: "By 2030, with 8.3 billion people, how much more of each resource does Slide 11 say we will need?",
          options: ["50% more energy", "40% more water", "35% more food", "72% more land"],
          answer: [0, 1, 2],
          explanation: "Slide 11. 72% is the urban share of population in 2050 (Slide 9).",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "identify",
      title: "Stakeholders: who they are and how to analyse them",
      source: "Notes p.1–2; Slide 16; Kahoot 2 Q3–Q5",
      summary: "The definition of a stakeholder, the objective of stakeholder management, expectations versus requirements, the stakeholder analysis steps and the stakeholder register.",
      builds_on: ["strategic-thinking"],
      blocks: [
        {
          type: "intuition",
          md: "Anyone who can make your project succeed or fail — or whose life your project changes — is a stakeholder. Missing one is like leaving a room out of the architect's brief: you find out late, and the change is expensive.",
        },
        { type: "definition", term: "stakeholder", source: "Notes p.1; Kahoot 2 Q3" },
        {
          type: "list",
          items: [
            "Stakeholders include people **actively involved** in the project, and people whose **interests may be positively or negatively affected** by its execution. They may also **exert influence** over the project and its deliverables.",
            "The project team identifies **internal and external, positive and negative** stakeholders, to properly determine project requirements and satisfy the expectations of all parties.",
            "The PM must **manage the influences** of these stakeholders to ensure a successful outcome.",
          ],
          source: "Notes p.1",
        },
        {
          type: "definition",
          term: "stakeholder-management",
          source: "Notes p.1, p.4",
        },
        {
          type: "callout",
          kind: "exam",
          md: "The **main objective** of stakeholder management is **stakeholder satisfaction** — not just communication or coordination.",
          source: "Notes p.1",
        },
        { type: "heading", text: "Initiating and planning stakeholder management" },
        {
          type: "list",
          items: [
            "A key PM responsibility is managing stakeholder **expectations**. This is difficult because stakeholders often have **different or conflicting objectives**.",
            "The PM must **balance these interests** and make sure the team interacts with stakeholders in a **professional and cooperative** manner.",
          ],
          source: "Notes p.1",
        },
        { type: "definition", term: "expectation", source: "Notes p.1" },
        {
          type: "table",
          caption: "Expectation vs requirement",
          headers: ["", "Expectation", "Requirement"],
          rows: [
            ["What it is", "A stakeholder's **belief about, or mental picture of, the future**", "A **documented need**"],
            ["Written down?", "Often not — it lives in the stakeholder's head", "Yes"],
          ],
          source: "Notes p.1",
        },
        { type: "heading", text: "Stakeholder analysis" },
        { type: "definition", term: "stakeholder-analysis", source: "Notes p.1–2" },
        {"type": "diagram", "kind": "flow", "title": "Stakeholder analysis, step by step", "steps": [{"title": "Identify ALL project stakeholders"}, {"title": "Determine their requirements"}, {"title": "Determine their expectations"}, {"title": "Determine their interest"}, {"title": "Determine their level of influence"}, {"title": "Determine their level of authority (power)"}, {"title": "Plan to engage stakeholders"}, {"title": "Plan how you will communicate with them", "text": "→ output: the **stakeholder register**"}], "source": "Notes p.1–2"},
        {
          type: "steps",
          title: "Stakeholder analysis steps",
          items: [
            "Identify **all** project stakeholders",
            "Determine their **requirements**",
            "Determine their **expectations**",
            "Determine their **interest**",
            "Determine their level of **influence**",
            "Determine their level of **authority (power)**",
            "Plan to **engage** stakeholders",
            "Plan how you will **communicate** with them",
          ],
          source: "Notes p.1–2",
        },
        {
          type: "callout",
          kind: "key",
          md: "The main output of stakeholder analysis (the *Identify Stakeholders* process) is the **[[stakeholder-register|stakeholder register]]**.",
          source: "Notes p.2",
        },
        {
          type: "callout",
          kind: "note",
          title: "When are stakeholders identified?",
          md: "Identification **starts in Initiating** (Notes p.4), as early as possible — \"the earlier stakeholders are identified, the better for the project\" (Notes p.6). But it **does not stop there**: stakeholders can be identified in **Initiating, Planning, Executing and Monitoring & Controlling** (Kahoot 2 Q4), because new stakeholders appear as the project progresses.",
          source: "Notes p.4, p.6; Kahoot 2 Q4",
        },
        { type: "heading", text: "The stakeholder register" },
        { type: "definition", term: "stakeholder-register", source: "Notes p.2" },
        {"type": "diagram", "kind": "tree", "title": "What the stakeholder register holds", "root": {"title": "Stakeholder register", "text": "main output of Identify Stakeholders"}, "children": [{"title": "Identification", "items": ["name", "organizational position", "location and contact details", "role on the project"], "tone": "cyan"}, {"title": "Assessment", "items": ["major requirements", "expectations", "potential to influence outcomes", "phase of most influence"], "tone": "violet"}, {"title": "Classification", "items": ["internal / external", "impact, influence, power, interest", "or another model chosen by the PM"], "tone": "pink"}], "source": "Notes p.2"},
        {
          type: "table",
          caption: "What the stakeholder register contains (but is not limited to)",
          headers: ["Part", "Contents"],
          rows: [
            ["**Identification information**", "Name, organizational position, location, contact details, role on the project"],
            ["**Assessment information**", "Major requirements, expectations, potential for influencing project outcomes, and the phase of the life cycle where the stakeholder has the most influence or impact"],
            ["**Stakeholder classification**", "Internal/external, impact/influence/power/interest, or any other classification model chosen by the PM"],
          ],
          source: "Notes p.2",
        },
        {
          type: "table",
          caption: "Example register layout — one row per stakeholder",
          headers: ["ID", "Name", "Contact information", "Major requirements", "Main expectations", "Role", "Influence", "Power", "Interest"],
          rows: [
            ["1", "Stakeholder 1", "…", "…", "…", "…", "…", "…", "…"],
            ["2", "Stakeholder 2", "…", "…", "…", "…", "…", "…", "…"],
            ["n", "Stakeholder n", "…", "…", "…", "…", "…", "…", "…"],
          ],
          source: "Notes p.2",
        },
        {
          type: "callout",
          kind: "exam",
          md: "Information in the stakeholder matrix is **shared with others at the discretion of the project manager** — it is not public to everyone, nor locked to the PM alone (Kahoot 2 Q5).",
          source: "Kahoot 2 Q5",
        },
        {
          type: "callout",
          kind: "added",
          md: "Why at the PM's discretion: the register records sensitive judgements (for example, that a senior manager is resistant or has high power), which could damage relationships if shared widely.",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "Stakeholders are only the people working on the project.", right: "They also include anyone **affected** by it, positively or negatively, inside or outside the organisation (Notes p.1)." },
            { wrong: "The goal of stakeholder management is good communication.", right: "Communication is a means. The **main objective is stakeholder satisfaction** (Notes p.1)." },
            { wrong: "A stakeholder's expectations are the same as their requirements.", right: "An expectation is a **belief or mental picture** of the future; a requirement is a **documented need** (Notes p.1)." },
          ],
          source: "Notes p.1",
        },
      ],
      takeaways: [
        "Stakeholder = anyone who can affect or be affected (positively or negatively) by the project — internal or external.",
        "Main objective of stakeholder management = stakeholder satisfaction.",
        "Expectation = belief or mental picture of the future; requirement = documented need.",
        "Analysis: identify all → requirements → expectations → interest → influence → power → plan engagement → plan communication. Output: the stakeholder register.",
        "The register holds identification, assessment and classification information, shared at the PM's discretion.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "A stakeholder's belief about, or mental picture of, the future is called a:",
          options: ["Requirement", "Expectation", "Assumption", "Constraint"],
          answer: 1,
          explanation: "Notes p.1 exam point. A requirement is a documented need.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "What is the main output of stakeholder analysis?",
          options: ["The communications management plan", "The stakeholder register", "The project charter", "The power/interest grid"],
          answer: 1,
          explanation: "Notes p.2. The grid is one classification tool whose result is recorded in the register.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which part of the stakeholder register records \"the phase of the life cycle where the stakeholder has the most influence\"?",
          options: ["Identification information", "Assessment information", "Stakeholder classification", "Contact information"],
          answer: 1,
          explanation: "Notes p.2: assessment information = major requirements, expectations, potential for influencing outcomes, and the phase of most influence or impact.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "In the stakeholder analysis steps, what comes immediately after \"Determine their level of influence\"?",
          options: ["Determine their interest", "Determine their level of authority (power)", "Plan to engage stakeholders", "Determine their expectations"],
          answer: 1,
          explanation: "Order: … interest → influence → authority (power) → plan to engage → plan how to communicate.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "classify",
      title: "Stakeholder classification models",
      source: "Notes p.2–4; Slide 18; Kahoot 2 Q6",
      summary: "Four ways to map stakeholders: the power/interest grid, the power/influence grid, the salience model and the stakeholder cube.",
      builds_on: ["identify"],
      blocks: [
        {
          type: "intuition",
          md: "You can't give every stakeholder the same amount of attention. Classification models sort stakeholders so you know **who to manage closely, who to keep happy, who to keep informed, and who simply to watch**.",
        },
        { type: "heading", text: "Power/interest grid" },
        { type: "definition", term: "power-interest-grid", source: "Notes p.2; Slide 18" },
        {"type": "diagram", "kind": "matrix", "title": "Power/interest grid", "y": {"label": "Power", "ticks": ["High", "Low"]}, "x": {"label": "Interest", "ticks": ["Low", "High"]}, "cells": [[{"title": "Keep satisfied", "text": "high power, low interest", "tone": "yellow"}, {"title": "Manage closely", "text": "key players", "tone": "red"}], [{"title": "Monitor", "text": "minimal effort", "tone": "green"}, {"title": "Keep informed", "text": "low power, high interest", "tone": "blue"}]], "source": "Notes p.2; Slide 18"},
        {
          type: "table",
          caption: "Power/interest grid",
          headers: ["", "Low interest", "High interest"],
          rows: [
            ["**High power**", "**Keep satisfied**", "**Manage closely**"],
            ["**Low power**", "**Monitor**", "**Keep informed**"],
          ],
          source: "Notes p.2; Slide 18",
        },
        {
          type: "callout",
          kind: "tip",
          title: "Memory aid",
          md: "High power + high interest = **key players → manage closely**. Low power + low interest → **monitor** with minimal effort.",
          source: "Notes p.2",
        },
        { type: "heading", text: "Power/influence grid" },
        { type: "definition", term: "power-influence-grid", source: "Notes p.3" },
        {"type": "diagram", "kind": "matrix", "title": "Power/influence grid", "y": {"label": "Power (authority)", "ticks": ["High", "Low"]}, "x": {"label": "Influence (ability to affect the project)", "ticks": ["Low", "High"]}, "cells": [[{"title": "Keep satisfied", "tone": "yellow"}, {"title": "Manage closely", "tone": "red"}], [{"title": "Monitor", "tone": "green"}, {"title": "Keep informed", "tone": "blue"}]], "caption": "Same 2 × 2 logic as the power/interest grid, with influence replacing interest.", "source": "Notes p.3"},
        { type: "definition", term: "level-of-influence", source: "Notes p.3; Kahoot 2 Q6" },
        { type: "heading", text: "Salience model" },
        { type: "definition", term: "salience-model", source: "Notes p.3" },
        {
          type: "list",
          title: "The three attributes",
          items: ["**Power** — ability to impose their will", "**Urgency** — need for immediate attention", "**Legitimacy** — their involvement is appropriate"],
          source: "Notes p.3",
        },
        {
          type: "figure",
          svg: PM2_SVG_SALIENCE,
          alt: "Venn diagram of three overlapping circles: Power, Legitimacy and Urgency. Power only is Dormant, Legitimacy only is Discretionary, Urgency only is Demanding. Power and Legitimacy is Dominant, Power and Urgency is Dangerous, Legitimacy and Urgency is Dependent. All three is Core (Definitive). Outside all circles is a Non-stakeholder.",
          caption: "Salience model: classes of stakeholder by power, legitimacy and urgency.",
          source: "Notes p.3 (redrawn)",
        },
        {
          type: "table",
          caption: "Salience classes",
          headers: ["Class", "Attributes", "Meaning"],
          rows: [
            ["Dormant", "Power only", "Has power but no legitimate claim or urgency; could become important"],
            ["Discretionary", "Legitimacy only", "Legitimate but no power or urgency"],
            ["Demanding", "Urgency only", "Urgent claims but no power or legitimacy"],
            ["Dominant", "Power + Legitimacy", "Formal influence and a legitimate role"],
            ["Dangerous", "Power + Urgency", "Can be coercive; no legitimate claim"],
            ["Dependent", "Legitimacy + Urgency", "Depend on others with power to have their claims met"],
            ["**Core (Definitive)**", "Power + Legitimacy + Urgency", "**Highest priority — manage closely**"],
            ["Non-stakeholder", "None", "Outside all three circles"],
          ],
          source: "Notes p.3",
        },
        { type: "heading", text: "Stakeholder cube" },
        { type: "definition", term: "stakeholder-cube", source: "Notes p.4" },
        {"type": "diagram", "kind": "matrix", "title": "Stakeholder cube: 8 types", "y": {"label": "Attitude · power", "ticks": ["Backer · influential", "Backer · insignificant", "Blocker · influential", "Blocker · insignificant"]}, "x": {"label": "Interest", "ticks": ["Active (high)", "Passive (low)"]}, "cells": [[{"title": "Influential active backer", "tone": "green"}, {"title": "Influential passive backer", "tone": "green"}], [{"title": "Insignificant active backer", "tone": "cyan"}, {"title": "Insignificant passive backer", "tone": "cyan"}], [{"title": "Influential active blocker", "tone": "red"}, {"title": "Influential passive blocker", "tone": "red"}], [{"title": "Insignificant active blocker", "tone": "orange"}, {"title": "Insignificant passive blocker", "tone": "orange"}]], "source": "Notes p.4"},
        {
          type: "table",
          caption: "The 8 stakeholder types of the 2 × 2 × 2 cube",
          headers: ["Attitude / Power", "Active (high interest)", "Passive (low interest)"],
          rows: [
            ["Backer + Influential", "Influential Active Backer", "Influential Passive Backer"],
            ["Backer + Insignificant", "Insignificant Active Backer", "Insignificant Passive Backer"],
            ["Blocker + Influential", "Influential Active Blocker", "Influential Passive Blocker"],
            ["Blocker + Insignificant", "Insignificant Active Blocker", "Insignificant Passive Blocker"],
          ],
          source: "Notes p.4",
        },
        {
          type: "table",
          caption: "Comparing the four models",
          headers: ["Model", "Dimensions", "Result"],
          rows: [
            ["Power/interest grid", "Power × interest", "4 strategies: manage closely, keep satisfied, keep informed, monitor"],
            ["Power/influence grid", "Power × influence", "Same 2 × 2 logic, influence instead of interest"],
            ["Salience model", "Power, urgency, legitimacy", "7 classes (+ non-stakeholder)"],
            ["Stakeholder cube", "Power, interest, attitude", "8 types"],
          ],
          source: "Notes p.2–4",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "A stakeholder with high power but low interest can be ignored.", right: "They must be **kept satisfied** — if their interest rises, their power can stop the project (Notes p.2)." },
            { wrong: "A dormant stakeholder is unimportant.", right: "Dormant stakeholders **have power** and *could become important* if they gain urgency or legitimacy (Notes p.3)." },
          ],
          source: "Notes p.2–3",
        },
      ],
      takeaways: [
        "Power/interest: manage closely (high/high), keep satisfied (high power), keep informed (high interest), monitor (low/low).",
        "Level of influence = the degree to which a stakeholder can positively or negatively affect the project.",
        "Salience: power, urgency, legitimacy — all three = core (definitive), the highest priority.",
        "Stakeholder cube: power × interest × attitude (backer/blocker) = 8 types.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "A regulator has high power over the project but little interest in it. In the power/interest grid you should:",
          options: ["Manage closely", "Keep satisfied", "Keep informed", "Monitor"],
          answer: 1,
          explanation: "High power, low interest → keep satisfied.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In the salience model, a stakeholder with **power and urgency but no legitimacy** is:",
          options: ["Dominant", "Dependent", "Dangerous", "Definitive"],
          answer: 2,
          explanation: "Power + urgency = dangerous: can be coercive, with no legitimate claim.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which dimension does the stakeholder cube add that the 2 × 2 grids do not have?",
          options: ["Urgency", "Legitimacy", "Attitude (backer vs blocker)", "Location"],
          answer: 2,
          explanation: "The cube combines power, interest and attitude.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which salience class has the highest priority?",
          options: ["Dominant", "Core (definitive)", "Dormant", "Demanding"],
          answer: 1,
          explanation: "Core (definitive) = power + legitimacy + urgency → manage closely.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "engage",
      title: "Managing and monitoring stakeholder engagement",
      source: "Notes p.4–6; Kahoot 2 Q10",
      summary: "Stakeholder activities in each process group, the engagement assessment matrix, the five engagement levels and the keys to success.",
      builds_on: ["classify"],
      blocks: [
        {
          type: "steps",
          title: "Stakeholder management and monitoring generally follows these steps",
          items: ["Manage stakeholder expectations and influence", "Communicate with stakeholders", "Monitor communications and stakeholder engagement"],
          source: "Notes p.4",
        },
        {
          type: "table",
          caption: "Stakeholder activities by process group (standard PMP mapping)",
          headers: ["Process group", "Stakeholder-related activities"],
          rows: [
            ["P1. Initiating", "Identify stakeholders; determine stakeholders' expectations, interest, influence and impact; develop the stakeholder register"],
            ["P2. Planning", "Plan to engage stakeholders (**[[stakeholder-engagement-plan|stakeholder engagement plan]]**); plan how you will communicate with stakeholders (**communications management plan**)"],
            ["P3. Executing", "Facilitate stakeholder engagement and manage expectations; facilitate conflict resolution; inform stakeholders of change request results"],
            ["P4. Monitoring & Controlling", "Monitor stakeholder engagement (and communications); adjust strategies as needed"],
            ["P5. Closing", "No dedicated stakeholder process (but confirm acceptance, gather feedback, update lessons learned)"],
          ],
          source: "Notes p.4–5",
        },
        {"type": "diagram", "kind": "cycle", "title": "Managing and monitoring stakeholders", "center": "Continuously, throughout the project", "steps": [{"title": "Manage expectations and influence", "tone": "violet"}, {"title": "Communicate with stakeholders", "tone": "cyan"}, {"title": "Monitor communications and engagement", "tone": "green"}], "source": "Notes p.4"},
        { type: "heading", text: "Monitoring stakeholder engagement" },
        { type: "definition", term: "engagement-matrix", source: "Notes p.5" },
        { type: "definition", term: "engagement-levels", source: "Notes p.5" },
        {"type": "diagram", "kind": "continuum", "title": "The engagement continuum", "from": "Least engaged", "to": "Most engaged", "levels": [{"title": "Unaware", "text": "of the project and its impacts", "tone": "red"}, {"title": "Resistant", "text": "aware, resists the changes", "tone": "orange"}, {"title": "Neutral", "text": "neither supportive nor unsupportive", "tone": "yellow"}, {"title": "Supportive", "text": "supports the work and outcomes", "tone": "green"}, {"title": "Leading", "text": "actively engaged in success", "tone": "cyan"}], "source": "Notes p.5"},
        {
          type: "table",
          caption: "The 5 engagement levels (a continuum)",
          headers: ["Level", "Description"],
          rows: [
            ["**Unaware**", "Unaware of the project and its potential impacts"],
            ["**Resistant**", "Aware of the project and impacts but resistant to resulting changes; unsupportive of the work or outcomes"],
            ["**Neutral**", "Aware of the project but neither supportive nor unsupportive"],
            ["**Supportive**", "Aware of the project and impacts and supportive of the work and its outcomes"],
            ["**Leading**", "Aware of the project and impacts and actively engaged in ensuring it is a success"],
          ],
          source: "Notes p.5",
        },
        {
          type: "table",
          caption: "Example engagement assessment matrix (C = current, D = desired)",
          headers: ["Stakeholder", "Unaware", "Resistant", "Neutral", "Supportive", "Leading"],
          rows: [
            ["Stakeholder 1", "C", "", "", "D", ""],
            ["Stakeholder 2", "", "", "C", "D", ""],
            ["Stakeholder 3", "", "", "", "C D", ""],
          ],
          source: "Notes p.5",
        },
        {
          type: "example",
          title: "Reading the matrix",
          problem: "Using the matrix above, decide what action each stakeholder needs.",
          steps: [
            { do: "**Stakeholder 1:** from Unaware (C) to Supportive (D).", why: "A big gap — needs communication and engagement actions." },
            { do: "**Stakeholder 2:** from Neutral (C) to Supportive (D).", why: "A smaller gap — needs some engagement to win support." },
            { do: "**Stakeholder 3:** already Supportive, which is where we want them.", why: "Current = desired, so **maintain** the relationship." },
          ],
          answer: "Prioritise Stakeholder 1, work on Stakeholder 2, maintain Stakeholder 3.",
          source: "Notes p.5–6",
        },
        {
          type: "table",
          caption: "Concept check (activity in the notes)",
          headers: ["Category", "Items"],
          rows: [
            ["Stakeholder register items", "Major requirements, main expectations, roles/responsibilities"],
            ["Techniques for stakeholder mapping", "Power/interest grid, salience model (also power/influence grid, stakeholder cube)"],
            ["Levels of stakeholder engagement", "Unaware, resistant, neutral, supportive, leading"],
          ],
          source: "Notes p.6",
        },
        { type: "heading", text: "Keys to success" },
        {
          type: "list",
          items: [
            "A key to success as a PM is **how you handle stakeholder relationships**.",
            "Proper stakeholder management = **keep them informed, solicit their input, and work to satisfy their needs and expectations**. Without this, the project may fail.",
            "Analyse and manage stakeholders' needs and level of influence **throughout** the project.",
            "If all needs and requirements are considered **before plans are finalized and work begins**, fewer (costly) changes are needed later.",
            "**The earlier stakeholders are identified, the better** for the project.",
          ],
          source: "Notes p.6",
        },
        {
          type: "callout",
          kind: "exam",
          md: "Kahoot 2 Q10 (\"A key to succeed as project leader is…\") marks **all four** options as correct: to be faster, better and stronger; how you involve stakeholders on your projects; how you handle stakeholder relationships; to satisfy the stakeholders' needs and expectations.",
          source: "Kahoot 2 Q10",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "Every stakeholder should be moved to *Leading*.", right: "The target is the **desired** level for successful delivery, which for many stakeholders is *Supportive* or even *Neutral*." },
            { wrong: "Once identified, stakeholders don't need further attention.", right: "Needs and influence must be analysed and managed **throughout** the project (Notes p.6)." },
          ],
          source: "Notes p.5–6",
        },
      ],
      takeaways: [
        "Manage expectations and influence → communicate → monitor communications and engagement, continuously.",
        "Engagement levels: Unaware → Resistant → Neutral → Supportive → Leading.",
        "The engagement assessment matrix compares current (C) with desired (D) levels; gaps show where action is needed.",
        "Identify stakeholders early and consider all needs before plans are finalised, to avoid costly changes.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "A stakeholder knows about the project and its impacts, and is resistant to the resulting changes. Their engagement level is:",
          options: ["Unaware", "Resistant", "Neutral", "Supportive"],
          answer: 1,
          explanation: "Notes p.5: Resistant = aware of the project and impacts but resistant to the resulting changes.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In which process group are the stakeholder engagement plan and the communications management plan created?",
          options: ["Initiating", "Planning", "Executing", "Monitoring & Controlling"],
          answer: 1,
          explanation: "Notes p.4: P2 Planning.",
          difficulty: 1,
        },
        {
          type: "truefalse",
          prompt: "Closing has a dedicated stakeholder management process.",
          answer: false,
          explanation: "Notes p.5: no dedicated stakeholder process in Closing — but you still confirm acceptance, gather feedback and update lessons learned.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "In the engagement assessment matrix, a stakeholder marked \"C D\" in the same column needs:",
          options: ["Urgent engagement actions", "To be removed from the register", "To be maintained at their current level", "To be escalated to the sponsor"],
          answer: 2,
          explanation: "Current = desired, so maintain (Stakeholder 3 in the example).",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "kano",
      title: "Tailoring solutions: the Kano model and strategic agility",
      source: "Slides 17, 19–22; Kahoot 2 Q7–Q9",
      summary: "How the Kano model links stakeholder satisfaction to product features, and how WhatsApp and an oil & gas company adapted their solutions over time.",
      builds_on: ["engage"],
      blocks: [
        {
          type: "intuition",
          md: "Not every feature makes people happier. Some features people only notice when they're **missing**; some make people happier **the more you add**; a few **delight** people because they didn't expect them; and some nobody cares about. Knowing which is which tells you where to spend the project's time and money.",
        },
        { type: "definition", term: "kano-model", source: "Slide 19; Kahoot 2 Q7" },
        {
          type: "figure",
          svg: PM2_SVG_KANO,
          alt: "Kano chart. Horizontal axis from need not fulfilled to need well fulfilled; vertical axis from dissatisfied to satisfied. Delighters curve upward steeply and stay above the axis. Satisfiers are a straight diagonal line. Dissatisfiers (must-be) rise from very dissatisfied but level off at the axis. Indifferent features lie flat along the axis.",
          caption: "Kano model: stakeholder satisfaction against how well a need is fulfilled.",
          source: "Slide 19 (redrawn)",
        },
        {
          type: "table",
          caption: "The four Kano categories (Slide 19)",
          headers: ["Category", "Description on the slide", "What to do"],
          rows: [
            ["**[[delighters|Delighters (attractive)]]**", "Yield high levels of customer support. These features deliver unexpected, novel, or new high-value benefits to the customer.", "Add a few to stand out"],
            ["**[[satisfiers|Satisfiers (desired)]]**", "These features bring value to the customer. In this category, the more the better.", "Maximise"],
            ["**[[dissatisfiers|Dissatisfiers (must-be)]]**", "Features that will cause a user to dislike the product/service if they are not there, but will not necessarily raise satisfaction if they are present.", "Always include"],
            ["**[[indifferent|Indifferent]]**", "These features have no impact on customers in one way or another. Since customers are indifferent to them, we should try to eliminate, minimize, or defer them.", "Eliminate, minimize or defer"],
          ],
          source: "Slide 19; Kahoot 2 Q8–Q9",
        },
        {
          type: "callout",
          kind: "added",
          md: "The \"What to do\" column condenses each description on the slide into an action; only the Indifferent action (eliminate, minimize or defer) is stated word for word on the slide.",
        },
        {
          type: "example",
          title: "Classifying hotel features with Kano",
          problem: "A hotel project team lists: clean sheets; fast Wi-Fi; a free welcome gift from a local artisan; a fax machine in every room. Classify each feature.",
          steps: [
            { do: "**Clean sheets → must-be (dissatisfier).**", why: "Guests are angry if they're missing, but nobody is delighted by them." },
            { do: "**Fast Wi-Fi → satisfier (desired).**", why: "The faster it is, the happier guests are — \"the more the better\"." },
            { do: "**Welcome gift → delighter (attractive).**", why: "Unexpected and novel, it creates high satisfaction." },
            { do: "**Fax machine → indifferent.**", why: "It has no impact on most guests' satisfaction — eliminate, minimise or defer." },
          ],
          answer: "Must-be: clean sheets · Satisfier: Wi-Fi · Delighter: welcome gift · Indifferent: fax machine.",
        },
        {
          type: "callout",
          kind: "added",
          md: "The hotel example is not in the course materials; it was added to illustrate the four categories.",
        },
        {"type": "figure", "src": "img/slide-19.jpg", "alt": "Slide 19: Kano chart with the four categories", "caption": "Original slide 19: tailoring solutions with the Kano model.", "source": "Slide 19 (original)"},
        { type: "heading", text: "Strategic agility: WhatsApp" },
        { type: "definition", term: "strategic-agility", source: "Slides 20–22" },
        {"type": "diagram", "kind": "continuum", "title": "WhatsApp: iterating towards the vision", "levels": [{"title": "2009", "text": "free messenger · 250k users"}, {"title": "2011", "text": "Android, sharing pictures · 1M"}, {"title": "2013", "text": "interoperability · 400M"}, {"title": "2014", "text": "blue check, privacy · 800M"}, {"title": "2020", "text": "web app, calls, payment · 3,000M"}, {"title": "2022", "text": "GDPR policy, ride booking · 4,000M"}], "source": "Slide 20"},
        {"type": "figure", "src": "img/slide-20.jpg", "alt": "Slide 20: WhatsApp timeline with features and users", "caption": "Original slide 20: WhatsApp's evolution, iteration by iteration.", "source": "Slide 20 (original)"},
        {
          type: "table",
          caption: "WhatsApp's evolution (Slide 20): the solution is adapted after each iteration, moving closer to the vision",
          headers: ["Year", "Features added", "Users"],
          rows: [
            ["2009", "Free messenger; \"Connected?\"; double check", "250k"],
            ["2011", "Android; sharing pictures", "1M"],
            ["2013", "Interoperability with social networks", "400M"],
            ["2014", "Blue check; storage coding; privacy settings", "800M"],
            ["2020", "WebApp; free IP calls; multiple video call; recording voice; payment", "3,000M"],
            ["2022", "GDPR privacy policy; Uber adds ride booking; …", "4,000M"],
          ],
          source: "Slide 20",
        },
        {
          type: "text",
          md: "Above the timeline, Slide 20 shows the **vision** and the **actual** product after each iteration (start, after iteration 1, 2, 3 …): the actual product grows towards the vision step by step. The result is a **tangible solution** — product, service and customer experience (CX).",
          source: "Slide 20",
        },
        { type: "heading", text: "Strategic agility: from oil & gas to multi-energy" },
        {
          type: "list",
          items: [
            "Slide 21 shows oil & gas companies (Shell, TotalEnergies, Repsol) transforming into **multi-energy companies**.",
            "**Mission (example on the slide):** \"Our mission is to be an energy company that's committed to a sustainable world to improve your user experience.\"",
            "**A forward-looking vision:** \"Being a global, energy company based on innovation, efficiency, and respect, sustainably creates value to promote progress in society.\"",
          ],
          source: "Slide 21",
        },
        {
          type: "list",
          title: "How would you transform an O&G company into a multi-energy company? (Slide 22)",
          items: ["Electricity — green energy", "Energy sources", "Mobility", "New user experience (illustrated with energy and mobility apps)", "Sustainability trends (e.g. zero emissions)"],
          source: "Slide 22",
        },
        {
          type: "callout",
          kind: "note",
          title: "Planning approach",
          md: "Slide 17 repeats the *agile vs. non-agile planning* chart from Module 1, here labelled \"Agile Rolling Wave Planning **(agile approach)**\". Strategic agility (as in the WhatsApp example) relies on this iterative, rolling-wave way of planning. See [Module 1, Lesson 4](module.html?m=pmip-01-integration#L-adaptive-planning).",
          source: "Slide 17",
        },
      ],
      takeaways: [
        "The Kano model is an approach for product/service development and customer satisfaction.",
        "Kano levels: must-be (dissatisfiers), desired (satisfiers), attractive (delighters) and indifferent.",
        "Delighters deliver unexpected, novel, high-value benefits; indifferent features should be eliminated, minimized or deferred.",
        "Strategic agility: adapt the solution iteration by iteration towards the vision (WhatsApp; O&G → multi-energy).",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Which Kano category \"will cause a user to dislike the product if it is not there, but will not necessarily raise satisfaction if present\"?",
          options: ["Delighters", "Satisfiers", "Dissatisfiers (must-be)", "Indifferent"],
          answer: 2,
          explanation: "Slide 19: Dissatisfiers (must-be).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "What should the team do with **indifferent** features?",
          options: ["Maximise them", "Include them as must-be", "Eliminate, minimize or defer them", "Market them as delighters"],
          answer: 2,
          explanation: "Slide 19: since customers are indifferent to them, try to eliminate, minimize, or defer them.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "For which category is \"the more the better\"?",
          options: ["Delighters (attractive)", "Satisfiers (desired)", "Dissatisfiers (must-be)", "Indifferent"],
          answer: 1,
          explanation: "Slide 19: satisfiers bring value; the more the better.",
          difficulty: 1,
        },
      ],
    },
  ],

  /* ---------------------------------------------------------------- terms */
  terms: [
    { id: "strategy", term: "Strategy", aliases: ["strategía"], lesson: "strategic-thinking", short: "From Greek *stratós* (army) + *agein* (to lead): **\"the art of leading teams\"**.", definition: "**Strategy** comes from the Greek *strategía* = *stratós* (army) + *agein* (to lead), \"the art of leading teams\". Strategy generation drives both the tangible side (goals, priorities, tactics, portfolios, projects, actions → commit and execute) and the intangible side (culture, values, beliefs → vision and purpose).", source: "Slides 2–3", related: ["strategic-coherence", "three-horizons"] },
    { id: "strategic-coherence", term: "Strategic coherence", lesson: "strategic-thinking", short: "All initiatives moving in the **same direction**, towards the long-term purpose. It is the primary reason for linking initiatives to a vision.", definition: "**Strategic coherence** means that each wave of initiatives (projects) moves the organisation from *today* towards the same long-term *purpose*. It is the primary purpose of linking initiatives to a long-term purpose or vision.", source: "Slide 5; Kahoot 2 Q1", related: ["strategy"] },
    { id: "three-horizons", term: "3 Horizons of Strategy", aliases: ["Horizon 1", "Horizon 2", "Horizon 3"], lesson: "strategic-thinking", short: "**H1** sustain existing markets (+1 year); **H2** adjacent growth in emerging markets (+4 years); **H3** exploration into new markets — visionary, transformative, new to the world (+10 years).", definition: "The **3 Horizons of Strategy** classify initiatives by market and technology. Horizon 1 (+1 year): existing markets, mature technology — sustain (improvements, extensions, variants, cost reduction, n+1). Horizon 2 (+4 years): emerging markets, emerging technology — adjacent growth (next-generation products/services for core markets). Horizon 3 (+10 years): new markets, new technology — exploration (new categories that are visionary, transformative and new to the world).", pitfall: "Kahoot 2 Q2's key says Horizon 2 creates entirely new markets; the slide says Horizon 3. See the conflict note in Lesson 1.", source: "Slide 15; Kahoot 2 Q2", related: ["strategy"] },
    { id: "global-shifts", term: "Shifts in the global economy", lesson: "context", short: "Five shifts: **economic power** (E7 overtaking G7), **demographics** (ageing), **urbanization** (50% → 72%), **technology** (more devices than people), **resource scarcity**.", definition: "The five **shifts in the global economy** on the slides: shift in global economic power; demographic shift (share of people aged 60+ from 8% in 1950 to 21% in 2050); accelerating urbanization (50% → 72% by 2050); rise in technology (6.58 connected devices per person by 2020); resources scarcity (by 2030: 50% more energy, 40% more water, 35% more food).", source: "Slides 7–11", related: ["industry-5"] },
    { id: "industry-5", term: "Industry 1.0 – 5.0", lesson: "context", short: "1.0 mechanization · 2.0 mass production · 3.0 computers & digitalization · 4.0 automation + efficiency · 5.0 **human–machine collaboration**.", definition: "**Industry 1.0** = mechanization of production; **2.0** = mass production; **3.0** = computers and digitalization; **4.0** = automation + efficiency (interconnected physical and digital systems); **5.0** = human–machine collaboration (flexible and personalized experiences).", source: "Slide 12", related: ["global-shifts"] },
    { id: "stakeholder", term: "Stakeholder", lesson: "identify", short: "Anyone — individual, group or organisation — who may **affect or be affected by** a decision, activity or outcome of the project, positively or negatively.", definition: "**Stakeholders** are individuals, groups or organizations who may affect or be affected by a decision, activity or outcome of a project. They include people actively involved in the project and those whose interests may be positively or negatively affected by its execution, and they may exert influence over the project and its deliverables. They can be internal or external, positive or negative.", pitfall: "Not only people *involved* — also people *affected*.", source: "Notes p.1; Kahoot 2 Q3", related: ["stakeholder-management", "stakeholder-register"] },
    { id: "stakeholder-management", term: "Stakeholder management", lesson: "identify", short: "Identifying, analysing and engaging stakeholders. Its **main objective is stakeholder satisfaction**.", definition: "**Project stakeholder management** identifies all stakeholders, analyses their requirements, expectations, interest, influence and power, plans how to engage and communicate with them, manages their expectations and monitors their engagement. Its main objective is stakeholder satisfaction.", source: "Notes p.1, p.4", related: ["stakeholder", "expectation", "engagement-matrix"] },
    { id: "expectation", term: "Expectation", lesson: "identify", short: "A stakeholder's **belief about, or mental picture of, the future**. Unlike a requirement, it is often not written down.", definition: "An **expectation** is a stakeholder's belief about, or mental picture of, the future. A **requirement**, by contrast, is a documented need.", source: "Notes p.1", related: ["stakeholder-management"] },
    { id: "stakeholder-analysis", term: "Stakeholder analysis", lesson: "identify", short: "Identify all → requirements → expectations → interest → influence → power → plan engagement → plan communication. Output: the stakeholder register.", definition: "**Stakeholder analysis** follows these steps: identify all project stakeholders; determine their requirements, expectations, interest, level of influence and level of authority (power); plan to engage them; plan how to communicate with them. Its main output is the stakeholder register.", source: "Notes p.1–2", related: ["stakeholder-register"] },
    { id: "stakeholder-register", term: "Stakeholder register", aliases: ["stakeholder matrix"], lesson: "identify", short: "The main output of stakeholder analysis: **identification**, **assessment** and **classification** information for each stakeholder. Shared at the PM's discretion.", definition: "The **stakeholder register** is the main output of stakeholder analysis (Identify Stakeholders). It contains identification information (name, position, location, contact details, role), assessment information (major requirements, expectations, potential to influence outcomes, phase of most influence) and stakeholder classification (internal/external, impact/influence/power/interest, or another model).", pitfall: "Its information is shared with others at the discretion of the PM (Kahoot 2 Q5).", source: "Notes p.2; Kahoot 2 Q5", related: ["stakeholder-analysis", "power-interest-grid"] },
    { id: "power-interest-grid", term: "Power/interest grid", lesson: "classify", short: "2 × 2 grid of **power** (authority) × **interest** (concern): manage closely (high/high), keep satisfied (high power), keep informed (high interest), monitor (low/low).", definition: "The **power/interest grid** groups stakeholders by their level of authority (power) and level of concern (interest) in project outcomes: high power + high interest → manage closely; high power + low interest → keep satisfied; low power + high interest → keep informed; low power + low interest → monitor.", source: "Notes p.2; Slide 18", related: ["power-influence-grid", "salience-model", "stakeholder-cube"] },
    { id: "power-influence-grid", term: "Power/influence grid", lesson: "classify", short: "Same 2 × 2 logic as the power/interest grid, with **influence** (ability to affect the project) instead of interest.", definition: "The **power/influence grid** groups stakeholders by their level of authority (power) and their ability to positively or negatively affect the project (influence).", source: "Notes p.3", related: ["power-interest-grid", "level-of-influence"] },
    { id: "level-of-influence", term: "Level of influence", aliases: ["level of power/influence"], lesson: "classify", short: "The **degree** to which a stakeholder may be able to **positively or negatively affect** the project.", definition: "The **level of influence** (power/influence) is the degree to which a stakeholder may be able to positively or negatively affect a project.", source: "Notes p.3; Kahoot 2 Q6", related: ["power-influence-grid"] },
    { id: "salience-model", term: "Salience model", lesson: "classify", short: "Classes stakeholders by **power, urgency and legitimacy** (3-circle Venn). All three = **core (definitive)**, the highest priority.", definition: "The **salience model** describes classes of stakeholders by three attributes: power (ability to impose their will), urgency (need for immediate attention) and legitimacy (their involvement is appropriate). Classes: dormant (power), discretionary (legitimacy), demanding (urgency), dominant (power + legitimacy), dangerous (power + urgency), dependent (legitimacy + urgency), core/definitive (all three), non-stakeholder (none).", source: "Notes p.3", related: ["power-interest-grid", "stakeholder-cube"] },
    { id: "stakeholder-cube", term: "Stakeholder cube", lesson: "classify", short: "A 2 × 2 × 2 model of **power** (influential/insignificant), **interest** (active/passive) and **attitude** (backer/blocker) → 8 stakeholder types.", definition: "The **stakeholder cube** is a multi-dimensional model combining power (influential vs insignificant), interest (active vs passive) and attitude (backer vs blocker). It depicts the stakeholder community as a multidimensional entity and helps develop communication strategies, giving 8 types (e.g. *influential active blocker*).", source: "Notes p.4", related: ["salience-model", "power-interest-grid"] },
    { id: "engagement-levels", term: "Engagement levels", aliases: ["Unaware", "Resistant", "Neutral", "Supportive", "Leading"], lesson: "engage", short: "The continuum **Unaware → Resistant → Neutral → Supportive → Leading**.", definition: "The five **engagement levels** are: unaware (of the project and its impacts); resistant (aware but resistant to the changes); neutral (aware, neither supportive nor unsupportive); supportive (aware and supportive of the work and outcomes); leading (aware and actively engaged in ensuring success).", source: "Notes p.5", related: ["engagement-matrix"] },
    { id: "engagement-matrix", term: "Stakeholder engagement assessment matrix", lesson: "engage", short: "Compares each stakeholder's **current (C)** engagement level with the **desired (D)** level; gaps show where engagement actions are needed.", definition: "The **stakeholder engagement assessment matrix** is a key tool for monitoring stakeholder engagement. It compares the current engagement level of each stakeholder with the desired level required for successful delivery; gaps show where engagement actions are needed.", example: "Unaware (C) → Supportive (D) = big gap; C and D in the same column = maintain.", source: "Notes p.5", related: ["engagement-levels"] },
    { id: "stakeholder-engagement-plan", term: "Stakeholder engagement plan", lesson: "engage", short: "The Planning output that says **how stakeholders will be engaged**. Created together with the communications management plan.", definition: "The **stakeholder engagement plan** is created in Planning (\"plan to engage stakeholders\"), together with the communications management plan (\"plan how you will communicate with stakeholders\").", source: "Notes p.4", related: ["engagement-matrix"] },
    { id: "kano-model", term: "Kano model", lesson: "kano", short: "An approach for **product/service development and customer satisfaction** that sorts features into **must-be, desired, attractive and indifferent**.", definition: "The **Kano model** is an approach for product/service development and customer satisfaction, used to tailor solutions to stakeholders. Features are classified as delighters (attractive), satisfiers (desired), dissatisfiers (must-be) or indifferent, according to how satisfaction changes as the need is fulfilled.", source: "Slide 19; Kahoot 2 Q7–Q8", related: ["delighters", "satisfiers", "dissatisfiers", "indifferent"] },
    { id: "delighters", term: "Delighters", aliases: ["attractive features"], lesson: "kano", short: "Features that deliver **unexpected, novel, or new high-value benefits** and yield high levels of customer support.", definition: "**Delighters (attractive)** yield high levels of customer support. These features deliver unexpected, novel, or new high-value benefits to the customer.", source: "Slide 19; Kahoot 2 Q9", related: ["kano-model"] },
    { id: "satisfiers", term: "Satisfiers", aliases: ["desired features"], lesson: "kano", short: "Features that bring value to the customer: **the more the better**.", definition: "**Satisfiers (desired)** are features that bring value to the customer. In this category, the more the better.", source: "Slide 19", related: ["kano-model"] },
    { id: "dissatisfiers", term: "Dissatisfiers", aliases: ["must-be features"], lesson: "kano", short: "Features that make users **dislike the product if missing**, but don't necessarily raise satisfaction when present.", definition: "**Dissatisfiers (must-be)** are features that will cause a user to dislike the product/service if they are not there but will not necessarily raise satisfaction if they are present.", source: "Slide 19", related: ["kano-model"] },
    { id: "indifferent", term: "Indifferent features", lesson: "kano", short: "Features with **no impact** on customers either way: **eliminate, minimize or defer** them.", definition: "**Indifferent** features have no impact on customers in one way or another. Since customers are indifferent to them, we should try to eliminate, minimize, or defer them.", source: "Slide 19", related: ["kano-model"] },
    { id: "strategic-agility", term: "Strategic agility", lesson: "kano", short: "Adapting the solution **iteration by iteration** towards the vision, as markets and stakeholders change (e.g. WhatsApp; O&G → multi-energy).", definition: "**Strategic agility** is the ability to keep adapting a product, service and customer experience over successive iterations towards a vision, as shown by WhatsApp's evolution from a free messenger (2009, 250k users) to a platform with payments and ride booking (2022, 4,000M users), and by oil & gas companies becoming multi-energy companies.", source: "Slides 20–22", related: ["kano-model"] },
  ],

  /* ----------------------------------------------------- final assessment */
  quizTitle: "Core questions",
  quiz: [
    { type: "mcq", lesson: "strategic-thinking", difficulty: 1, prompt: "\"The art of leading teams\" is the original meaning of:", options: ["Management", "Strategy", "Leadership", "Governance"], answer: 1, explanation: "Slide 2." },
    { type: "mcq", lesson: "strategic-thinking", difficulty: 2, prompt: "A start-up plans a product category that is visionary, transformative and new to the world, using technology not yet available. On Slide 15's model, which horizon and time frame is this?", options: ["Horizon 1, +1 year", "Horizon 2, +4 years", "Horizon 3, +10 years", "Horizon 2, +10 years"], answer: 2, explanation: "Slide 15: Horizon 3 (+10 years) — new categories that are visionary, transformative and new to the world." },
    { type: "mcq", lesson: "context", difficulty: 2, prompt: "According to Slide 8, what share of the world population is expected to be aged 60 or more in 2050?", options: ["8%", "10%", "21%", "44%"], answer: 2, explanation: "8% (1950), 10% (2000), 21% (2050)." },
    { type: "mcq", lesson: "context", difficulty: 1, prompt: "Industry 4.0 is defined as:", options: ["Mass production", "Automation + efficiency (interconnected physical and digital systems)", "Computers & digitalization", "Human–machine collaboration"], answer: 1, explanation: "Slide 12." },
    { type: "mcq", lesson: "identify", difficulty: 1, prompt: "What is the main objective of stakeholder management?", options: ["Communication", "Coordination", "Stakeholder satisfaction", "Reducing the number of stakeholders"], answer: 2, explanation: "Notes p.1 exam point." },
    { type: "multi", lesson: "identify", difficulty: 2, prompt: "Which of these does the stakeholder register contain?", options: ["Contact details and role on the project", "Major requirements and expectations", "Classification such as power and interest", "The detailed project budget"], answer: [0, 1, 2], explanation: "Identification, assessment and classification information (Notes p.2). The budget is not part of it." },
    { type: "truefalse", lesson: "identify", difficulty: 2, prompt: "Negative stakeholders — those who may be harmed by the project — should also be identified.", answer: true, explanation: "Notes p.1: the team identifies internal and external, positive and negative stakeholders." },
    { type: "mcq", lesson: "classify", difficulty: 1, prompt: "Low power, high interest stakeholders should be:", options: ["Managed closely", "Kept satisfied", "Kept informed", "Monitored"], answer: 2, explanation: "Power/interest grid." },
    { type: "mcq", lesson: "classify", difficulty: 2, prompt: "In the salience model, a community group with legitimate and urgent claims but no power is:", options: ["Dependent", "Demanding", "Discretionary", "Dangerous"], answer: 0, explanation: "Legitimacy + urgency = dependent: they depend on others with power to have their claims met." },
    { type: "mcq", lesson: "classify", difficulty: 2, prompt: "A senior manager has a lot of power, little interest, and opposes the project. In the stakeholder cube, they are an:", options: ["Influential active blocker", "Influential passive blocker", "Insignificant passive blocker", "Influential passive backer"], answer: 1, explanation: "Power: influential; interest: passive (low); attitude: blocker." },
    { type: "mcq", lesson: "engage", difficulty: 1, prompt: "Which is the correct order of the engagement levels?", options: ["Unaware → Neutral → Resistant → Supportive → Leading", "Unaware → Resistant → Neutral → Supportive → Leading", "Resistant → Unaware → Neutral → Leading → Supportive", "Neutral → Unaware → Resistant → Supportive → Leading"], answer: 1, explanation: "Notes p.5." },
    { type: "mcq", lesson: "engage", difficulty: 2, prompt: "In which process group do you inform stakeholders of change request results and facilitate conflict resolution?", options: ["Initiating", "Planning", "Executing", "Closing"], answer: 2, explanation: "Notes p.4: P3 Executing." },
    { type: "short", lesson: "engage", difficulty: 3, prompt: "Explain why identifying stakeholders and their requirements early reduces project cost.", model_answer: "If all needs and requirements are considered **before plans are finalized and work begins**, they can be included in the plan from the start. Requirements discovered later must be handled as **changes**, which are much costlier than including the work from the beginning (Module 1). So the earlier stakeholders are identified, the fewer costly changes are needed later (Notes p.6)." },
    { type: "mcq", lesson: "kano", difficulty: 2, prompt: "Airline passengers are furious if their luggage is lost, but nobody is delighted when it arrives. In Kano terms, reliable luggage handling is a:", options: ["Delighter", "Satisfier", "Must-be (dissatisfier)", "Indifferent feature"], answer: 2, explanation: "Causes dislike if missing; doesn't raise satisfaction if present." },
    { type: "multi", lesson: "kano", difficulty: 2, prompt: "Which are Kano categories?", options: ["Must-be", "Desired", "Attractive", "Indifferent", "Leading"], answer: [0, 1, 2, 3], explanation: "Leading is an engagement level, not a Kano category." },
    { type: "mcq", lesson: "kano", difficulty: 2, prompt: "What does the WhatsApp example on Slide 20 illustrate?", options: ["That the first version of a product must contain every feature", "Strategic agility: adapting the solution iteration by iteration towards the vision", "That user numbers don't depend on features", "The power/interest grid"], answer: 1, explanation: "Each iteration brings the actual product closer to the vision, from 250k users in 2009 to 4,000M in 2022." },
  ],

  flashcards: [
    { front: "Power/interest grid — the four strategies", back: "High/high: manage closely · High power/low interest: keep satisfied · Low power/high interest: keep informed · Low/low: monitor." },
    { front: "Salience model — three attributes", back: "Power, urgency, legitimacy. All three = core (definitive)." },
    { front: "Engagement levels in order", back: "Unaware → Resistant → Neutral → Supportive → Leading." },
    { front: "Kano categories", back: "Must-be (dissatisfiers), desired (satisfiers), attractive (delighters), indifferent." },
    { front: "3 Horizons — time frames", back: "H1 +1 year (sustain) · H2 +4 years (adjacent growth) · H3 +10 years (exploration into new markets)." },
  ],

  teachingNotes: [
    { type: "text", md: "**Suggested order:** Lessons 3 → 4 → 5 are the core of stakeholder management and can be taught on their own. Lessons 1–2 give the strategic context; Lesson 6 (Kano) links stakeholders to the solution design and leads into scope (Module 3)." },
    {
      type: "list",
      title: "Discussion questions",
      items: [
        "Build a power/interest grid for a project you know. Who is in *manage closely*, and why?",
        "Who in your organisation is a *dormant* stakeholder that could suddenly become important?",
        "Pick a product you use. Name one must-be, one satisfier and one delighter feature.",
        "Which of the five global shifts most affects your industry over the next 10 years?",
      ],
    },
    { type: "callout", kind: "tip", title: "What newcomers usually get wrong", md: "Treating communication as the goal (it's satisfaction); confusing expectations with requirements; ignoring high-power/low-interest stakeholders; and mixing up Kano categories with engagement levels." },
  ],

  openQuestions: [
    "Kahoot 2 Q2: the Kahoot answer key (Horizon 2) contradicts Slide 15 (Horizon 3) on which horizon creates entirely new markets. This module follows the slide — confirm with the professor.",
    "Kahoot 2 Q10: Kahoot marks all four options correct, including \"to be faster, better and stronger\", which is not mentioned in the notes as a key to success.",
    "Slide 4 (four world maps) and Slide 14 (evolution of phones and devices) have no text; their message is interpreted in the lessons and marked as added explanation.",
  ],

  coverage: [
    { source: "Slide 1", content: "Title: Stakeholders and Scope Management Plan", where: "strategic-thinking" },
    { source: "Slide 2", content: "Strategy etymology", where: "strategic-thinking" },
    { source: "Slide 3", content: "Strategy generation model (hard/soft systems, risks, outcomes)", where: "strategic-thinking" },
    { source: "Slide 4", content: "Four world maps (no text)", where: "strategic-thinking", status: "partial", note: "Images not reproduced; message interpreted and marked as added" },
    { source: "Slide 5", content: "Business model evolution (waves, initiative streams)", where: "strategic-thinking" },
    { source: "Slide 6", content: "Heraclitus: change is the only constant", where: "strategic-thinking" },
    { source: "Slides 7–11", content: "Five shifts in the global economy, with figures and sources", where: "context" },
    { source: "Slide 12", content: "Industry 1.0–5.0", where: "context" },
    { source: "Slide 13", content: "Generations X, Y, Z, α, β", where: "context" },
    { source: "Slide 14", content: "Evolution of phones and devices (images only)", where: "context", status: "partial", note: "Images described in words" },
    { source: "Slide 15", content: "3 Horizons of Strategy", where: "strategic-thinking" },
    { source: "Slide 16", content: "Section title: Stakeholders Management", where: "identify" },
    { source: "Slide 17", content: "Agile vs. non-agile planning (repeat of Module 1)", where: "kano", note: "Linked to Module 1, Lesson 4" },
    { source: "Slide 18", content: "Power/interest grid", where: "classify" },
    { source: "Slide 19", content: "Kano model", where: "kano" },
    { source: "Slide 20", content: "Strategic agility: WhatsApp", where: "kano" },
    { source: "Slides 21–22", content: "Strategic agility: O&G → multi-energy company", where: "kano" },
    { source: "Slides 23–30", content: "Scope management", where: "", note: "Covered in Module 3 (Scope Management)" },
    { source: "Notes p.1", content: "Stakeholder definition; objective; expectations; analysis steps (start)", where: "identify" },
    { source: "Notes p.2", content: "Analysis steps (end); stakeholder register; power/interest grid", where: "identify", note: "Grid is in Lesson 4" },
    { source: "Notes p.3", content: "Power/influence grid; salience model", where: "classify" },
    { source: "Notes p.4", content: "Stakeholder cube; managing & monitoring; process-group table", where: "classify", note: "Managing & monitoring is in Lesson 5" },
    { source: "Notes p.5", content: "Engagement assessment matrix; 5 levels; example matrix", where: "engage" },
    { source: "Notes p.6", content: "Concept check; keys to success; quick revision", where: "engage" },
    { source: "Kahoot 2 (Q1–Q10)", content: "10 questions with answer key", where: "strategic-thinking", note: "All 10 are in the Kahoot 2 question set; points taught in Lessons 1, 3, 4, 5 and 6" },
  ],
});
