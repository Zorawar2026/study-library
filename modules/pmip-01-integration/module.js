/* ==========================================================================
   Project Management in Practice — Module 1: Overview & Integration Management
   Sources: Notes "PMP Module 1: Overview and Integration Management" (7 pages),
            Slides "1_Introduction International Project Management" (9 slides),
            Kahoot 1 (in quiz-extra.js).
   ========================================================================== */

/* ---------- Diagrams (redrawn from the slides / notes) ---------- */
const PM1_SVG_HIERARCHY = `<svg viewBox="0 0 640 330" width="640" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:12px">
<defs><marker id="pm1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="320" y="14" text-anchor="middle" font-weight="700" fill="currentColor">Organizational Strategy</text>
<g stroke="currentColor" stroke-width="1.4" fill="none" opacity="0.75">
<path d="M320 20V36" stroke-width="3" marker-end="url(#pm1a)"/>
<g marker-start="url(#pm1a)" marker-end="url(#pm1a)">
<path d="M36 66V218"/><path d="M123 66V88"/><path d="M280 66V88"/><path d="M410 66V88"/><path d="M615 66V218"/>
<path d="M94 128V218"/><path d="M152 128V218"/><path d="M239 128V148"/><path d="M326 128V218"/>
<path d="M210 188V218"/><path d="M268 188V218"/><path d="M384 128V218"/><path d="M445 128V148"/>
<path d="M442 188V218"/><path d="M500 188V218"/><path d="M548 188V218"/>
<path d="M36 258V288"/><path d="M94 258V288"/><path d="M152 258V288"/><path d="M210 258V288"/><path d="M268 258V288"/><path d="M326 258V288"/><path d="M384 258V288"/><path d="M442 258V288"/><path d="M500 258V288"/><path d="M581 258V288"/>
</g></g>
<g style="fill:var(--surface);stroke:currentColor;stroke-width:1.4">
<rect x="6" y="40" width="628" height="24" rx="5"/>
<rect x="73" y="90" width="100" height="36" rx="5"/><rect x="220" y="90" width="120" height="36" rx="5"/><rect x="362" y="90" width="96" height="36" rx="5"/>
<rect x="189" y="150" width="100" height="36" rx="5"/><rect x="425" y="150" width="140" height="36" rx="5"/>
<rect x="10" y="220" width="52" height="36" rx="4"/><rect x="68" y="220" width="52" height="36" rx="4"/><rect x="126" y="220" width="52" height="36" rx="4"/><rect x="184" y="220" width="52" height="36" rx="4"/><rect x="242" y="220" width="52" height="36" rx="4"/><rect x="300" y="220" width="52" height="36" rx="4"/><rect x="358" y="220" width="52" height="36" rx="4"/><rect x="416" y="220" width="52" height="36" rx="4"/><rect x="474" y="220" width="52" height="36" rx="4"/><rect x="532" y="220" width="98" height="36" rx="4"/>
<rect x="6" y="290" width="628" height="24" rx="5"/></g>
<g fill="currentColor" text-anchor="middle">
<text x="320" y="56" font-weight="700">Sample Portfolio</text>
<text x="123" y="112">Program A</text><text x="280" y="112">Program B</text><text x="410" y="112">Portfolio A</text>
<text x="239" y="172">Program B1</text><text x="495" y="172">Program C</text>
<text x="36" y="242">Project 1</text><text x="94" y="242">Project 2</text><text x="152" y="242">Project 3</text><text x="210" y="242">Project 4</text><text x="268" y="242">Project 5</text><text x="326" y="242">Project 6</text><text x="384" y="242">Project 7</text><text x="442" y="242">Project 8</text><text x="500" y="242">Project 9</text><text x="581" y="242">Operations</text>
<text x="320" y="306" font-weight="700">Shared Resources and Stakeholders</text></g></svg>`;

const PM1_SVG_PROCESS_GROUPS = `<svg viewBox="0 0 560 290" width="560" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:13px">
<defs><marker id="pm1b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" stroke-width="1.6" fill="none">
<path d="M150 40H208" marker-end="url(#pm1b)"/>
<path d="M265 60V118" marker-end="url(#pm1b)"/><path d="M295 118V60" marker-end="url(#pm1b)"/>
<path d="M265 158V208" marker-end="url(#pm1b)"/><path d="M295 208V158" marker-end="url(#pm1b)"/>
<path d="M350 228H408" marker-end="url(#pm1b)"/>
<path d="M210 236H182V54H208" stroke-dasharray="5 4" marker-end="url(#pm1b)"/></g>
<g style="fill:var(--surface);stroke:currentColor;stroke-width:1.6">
<rect x="20" y="20" width="130" height="40" rx="8"/><rect x="210" y="20" width="140" height="40" rx="8"/>
<rect x="210" y="118" width="140" height="40" rx="8"/><rect x="210" y="208" width="140" height="40" rx="8"/><rect x="410" y="208" width="130" height="40" rx="8"/></g>
<g fill="currentColor" text-anchor="middle" font-weight="700">
<text x="85" y="45">Initiating</text><text x="280" y="45">Planning</text><text x="280" y="143">Executing</text><text x="280" y="226">Monitoring &amp;</text><text x="280" y="241">Controlling</text><text x="475" y="233">Closing</text></g>
<g fill="currentColor" font-size="11" opacity="0.85">
<text x="300" y="92">plan drives work /</text><text x="300" y="105">work needs re-planning</text>
<text x="300" y="183">performance data /</text><text x="300" y="196">corrective actions</text>
<text x="174" y="140" text-anchor="end">changes → re-plan</text><text x="174" y="153" text-anchor="end">(dashed loop)</text>
<text x="362" y="268">phase / project complete</text></g></svg>`;

const PM1_SVG_BIG_PICTURE = `<svg viewBox="0 0 720 270" width="720" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:12px">
<defs><marker id="pm1c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" stroke-width="1.5" fill="none"><path d="M60 40H86" marker-end="url(#pm1c)"/><path d="M188 90H520" marker-end="url(#pm1c)" stroke-width="2.5"/><path d="M620 80H690" marker-end="url(#pm1c)"/><path d="M78 250V140" marker-end="url(#pm1c)"/></g>
<g style="fill:var(--surface);stroke:currentColor;stroke-width:1.5"><rect x="88" y="20" width="100" height="120" rx="8"/><rect x="522" y="20" width="98" height="120" rx="8"/></g>
<g fill="currentColor" text-anchor="middle">
<text x="30" y="34" font-weight="700">Sponsor</text><text x="138" y="62" font-size="15">Idea</text><text x="138" y="84" font-size="15">Need</text><text x="138" y="106" font-size="15">Problem</text>
<text x="571" y="72" font-size="15">Product</text><text x="571" y="94" font-size="15">Service</text><text x="660" y="70" font-weight="700">Client</text><text x="660" y="104" font-weight="700">User</text>
<text x="66" y="200" transform="rotate(-90 66 200)" font-weight="700">Requirements</text>
<text x="138" y="160" font-weight="700">Initiating</text><text x="571" y="160" font-weight="700">Closing</text></g>
<g fill="currentColor" font-weight="700" text-anchor="middle"><text x="240" y="114">Planning</text><text x="390" y="114">Executing</text><text x="390" y="132">Control and Monitoring</text></g>
<g fill="currentColor" text-anchor="middle" font-size="12">
<text x="355" y="22">Scope · Schedule · Costs · Resources</text>
<text x="355" y="170">Risks · Procurement · Stakeholders</text><text x="355" y="188">Communication · Quality · Integration</text>
<text x="355" y="214" font-size="11" opacity="0.8">(the 10 knowledge areas apply across the process groups)</text></g></svg>`;

const PM1_SVG_PLANNING = `<svg viewBox="0 0 640 330" width="640" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:11px">
<g fill="currentColor" font-weight="700" font-size="12"><text x="48" y="16">Planning efforts (non-agile approach)</text><text x="48" y="186">Agile rolling wave planning</text></g>
<g stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.6"><path d="M40 150H630M40 150V30"/><path d="M40 320H630M40 320V200"/></g>
<g fill="none" stroke-width="2">
<path style="stroke:var(--t-yellow)" d="M45 148Q70 100 110 148"/>
<path style="stroke:var(--t-violet)" d="M60 148Q170 40 330 148"/>
<path style="stroke:var(--t-gray)" d="M120 148Q330 20 560 148"/>
<path style="stroke:var(--t-red)" d="M45 140Q330 70 615 140" stroke-dasharray="6 4"/>
<path style="stroke:var(--t-blue)" d="M500 148Q560 100 620 148" stroke-dasharray="3 3"/>
<path style="stroke:var(--t-yellow)" d="M45 318Q65 280 90 318"/>
<path style="stroke:var(--t-violet)" d="M80 318Q110 250 140 318M260 318Q290 250 320 318M440 318Q470 250 500 318"/>
<path style="stroke:var(--t-gray)" d="M110 318Q160 240 230 318M290 318Q340 240 410 318M470 318Q520 240 590 318"/>
<path style="stroke:var(--t-red)" d="M45 305Q330 270 615 305" stroke-dasharray="6 4"/>
<path style="stroke:var(--t-blue)" d="M570 318Q600 280 625 318" stroke-dasharray="3 3"/></g>
<g fill="currentColor"><text x="40" y="164">Start</text><text x="320" y="164">Time</text><text x="600" y="164">Finish</text>
<text x="150" y="250">Iteration 1</text><text x="330" y="250">Iteration 2</text><text x="510" y="250">Iteration 3</text></g>
<g font-size="11"><text style="fill:var(--t-yellow)" x="430" y="30">— Initiating</text><text style="fill:var(--t-violet)" x="430" y="44">— Planning</text><text style="fill:var(--t-gray)" x="430" y="58">— Executing</text><text style="fill:var(--t-red)" x="430" y="72">- - Monitoring &amp; Controlling</text><text style="fill:var(--t-blue)" x="430" y="86">··· Closing</text></g>
<text x="26" y="95" fill="currentColor" transform="rotate(-90 26 95)" font-size="9" text-anchor="middle">level of process interaction</text><text x="26" y="265" fill="currentColor" transform="rotate(-90 26 265)" font-size="9" text-anchor="middle">level of process interaction</text></svg>`;

Academy.module({
  id: "pmip-01-integration",
  title: "Overview & Integration Management",
  subtitle: "What a project is, how projects fit into programs and portfolios, the five process groups, the project charter, the project management plan and how changes are controlled.",
  category: "Project Management in Practice",
  icon: "1",
  color: "#9b87ff",
  version: "1.0",
  updated: "2026-11-24",
  studyTime: "75–90 min",
  extraFiles: ["quiz-extra.js"],

  sources: [
    { id: "N1", label: "Notes — PMP Module 1: Overview and Integration Management", detail: "7 pages. Referred to as *Notes p.1–7*." },
    { id: "S1", label: "Slides — Project Management in Practice: International Project Management Framework", detail: "Prof. José Cobo, Ph.D, PMP, ESCP Business School. 9 slides. Referred to as *Slide 1–9*." },
    { id: "K1", label: "Kahoot 1 — Project Management Overview (1_ESCP_PMiP_Overview)", detail: "10 questions, with the answer key revealed by Kahoot. Shown in the *Kahoot 1* question set." },
  ],

  overview:
    "This module lays the foundation for the whole course. It explains what a [[project|project]] is and why organisations create projects, how projects relate to [[program|programs]], [[portfolio|portfolios]] and [[operations|operations]], and how the work of every project is managed through five [[process-group|process groups]] and ten [[knowledge-area|knowledge areas]].\n\nIt then covers [[integration-management|integration management]], the project manager's primary role: authorising the project with a [[project-charter|project charter]], planning it in a [[project-management-plan|project management plan]] with its [[baseline|baselines]], and controlling every change through [[integrated-change-control|integrated change control]].\n\nThe first lesson summarises how the course itself is organised and assessed.",

  prerequisites: ["None. This is the first module of the course."],

  objectives: [
    "Define a project, a program, a portfolio, operations and organizational project management (OPM), and explain how strategy flows down and value flows up between them.",
    "Distinguish project life cycle phases from the five process groups, and state why you enter each process group.",
    "Name the ten knowledge areas and compare non-agile (predictive) planning with agile rolling wave planning.",
    "Explain why integration management is the project manager's primary role.",
    "List who issues the project charter, what it authorises, and the elements it contains.",
    "Describe the project management plan and the three baselines that form the performance measurement baseline.",
    "Classify change requests and apply the six-step process for managing changes, including the possible outcomes of integrated change control.",
  ],

  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: "course",
      title: "The course: Project Management in Practice",
      source: "Slides 1–5",
      summary: "How the course is taught and assessed, and the strategic project plan that runs through every module.",
      builds_on: [],
      blocks: [
        {
          type: "text",
          md: "**Project Management in Practice — International Project Management Framework** is taught by Professor José Cobo, Ph.D, PMP, at ESCP Business School.",
          source: "Slide 1",
        },
        { type: "heading", text: "How the course works" },
        {
          type: "text",
          md: "The course is built on **active learning** — *learning by doing*, \"from a strategic vision to a unique delivery\". Three elements turn into each other in a cycle:\n\n1. **Learning content** (the theory in each module)\n2. **Project teams** (you apply the content in a team)\n3. **Strategic solution for [your company]** (the team's output)",
          source: "Slide 2",
        },
        {
          type: "table",
          caption: "PMiP evaluation",
          headers: ["Component", "Weight"],
          rows: [
            ["Commitment", "20%"],
            ["PM Challenge", "30%"],
            ["Final Test", "50%"],
          ],
          source: "Slide 2",
        },
        {"type": "figure", "src": "img/slide-02.jpg", "alt": "Slide 2: active learning cycle and evaluation weights", "caption": "Original slide 2: active learning — learning content, project teams and a strategic solution for [your company] — and the PMiP evaluation (Commitment 20%, PM Challenge 30%, Final Test 50%).", "source": "Slide 2 (original)"},
        { type: "heading", text: "The Professional Strategic Project Plan" },
        {"type": "figure", "src": "img/slide-03.jpg", "alt": "Slide 3: logos of six AI tools", "caption": "Original slide 3: AI tools in project management — ChatGPT, Microsoft Copilot, Google Gemini, DALL·E 3, ClickUp and Jasper.", "source": "Slide 3 (original)"},
        {
          type: "text",
          md: "The team project is a **Professional Strategic Project Plan** for an **internationalization / expansion strategy**.\n\nThe slides suggest using **AI tools in project management**. The tools shown are ChatGPT (OpenAI), Microsoft Copilot, Google Gemini, DALL·E 3, ClickUp and Jasper.",
          source: "Slide 3",
        },
        {
          type: "list",
          title: "Themes the strategic project plan can address",
          items: ["Digitization – AI", "Customer experience", "Sustainability", "Product customization"],
          source: "Slide 4",
        },
        {
          type: "steps",
          title: "The plan is built in three stages, one per part of the course",
          items: [
            "**Stakeholders, scope and vision** (Modules 2–3)",
            "**Roadmap** (the schedule and cost plan, Modules 4–5)",
            "**Risk management plan** (Module 6)",
          ],
          source: "Slide 4",
        },
        {
          type: "callout",
          kind: "added",
          md: "The module numbers in brackets show where each stage is covered on this site. They are not on the slide.",
        },
        {
          type: "quote",
          md: "The only limit is your imagination.",
          source: "Slide 5",
          note: "Opening slide of \"Introduction to Project Management\".",
        },
      ],
      takeaways: [
        "Evaluation: Commitment 20%, PM Challenge 30%, Final Test 50%.",
        "The team project is a Professional Strategic Project Plan for an internationalization/expansion strategy.",
        "The plan moves from stakeholders, scope and vision, to a roadmap, to a risk management plan.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Which part of the PMiP evaluation carries the most weight?",
          options: ["Commitment", "PM Challenge", "Final Test", "All three are equal"],
          answer: 2,
          explanation: "Final Test 50%, PM Challenge 30%, Commitment 20% (Slide 2).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "What strategy is the Professional Strategic Project Plan built around?",
          options: ["Cost-cutting strategy", "Internationalization / expansion strategy", "Merger and acquisition strategy", "Exit strategy"],
          answer: 1,
          explanation: "Slides 3–4: \"Professional Strategic Project Plan — Internationalization/Expansion Strategy\".",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In what order is the strategic project plan built?",
          options: [
            "Risk management plan → Roadmap → Stakeholders/Scope/Vision",
            "Roadmap → Stakeholders/Scope/Vision → Risk management plan",
            "Stakeholders/Scope/Vision → Roadmap → Risk management plan",
            "Stakeholders/Scope/Vision → Risk management plan → Roadmap",
          ],
          answer: 2,
          explanation: "Slide 4 shows three arrows in this order: Stakeholders Scope – Vision, Roadmap, Risk Mngt. Plan.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "framework",
      title: "Projects, programs, portfolios and OPM",
      source: "Notes p.1–2; Slides 6, 9",
      summary: "What a project is, why organisations create projects, and how projects, programs, portfolios and operations fit together under the organisation's strategy.",
      builds_on: ["course"],
      blocks: [
        {
          type: "intuition",
          md: "Think of a company's strategy as a destination. The **portfolio** is the full set of investments the company chooses to get there. **Programs** are bundles of related projects that are worth managing together. Each **project** is one temporary piece of work that produces something unique. Strategy is decided at the top and flows down; the results and value of each project flow back up and show whether the strategy is working.",
        },
        { type: "heading", text: "What is a project?" },
        { type: "definition", term: "project", source: "Notes p.1" },
        {
          type: "callout",
          kind: "note",
          title: "A second, shorter definition used in the course",
          md: "Kahoot 1 (Q1) defines a project as **\"the transformation of an idea into a reality\"**. This is consistent with the formal definition: the idea becomes a reality in the form of a unique product, service or result, and the transformation is temporary, with a beginning and an end. For exam-style questions that ask for the formal definition, use *temporary endeavor … unique product, service, or result*.",
          source: "Kahoot 1 Q1; Notes p.1",
        },
        { type: "heading", text: "Why are projects created?" },
        {
          type: "text",
          md: "Projects are created **to provide business value** and to deliver the benefits defined in the [[business-case|business case]] and the [[benefits-management-plan|benefits management plan]].\n\nProjects bring **positive change** to the organisation, for example by:\n\n- adding new products or services, or improving existing ones;\n- meeting legal and regulatory requirements.",
          source: "Notes p.1",
        },
        {
          type: "text",
          md: "According to the course, working with international project management techniques allows companies to be **more efficient and effective**, to be **\"faster, better, stronger\"**, and to **build trust with their stakeholders** — all of these at once.",
          source: "Kahoot 1 Q10",
        },
        { type: "heading", text: "Project management" },
        { type: "definition", term: "project-management", source: "Notes p.1" },
        {
          type: "callout",
          kind: "note",
          title: "The definition used in Kahoot 1",
          md: "Kahoot 1 (Q2) defines project management as **\"the application of tools and techniques to meet the project requirements\"**. This is the short form of the standard PMI wording, and it complements the notes' definition above: the notes describe *what project management achieves*, the Kahoot describes *what it is*.",
          source: "Kahoot 1 Q2",
        },
        { type: "heading", text: "Portfolio, program and OPM" },
        { type: "definition", term: "portfolio", source: "Notes p.1" },
        { type: "definition", term: "program", source: "Notes p.1" },
        { type: "definition", term: "opm", source: "Notes p.1" },
        {"type": "diagram", "kind": "layers", "title": "The OPM hierarchy", "side": {"down": "Strategy & direction ↓", "up": "Results, benefits & value ↑"}, "rows": [{"boxes": [{"title": "Organizational strategy / OPM", "text": "the strategic framework", "tone": "pink"}]}, {"boxes": [{"title": "[1] Portfolio management", "text": "selects and prioritizes the programs and projects that best achieve the strategic goals", "tone": "violet"}]}, {"boxes": [{"title": "[2] Program management", "text": "coordinates related projects to achieve specific benefits", "tone": "cyan"}]}, {"boxes": [{"title": "[3] Project management", "text": "manages the efforts to develop a specific scope", "tone": "green"}]}], "caption": "Top-down, the work is **driven by** organizational strategy; bottom-up, results feed back so the work stays **aligned with** it.", "source": "Notes p.1–2"},
        {
          type: "table",
          caption: "The OPM hierarchy: strategy flows down, value flows up",
          headers: ["Level", "What it does"],
          rows: [
            ["**Organizational strategy / OPM** (strategic framework)", "Sets the direction for everything below it."],
            ["**[1] Portfolio management**", "Selects and prioritizes the programs and projects that best achieve the strategic goals."],
            ["**[2] Program management**", "Coordinates related projects to achieve specific benefits that support the strategic goals."],
            ["**[3] Project management**", "Manages the efforts to develop a specific scope that supports the portfolio or program objectives."],
          ],
          source: "Notes p.1–2",
        },
        {
          type: "list",
          title: "Reading the arrows of the hierarchy",
          items: [
            "**Top-down arrow (↓ strategy and direction):** the work is **driven by** organizational strategy.",
            "**Bottom-up arrow (↑ results, benefits and value):** the work is **aligned with** organizational strategy. Results feed back to the strategy and support it.",
          ],
          source: "Notes p.2",
        },
        {
          type: "figure",
          svg: PM1_SVG_HIERARCHY,
          alt: "Diagram: organizational strategy feeds a sample portfolio. The portfolio contains Program A, Program B, a sub-portfolio called Portfolio A, Project 1 and Operations directly. Program A contains Projects 2 and 3. Program B contains Program B1 (Projects 4 and 5) and Project 6. Portfolio A contains Project 7 and Program C, which contains Projects 8 and 9 and part of Operations. Every project and Operations share a common pool of resources and stakeholders.",
          caption: "Portfolio – Program – Project. A portfolio can hold programs, sub-portfolios, individual projects and operations; a program can hold sub-programs and projects; everything draws on shared resources and stakeholders.",
          source: "Slide 9 (redrawn)",
        },
        {
          type: "list",
          title: "What the diagram shows",
          items: [
            "**Organizational strategy** points into the **portfolio**; the portfolio is where strategy becomes a set of investments.",
            "A portfolio can contain **programs** (A, B), a **sub-portfolio** (Portfolio A), **stand-alone projects** (Project 1) and **operations**.",
            "A program can contain **sub-programs** (Program B1 inside Program B) as well as projects (Project 6).",
            "A project does not have to belong to a program: Project 1 and Project 7 report directly to a portfolio.",
            "**Operations** (ongoing business work) can sit in a portfolio and be linked to a program (Program C).",
            "All arrows are two-way: direction goes down, results come back up.",
            "Every project and operations draw on the same **shared resources and stakeholders**, which is one reason they must be prioritised together.",
          ],
          source: "Slide 9",
        },
        {"type": "figure", "src": "img/slide-09.jpg", "alt": "Slide 9: sample portfolio diagram", "caption": "Original slide 9: Portfolio – Program – Project.", "source": "Slide 9 (original)"},
        { type: "definition", term: "operations", source: "Notes p.1; Slide 9" },
        {
          type: "table",
          caption: "Quick check (activity in the notes)",
          headers: ["Term", "Short definition"],
          rows: [
            ["Project", "Temporary endeavor with a beginning and end"],
            ["Program", "Group of related projects"],
            ["Portfolio", "Group of projects and programs related to a specific strategic organizational objective"],
          ],
          source: "Notes p.2",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "A program is just a big project.", right: "A program is a **group of related projects** managed together because of their **interdependencies**. A big project is still one project." },
            { wrong: "Every project must belong to a program.", right: "Projects can sit **directly in a portfolio** (Project 1 and Project 7 on Slide 9)." },
            { wrong: "A portfolio only contains projects and programs.", right: "A portfolio also includes **related operational work** (Notes p.1; *Operations* on Slide 9)." },
          ],
          source: "Notes p.1; Slide 9",
        },
      ],
      takeaways: [
        "Project = a temporary endeavor that creates a unique product, service or result (\"the transformation of an idea into a reality\").",
        "Projects exist to provide business value and deliver the benefits in the business case and benefits management plan.",
        "Program = related projects managed together for their interdependencies; Portfolio = programs, projects and operations aligned to a strategic goal.",
        "OPM is the strategic framework over portfolio, program and project management: strategy flows down, value flows up.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Which of these is a **program**?",
          options: [
            { text: "All the investments a company selects to achieve its 5-year strategy", why: "That is a portfolio." },
            { text: "A group of related projects managed in a coordinated way", why: "Correct — the focus is on the interdependencies between the projects." },
            { text: "A temporary endeavor that creates a unique result", why: "That is a project." },
            { text: "The ongoing work of running the finance department", why: "That is operations." },
          ],
          answer: 1,
          explanation: "Notes p.1: \"Program Management: A group of related projects managed in a coordinated way.\"",
          difficulty: 1,
        },
        {
          type: "truefalse",
          prompt: "A project can report directly to a portfolio without belonging to any program.",
          answer: true,
          explanation: "On Slide 9, Project 1 reports directly to the Sample Portfolio and Project 7 directly to Portfolio A.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "In the OPM hierarchy, what does the **bottom-up** arrow represent?",
          options: ["Strategy and direction set by senior management", "Results, benefits and value that feed back to and support the strategy", "The order in which projects are approved", "The escalation path for project issues"],
          answer: 1,
          explanation: "Notes p.2: the bottom-up arrow means the work is *aligned with* organizational strategy — results feed back to the strategy and support it.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which level **selects and prioritizes** programs and projects to achieve strategic goals?",
          options: ["Project management", "Program management", "Portfolio management", "Operations management"],
          answer: 2,
          explanation: "Notes p.1–2: portfolio management selects and prioritizes the programs/projects that best achieve the organization's strategic goals.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "process-groups",
      title: "Life cycle, process groups and knowledge areas",
      source: "Notes p.2–3; Slide 7",
      summary: "The difference between the phases of a project and the process groups that manage it, why you enter each process group, and the ten knowledge areas.",
      builds_on: ["framework"],
      blocks: [
        {
          type: "intuition",
          md: "**Phases** answer *what work is being done* (research, design, build…). **Process groups** answer *how that work is being managed* (getting started, planning, doing, checking, finishing). Every phase can go through all five process groups, a bit like every chapter of a book having its own beginning, middle and end.",
        },
        { type: "heading", text: "Project life cycle" },
        { type: "definition", term: "project-life-cycle", source: "Notes p.2" },
        {
          type: "text",
          md: "In a **plan-driven** ([[predictive-life-cycle|predictive]]) life cycle, you may go through the overall project management process — from Initiating to Closing — **once for the entire project**, although portions of it may be iterated or repeated throughout the life cycle.",
          source: "Notes p.2",
        },
        {
          type: "steps",
          title: "Example: life cycle phases of a software project",
          items: ["Research", "Design", "Code", "Test", "Transition"],
          source: "Notes p.2",
        },
        {
          type: "callout",
          kind: "key",
          title: "Phases are not process groups",
          md: "Life cycle **phases** describe *what work is done*. **Process groups** describe *how the work is managed*. The five process groups can be performed **within every phase**.",
          source: "Notes p.2",
        },
        { type: "heading", text: "The five process groups" },
        { type: "definition", term: "process-group", source: "Notes p.2–3; Slide 7" },
        {
          type: "figure",
          svg: PM1_SVG_PROCESS_GROUPS,
          alt: "Initiating leads to Planning. Planning and Executing exchange in both directions. Executing and Monitoring & Controlling exchange in both directions. Monitoring & Controlling leads to Closing, and also loops back to Planning.",
          caption: "The 5 process groups and how they interact.",
          source: "Notes p.2–3 (redrawn)",
        },
        {
          type: "list",
          title: "How the process groups feed each other",
          items: [
            "**Initiating → Planning.** Initiating feeds Planning.",
            "**Planning ↔ Executing.** The plan drives the work; executing often needs ongoing planning.",
            "**Executing ↔ Monitoring & Controlling.** Work performance data is monitored; corrective actions go back to Executing.",
            "**Monitoring & Controlling → Planning.** Problems or changes require re-planning (a changed project management plan).",
            "**Monitoring & Controlling → Closing.** When the phase or project is complete.",
          ],
          source: "Notes p.3",
        },
        {
          type: "table",
          caption: "Why do we enter each process group? (activity summary in the notes — standard PMP logic)",
          headers: ["Process group", "You enter it when…"],
          rows: [
            ["**Initiating**", "there is a business need; a new phase of the project is beginning; the project has so many problems that you re-evaluate the business need."],
            ["**Planning**", "project initiating is completed; project executing necessitates ongoing planning; integrated change control results in a changed project management plan; project monitoring necessitates additional planning."],
            ["**Executing**", "project planning is completed (work is carried out per the plan, including approved changes)."],
            ["**Monitoring & Controlling**", "work performance data needs to be analyzed; the quality of deliverables needs to be monitored; requested changes, including recommended corrective and preventive actions, must be evaluated."],
            ["**Closing**", "a project phase is completed; the project is complete; the project is delivered to the customer."],
          ],
          source: "Notes p.3",
        },
        {
          type: "callout",
          kind: "exam",
          md: "- **Every project includes all five process groups** — Initiating, Planning, Executing, Monitoring and Controlling, and Closing (Kahoot 1 Q4).\n- The **detailed project budget** is created in **Planning** (Kahoot 1 Q5).\n- The team **measures and analyzes the work being done** during **Monitoring & Controlling** (Kahoot 1 Q7).",
          source: "Kahoot 1 Q4, Q5, Q7",
        },
        { type: "heading", text: "The big picture: from idea to product" },
        {
          type: "figure",
          svg: PM1_SVG_BIG_PICTURE,
          alt: "A sponsor brings an idea, need or problem, supported by requirements. Initiating starts the project. A long arrow runs through Planning, Executing, and Control and Monitoring to a product or service, delivered at Closing to the client or user. Around the arrow are the knowledge areas: Scope, Schedule, Costs, Resources, Risks, Procurement, Stakeholders, Communication, Quality and Integration.",
          caption: "Project management: a sponsor's idea, need or problem becomes a product or service for the client or user.",
          source: "Slide 7 (redrawn)",
        },
        {
          type: "text",
          md: "Reading Slide 7 from left to right:\n\n1. A **sponsor** brings an **idea, need or problem**, backed by **requirements**.\n2. **Initiating** starts the project.\n3. The project moves through **Planning**, **Executing** and **Control and Monitoring**, managing the knowledge areas along the way.\n4. **Closing** hands over the **product or service** to the **client / user**.",
          source: "Slide 7",
        },
        {"type": "figure", "src": "img/slide-07.jpg", "alt": "Slide 7: project management big picture", "caption": "Original slide 7: from a sponsor's idea, need or problem to a product or service for the client.", "source": "Slide 7 (original)"},
        { type: "definition", term: "knowledge-area", source: "Slide 7; Kahoot 1 Q3" },
        {"type": "diagram", "kind": "cards", "title": "The 10 knowledge areas", "cols": 5, "cards": [{"title": "Integration", "text": "pull it all together", "icon": "link"}, {"title": "Scope", "text": "all the work, only the work", "icon": "target"}, {"title": "Schedule", "text": "timely completion", "icon": "calendar"}, {"title": "Costs", "text": "within the approved budget", "icon": "coins"}, {"title": "Quality", "text": "meets requirements", "icon": "star"}, {"title": "Resources", "text": "people, equipment, material", "icon": "users"}, {"title": "Communication", "text": "the right information, in time", "icon": "message"}, {"title": "Risks", "text": "threats and opportunities", "icon": "alert"}, {"title": "Procurement", "text": "buying from outside", "icon": "book"}, {"title": "Stakeholders", "text": "satisfaction", "icon": "users"}], "source": "Slide 7"},
        {
          type: "table",
          caption: "The 10 knowledge areas shown on Slide 7, with where each is covered on this site",
          headers: ["#", "Knowledge area", "Covered in"],
          rows: [
            ["1", "Integration", "This module (Lessons 5–7)"],
            ["2", "Scope", "Module 3"],
            ["3", "Schedule", "Module 4"],
            ["4", "Costs", "Module 5"],
            ["5", "Quality", "—"],
            ["6", "Resources", "—"],
            ["7", "Communication", "Module 7"],
            ["8", "Risks", "Module 6"],
            ["9", "Procurement", "—"],
            ["10", "Stakeholders", "Module 2"],
          ],
          source: "Slide 7",
        },
        {
          type: "callout",
          kind: "added",
          md: "The \"Covered in\" column is not on the slide. Quality, Resources and Procurement appear on Slide 7 but have no dedicated module in the materials provided.\n\nNewer editions of PMI's *PMBOK Guide* organise their content around principles and performance domains. The 5 process groups and 10 knowledge areas remain the framework used in this course and in PMI's process-based guidance.",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "Small projects can skip some process groups.", right: "**Every project** includes all five process groups (Kahoot 1 Q4). On a small project each one may simply be quick." },
            { wrong: "Process groups are the same as project phases, done once each in order.", right: "Phases describe the work; process groups describe how it is managed, and all five can happen **within every phase** (Notes p.2)." },
            { wrong: "Monitoring & Controlling happens at the end of the project.", right: "It runs **alongside Executing** throughout the project, and can send the project back to Planning (Notes p.3)." },
          ],
          source: "Notes p.2–3; Kahoot 1",
        },
      ],
      takeaways: [
        "Phases = what work is done; process groups = how the work is managed. All five process groups can occur in every phase.",
        "The 5 process groups: Initiating, Planning, Executing, Monitoring & Controlling, Closing — every project includes all five.",
        "Monitoring & Controlling exchanges with Executing, loops back to Planning when changes are needed, and leads to Closing.",
        "There are 10 knowledge areas: Integration, Scope, Schedule, Costs, Quality, Resources, Communication, Risks, Procurement, Stakeholders.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "A team analyses work performance data and evaluates recommended corrective actions. Which process group are they in?",
          options: ["Planning", "Executing", "Monitoring & Controlling", "Closing"],
          answer: 2,
          explanation: "Notes p.3: you enter Monitoring & Controlling when work performance data needs to be analyzed and requested changes, including recommended corrective and preventive actions, must be evaluated.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The project has so many problems that the team re-evaluates the business need. Which process group does this send them to?",
          options: ["Initiating", "Planning", "Executing", "Closing"],
          answer: 0,
          explanation: "Notes p.3 lists this as one of the reasons for entering **Initiating**.",
          difficulty: 2,
        },
        {
          type: "truefalse",
          prompt: "Life cycle phases (such as Design and Test) and process groups (such as Planning and Executing) are two names for the same thing.",
          answer: false,
          explanation: "Phases describe *what* work is done; process groups describe *how* it is managed. The five process groups can be performed within every phase (Notes p.2).",
          difficulty: 1,
        },
        {
          type: "multi",
          prompt: "Which of these are knowledge areas shown on Slide 7?",
          options: ["Procurement", "Closing", "Quality", "Stakeholders", "Executing"],
          answer: [0, 2, 3],
          explanation: "Closing and Executing are process groups, not knowledge areas.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "adaptive-planning",
      title: "Adaptive planning: agile vs. non-agile",
      source: "Slide 8",
      summary: "How the process groups overlap over time in a non-agile project, and how agile rolling wave planning repeats planning and executing in iterations.",
      builds_on: ["process-groups"],
      blocks: [
        {
          type: "intuition",
          md: "In a non-agile project you plan most of the journey before you set off. In agile rolling wave planning you plan the next stretch in detail, travel it, then plan the next stretch using what you learned.",
        },
        {
          type: "figure",
          svg: PM1_SVG_PLANNING,
          alt: "Two charts of level of process interaction over time. Top, non-agile: one curve per process group — a small Initiating curve at the start, a Planning curve peaking early, a large Executing curve peaking later, a dashed Monitoring and Controlling curve across the whole project, and a Closing curve at the end. Bottom, agile rolling wave: a small Initiating curve, then repeated pairs of Planning and Executing peaks for iterations 1, 2 and 3, a dashed Monitoring and Controlling curve across the whole project, and Closing at the end.",
          caption: "Level of process interaction over time, from Start to Finish. Top: planning efforts (non-agile approach). Bottom: agile rolling wave planning.",
          source: "Slide 8 (redrawn, simplified)",
        },
        {"type": "figure", "src": "img/slide-08.jpg", "alt": "Slide 8: curves of process interaction over time", "caption": "Original slide 8: adaptive planning — agile vs. non-agile.", "source": "Slide 8 (original)"},
        { type: "heading", text: "Non-agile planning" },
        {
          type: "list",
          items: [
            "Each process group has **one curve** across the project.",
            "**Initiating** is a small peak right at the start.",
            "**Planning** peaks early in the project.",
            "**Executing** is the largest effort and peaks after Planning.",
            "**Monitoring & Controlling** runs across the whole project (dashed line).",
            "**Closing** rises at the end.",
            "The curves **overlap**: process groups are not strictly sequential.",
          ],
          source: "Slide 8",
        },
        { type: "definition", term: "rolling-wave-planning", source: "Slide 8" },
        {
          type: "list",
          title: "Agile rolling wave planning",
          items: [
            "**Initiating** still happens once at the start.",
            "**Planning and Executing repeat** in each iteration (Iteration 1, Iteration 2, Iteration 3): a planning peak is followed by an executing peak.",
            "**Monitoring & Controlling** runs across the whole project.",
            "**Closing** happens at the end.",
          ],
          source: "Slide 8",
        },
        {
          type: "callout",
          kind: "conflict",
          title: "Label of the agile chart",
          md: "On **Slide 8** of this deck, the agile chart is labelled \"Agile Rolling Wave Planning **(non-agile approach)**\".\n\nThe same chart in the **Module 2 slide deck** (Stakeholders and Scope) is labelled \"Planning **(agile approach)**\".\n\n**Resolution used here:** the chart shows planning repeated per iteration, which is the agile approach. The \"(non-agile approach)\" label on Slide 8 appears to be a copying slip.",
          source: "Slide 8 vs. Module 2 slides",
        },
        {
          type: "table",
          caption: "Comparison",
          headers: ["", "Non-agile (predictive) planning", "Agile rolling wave planning"],
          rows: [
            ["When planning happens", "Mostly early, in one large effort", "Repeatedly, once per iteration"],
            ["Executing", "One large effort", "One effort per iteration"],
            ["Monitoring & Controlling", "Throughout the project", "Throughout the project"],
            ["Initiating / Closing", "Once, at start / end", "Once, at start / end"],
          ],
          source: "Slide 8",
        },
      ],
      takeaways: [
        "In non-agile planning each process group has one overlapping curve; planning peaks early and executing is the largest effort.",
        "In agile rolling wave planning, planning and executing repeat in each iteration.",
        "In both, Monitoring & Controlling runs throughout, Initiating is at the start and Closing at the end.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "What is the defining feature of agile rolling wave planning on Slide 8?",
          options: ["There is no planning", "Planning and executing repeat in each iteration", "Monitoring & Controlling only happens at the end", "Initiating is repeated before every iteration"],
          answer: 1,
          explanation: "The agile chart shows a planning peak followed by an executing peak in Iteration 1, 2 and 3.",
          difficulty: 1,
        },
        {
          type: "truefalse",
          prompt: "In the non-agile chart, Monitoring & Controlling is active across the whole project, from start to finish.",
          answer: true,
          explanation: "It is drawn as a dashed curve spanning the whole project in both charts.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In the non-agile chart, which process group shows the largest level of process interaction?",
          options: ["Initiating", "Planning", "Executing", "Closing"],
          answer: 2,
          explanation: "Executing is the tallest and widest curve.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "integration-charter",
      title: "Integration management and the project charter",
      source: "Notes p.3–4; Kahoot 1 Q6, Q8",
      summary: "Why integration is the project manager's primary role, and how the project charter formally authorises the project.",
      builds_on: ["process-groups"],
      blocks: [
        { type: "definition", term: "integration-management", source: "Notes p.3" },
        {
          type: "callout",
          kind: "exam",
          title: "Key exam point",
          md: "The project manager's **primary role** is to perform **integration management** — to pull all the pieces of a project together into a cohesive whole.",
          source: "Notes p.3",
        },
        {
          type: "list",
          title: "The fundamental parts of integration management covered in this module",
          items: [
            "The [[project-charter|project charter]] (this lesson)",
            "The [[project-management-plan|project management plan]] (Lesson 6)",
            "The [[change-management-plan|change management plan]] (Lesson 7)",
            "Handling [[change-request|change requests]] — Perform [[integrated-change-control|Integrated Change Control]] (Lesson 7)",
          ],
          source: "Notes p.3",
        },
        { type: "heading", text: "The project charter" },
        { type: "definition", term: "project-charter", source: "Notes p.3" },
        {
          type: "list",
          items: [
            "**All projects should have a charter**, whether the project is internal or for an external customer.",
            "Developing a charter often **starts with an agreement or understanding**. For external organisations, a **formal contract** is involved.",
            "**Buyer and seller may each create their own charter**, with different points of view: the buyer's reason may be to achieve a product scope within constraints; the seller's reason may be to increase revenue, enhance its reputation, or gain additional work.",
            "The charter is **signed and issued by the [[sponsor|sponsor]]** and **formally authorizes the project and the project manager**.",
          ],
          source: "Notes p.3",
        },
        {
          type: "steps",
          title: "Developing a project charter requires",
          items: [
            "Identifying stakeholders",
            "Meeting key stakeholders to confirm high-level requirements, project scope, risks, assumptions and issues",
            "Defining product scope",
            "Defining project objectives, constraints and success criteria",
            "Documenting risks",
          ],
          source: "Notes p.4",
        },
        {
          type: "table",
          caption: "Elements of a project charter and the question each one answers",
          headers: ["Element", "Question it answers"],
          rows: [
            ["Project title and description", "What is the project?"],
            ["Project manager assigned and authority level", "Who leads the project, and can they manage changes to budget, schedule and team assignments?"],
            ["[[business-case|Business case]]", "Why is the project being done? On what financial basis is it justified? (purpose and justification)"],
            ["Resources pre-assigned", "How many / which resources will be provided?"],
            ["Key stakeholder list", "Who will affect or be affected by the project, as known to date?"],
            ["Stakeholder requirements as known", "Requirements related to both project and product scope."],
            ["High-level product description / key deliverables", "What key deliverables are wanted, and what will be the end result?"],
          ],
          source: "Notes p.4",
        },
        {
          type: "list",
          title: "Also typically included in a charter",
          items: ["Measurable objectives and success criteria", "High-level risks", "Summary milestone schedule", "Summary budget", "Assumptions and constraints", "Sponsor approval"],
          source: "Notes p.4",
        },
        { type: "heading", text: "How everything connects during Initiating and Planning" },
        {"type": "diagram", "kind": "flow", "title": "From need to approved plan", "steps": [{"title": "A need is identified", "text": "by the sponsor or customer", "tone": "pink"}, {"title": "Inputs gathered", "text": "business case, benefits plan, EEFs, OPAs", "tone": "orange"}, {"title": "PM drafts the charter", "tone": "yellow"}, {"title": "Sponsor signs & issues it", "text": "project and PM authorized", "tone": "green"}, {"title": "PM & team develop the PM plan", "tone": "cyan"}, {"title": "PM plan approved", "tone": "violet"}], "source": "Notes p.4"},
        {
          type: "steps",
          items: [
            "**A need is identified** by the sponsor or customer.",
            "**[1] Inputs are gathered:** business documents (the [[business-case|business case]] and [[benefits-management-plan|benefits management plan]]), company culture and existing systems ([[eef|EEFs]]), and processes and historical information ([[opa|OPAs]]). These help identify stakeholders and documents.",
            "**[2] The project manager drafts the project charter.**",
            "**[3] The sponsor signs and issues the project charter.**",
            "**[4] The project manager and team develop the project management plan.**",
            "**The project management plan is approved.**",
          ],
          source: "Notes p.4",
        },
        {
          type: "callout",
          kind: "added",
          md: "**EEF** stands for *Enterprise Environmental Factors* and **OPA** for *Organizational Process Assets*. The notes use only the abbreviations, with the short descriptions shown above.",
        },
        {
          type: "callout",
          kind: "exam",
          md: "- After the sponsor signs the charter, the **next** step is to **start identifying stakeholders' expectations and project requirements** — not to start work, validate scope or start change control (Kahoot 1 Q6).\n- \"Why is the project being done? On what financials can we justify it?\" → the **business case** (Kahoot 1 Q8).",
          source: "Kahoot 1 Q6, Q8",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "The project manager signs the charter.", right: "The **sponsor** signs and issues it. The project manager usually **drafts** it (Notes p.3–4)." },
            { wrong: "Internal projects don't need a charter.", right: "**All projects** should have a charter, internal or external (Notes p.3)." },
          ],
          source: "Notes p.3–4",
        },
      ],
      takeaways: [
        "The project manager's primary role is integration management: pulling all the pieces together into a cohesive whole.",
        "The sponsor signs and issues the charter; it formally authorizes the project and the project manager.",
        "The business case answers why the project is being done and how it is financially justified.",
        "Sequence: need → inputs (business documents, EEFs, OPAs) → PM drafts charter → sponsor signs → PM and team develop the project management plan → plan approved.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Who signs and issues the project charter?",
          options: ["The project manager", "The sponsor", "The change control board", "The project team"],
          answer: 1,
          explanation: "Notes p.3: the charter is signed and issued by the sponsor and formally authorizes the project and the project manager.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which charter element answers \"Can the project manager change the budget, schedule and team assignments?\"",
          options: ["Business case", "Resources pre-assigned", "Project manager assigned and authority level", "Key stakeholder list"],
          answer: 2,
          explanation: "Notes p.4: *Project Manager Assigned and Authority Level*.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Why might a seller create its own project charter?",
          options: ["To achieve a product scope within constraints", "To increase revenue, enhance its reputation or gain additional work", "Because the buyer's charter is not legally valid", "Sellers never create charters"],
          answer: 1,
          explanation: "Notes p.3: the buyer's reason may be product scope within constraints; the seller's may be revenue, reputation or additional work.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "pm-plan",
      title: "The project management plan and baselines",
      source: "Notes p.5; Kahoot 1 Q9",
      summary: "What the project management plan contains, and the three baselines that make up the performance measurement baseline.",
      builds_on: ["integration-charter"],
      blocks: [
        { type: "definition", term: "project-management-plan", source: "Notes p.5" },
        {
          type: "list",
          title: "Management plans integrated into the project management plan",
          items: ["Scope", "Schedule", "Cost", "Quality", "Resource", "Communications", "Risk", "Procurement", "Stakeholder engagement", "Change", "Configuration", "…and others"],
          source: "Notes p.5",
        },
        {
          type: "callout",
          kind: "exam",
          md: "The best description of a project management plan is **\"scope, risk, resource and other management plans\"** — **not** a software printout or a bar chart.",
          source: "Notes p.5",
        },
        { type: "heading", text: "Baselines" },
        { type: "definition", term: "baseline", source: "Notes p.5" },
        { type: "definition", term: "pmb", source: "Notes p.5" },
        {"type": "diagram", "kind": "equation", "title": "Performance measurement baseline", "ops": ["+", "+", "="], "terms": [{"title": "Scope baseline", "text": "scope statement + WBS + WBS dictionary", "tone": "green"}, {"title": "Schedule baseline", "text": "agreed dates of work packages and milestones", "tone": "orange"}, {"title": "Cost baseline", "text": "time-phased budget", "tone": "pink"}, {"title": "PMB", "text": "what performance is measured against"}], "source": "Notes p.5"},
        {
          type: "table",
          caption: "Performance measurement baseline = scope baseline + schedule baseline + cost baseline",
          headers: ["Baseline", "Contains"],
          rows: [
            ["[[scope-baseline|Scope baseline]]", "Project scope statement + WBS + WBS dictionary"],
            ["[[schedule-baseline|Schedule baseline]]", "The agreed-upon schedule: start and stop dates of each work package, and the scheduled milestones"],
            ["[[cost-baseline|Cost baseline]]", "The time-phased cost budget: how much money is approved, and when funds are required / available"],
          ],
          source: "Notes p.5",
        },
        {
          type: "callout",
          kind: "key",
          md: "Baselines are **what the project is controlled against**. Changing a baseline requires an **approved change request**.",
          source: "Notes p.5",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "The project baselines are scope, risk and quality.", right: "The three baselines are **scope, schedule and cost** (Notes p.5; Kahoot 1 Q9)." },
            { wrong: "The project management plan is the Gantt chart.", right: "A bar chart is only one output. The plan is the **integrated set of management plans plus the baselines** (Notes p.5)." },
            { wrong: "The project manager can update a baseline whenever the plan changes.", right: "A baseline can only change through an **approved change request** (Notes p.5)." },
          ],
          source: "Notes p.5",
        },
      ],
      takeaways: [
        "The project management plan integrates all individual management plans into one cohesive, centralized document.",
        "It includes the baselines: scope, schedule and cost. Together they form the performance measurement baseline (PMB).",
        "The project is controlled against the baselines; changing one requires an approved change request.",
      ],
      check: [
        {
          type: "multi",
          prompt: "Which baselines form the performance measurement baseline?",
          options: ["Scope", "Quality", "Schedule", "Risk", "Cost"],
          answer: [0, 2, 4],
          explanation: "PMB = scope baseline + schedule baseline + cost baseline (Notes p.5).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "What does the scope baseline contain?",
          options: ["The time-phased budget", "The project scope statement, WBS and WBS dictionary", "Start and stop dates of each work package", "The risk register"],
          answer: 1,
          explanation: "Notes p.5. The time-phased budget is the cost baseline; work package dates are the schedule baseline.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which is the best description of a project management plan?",
          options: ["A printout from project management software", "A bar chart of the project activities", "Scope, risk, resource and other management plans", "The project charter signed by the sponsor"],
          answer: 2,
          explanation: "Exam tip from Notes p.5.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "change",
      title: "Change management and integrated change control",
      source: "Notes p.5–7",
      summary: "How changes are planned for, classified, evaluated and decided, in six steps.",
      builds_on: ["pm-plan"],
      blocks: [
        {
          type: "intuition",
          md: "Every change is a trade: something gained, something paid for in time, money, quality or risk. The project manager's job is to **see the full price before anyone agrees to the change** — and, better still, to plan the project so that fewer changes are needed in the first place.",
        },
        { type: "definition", term: "change-management-plan", source: "Notes p.5" },
        {
          type: "list",
          items: [
            "Because controlling to the baselines is so important, the PM **thinks in advance** about where changes might occur and how to limit their negative effects.",
            "The PM's role is **not just to facilitate changes**. Plan the project to **minimize the need for changes** and **prevent unnecessary changes**.",
            "**Be proactive:** look for needed changes early and solve problems before they have a major negative impact.",
            "**Making changes is much costlier** than including the work from the beginning, so changes should not be undertaken lightly.",
          ],
          source: "Notes p.5",
        },
        { type: "heading", text: "Change requests" },
        {
          type: "text",
          md: "No matter how well you plan a project, **there will always be changes**.",
          source: "Notes p.5",
        },
        { type: "definition", term: "change-request", source: "Notes p.5–6" },
        {"type": "diagram", "kind": "tree", "title": "The three categories of change request", "root": {"title": "Change request", "text": "evaluated in Perform Integrated Change Control"}, "children": [{"title": "Corrective action", "text": "fix a deviation that **has occurred**", "tone": "orange"}, {"title": "Preventive action", "text": "avoid a **future** deviation", "tone": "cyan"}, {"title": "Defect repair", "text": "fix a **nonconforming** product or component", "tone": "pink"}], "source": "Notes p.5"},
        {
          type: "table",
          caption: "The three main categories of change request",
          headers: ["Category", "Purpose"],
          rows: [
            ["[[corrective-action|Corrective action]]", "Fix a deviation that **has occurred**"],
            ["[[preventive-action|Preventive action]]", "Avoid a **future** deviation"],
            ["[[defect-repair|Defect repair]]", "Fix a **nonconforming** product or component"],
          ],
          source: "Notes p.5",
        },
        {
          type: "list",
          title: "Where changes come from",
          items: ["Additions requested by the customer", "Changes to the plan that the team believes would be more efficient", "Changes to the policies and procedures used on the project"],
          source: "Notes p.6",
        },
        { type: "heading", text: "Integrated change control" },
        { type: "definition", term: "integrated-change-control", source: "Notes p.6" },
        {"type": "diagram", "kind": "tree", "title": "Possible outcomes", "root": {"title": "Perform integrated change control", "text": "impact of the change on ALL constraints"}, "children": [{"title": "Approved", "text": "update the plan and documents, then implement", "tone": "green"}, {"title": "Rejected", "text": "e.g. outside the charter or not beneficial", "tone": "red"}, {"title": "Deferred", "text": "decided later", "tone": "yellow"}], "footer": {"title": "Then communicate the decision to the stakeholders affected"}, "source": "Notes p.6–7"},
        {
          type: "list",
          items: [
            "All change requests are evaluated and then **accepted, rejected or deferred** in the Perform Integrated Change Control process.",
            "The key focus is the **impact of each change on all project constraints**.",
            "Any **scope change** must be assessed for its impact on **quality, risk, schedule, cost, resources and customer satisfaction**.",
            "The value of [[impact-analysis|impact analysis]] is to **reduce the potential risk of not fulfilling project objectives**.",
          ],
          source: "Notes p.6",
        },
        {
          type: "example",
          title: "Exam scenario",
          problem: "A customer requests a change that does not affect the schedule and is easy to do. What should the project manager do **first**?",
          steps: [
            { do: "Do **not** simply make the change.", why: "Even an easy change with no schedule impact can affect quality, risk, cost, resources or customer satisfaction." },
            { do: "Do **not** go straight to the change control board.", why: "The board needs an impact analysis to decide; going to it first skips a step." },
            { do: "**Evaluate the impacts on the other project constraints.**", why: "The key focus of integrated change control is the impact of each change on **all** constraints." },
          ],
          answer: "Evaluate the impact of the change on the other project constraints.",
          source: "Notes p.6",
        },
        { type: "heading", text: "The 6 steps for managing changes" },
        {"type": "diagram", "kind": "flow", "title": "Managing changes in six steps", "steps": [{"title": "Prevent the root cause of changes", "text": "eliminate the need for them", "tone": "violet"}, {"title": "Identify the need for a change", "text": "early discovery = smaller impact", "tone": "blue"}, {"title": "Evaluate the impact", "text": "on scope, then all other constraints", "tone": "cyan"}, {"title": "Create a change request", "text": "follow the change management plan", "tone": "green"}, {"title": "Perform integrated change control", "text": "approve, reject or defer (CCB / sponsor)", "tone": "yellow"}, {"title": "Manage stakeholders' expectations", "text": "communicate the decision", "tone": "pink"}], "source": "Notes p.6–7"},
        {
          type: "steps",
          items: [
            "**Prevent the root cause of changes.** Don't just manage changes — proactively eliminate the need for them.",
            "**Identify the need for a change.** Actively look for changes from relevant stakeholders; discovering a change early decreases its impact.",
            "**Evaluate the impact of the change.** For example, if it is a scope change, how does it affect the rest of the scope? If a schedule change, the rest of the schedule? Then all the other constraints.",
            "**Create a change request.** Any change must follow the change management plan.",
            "**Perform integrated change control.** (see the detail below)",
            "**Manage stakeholders' expectations.** Communicate the decision to the stakeholders affected by the change.",
          ],
          source: "Notes p.6–7",
        },
        {
          type: "list",
          title: "Step 5 in detail: perform integrated change control",
          ordered: true,
          items: [
            "**Assess the change.** Is it within the charter? If not, it may be a **new project**. If it is not beneficial, it should **not be approved**.",
            "**Identify options** to minimise the effect: compress the schedule, change how the work is done, adjust quality, or cut scope.",
            "**Decide.** The change is **approved, rejected or deferred**. Changes affecting the baselines or the charter usually go to the [[ccb|Change Control Board (CCB)]] and/or the sponsor.",
            "**Update** the plan and documents, then **implement** approved changes.",
          ],
          source: "Notes p.6–7",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "A good project manager makes changes happen quickly.", right: "A good PM **prevents unnecessary changes** and evaluates every change's impact before it is decided (Notes p.5)." },
            { wrong: "A change that is outside the charter should be approved if the customer wants it.", right: "If it is not within the charter, it **may be a new project** (Notes p.6)." },
            { wrong: "Integrated change control only has two outcomes: approve or reject.", right: "There are three: **approved, rejected or deferred** (Notes p.6)." },
          ],
          source: "Notes p.5–7",
        },
      ],
      takeaways: [
        "Plan to minimise and prevent changes; making changes costs much more than including the work from the start.",
        "Change requests: corrective action, preventive action, defect repair.",
        "Always evaluate the impact of a change on ALL constraints first, then follow the change management plan and integrated change control.",
        "Outcomes of integrated change control: approved, rejected or deferred — then communicate the decision to stakeholders.",
        "Six steps: prevent root cause → identify need → evaluate impact → create change request → perform integrated change control → manage stakeholders' expectations.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "A team finds that a component they delivered does not meet its specification. Which type of change request fixes it?",
          options: ["Corrective action", "Preventive action", "Defect repair", "Scope change"],
          answer: 2,
          explanation: "Defect repair fixes a nonconforming product or component. Corrective action fixes a deviation in performance from the plan.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "What is the FIRST of the six steps for managing changes?",
          options: ["Create a change request", "Identify the need for a change", "Prevent the root cause of changes", "Evaluate the impact of the change"],
          answer: 2,
          explanation: "Notes p.6: (1) Prevent the root cause of changes.",
          difficulty: 1,
        },
        {
          type: "truefalse",
          prompt: "If a requested change is not within the project charter, it may need to be treated as a new project.",
          answer: true,
          explanation: "Notes p.6, step 5: \"is it within the charter? If not, it may be a new project\".",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "After a change is decided in integrated change control, what is the final step?",
          options: ["Close the project", "Manage stakeholders' expectations by communicating the decision", "Create a new baseline without approval", "Re-sign the project charter"],
          answer: 1,
          explanation: "Step 6: manage stakeholders' expectations — communicate the decision to stakeholders affected by the change.",
          difficulty: 1,
        },
      ],
    },
  ],

  /* ---------------------------------------------------------------- terms */
  terms: [
    {
      id: "project",
      term: "Project",
      lesson: "framework",
      short: "A **temporary** endeavor, with a defined beginning and end, that creates a **unique** product, service or result. In the course's short form: *the transformation of an idea into a reality*.",
      definition: "A **project** is a temporary endeavor, with a defined beginning and end, that creates a unique product, service, or result.",
      example: "Launching a company's online store in a new country.",
      pitfall: "\"Temporary\" refers to the project, not to its result: the product it creates may last for years.",
      source: "Notes p.1; Kahoot 1 Q1",
      related: ["program", "portfolio", "operations", "project-management"],
    },
    {
      id: "project-management",
      term: "Project management",
      lesson: "framework",
      short: "The application of tools and techniques to meet the project requirements — a systematic process of managing work efficiently and effectively to deliver planned results.",
      definition: "**Project management** is the systematic process of managing work efficiently and effectively to deliver planned results. It uses skills such as influencing, organizing and strategizing, plus interpersonal and team skills. With tailored planning, work is done correctly in the most time- and cost-effective way, risks are planned for before they occur, and communication is managed effectively.",
      source: "Notes p.1; Kahoot 1 Q2",
      related: ["project", "integration-management"],
    },
    {
      id: "program",
      term: "Program",
      aliases: ["program management"],
      lesson: "framework",
      short: "A group of **related projects** managed in a coordinated way, because of their **interdependencies**. Can reduce risk, achieve economies of scale and improve management.",
      definition: "**Program management** manages a group of related projects in a coordinated way. It focuses on the interdependencies between projects and can decrease risk, achieve economies of scale and improve management. Projects are grouped into programs to provide coordinated control, support and guidance.",
      example: "A \"digital customer experience\" program containing an app project, a website project and a CRM project.",
      source: "Notes p.1",
      related: ["project", "portfolio"],
    },
    {
      id: "portfolio",
      term: "Portfolio",
      aliases: ["portfolio management"],
      lesson: "framework",
      short: "Programs, projects and related **operational work**, prioritized and implemented together to achieve a **specific strategic business goal**.",
      definition: "A **portfolio** includes programs, individual projects and related operational work, prioritized and implemented to achieve a specific strategic business goal. Combining them optimizes resource use, enhances benefits and reduces risk. **Portfolio management** selects and prioritizes the programs and projects that best achieve the organization's strategic goals.",
      source: "Notes p.1",
      related: ["program", "project", "opm", "operations"],
    },
    {
      id: "opm",
      term: "Organizational project management",
      aliases: ["OPM"],
      lesson: "framework",
      short: "The **strategic framework** that guides portfolio, program and project management so the organisation achieves its strategic goals. Strategy flows down; value flows up.",
      definition: "**Organizational Project Management (OPM)** is a strategic framework used to guide portfolio, program and project management so the organization achieves its strategic goals.",
      source: "Notes p.1–2",
      related: ["portfolio", "program", "project"],
    },
    {
      id: "operations",
      term: "Operations",
      lesson: "framework",
      short: "The **ongoing**, repetitive work of running the business. Unlike projects, operations have no planned end. They can be part of a portfolio.",
      definition: "**Operations** are the organisation's ongoing business work (for example finance, production or customer service). The notes include \"related operational work\" in a portfolio, and Slide 9 shows Operations inside the portfolio alongside programs and projects, sharing the same resources and stakeholders.",
      source: "Notes p.1; Slide 9",
      related: ["portfolio", "project"],
    },
    {
      id: "project-life-cycle",
      term: "Project life cycle",
      aliases: ["phase"],
      lesson: "process-groups",
      short: "The series of **phases** a project goes through to produce its deliverables, e.g. Research → Design → Code → Test → Transition. Phases = *what* work is done.",
      definition: "A **life cycle** is a progression of phases through a series of developmental stages. The **project life cycle** describes the phases of work on a project required to produce the deliverables.",
      example: "Software project: Research → Design → Code → Test → Transition.",
      pitfall: "Not the same as the process groups, which describe *how* the work is managed.",
      source: "Notes p.2",
      related: ["process-group", "predictive-life-cycle"],
    },
    {
      id: "predictive-life-cycle",
      term: "Predictive life cycle",
      aliases: ["plan-driven life cycle", "non-agile"],
      lesson: "process-groups",
      short: "A plan-driven life cycle in which you may go through Initiating to Closing **once for the whole project**, though parts may be repeated.",
      definition: "In a **plan-driven (predictive) life cycle**, you may go through the overall project management process (Initiating to Closing) once for the entire project, though portions may be iterated or repeated throughout the life cycle.",
      source: "Notes p.2; Slide 8",
      related: ["project-life-cycle", "rolling-wave-planning"],
    },
    {
      id: "process-group",
      term: "Process groups",
      aliases: ["Initiating", "Planning", "Executing", "Monitoring & Controlling", "Closing"],
      lesson: "process-groups",
      short: "The **5** groups of processes that manage a project: **Initiating, Planning, Executing, Monitoring & Controlling, Closing**. Every project includes all five; they can occur in every phase.",
      definition: "The **process groups** describe how project work is managed: **Initiating**, **Planning**, **Executing**, **Monitoring & Controlling** and **Closing**. Initiating feeds Planning; Planning and Executing interact; Executing and Monitoring & Controlling interact; Monitoring & Controlling loops back to Planning when re-planning is needed and leads to Closing when the phase or project is complete.",
      example: "The detailed budget is created in Planning; work is measured and analysed in Monitoring & Controlling.",
      pitfall: "Every project includes all five process groups — none can be skipped.",
      source: "Notes p.2–3; Slide 7; Kahoot 1 Q3–Q5, Q7",
      related: ["knowledge-area", "project-life-cycle"],
    },
    {
      id: "knowledge-area",
      term: "Knowledge areas",
      lesson: "process-groups",
      short: "The **10** subject areas a project manager manages: Integration, Scope, Schedule, Costs, Quality, Resources, Communication, Risks, Procurement, Stakeholders.",
      definition: "The **knowledge areas** are the ten subject areas of project management shown on Slide 7: Scope, Schedule, Costs, Resources, Risks, Procurement, Stakeholders, Communication, Quality and Integration. The International Project Management Standard has **5 process groups and 10 knowledge areas**.",
      pitfall: "Don't mix them up: process groups are *stages of managing*; knowledge areas are *subjects being managed*.",
      source: "Slide 7; Kahoot 1 Q3",
      related: ["process-group", "integration-management"],
    },
    {
      id: "rolling-wave-planning",
      term: "Agile rolling wave planning",
      aliases: ["adaptive planning"],
      lesson: "adaptive-planning",
      short: "Planning repeated **in waves, one iteration at a time**: plan the next iteration, execute it, then plan the next, while monitoring and controlling throughout.",
      definition: "In **agile rolling wave planning**, Initiating happens once at the start; Planning and Executing are repeated in each iteration (Iteration 1, 2, 3…); Monitoring & Controlling runs throughout the project; Closing happens at the end. It contrasts with non-agile planning, where planning is mostly one early effort.",
      source: "Slide 8",
      related: ["predictive-life-cycle", "process-group"],
    },
    {
      id: "integration-management",
      term: "Integration management",
      lesson: "integration-charter",
      short: "Pulling all the pieces of a project together into a **cohesive whole**. It is the project manager's **primary role**.",
      definition: "**Integration management** is the work of pulling all the pieces of a project together into a cohesive whole. It is the project manager's primary role. Its fundamental parts in this module are the project charter, the project management plan, the change management plan and handling change requests (Perform Integrated Change Control).",
      source: "Notes p.3",
      related: ["project-charter", "project-management-plan", "integrated-change-control"],
    },
    {
      id: "project-charter",
      term: "Project charter",
      lesson: "integration-charter",
      short: "The document, **signed and issued by the sponsor**, that **formally authorizes the project and the project manager**. Every project should have one.",
      definition: "The **project charter** is signed and issued by the sponsor and formally authorizes the project and the project manager. All projects should have a charter, internal or external. Its elements include the project title and description, the project manager assigned and authority level, the business case, pre-assigned resources, the key stakeholder list, stakeholder requirements as known, and the high-level product description / key deliverables.",
      example: "After it is signed, the next step is to start identifying stakeholders' expectations and project requirements.",
      pitfall: "The PM usually drafts it, but the sponsor signs it.",
      source: "Notes p.3–4; Kahoot 1 Q6",
      related: ["sponsor", "business-case", "integration-management"],
    },
    {
      id: "sponsor",
      term: "Sponsor",
      lesson: "integration-charter",
      short: "The person or group who brings the need, provides backing for the project, and **signs and issues the project charter**.",
      definition: "The **sponsor** is the person or group who identifies or brings the need, signs and issues the project charter (formally authorizing the project and project manager), and is involved in decisions on changes affecting the baselines or charter.",
      source: "Notes p.3–4, p.7; Slide 7",
      related: ["project-charter", "ccb"],
    },
    {
      id: "business-case",
      term: "Business case",
      lesson: "integration-charter",
      short: "Answers **why** the project is being done and on what **financial basis** it is justified. Part of the charter.",
      definition: "The **business case** documents the purpose and justification of the project: why it is being done and on what financial basis it is justified. Projects are created to deliver the benefits defined in the business case and benefits management plan.",
      source: "Notes p.1, p.4; Kahoot 1 Q8",
      related: ["benefits-management-plan", "project-charter"],
    },
    {
      id: "benefits-management-plan",
      term: "Benefits management plan",
      lesson: "integration-charter",
      short: "A business document that defines the **benefits** the project is expected to deliver. Together with the business case, it is an input to the charter.",
      definition: "The **benefits management plan** is a business document that defines the benefits a project should deliver. Projects are created to provide business value and deliver the benefits defined in the business case and the benefits management plan.",
      source: "Notes p.1, p.4",
      related: ["business-case"],
    },
    {
      id: "eef",
      term: "Enterprise environmental factors",
      aliases: ["EEFs"],
      lesson: "integration-charter",
      short: "The **company culture and existing systems** that influence a project. An input that helps identify stakeholders and documents.",
      definition: "**Enterprise environmental factors (EEFs)** are described in the notes as *company culture and existing systems*. Together with OPAs and business documents, they help identify stakeholders and documents during Initiating.",
      source: "Notes p.4 (full name added)",
      related: ["opa"],
    },
    {
      id: "opa",
      term: "Organizational process assets",
      aliases: ["OPAs"],
      lesson: "integration-charter",
      short: "The organisation's **processes and historical information** (e.g. past project records). An input that helps identify stakeholders and documents.",
      definition: "**Organizational process assets (OPAs)** are described in the notes as *processes and historical information*. Together with EEFs and business documents, they help identify stakeholders and documents during Initiating.",
      source: "Notes p.4 (full name added)",
      related: ["eef"],
    },
    {
      id: "project-management-plan",
      term: "Project management plan",
      lesson: "pm-plan",
      short: "The one cohesive, centralised document that **integrates all individual management plans** and contains the **baselines**.",
      definition: "The **project management plan** integrates all individual management plans (scope, schedule, cost, quality, resource, communications, risk, procurement, stakeholder engagement, change, configuration, etc.) into one cohesive, centralized document describing what is involved in the project. It also includes the project baselines, which together form the performance measurement baseline.",
      pitfall: "Best described as \"scope, risk, resource and other management plans\" — not a software printout or bar chart.",
      source: "Notes p.5",
      related: ["baseline", "pmb", "change-management-plan"],
    },
    {
      id: "baseline",
      term: "Baseline",
      lesson: "pm-plan",
      short: "The approved version of scope, schedule or cost that the project is **controlled against**. Changing it requires an **approved change request**.",
      definition: "A **baseline** is an approved part of the project management plan that the project is controlled against. The project baselines are the scope, schedule and cost baselines; changing a baseline requires an approved change request.",
      source: "Notes p.5; Kahoot 1 Q9",
      related: ["pmb", "scope-baseline", "schedule-baseline", "cost-baseline"],
    },
    {
      id: "pmb",
      term: "Performance measurement baseline",
      aliases: ["PMB"],
      lesson: "pm-plan",
      short: "**PMB = scope baseline + schedule baseline + cost baseline.** The combined baseline that performance is measured against.",
      definition: "The **performance measurement baseline (PMB)** is formed by the scope, schedule and cost baselines together.",
      formula: "\\text{PMB} = \\text{Scope} + \\text{Schedule} + \\text{Cost baselines}",
      source: "Notes p.5",
      related: ["baseline"],
    },
    {
      id: "scope-baseline",
      term: "Scope baseline",
      lesson: "pm-plan",
      short: "Project scope statement + WBS + WBS dictionary.",
      definition: "The **scope baseline** consists of the project scope statement, the work breakdown structure (WBS) and the WBS dictionary.",
      source: "Notes p.5",
      related: ["baseline", "pmb"],
    },
    {
      id: "schedule-baseline",
      term: "Schedule baseline",
      lesson: "pm-plan",
      short: "The agreed-upon schedule: start and stop dates of each work package, plus the scheduled milestones.",
      definition: "The **schedule baseline** is the agreed-upon schedule, including the start and stop dates of each work package and the scheduled milestones.",
      source: "Notes p.5",
      related: ["baseline", "pmb"],
    },
    {
      id: "cost-baseline",
      term: "Cost baseline",
      lesson: "pm-plan",
      short: "The **time-phased** cost budget: how much money is approved and **when** funds are required/available.",
      definition: "The **cost baseline** is the time-phased cost budget: how much money is approved for the project and when funds are required or available.",
      source: "Notes p.5",
      related: ["baseline", "pmb"],
    },
    {
      id: "change-management-plan",
      term: "Change management plan",
      lesson: "change",
      short: "Part of the project management plan that describes **how changes will be managed and controlled**.",
      definition: "A **change management plan** describes how changes will be managed and controlled. It is part of the project management plan. The PM uses it to think in advance about where changes might occur and how to limit their negative effects.",
      source: "Notes p.5",
      related: ["change-request", "integrated-change-control"],
    },
    {
      id: "change-request",
      term: "Change request",
      lesson: "change",
      short: "A formal request to change the project. Three main categories: **corrective action, preventive action, defect repair**. Every one is evaluated, then approved, rejected or deferred.",
      definition: "A **change request** is a formal proposal to change the project. The three main categories are corrective action, preventive action and defect repair. Changes may involve customer additions, more efficient ways of working proposed by the team, or changes to the policies and procedures used on the project. All change requests are evaluated in Perform Integrated Change Control.",
      source: "Notes p.5–6",
      related: ["corrective-action", "preventive-action", "defect-repair", "integrated-change-control"],
    },
    {
      id: "corrective-action",
      term: "Corrective action",
      lesson: "change",
      short: "A change request to **fix a deviation that has already occurred**.",
      definition: "A **corrective action** is a type of change request that fixes a deviation that has occurred.",
      source: "Notes p.5",
      related: ["change-request", "preventive-action"],
    },
    {
      id: "preventive-action",
      term: "Preventive action",
      lesson: "change",
      short: "A change request to **avoid a future deviation**.",
      definition: "A **preventive action** is a type of change request intended to avoid a future deviation.",
      source: "Notes p.5",
      related: ["change-request", "corrective-action"],
    },
    {
      id: "defect-repair",
      term: "Defect repair",
      lesson: "change",
      short: "A change request to **fix a nonconforming product or component**.",
      definition: "A **defect repair** is a type of change request that fixes a nonconforming product or component.",
      source: "Notes p.5",
      related: ["change-request"],
    },
    {
      id: "integrated-change-control",
      term: "Integrated change control",
      aliases: ["Perform Integrated Change Control"],
      lesson: "change",
      short: "The process where every change request is evaluated for its **impact on all constraints** and then **approved, rejected or deferred**.",
      definition: "**Perform Integrated Change Control** is the process in which all change requests are evaluated and then accepted, rejected or deferred. Its key focus is the impact of each change on all project constraints. The PM assesses the change (within the charter? beneficial?), identifies options to minimise its effect, obtains a decision (from the CCB and/or sponsor for changes affecting baselines or charter), updates the plan and documents, and implements approved changes.",
      pitfall: "First evaluate the impact on all constraints — don't just make the change or go straight to the CCB.",
      source: "Notes p.6–7",
      related: ["change-request", "ccb", "impact-analysis"],
    },
    {
      id: "ccb",
      term: "Change control board",
      aliases: ["CCB"],
      lesson: "change",
      short: "The group that decides on changes that affect the **baselines or the charter** (often together with the sponsor).",
      definition: "The **Change Control Board (CCB)** is the group that usually decides on change requests affecting the baselines or the charter, together with or instead of the sponsor.",
      source: "Notes p.7",
      related: ["integrated-change-control", "sponsor"],
    },
    {
      id: "impact-analysis",
      term: "Impact analysis",
      lesson: "change",
      short: "Assessing how a change affects **quality, risk, schedule, cost, resources and customer satisfaction**, to reduce the risk of not meeting project objectives.",
      definition: "**Impact analysis** assesses the effect of a change on all project constraints — for a scope change: quality, risk, schedule, cost, resources and customer satisfaction. Its value is to reduce the potential risk of not fulfilling project objectives.",
      source: "Notes p.6",
      related: ["integrated-change-control"],
    },
  ],

  /* ----------------------------------------------------- final assessment */
  quizTitle: "Core questions",
  quiz: [
    { type: "mcq", lesson: "framework", difficulty: 1, prompt: "Which definition best describes a project?", options: ["An ongoing activity that keeps the business running", "A temporary endeavor that creates a unique product, service or result", "A group of related programs aligned to a strategy", "A set of tools and techniques"], answer: 1, explanation: "Notes p.1. Ongoing work is operations; a group aligned to strategy is a portfolio." },
    { type: "mcq", lesson: "framework", difficulty: 2, prompt: "A company groups an app project, a website project and a CRM project together because they share data and depend on each other's deliverables. This grouping is a:", options: ["Portfolio", "Program", "Phase", "Process group"], answer: 1, explanation: "Related projects managed together for their interdependencies form a program (Notes p.1)." },
    { type: "truefalse", lesson: "framework", difficulty: 2, prompt: "A portfolio can include operational work as well as programs and projects.", answer: true, explanation: "Notes p.1: \"A portfolio includes programs, individual projects and related operational work.\" Slide 9 shows Operations inside the portfolio." },
    { type: "mcq", lesson: "framework", difficulty: 2, prompt: "What does OPM stand for, and what is it?", options: ["Operational Process Management — the running of day-to-day operations", "Organizational Project Management — a strategic framework guiding portfolio, program and project management", "Overall Project Measurement — the performance measurement baseline", "Organizational Process Map — a chart of company processes"], answer: 1, explanation: "Notes p.1." },
    { type: "mcq", lesson: "process-groups", difficulty: 1, prompt: "Integrated change control has resulted in a changed project management plan. Which process group do you enter?", options: ["Initiating", "Planning", "Executing", "Closing"], answer: 1, explanation: "Notes p.3 lists this as a trigger for Planning." },
    { type: "mcq", lesson: "process-groups", difficulty: 1, prompt: "The project is delivered to the customer. Which process group do you enter?", options: ["Executing", "Monitoring & Controlling", "Closing", "Initiating"], answer: 2, explanation: "Notes p.3: Closing — a phase is completed, the project is complete, or the project is delivered to the customer." },
    { type: "multi", lesson: "process-groups", difficulty: 2, prompt: "Which statements about phases and process groups are correct?", options: ["Phases describe what work is done", "Process groups describe how the work is managed", "The five process groups can be performed within every phase", "A project goes through each process group exactly once, in order"], answer: [0, 1, 2], explanation: "Notes p.2. Process groups overlap and repeat; Monitoring & Controlling can loop back to Planning." },
    { type: "mcq", lesson: "adaptive-planning", difficulty: 2, prompt: "In agile rolling wave planning (Slide 8), which process groups are repeated in every iteration?", options: ["Initiating and Closing", "Planning and Executing", "Monitoring & Controlling only", "All five process groups"], answer: 1, explanation: "Planning and Executing peaks repeat in each iteration; Initiating is at the start, Closing at the end and Monitoring & Controlling runs throughout." },
    { type: "mcq", lesson: "integration-charter", difficulty: 1, prompt: "What is the project manager's primary role?", options: ["Writing the business case", "Performing integration management", "Signing the project charter", "Chairing the change control board"], answer: 1, explanation: "Key exam point, Notes p.3." },
    {
      type: "mcq",
      lesson: "integration-charter",
      difficulty: 2,
      prompt: "Put the Initiating/Planning sequence in order. What comes immediately AFTER the sponsor signs and issues the project charter?",
      options: ["The project manager drafts the project charter", "A need is identified", "The project manager and team develop the project management plan", "The project management plan is approved"],
      answer: 2,
      explanation: "Notes p.4: need → inputs → PM drafts charter → sponsor signs → PM and team develop the plan → plan approved.",
    },
    { type: "multi", lesson: "integration-charter", difficulty: 2, prompt: "Which of these are required to develop a project charter?", options: ["Identifying stakeholders", "Defining product scope", "Creating the detailed budget", "Documenting risks", "Defining project objectives, constraints and success criteria"], answer: [0, 1, 3, 4], explanation: "Notes p.4. The detailed budget is created later, in Planning (Kahoot 1 Q5)." },
    { type: "mcq", lesson: "integration-charter", difficulty: 2, prompt: "Which inputs are described in the notes as \"company culture and existing systems\"?", options: ["OPAs", "EEFs", "The business case", "The benefits management plan"], answer: 1, explanation: "Notes p.4: Company culture & existing systems (EEFs); processes & historical information (OPAs)." },
    { type: "mcq", lesson: "pm-plan", difficulty: 2, prompt: "Which baseline tells you how much money is approved and when the funds are required?", options: ["Scope baseline", "Schedule baseline", "Cost baseline", "Quality baseline"], answer: 2, explanation: "The cost baseline is the time-phased cost budget (Notes p.5)." },
    { type: "truefalse", lesson: "pm-plan", difficulty: 1, prompt: "Changing a project baseline requires an approved change request.", answer: true, explanation: "Notes p.5." },
    { type: "mcq", lesson: "change", difficulty: 2, prompt: "A team adds extra testing to avoid a performance problem they expect next month. This is a:", options: ["Corrective action", "Preventive action", "Defect repair", "Deferred change"], answer: 1, explanation: "Preventive action avoids a future deviation." },
    { type: "mcq", lesson: "change", difficulty: 3, prompt: "A customer asks for a change that is easy to do and does not affect the schedule. What should the project manager do FIRST?", options: ["Make the change, since it is easy and has no schedule impact", "Send it straight to the change control board", "Evaluate the impacts on the other project constraints", "Refuse it to protect the baseline"], answer: 2, explanation: "Exam scenario in Notes p.6." },
    { type: "multi", lesson: "change", difficulty: 2, prompt: "What are the possible outcomes of Perform Integrated Change Control?", options: ["Approved", "Rejected", "Deferred", "Escalated to the client"], answer: [0, 1, 2], explanation: "Notes p.6: accepted (approved), rejected or deferred." },
    { type: "mcq", lesson: "change", difficulty: 2, prompt: "During integrated change control, which of these is listed as an option to minimise a change's effect?", options: ["Ignore the change", "Compress the schedule", "Remove the sponsor", "Re-issue the charter"], answer: 1, explanation: "Notes p.6: compress schedule, change how work is done, adjust quality or cut scope." },
    { type: "short", lesson: "change", difficulty: 3, prompt: "Explain why the project manager's role is \"not just to facilitate changes\", and what they should do instead.", model_answer: "Making changes is much costlier than including the work from the beginning, and every change can affect all the other constraints. So the PM should plan the project to **minimise the need for changes** and **prevent unnecessary changes**, be proactive in finding needed changes **early** (when their impact is smaller), and solve problems before they have a major negative impact. The first step of managing change is to prevent its root cause." },
  ],

  flashcards: [
    { front: "PMB = ?", back: "Scope baseline + schedule baseline + cost baseline." },
    { front: "Three types of change request", back: "Corrective action, preventive action, defect repair." },
    { front: "Outcomes of integrated change control", back: "Approved, rejected or deferred — then communicate to stakeholders." },
    { front: "The 6 steps for managing changes", back: "Prevent root cause → identify need → evaluate impact → create change request → perform integrated change control → manage stakeholders' expectations." },
    { front: "PMiP evaluation weights", back: "Commitment 20% · PM Challenge 30% · Final Test 50%." },
  ],

  teachingNotes: [
    { type: "text", md: "**Suggested order:** Lessons 2 → 3 → 5 → 6 → 7 form the core. Lesson 4 (adaptive planning) can be taught any time after Lesson 3. Lesson 1 is course logistics and can be skipped when teaching colleagues." },
    {
      type: "list",
      title: "Discussion questions",
      items: [
        "Pick a project at your company. Which program or portfolio does it belong to, and what strategic goal does it support?",
        "Why might a buyer and a seller write different charters for the same project?",
        "Think of a change on a past project that turned out expensive. Which of the six steps was skipped?",
        "When would you choose rolling wave planning over a single up-front plan?",
      ],
    },
    { type: "callout", kind: "tip", title: "What newcomers usually get wrong", md: "Confusing phases with process groups; thinking the PM signs the charter; listing \"risk\" or \"quality\" as baselines; and jumping to *make the change* or *ask the CCB* before evaluating impact on all constraints." },
  ],

  openQuestions: [
    "The notes describe EEFs and OPAs only by their short descriptions; the full names (Enterprise Environmental Factors, Organizational Process Assets) were added from standard PMI terminology.",
    "Quality, Resources and Procurement appear as knowledge areas on Slide 7 but have no dedicated notes or slides in the course materials provided.",
  ],

  coverage: [
    { source: "Slide 1", content: "Course title, framework, professor", where: "course" },
    { source: "Slide 2", content: "Active learning cycle; evaluation weights", where: "course" },
    { source: "Slide 3", content: "Strategic project plan; AI tools", where: "course" },
    { source: "Slide 4", content: "Plan themes; stakeholders → roadmap → risk plan", where: "course" },
    { source: "Slide 5", content: "\"The only limit is your imagination\"", where: "course" },
    { source: "Slide 6", content: "\"WHAT is a project?\" (section title)", where: "framework" },
    { source: "Slide 7", content: "Project management big picture; process groups; 10 knowledge areas", where: "process-groups" },
    { source: "Slide 8", content: "Adaptive planning: agile vs. non-agile", where: "adaptive-planning", status: "partial", note: "Chart redrawn in simplified form; label inconsistency flagged as a source conflict" },
    { source: "Slide 9", content: "Portfolio – Program – Project diagram", where: "framework", note: "Redrawn as a diagram" },
    { source: "Notes p.1", content: "Project, why projects, portfolio, program, project management, OPM", where: "framework" },
    { source: "Notes p.2", content: "OPM hierarchy diagram; quick check; life cycle; process group diagram", where: "framework", note: "Life cycle and process groups are in Lesson 3" },
    { source: "Notes p.3", content: "Process group flows and triggers; integration management; charter", where: "process-groups", note: "Integration and charter are in Lesson 5" },
    { source: "Notes p.4", content: "Developing a charter; charter elements; initiating/planning flow", where: "integration-charter" },
    { source: "Notes p.5", content: "Project management plan; PMB; change management plan; change request types", where: "pm-plan", note: "Change content is in Lesson 7" },
    { source: "Notes p.6", content: "Change sources and actions; exam scenario; 6 steps", where: "change" },
    { source: "Notes p.7", content: "Step 5 detail; quick revision", where: "change", note: "Quick revision points are spread across the lessons' takeaways" },
    { source: "Kahoot 1 (Q1–Q10)", content: "10 questions with answer key", where: "framework", note: "All 10 are in the Kahoot 1 question set, worded exactly as in the file; their points are also taught in Lessons 2, 3, 5 and 6" },
  ],
});
