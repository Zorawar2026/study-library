/* ==========================================================================
   Project Management in Practice — Module 3: Scope Management
   Sources: Notes "PMP Module 3: Scope Management" (8 pages),
            Slides "2_Stakeholders Scope Project Management", slides 23–30
            (slides 1–22 are in Module 2), Kahoot 3 (in quiz-extra.js).
   ========================================================================== */

const PM3_SVG_WBS = `<svg viewBox="0 0 640 230" width="640" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:12px">
<g stroke="currentColor" stroke-width="1.3" fill="none" opacity="0.8"><path d="M320 46V64M80 64H560M80 64V82M240 64V82M400 64V82M560 64V82"/>
<path d="M80 118V200M80 140H96M80 170H96M80 200H96"/><path d="M240 118V170M240 140H256M240 170H256"/><path d="M400 118V170M400 140H416M400 170H416"/><path d="M560 118V170M560 140H576M560 170H576"/></g>
<g style="fill:var(--surface);stroke:currentColor;stroke-width:1.5"><rect x="190" y="10" width="260" height="36" rx="6"/>
<rect x="20" y="82" width="120" height="36" rx="6"/><rect x="180" y="82" width="120" height="36" rx="6"/><rect x="340" y="82" width="120" height="36" rx="6"/><rect x="500" y="82" width="120" height="36" rx="6"/></g>
<g fill="currentColor" text-anchor="middle"><text x="320" y="27" font-weight="700">FINAL OUTPUT OF THE PROJECT</text><text x="320" y="41" font-size="10">Level 1</text>
<text x="80" y="104" font-weight="700">Deliverable 1</text><text x="240" y="104" font-weight="700">Deliverable 2</text><text x="400" y="104" font-weight="700">Deliverable 3</text><text x="560" y="104" font-weight="700">Deliverable n</text></g>
<g fill="currentColor" font-size="11"><text x="100" y="144">Work package 1.1</text><text x="100" y="174">Work package 1.2</text><text x="100" y="204">Work package 1.3</text>
<text x="260" y="144">Work package 2.1</text><text x="260" y="174">Work package 2.2</text><text x="420" y="144">Work package 3.1</text><text x="420" y="174">Work package 3.2</text>
<text x="580" y="144">WP n.1</text><text x="580" y="174">… WP n.k</text></g>
<text x="8" y="100" fill="currentColor" font-size="10" opacity="0.7" transform="rotate(-90 8 100)" text-anchor="middle">Level 2</text></svg>`;

const PM3_SVG_HUB = `<svg viewBox="0 0 520 260" width="520" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:13px">
<defs><marker id="pm3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#pm3a)"><path d="M225 112L150 62"/><path d="M260 108V54"/><path d="M295 112L370 62"/><path d="M300 130H382"/><path d="M295 148L370 198"/><path d="M260 152V206"/><path d="M225 148L150 198"/><path d="M220 130H138"/></g>
<rect x="220" y="108" width="80" height="44" rx="8" style="fill:var(--surface);stroke:currentColor;stroke-width:2"/>
<g fill="currentColor" text-anchor="middle"><text x="260" y="135" font-weight="800" font-size="16">WBS</text>
<text x="110" y="52">Procurement Mgmt</text><text x="260" y="44">Scheduling</text><text x="410" y="52">Project Control</text><text x="440" y="135">Resources</text>
<text x="410" y="218">Estimating</text><text x="260" y="226">Budgeting</text><text x="110" y="218">Quality Mgmt</text><text x="80" y="135">Risk Mgmt</text></g></svg>`;

const PM3_SVG_NPV = `<svg viewBox="0 0 640 300" width="640" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:12px">
<defs><marker id="pm3b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" stroke-width="1.3" fill="none"><path d="M70 150H620" marker-end="url(#pm3b)"/><path d="M80 280V20" marker-end="url(#pm3b)"/></g>
<g style="stroke:var(--t-blue)" stroke-width="1" fill="none" marker-start="url(#pm3b)" marker-end="url(#pm3b)"><path d="M120 40H300"/><path d="M300 40H580"/><path d="M300 245H420"/></g>
<path style="stroke:var(--t-red)" d="M80 150H120V188L300 222L420 150" stroke-width="2.5" fill="none"/><path d="M420 150L580 68" stroke="currentColor" stroke-width="2.5" fill="none"/>
<g style="fill:var(--t-blue)"><circle cx="120" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="420" cy="150" r="5"/><circle cx="580" cy="150" r="5"/></g>
<g style="fill:var(--t-blue)" text-anchor="middle"><text x="210" y="34">Project Execution</text><text x="440" y="34">Project Results Use</text><text x="360" y="262">Payback</text>
<text x="128" y="140" text-anchor="start">Start</text><text x="300" y="140">Completion</text><text x="420" y="140">Breakeven</text><text x="580" y="140">Close</text></g>
<g fill="currentColor"><text x="20" y="28">Cash, R</text><text x="600" y="168">Time, t</text><text x="40" y="110">NPV</text>
<text x="8" y="200">Cost</text><text style="fill:var(--t-red)" x="88" y="178">Materials</text><text style="fill:var(--t-red)" x="88" y="210">Labor</text></g>
<path d="M60 150V68" stroke="currentColor" stroke-dasharray="3 3"/></svg>`;

Academy.module({
  id: "pmip-03-scope",
  title: "Scope Management",
  subtitle: "The six scope processes, product vs project scope, requirements and the traceability matrix, the scope statement, the WBS and WBS dictionary, the scope baseline, validating and controlling scope, and NPV.",
  category: "Project Management in Practice",
  icon: "3",
  color: "#3dd68c",
  version: "1.0",
  updated: "2026-11-24",
  studyTime: "90–105 min",
  extraFiles: ["quiz-extra.js"],

  sources: [
    { id: "N3", label: "Notes — PMP Module 3: Scope Management", detail: "8 pages. Referred to as *Notes p.1–8*." },
    { id: "S3", label: "Slides — Project Management in Practice: Stakeholders and Scope Management Plan", detail: "Prof. José Cobo, Ph.D, PMP®, ESCP Business School. Slides 23–30 are used here (slides 1–22 are in Module 2). Referred to as *Slide 23–30*." },
    { id: "K3", label: "Kahoot 3 — Scope Management", detail: "10 questions with the answer key revealed by Kahoot. Shown in the *Kahoot 3* question set." },
  ],

  overview:
    "[[scope-management|Scope management]] makes sure the project does **all the work required, and only that work**. This module follows the six scope processes in order: planning how scope will be managed, collecting [[requirement|requirements]] and tracing them with the [[rtm|requirements traceability matrix]], defining scope in the [[scope-statement|project scope statement]], decomposing it into a [[wbs|work breakdown structure (WBS)]] and [[wbs-dictionary|WBS dictionary]], and then — during the project — [[validate-scope|validating]] and [[control-scope|controlling]] scope.\n\nIt also shows how the slides use the WBS at a strategic level (strategic goals → trends → strategic projects), with examples from Airbus, Singapore Airlines and AXA, and ends with how a project's value is measured over its life with [[npv|net present value (NPV)]].",

  prerequisites: ["Module 1: baselines and integrated change control.", "Module 2: stakeholders and requirements vs expectations."],

  objectives: [
    "Name the six scope management processes in order, with their process group and main output.",
    "Distinguish product scope from project scope.",
    "Classify requirements and explain the purpose of the requirements traceability matrix.",
    "List the contents of the project scope statement and state when it is created.",
    "Build a deliverable-oriented WBS and apply the guidelines for creating one.",
    "Describe the WBS dictionary and the three components of the scope baseline.",
    "Distinguish Validate Scope from Control Scope, and Control Quality from Validate Scope.",
    "Read a project cash-flow curve and calculate NPV.",
  ],

  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: "intro",
      title: "Introduction to scope management",
      source: "Notes p.1–2; Slide 23; Kahoot 3 Q8–Q9",
      summary: "What scope management is, the six scope processes, and the difference between product scope and project scope.",
      builds_on: [],
      blocks: [
        {
          type: "intuition",
          md: "Scope is the fence around the project. Everything inside the fence must be delivered; nothing outside it should be. Most scope problems come from a fence that was never drawn clearly, or one that quietly moves during the project.",
        },
        { type: "definition", term: "scope-management", source: "Notes p.2" },
        { type: "heading", text: "The six scope management processes" },
        {"type": "diagram", "kind": "flow", "title": "The scope processes", "steps": [{"title": "Plan Scope Management", "tag": "Planning", "text": "scope management plan", "tone": "violet"}, {"title": "Collect Requirements", "tag": "Planning", "text": "requirements documentation + RTM", "tone": "blue"}, {"title": "Define Scope", "tag": "Planning", "text": "project scope statement", "tone": "cyan"}, {"title": "Create WBS", "tag": "Planning", "text": "WBS + WBS dictionary → scope baseline", "tone": "green"}, {"title": "Validate Scope", "tag": "Monitoring & Controlling", "text": "accepted deliverables or change requests", "tone": "orange"}, {"title": "Control Scope", "tag": "Monitoring & Controlling", "text": "work performance information, change requests", "tone": "pink"}], "caption": "Validate Scope and Control Scope run side by side throughout Monitoring & Controlling.", "source": "Notes p.1"},
        {
          type: "steps",
          title: "Process flow (in order)",
          items: ["Plan Scope Management", "Collect Requirements", "Define Scope", "Create WBS", "Validate Scope ↔ Control Scope"],
          source: "Notes p.1",
        },
        {
          type: "table",
          caption: "The scope processes, their process group and key purpose / output",
          headers: ["Process", "Process group", "Key purpose / output"],
          rows: [
            ["Plan Scope Management", "Planning", "How scope will be planned, executed and controlled; **scope management plan** (+ requirements management plan)"],
            ["Collect Requirements", "Planning", "What stakeholders need; **requirements documentation** + **requirements traceability matrix**"],
            ["Define Scope", "Planning", "What is and is NOT included; **project scope statement**"],
            ["Create WBS", "Planning", "Decompose scope into deliverables/work packages; **WBS + WBS dictionary** (with the scope statement = **scope baseline**)"],
            ["Validate Scope", "Monitoring & Controlling", "Customer/sponsor formal acceptance of verified deliverables; **accepted deliverables** or **change requests**"],
            ["Control Scope", "Monitoring & Controlling", "Measure work performance vs scope baseline; **work performance information**, change requests, plan/document updates"],
          ],
          source: "Notes p.1",
        },
        { type: "heading", text: "Key principles" },
        {
          type: "list",
          title: "Definition",
          items: [
            "Plan **how** you will determine scope and how you will manage and control it (the scope management plan).",
            "Scope must be **clearly defined and formally approved before work starts**.",
            "A WBS is useful on **all** projects: it clarifies identified scope and helps find additional scope.",
            "The PM is responsible for getting **acceptance of deliverables throughout** the project.",
          ],
          source: "Notes p.2",
        },
        {
          type: "list",
          title: "Requirements",
          items: [
            "Requirements are elicited from **all** stakeholders, not just the person who assigned the project.",
            "Requirements must be **evaluated against the business case, ranked and prioritized** to determine what is in and out of scope.",
          ],
          source: "Notes p.2",
        },
        {
          type: "list",
          title: "Changes",
          items: [
            "While the project is being completed, check that you are doing all the work in the project management plan, and only that work — **no [[gold-plating|gold plating]] / [[scope-creep|scope creep]]**.",
            "Any change to scope must be evaluated for its effect on **time, cost, risk, quality, resources and customer satisfaction**.",
            "Changes to scope require an **approved change request**.",
            "Scope changes should **not** be approved if they relate to work that does not fit within the **project charter**.",
          ],
          source: "Notes p.2",
        },
        {
          type: "callout",
          kind: "exam",
          md: "- To properly manage the development of a project you should ensure that **the requirements and the project deliverables** are approved (Kahoot 3 Q9).\n- The process group that **focuses on completing the project deliverables** is **Executing** (Kahoot 3 Q8).",
          source: "Kahoot 3 Q8–Q9",
        },
        { type: "heading", text: "Product scope vs project scope" },
        {
          type: "table",
          caption: "Product scope vs project scope",
          headers: ["Aspect", "Product scope", "Project scope"],
          rows: [
            ["Definition", "Requirements that relate to the product, service or result; the product deliverables with their features and functions", "The **work** the team will do to deliver the product; encompasses product scope **plus** planning, coordination and management activities (meetings, reports)"],
            ["Key question", "\"What end result is needed?\"", "\"What work must be done to deliver it?\""],
            ["Measured against", "Product requirements", "The scope baseline (part of the scope management plan & project management plan)"],
          ],
          source: "Notes p.2",
        },
        { type: "definition", term: "product-scope", source: "Notes p.2" },
        { type: "definition", term: "project-scope", source: "Notes p.2" },
        {"type": "diagram", "kind": "equation", "title": "Product scope inside project scope", "ops": ["+", "="], "terms": [{"title": "Product scope", "text": "features and functions of the result", "tone": "cyan"}, {"title": "Management work", "text": "planning, coordination, meetings, reports", "tone": "orange"}, {"title": "Project scope", "text": "all the work to deliver the product"}], "source": "Notes p.2"},
        {
          type: "misconceptions",
          items: [
            { wrong: "Giving the customer extra features for free is good service.", right: "Adding work that is not in the plan is **gold plating**. The PM delivers all the work and **only** that work (Notes p.2)." },
            { wrong: "Requirements come from the sponsor who assigned the project.", right: "Requirements are elicited from **all** stakeholders (Notes p.2)." },
            { wrong: "Product scope and project scope are the same thing.", right: "Project scope = product scope **plus** the management work needed to deliver it (Notes p.2)." },
          ],
          source: "Notes p.2",
        },
      ],
      takeaways: [
        "Scope management = all the work and ONLY the work required.",
        "Six processes: Plan Scope Management, Collect Requirements, Define Scope, Create WBS (Planning); Validate Scope, Control Scope (Monitoring & Controlling).",
        "Scope must be defined and approved before work starts; changes need an approved change request and must fit the charter.",
        "Product scope = features/functions of the result; project scope = the work to deliver it.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Which two scope processes are in **Monitoring & Controlling**?",
          options: ["Define Scope and Create WBS", "Collect Requirements and Validate Scope", "Validate Scope and Control Scope", "Plan Scope Management and Control Scope"],
          answer: 2,
          explanation: "Notes p.1. The other four are in Planning.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "\"What work must be done to deliver it?\" is the key question of:",
          options: ["Product scope", "Project scope", "The business case", "The requirements traceability matrix"],
          answer: 1,
          explanation: "Product scope asks *what end result is needed*; project scope asks *what work must be done to deliver it*.",
          difficulty: 1,
        },
        {
          type: "truefalse",
          prompt: "A scope change should be approved if the customer pays for it, even if the work does not fit within the project charter.",
          answer: false,
          explanation: "Notes p.2: scope changes should not be approved if they relate to work outside the charter. (Module 1: it may be a new project.)",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "requirements",
      title: "Plan scope management and collect requirements",
      source: "Notes p.3–4; Kahoot 3 Q4, Q10",
      summary: "What the scope management plan defines, what requirements are, the four types of requirement, and the requirements traceability matrix.",
      builds_on: ["intro"],
      blocks: [
        { type: "heading", text: "Plan Scope Management" },
        { type: "definition", term: "scope-management-plan", source: "Notes p.3" },
        {
          type: "list",
          title: "The scope management plan defines",
          items: [
            "How to achieve the scope",
            "What tools to use to plan how the project will accomplish the scope",
            "How to create the WBS",
            "How scope will be managed and controlled to the project management plan",
            "How to obtain acceptance of deliverables",
          ],
          source: "Notes p.3",
        },
        { type: "heading", text: "Collect Requirements" },
        { type: "definition", term: "requirement", source: "Notes p.3; Kahoot 3 Q4" },
        {"type": "diagram", "kind": "cards", "title": "Four types of requirement", "cards": [{"title": "Quality", "text": "\"The processor should operate at 3 GHz.\"", "icon": "star", "tone": "violet"}, {"title": "Business processes", "text": "\"You must track and report the project's expenses in this way.\"", "icon": "repeat", "tone": "cyan"}, {"title": "Compliance", "text": "\"By law, we have to meet this safety standard.\"", "icon": "shield", "tone": "green"}, {"title": "Project management", "text": "\"We require risk management procedure X.\"", "icon": "flag", "tone": "orange"}], "source": "Notes p.3"},
        {
          type: "list",
          items: [
            "Requirements should relate to **solving problems or achieving the objectives in the project charter**.",
            "They may include requests about **how work is planned/managed** — e.g. systems must not be shut down during peak business hours.",
            "They may include **capabilities stakeholders want in the product** — e.g. software allowing multiple simultaneous users.",
          ],
          source: "Notes p.3",
        },
        {
          type: "table",
          caption: "Types of requirements, with examples",
          headers: ["Type", "Example"],
          rows: [
            ["**Quality**", "\"The processor should operate at 3 GHz.\""],
            ["**Business processes**", "\"You must track and report the project's expenses in this way.\""],
            ["**Compliance**", "\"By law, we have to meet this safety standard.\""],
            ["**Project management**", "\"We require risk management procedure X to be used on the project.\""],
          ],
          source: "Notes p.3",
        },
        { type: "heading", text: "Requirements traceability matrix (RTM)" },
        { type: "definition", term: "rtm", source: "Notes p.3; Kahoot 3 Q10" },
        {"type": "diagram", "kind": "flow", "title": "What the RTM traces", "numbered": false, "steps": [{"title": "Objective", "text": "why it is needed (charter, business case)", "icon": "target", "tone": "violet"}, {"title": "Requirement", "text": "what stakeholders need", "icon": "message", "tone": "cyan"}, {"title": "Deliverable", "text": "what satisfies it", "icon": "layers", "tone": "green"}, {"title": "Validation", "text": "how it was checked and accepted", "icon": "check", "tone": "orange"}], "caption": "Each requirement is traced back to the objective it serves and forward to the deliverable that meets it.", "source": "Notes p.3; Kahoot 3 Q10"},
        {
          type: "list",
          title: "Why the RTM is needed",
          items: [
            "One requirement often leads to additional, more refined requirements — especially on large projects — so it is easy to **forget where a requirement came from and why it matters**.",
            "Losing focus on the reason for a requirement can mean a **major strategic or project objective is not met**.",
            "The RTM **links requirements to objectives** (or to other requirements) to ensure strategic goals are accomplished.",
            "The matrix is used **throughout** the project to **analyse proposed changes** to project or product scope.",
          ],
          source: "Notes p.3",
        },
        {
          type: "table",
          caption: "Example RTM (X = the requirement supports the objective)",
          headers: ["Objective \\ Req.", "Req 1", "Req 2", "Req 3", "Req 4", "Req 5", "Req n"],
          rows: [
            ["Obj 1", "X", "", "X", "", "", ""],
            ["Obj 2", "", "X", "", "X", "", "X"],
            ["Obj 3", "X", "X", "X", "", "", ""],
            ["Obj k", "", "", "", "X", "", "X"],
          ],
          source: "Notes p.3–4",
        },
        {
          type: "example",
          title: "Using the RTM to assess a change",
          problem: "Using the example RTM, a stakeholder asks to drop **Req 5**. Another asks to drop **Req 1**. What does the RTM tell you about each request?",
          steps: [
            { do: "Read the **Req 5** column: it has **no X**.", why: "Req 5 does not support any listed objective. Question why it exists before keeping it." },
            { do: "Read the **Req 1** column: X against **Obj 1** and **Obj 3**.", why: "Dropping Req 1 would weaken two objectives, so its impact must be assessed before deciding." },
          ],
          answer: "Req 5 traces to no objective (review it); Req 1 supports Obj 1 and Obj 3 (dropping it needs an impact analysis through integrated change control).",
        },
        {
          type: "callout",
          kind: "added",
          md: "The worked example uses the RTM from the notes; the two change requests were added to show how the matrix is read.",
        },
        {
          type: "callout",
          kind: "note",
          title: "Two ways of describing the RTM",
          md: "The **notes** describe the RTM as linking **requirements to objectives**. **Kahoot 3 Q10** describes it as ensuring **all client requirements are matched to deliverables**. Both are correct: the RTM traces each requirement back to the objective it serves and forward to the deliverable that satisfies it.",
          source: "Notes p.3; Kahoot 3 Q10",
        },
        {
          type: "callout",
          kind: "exam",
          md: "The RTM is **not** part of the scope baseline (Kahoot 3 Q3). The scope baseline = scope statement + WBS + WBS dictionary.",
          source: "Kahoot 3 Q3",
        },
      ],
      takeaways: [
        "The scope management plan defines how to achieve scope, which tools to use, how to create the WBS, how to control scope and how to obtain acceptance.",
        "Requirement = what stakeholders need; \"a necessary condition about content and functionality of a product/service\".",
        "Four types: quality, business processes, compliance, project management.",
        "The RTM links requirements to objectives (and deliverables) and is used throughout the project to analyse changes.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "\"By law, we have to meet this safety standard\" is which type of requirement?",
          options: ["Quality", "Business process", "Compliance", "Project management"],
          answer: 2,
          explanation: "Notes p.3.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "What is the main purpose of the requirements traceability matrix?",
          options: ["To allocate resources to work packages", "To link requirements to objectives and deliverables, and analyse changes", "To record stakeholder power and interest", "To describe each work package"],
          answer: 1,
          explanation: "Notes p.3; Kahoot 3 Q10.",
          difficulty: 1,
        },
        {
          type: "multi",
          prompt: "Which of these does the scope management plan define?",
          options: ["How to create the WBS", "How to obtain acceptance of deliverables", "The detailed budget", "What tools to use to plan the scope"],
          answer: [0, 1, 3],
          explanation: "Notes p.3. The budget belongs to cost management.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "define",
      title: "Define scope and the project scope statement",
      source: "Notes p.4; Kahoot 3 Q2, Q5",
      summary: "Deciding what is and is not included, why planning is iterative, and what the project scope statement contains.",
      builds_on: ["requirements"],
      blocks: [
        { type: "definition", term: "define-scope", source: "Notes p.4" },
        {
          type: "list",
          items: [
            "Define Scope is primarily concerned with **what IS and IS NOT included** in the project and its deliverables.",
            "**Planning is iterative:** once requirements are determined and scope defined, the PM determines schedule and budget. If these don't meet sponsor/management expectations, the PM **balances requirements (scope) against budget and schedule constraints**.",
            "Through iterations, **options** for meeting scope, schedule and cost objectives are developed and **presented to management for a decision**.",
          ],
          source: "Notes p.4",
        },
        { type: "definition", term: "scope-statement", source: "Notes p.4" },
        {"type": "diagram", "kind": "cards", "title": "Inside the project scope statement", "cols": 3, "cards": [{"title": "Product scope", "icon": "star"}, {"title": "Project scope + description", "icon": "book"}, {"title": "Deliverables", "icon": "layers"}, {"title": "Acceptance criteria", "icon": "check"}, {"title": "Exclusions", "text": "what is NOT part of the project", "icon": "alert", "tone": "red"}, {"title": "Assumptions & constraints", "icon": "link"}], "source": "Notes p.4"},
        {
          type: "list",
          title: "The project scope statement may include",
          items: ["Product scope", "Project scope, including a description", "Deliverables of the project", "Acceptance criteria", "What is NOT part of the project (**exclusions**)", "Assumptions and constraints"],
          source: "Notes p.4",
        },
        {
          type: "callout",
          kind: "exam",
          md: "The project scope statement is created during **Planning** (Define Scope process) (Notes p.4; Kahoot 3 Q2).",
          source: "Notes p.4; Kahoot 3 Q2",
        },
        { type: "definition", term: "deliverable", source: "Kahoot 3 Q5" },
        {
          type: "table",
          caption: "Four definitions that Kahoot uses as options for each other (Kahoot 1 Q1–Q2, Kahoot 3 Q4–Q5)",
          headers: ["Term", "Definition used in the course"],
          rows: [
            ["Project", "The transformation of an idea into a reality"],
            ["Project management", "The application of tools and techniques to meet the project requirements"],
            ["Requirement", "A necessary condition about content and functionality of a product/service"],
            ["Deliverable", "A unique result to perform a product/service as part of a project"],
          ],
          source: "Kahoot 1 Q1–Q2; Kahoot 3 Q4–Q5",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "The scope statement only lists what is included.", right: "It also lists **exclusions** — what is NOT part of the project — which prevents misunderstandings (Notes p.4)." },
            { wrong: "Scope is defined once, then schedule and budget follow.", right: "Planning is **iterative**: scope is balanced against schedule and budget until management accepts an option (Notes p.4)." },
          ],
          source: "Notes p.4",
        },
      ],
      takeaways: [
        "Define Scope decides what is and is NOT included.",
        "Planning is iterative: scope is balanced against schedule and budget, and options are presented to management.",
        "The scope statement contains product and project scope, deliverables, acceptance criteria, exclusions, assumptions and constraints. It is created in Planning.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Which of these is part of the project scope statement but often forgotten?",
          options: ["The risk register", "Exclusions (what is not part of the project)", "The stakeholder register", "The cost baseline"],
          answer: 1,
          explanation: "Notes p.4.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The schedule and budget derived from the defined scope don't meet management's expectations. What does the PM do?",
          options: ["Start the work and hope to catch up", "Balance requirements (scope) against budget and schedule, and present options to management", "Cut the quality without telling anyone", "Cancel the project"],
          answer: 1,
          explanation: "Notes p.4: planning is iterative.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "In which process is the project scope statement created?",
          options: ["Collect Requirements", "Define Scope", "Create WBS", "Validate Scope"],
          answer: 1,
          explanation: "Notes p.4.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "wbs",
      title: "Create WBS: the work breakdown structure",
      source: "Notes p.4–6; Slides 24–27; Kahoot 3 Q1, Q6",
      summary: "What a WBS is, how to decompose scope into work packages, the guidelines for creating a WBS, why it is the foundation of planning, and how the slides use it strategically.",
      builds_on: ["define"],
      blocks: [
        {
          type: "intuition",
          md: "A project as a whole is too big to estimate, assign or control. The WBS cuts it into pieces — deliverables, then smaller deliverables, then work packages — until each piece is small enough that one person or team can be responsible for it and you can estimate it with confidence.",
        },
        { type: "definition", term: "wbs", source: "Notes p.4; Kahoot 3 Q1" },
        {
          type: "list",
          items: [
            "**Top:** usually the project name. **Next level:** often the development life cycle phases. **Lower levels:** deliverables, decomposed into smaller component deliverables, ultimately into **work packages**.",
            "Decomposition continues **until reaching the level appropriate to manage the project**.",
            "It lets you break an overwhelming project into pieces you can **plan, organise, manage and control**.",
          ],
          source: "Notes p.4",
        },
        {
          type: "callout",
          kind: "key",
          title: "Important",
          md: "On a WBS, \"work\" means **work products / deliverables**, **not activities**. A WBS is **deliverable-oriented**.",
          source: "Notes p.4",
        },
        { type: "definition", term: "work-package", source: "Notes p.4–6" },
        {
          type: "figure",
          svg: PM3_SVG_WBS,
          alt: "Generic WBS: the final output of the project at level 1, broken into deliverables 1, 2, 3 to n at level 2, each broken into work packages such as 1.1, 1.2, 1.3.",
          caption: "Generic WBS structure.",
          source: "Notes p.4–5 (redrawn)",
        },
        {
          type: "table",
          caption: "Worked example from the notes: IT services for the World Sports Championship (WSC)",
          headers: ["Deliverable (level 2)", "Work packages"],
          rows: [
            ["Technology solutions document", "Analyze available technology; check that technology is reviewed by ISC"],
            ["Telecommunications document", "Analyze local mobile network operators; check coverage & capacity of mobile networks around WSC venues"],
            ["Internet infrastructure", "Ensure supply of internet services; find 2+ diverse global internet exchange points"],
            ["Telecommunications infrastructure", "Test telecom infrastructure before sport events; allow access conditions for telecom supplier & IT integrator"],
            ["Spectrum radio frequencies", "Provide frequencies for mobile, radio & Wi-Fi networks; check all wireless spectrum necessary for WSC operations"],
            ["Further deliverables", "Deployment of solutions; sports results & information services; suppliers' transfer of knowledge"],
          ],
          source: "Notes p.5",
        },
        {
          type: "callout",
          kind: "note",
          md: "The notes say the mapping of work packages to deliverables in the WSC example is \"my best interpretation of the drag-and-drop exercise\".",
          source: "Notes p.5",
        },
        {"type": "diagram", "kind": "tree", "title": "WBS example: IT services for the World Sports Championship", "root": {"title": "IT services for the WSC project", "text": "level 1 — the final output"}, "children": [{"title": "Technology solutions document", "items": ["Analyze available technology", "Check technology is reviewed by ISC"]}, {"title": "Telecoms document", "items": ["Analyze local mobile operators", "Check coverage & capacity at venues"]}, {"title": "Internet infrastructure", "items": ["Ensure supply of internet services", "Find 2+ global exchange points"]}, {"title": "Telecoms infrastructure", "items": ["Test before sport events", "Access conditions for supplier & integrator"]}, {"title": "Spectrum radio frequencies", "items": ["Frequencies for mobile, radio & Wi-Fi", "Check all wireless spectrum needed"]}, {"title": "Further deliverables", "items": ["Deployment of solutions", "Sports results & information services", "Suppliers' transfer of knowledge"]}], "source": "Notes p.5"},
        { type: "heading", text: "Guidelines for creating a WBS" },
        {
          type: "table",
          caption: "Every WBS is unique, but every PM should follow these guidelines",
          headers: ["Guideline", "Rule"],
          rows: [
            ["**Input**", "The WBS should be created by the **PM using input from the team and other stakeholders**."],
            ["**Levels**", "Each level of the WBS is a **breakdown of the previous level**."],
            ["**Project**", "The **entire project** should be included in the highest levels; eventually some levels are broken down further."],
            ["**Deliverables**", "The WBS includes **only project deliverables that are required**; deliverables not in the WBS are **not part of the project**."],
          ],
          source: "Notes p.5",
        },
        { type: "heading", text: "The WBS is the foundation of the project" },
        {
          type: "list",
          items: [
            "Almost everything in planning after its creation relates to the WBS.",
            "**Costs and schedules are estimated at the work package (or activity) level**, not for the project as a whole.",
            "Examining the project at work-package level helps **identify more risks**.",
            "Work packages are **assigned to individuals or parts of the performing organisation**, depending on project size.",
          ],
          source: "Notes p.5–6",
        },
        {
          type: "figure",
          svg: PM3_SVG_HUB,
          alt: "The WBS at the centre, with arrows to procurement management, scheduling, project control, resources, estimating, budgeting, quality management and risk management.",
          caption: "The WBS as the hub of planning: it feeds scheduling, project control, resources, estimating, budgeting, quality management, risk management and procurement management.",
          source: "Notes p.6 (redrawn)",
        },
        {
          type: "callout",
          kind: "exam",
          md: "The WBS is best thought of as an effective aid for **stakeholder** communications (Notes p.6; Kahoot 3 Q6).",
          source: "Notes p.6; Kahoot 3 Q6",
        },
        { type: "heading", text: "The WBS at strategic level (the big picture)" },
        {"type": "diagram", "kind": "layers", "title": "Strategic WBS: from goals to projects", "rows": [{"label": "Strategic goals", "boxes": [{"title": "Market share", "text": "+5% a year"}, {"title": "Profitability", "text": "+4% a year"}, {"title": "Customer retention", "text": "+8% a year"}, {"title": "Technology readiness", "text": "75% of services"}], "tone": "violet"}, {"label": "Strategic outcome", "boxes": [{"title": "Lead the market, long-term partnership"}], "tone": "pink"}, {"label": "Trends", "boxes": ["Trend 1", "Trend 2", "Trend 3"], "tone": "orange"}, {"label": "Strategic projects", "boxes": ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6"], "tone": "cyan"}, {"label": "Foundation", "boxes": [{"title": "Project management", "text": "what, how, when, how much, what if"}, {"title": "Operations", "text": "admin, legal, finance, supply chain"}], "tone": "green"}], "source": "Slide 24"},
        {"type": "figure", "src": "img/slide-24.jpg", "alt": "Slide 24: strategic WBS", "caption": "Original slide 24: organise the strategic projects to meet the stakeholders' expectations.", "source": "Slide 24 (original)"},
        {"type": "gallery", "images": [{"src": "img/slide-25.jpg", "caption": "Slide 25: Airbus aircraft systems WBS", "alt": "Slide 25: aircraft system WBS levels 1 to 3"}, {"src": "img/slide-26.jpg", "caption": "Slide 26: Singapore Airlines customer-experience board", "alt": "Slide 26: sticky notes by travel stage"}, {"src": "img/slide-27.jpg", "caption": "Slide 27: AXA strategic vision", "alt": "Slide 27: AXA business streams"}], "title": "Examples from the slides", "source": "Slides 25–27 (original)", "cols": 3},
        {
          type: "text",
          md: "Slide 24 applies the same decomposition to strategy: **organise the strategic projects to meet the stakeholders' expectations.**",
          source: "Slide 24",
        },
        {
          type: "table",
          caption: "Strategic WBS (Slide 24), from top to bottom",
          headers: ["Level", "Content on the slide"],
          rows: [
            ["**Strategic goals** (defined in the strategic plan)", "Market share expansion — annual growth rate 5%; Profitability — annual growth rate 4%; Customer retention — annual growth rate 8%; New technology readiness — part of services 75%"],
            ["**Strategic outcome** (lead the market, long-term partnership)", "One outcome that the goals point to"],
            ["**Trends** (in which we can provide unique solutions)", "Trend 1, Trend 2, Trend 3, …"],
            ["**Strategic projects** (meet stakeholders' expectations)", "Strategic projects 1–6, … grouped under the trends"],
            ["**Foundation**", "**Project management** (what, how, when, how much, what if) and **operations** (admin, legal, finance, supply chain, outsourcing …)"],
          ],
          source: "Slide 24",
        },
        {
          type: "list",
          title: "Examples on the slides",
          items: [
            "**Airbus — aircraft systems WBS (MIL-HDBK-881)** (Slide 25). Level 1: *Aircraft System*. Level 2: Air Vehicle; SE/Program Mgmt; System T&E; Training; Data; Peculiar Support Equipment; Common Support Equipment; Op/Site Activation; Industrial Facilities; Initial Spares and Initial Repair Parts. Level 3 examples under *Air Vehicle*: airframe, propulsion, application software, system software, com/identification, navigation/guidance, central computer, fire control, data display and controls, survivability, reconnaissance, automatic flight control, central integrated checkout, antisubmarine warfare, armament, weapons delivery, auxiliary equipment. Under *System T&E*: DT&E, OT&E, mockups, T&E support, test facilities. Under *Training*: equipment, services, facilities. Under *Data*: tech pubs, engineering data, support data, management data, data depository.",
            "**Airbus × Singapore Airlines — customer-experience breakdown** (Slide 26). The scope is broken down by stage of the passenger journey: *UX before travel* (e.g. complete travel package, baggage collection, COVID-19 travel restrictions guide, modify trip dates & buy extra baggage, customise F&B before flight, check-in reminders, booking and check-in through app); *UX at departure port* (seating based on profile, seat upgradation, flight detail notifications, lounge access, departure airport navigation, online duty-free store); *UX during travel* (dedicated assistance/concierge, loyalty-based Wi-Fi access, inflight entertainment customisation, cater-to-seat service, mobile boarding pass); *UX during transit* (transit airport navigation, pitstop suggestions for longer layovers, app feature discovery, track your flight); *UX at arrival port* (baggage tracking, pre-booked pick-up, fast-track at passport control, arrival airport navigation, book a cab, explore & get deals); *UX after travel* (baggage delivery, grading experience/feedback, inspire next travel, provide perks, loyalty program); *App updates* (customer support chatbot, user-friendly UI).",
            "**AXA — strategic vision** (Slide 27). From the *business portfolio as is* (life, motor, health, travel, property and tech insurance …) to new streams: *Artificial intelligence – CX* (robotics process automation, voice and video bots, telemedicine, symptom checker, medical chart consultations, inclusive insurance); *Blockchain – Insurtech market intelligence* (fraud prevention, policy creation & claims process, streamlining routine interactions, on-demand insurance, property & casualty insurance, reinsurance, microinsurance, P2P insurance …); *Partners – new customers* (big data system, business intelligence, KPIs of business performance, emerging customers); *Cyber insurance services* (response to breach events, regulatory coverage, liability, cyber extortion, fraud transfer, data replacement, data recovery); and *Beyond insurance*.",
          ],
          source: "Slides 25–27",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "A WBS lists the activities the team will do.", right: "A WBS is **deliverable-oriented**: it lists work products, not activities (Notes p.4)." },
            { wrong: "Small projects don't need a WBS.", right: "A WBS is useful on **all** projects (Notes p.2)." },
            { wrong: "The PM creates the WBS alone.", right: "The PM creates it **using input from the team and other stakeholders** (Notes p.5)." },
          ],
          source: "Notes p.2, p.4–5",
        },
      ],
      takeaways: [
        "WBS = a visual, hierarchical, deliverable-oriented decomposition of all the project's scope into work packages.",
        "Decompose until the level appropriate to manage the project; deliverables not in the WBS are not part of the project.",
        "The PM creates it with team and stakeholder input. It is the foundation of planning: costs, schedules, risks and assignments are worked out at work-package level.",
        "The WBS is best thought of as an aid for stakeholder communications.",
        "The slides apply the same logic strategically: goals → outcome → trends → strategic projects.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "What is the lowest level of a WBS called?",
          options: ["Activity", "Work package", "Milestone", "Control account"],
          answer: 1,
          explanation: "Deliverables are decomposed ultimately into work packages (Notes p.4).",
          difficulty: 1,
        },
        {
          type: "truefalse",
          prompt: "A deliverable that does not appear in the WBS is not part of the project.",
          answer: true,
          explanation: "Notes p.5: deliverables not in the WBS are not part of the project.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Why should costs and schedules be estimated at work-package level?",
          options: ["Because the sponsor requires it", "Because estimating the project as a whole is less accurate; smaller pieces can be estimated, assigned and controlled", "Because work packages have no risks", "Because the WBS dictionary forbids project-level estimates"],
          answer: 1,
          explanation: "Notes p.5–6: estimates are made at work package (or activity) level, not for the project as a whole.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "On Slide 25, *Air Vehicle*, *Training* and *Data* are at which WBS level?",
          options: ["Level 1", "Level 2", "Level 3", "Work package level"],
          answer: 1,
          explanation: "Level 1 is Aircraft System; level 2 holds Air Vehicle, SE/Program Mgmt, System T&E, Training, Data, etc.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "dictionary",
      title: "The WBS dictionary and the scope baseline",
      source: "Notes p.6–7; Slides 28–29; Kahoot 3 Q3, Q7",
      summary: "How the WBS dictionary prevents scope creep, its fields, and what the scope baseline is made of.",
      builds_on: ["wbs"],
      blocks: [
        { type: "definition", term: "wbs-dictionary", source: "Notes p.6; Kahoot 3 Q7" },
        {
          type: "list",
          items: [
            "A work package is usually named in only **one or two words**. Assigning it with such a brief description allows too much variation — i.e. **scope creep**.",
            "The WBS dictionary solves this: it provides a **description of the work** for each work package and lists the **acceptance criteria** for each deliverable.",
            "It helps **prevent scope creep before work starts**, rather than dealing with it during the work.",
          ],
          source: "Notes p.6",
        },
        {
          type: "callout",
          kind: "exam",
          md: "- A team member unsure what work to do on a work package should consult the **WBS dictionary** (Notes p.6).\n- We can find **all the details of the project deliverables** in the **WBS dictionary** (Kahoot 3 Q7).",
          source: "Notes p.6; Kahoot 3 Q7",
        },
        {
          type: "table",
          caption: "Typical WBS dictionary fields (Notes p.6; template on Slide 28)",
          headers: ["Field", "Example / note"],
          rows: [
            ["Header", "Control account ID (e.g. *WSC-TECH-03*), work package name, date of update, responsible organization"],
            ["Work package description", "What the work is, and what it includes and excludes"],
            ["Acceptance criteria", "How the deliverable will be accepted"],
            ["Quality metrics", ""],
            ["Risks", ""],
            ["Resources assigned", ""],
            ["Estimated duration", ""],
            ["Estimated cost", ""],
            ["Interdependencies", "Other elements this work package interfaces with"],
            ["Approval", "Approved by, project manager, date"],
          ],
          source: "Notes p.6; Slide 28",
        },
        {
          type: "example",
          title: "A real WBS dictionary entry (Slide 29)",
          problem: "Project *New Aircraft*, WBS element **1.3 — Power and Lighting Subsystem**. Read the entry and identify the description, inclusions, exclusions, interfacing elements and subordinate elements.",
          steps: [
            { do: "**Description:** a summary element for the equipment that transforms rotary motion from the aircraft engines into electrical power, stores the electrical energy, distributes the electrical power to other elements, and provides and controls illumination internal and external to the aircraft (where not provided by other equipment).", why: "Makes the one-line name *Power and Lighting Subsystem* unambiguous." },
            { do: "**Includes:** all efforts to design, develop, integrate and test the above equipment and the overall Power and Lighting Subsystem.", why: "States exactly which work is in this element." },
            { do: "**Excludes:** installation and checkout of the subsystem into the airframe.", why: "Prevents scope creep — that work belongs to another element." },
            { do: "**Interfacing elements at the same level:** 1.1 Airframe, 1.2 Propulsion, 1.4 Communications, 1.5 Fittings, 1.6 Aircraft System Assembly and Integration.", why: "Shows the interdependencies." },
            { do: "**Subordinate elements at the next level:** 1.3.1 Generator No 1, 1.3.2 Generator No 2, 1.3.3 Battery Bank, 1.3.4 Power Cable Loom, 1.3.5 Light Fitting Set, 1.3.6 Power and Lighting Subsystem Design, 1.3.7 Power and Lighting Subsystem Integration.", why: "Shows how the element decomposes further." },
          ],
          answer: "The entry also records project, contract number, sheet number, revision (original, dated 3/9/93) and checked/approved signatures.",
          source: "Slide 29",
        },
        {"type": "figure", "src": "img/slide-29.jpg", "alt": "Slide 29: WBS dictionary form", "caption": "Original slide 29: a WBS dictionary entry for the Power and Lighting Subsystem.", "source": "Slide 29 (original)"},
        { type: "heading", text: "The scope baseline" },
        { type: "definition", term: "scope-baseline", source: "Notes p.6–7" },
        {"type": "diagram", "kind": "equation", "title": "Scope baseline", "ops": ["+", "+", "="], "terms": [{"title": "Project scope statement", "tone": "cyan"}, {"title": "WBS", "tone": "green"}, {"title": "WBS dictionary", "tone": "yellow"}, {"title": "Scope baseline", "text": "not the scope management plan, not the RTM"}], "source": "Notes p.6–7"},
        {
          type: "formula",
          label: "Scope baseline",
          tex: "\\text{Scope baseline} = \\text{Project scope statement} + \\text{WBS} + \\text{WBS dictionary}",
          source: "Notes p.6",
        },
        {
          type: "callout",
          kind: "exam",
          md: "- The **scope management plan** is **not** part of the scope baseline — it is a separate component of the project management plan (Notes p.7).\n- The **traceability matrix** is **not** part of the scope baseline (Kahoot 3 Q3).\n- The scope baseline is one of the three baselines in the **performance measurement baseline**, with schedule and cost (Module 1).",
          source: "Notes p.7; Kahoot 3 Q3",
        },
      ],
      takeaways: [
        "The WBS dictionary describes each work package and its acceptance criteria — preventing scope creep before work starts.",
        "Team members unsure what to do on a work package consult the WBS dictionary.",
        "Scope baseline = project scope statement + WBS + WBS dictionary. Not the scope management plan, not the RTM.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Why is a WBS dictionary needed if the WBS already names every work package?",
          options: ["The WBS dictionary replaces the WBS", "A one- or two-word name allows too much variation (scope creep); the dictionary describes the work and its acceptance criteria", "It is required by law", "It lists the stakeholders"],
          answer: 1,
          explanation: "Notes p.6.",
          difficulty: 1,
        },
        {
          type: "multi",
          prompt: "Which are components of the scope baseline?",
          options: ["Project scope statement", "WBS", "WBS dictionary", "Scope management plan", "Requirements traceability matrix"],
          answer: [0, 1, 2],
          explanation: "Notes p.6–7; Kahoot 3 Q3.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In the Slide 29 entry, installing the power and lighting subsystem into the airframe is:",
          options: ["Included in element 1.3", "Excluded from element 1.3", "A subordinate element (1.3.8)", "Not mentioned"],
          answer: 1,
          explanation: "\"The element excludes installation and checkout of the Power and Lighting Subsystem into the airframe.\"",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "validate-control",
      title: "Validate scope and control scope",
      source: "Notes p.7–8",
      summary: "How deliverables become accepted, the difference between verified and accepted deliverables, and how scope is controlled against the baseline.",
      builds_on: ["dictionary"],
      blocks: [
        { type: "heading", text: "Validate Scope" },
        { type: "definition", term: "validate-scope", source: "Notes p.7" },
        {"type": "diagram", "kind": "flow", "title": "From work to accepted deliverables", "steps": [{"title": "Deliverables", "text": "produced in Executing", "tone": "blue"}, {"title": "Control Quality", "text": "→ **verified** deliverables", "tone": "cyan"}, {"title": "Validate Scope", "text": "with the customer / sponsor", "tone": "violet"}, {"title": "Accepted deliverables", "text": "or change requests if not accepted", "tone": "green"}, {"title": "Close project or phase", "tone": "pink"}], "source": "Notes p.7"},
        {
          type: "list",
          items: [
            "Frequent, planned meetings with the customer or sponsor to gain **formal acceptance** of deliverables during Monitoring & Controlling.",
            "Ensures the project is **on track from the customer's point of view during the project**, rather than hoping for final acceptance at closure.",
            "It is better to find changes and issues **during** the project than at the end; the customer will either **accept** deliverables or make **change requests**.",
          ],
          source: "Notes p.7",
        },
        {
          type: "callout",
          kind: "exam",
          md: "Validate Scope is done at the **end of each phase** (and throughout) — not only at the end of the project or during planning.",
          source: "Notes p.7",
        },
        {
          type: "list",
          title: "Tips for Validate Scope",
          items: [
            "Work must be **completed and checked (quality control) before** each meeting with the customer, so you bring **verified** deliverables.",
            "Bring the **approved scope** — the scope baseline from the project management plan.",
            "Share information on requirements and show how they were validated — found in the **requirements traceability matrix**.",
          ],
          source: "Notes p.7",
        },
        {
          type: "steps",
          title: "Flow: from work to accepted deliverables",
          items: [
            "**Deliverables** are produced in Executing.",
            "**Control Quality** checks them internally → **verified** deliverables.",
            "**Validate Scope** with the customer/sponsor.",
            "Either **accepted deliverables** → Close Project or Phase, or **change requests** (if not accepted).",
          ],
          source: "Notes p.7",
        },
        {
          type: "table",
          caption: "Verified vs accepted",
          headers: ["", "Verified deliverable", "Accepted deliverable"],
          rows: [
            ["Produced by", "Control Quality", "Validate Scope"],
            ["Checked by", "The team, internally", "The customer or sponsor, formally"],
            ["Question answered", "Is it correct?", "Is it what we asked for?"],
          ],
          source: "Notes p.7",
        },
        { type: "heading", text: "Control Scope" },
        { type: "definition", term: "control-scope", source: "Notes p.7–8" },
        {"type": "diagram", "kind": "cycle", "title": "The Control Scope loop", "center": "Control Scope", "steps": [{"title": "Work performance data", "tone": "blue"}, {"title": "Compare with the scope baseline", "text": "+ requirements & RTM", "tone": "cyan"}, {"title": "Variance significant?", "text": "no → keep monitoring", "tone": "yellow"}, {"title": "Change request", "text": "→ integrated change control", "tone": "orange"}, {"title": "Update plan & documents", "text": "communicate performance", "tone": "green"}], "source": "Notes p.8"},
        {
          type: "list",
          items: [
            "At any point, the PM must be sure scope is being completed according to the project management plan.",
            "The PM must know the **original requirements** (requirements documentation + RTM), **measure completed work against the scope baseline**, and decide whether variances are significant enough to warrant changes.",
            "If necessary, submit a **change request** to assess the impact on all aspects of the project (via Perform Integrated Change Control).",
            "**Outputs:** work performance information, change requests, updates to the project management plan and project documents.",
          ],
          source: "Notes p.7–8",
        },
        {
          type: "steps",
          title: "Flow: the Control Scope loop",
          items: [
            "Take **work performance data**.",
            "**Compare** it against the **scope baseline** (+ requirements documentation & RTM).",
            "**Is the variance significant?** If **no**, continue monitoring.",
            "If **yes**, **submit a change request** → Perform Integrated Change Control → approved / rejected / deferred.",
            "**Update** the project management plan & documents; **communicate** work performance information.",
          ],
          source: "Notes p.8",
        },
        {
          type: "callout",
          kind: "exam",
          md: "**Control Scope** = controlling the scope of the project. **Perform Integrated Change Control** = determining the impact of a scope change on time, cost, quality, risk, resources and customer satisfaction.",
          source: "Notes p.8",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "Validate Scope happens once, at the end of the project.", right: "It happens at the **end of each phase** and throughout (Notes p.7)." },
            { wrong: "Validate Scope and Control Quality are the same check.", right: "Control Quality makes deliverables **verified** (internal, correctness); Validate Scope makes them **accepted** (customer, formal) (Notes p.7)." },
            { wrong: "Control Scope decides whether a change is approved.", right: "Control Scope detects variance and **submits** a change request; the decision is made in **Perform Integrated Change Control** (Notes p.8)." },
          ],
          source: "Notes p.7–8",
        },
      ],
      takeaways: [
        "Validate Scope = customer formal acceptance of VERIFIED deliverables, done at the end of each phase.",
        "Control Quality → verified; Validate Scope → accepted (or change requests).",
        "Control Scope = measure work against the scope baseline; significant variances become change requests handled by integrated change control.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "What must happen to deliverables **before** a Validate Scope meeting?",
          options: ["Nothing — the customer checks them", "They must be completed and checked through quality control (verified)", "They must be approved by the CCB", "They must be closed"],
          answer: 1,
          explanation: "Notes p.7 tip.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Control Scope finds a significant variance from the scope baseline. What next?",
          options: ["Fix it quietly", "Update the baseline", "Submit a change request to go through integrated change control", "Validate scope"],
          answer: 2,
          explanation: "Notes p.8 loop.",
          difficulty: 1,
        },
        {
          type: "truefalse",
          prompt: "Validate Scope should be done only at the end of the project.",
          answer: false,
          explanation: "Notes p.7: at the end of each phase (and throughout).",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "npv",
      title: "Project value over time: cash flow and NPV",
      source: "Slide 30",
      summary: "How a project's cash moves from execution to results use, and how net present value (NPV) measures its value.",
      builds_on: ["intro"],
      blocks: [
        {
          type: "intuition",
          md: "A project spends money first and earns it back later. Money received later is worth less than money today, so NPV converts every future cash flow into today's value before adding them up. If the total is positive, the project creates value.",
        },
        {
          type: "figure",
          svg: PM3_SVG_NPV,
          alt: "Cash against time. During project execution, from start to completion, cash falls below zero because of materials and labor costs. During project results use, cash rises, crosses zero at breakeven, and keeps rising until close. Payback is the period from completion to breakeven. NPV is the final cash position.",
          caption: "Project cash over time: cost during execution, payback after completion, value until close.",
          source: "Slide 30 (redrawn)",
        },
        {
          type: "list",
          title: "Reading the chart",
          items: [
            "**Project execution** (Start → Completion): **costs** — materials and labour — make cash negative.",
            "**Project results use** (Completion → Close): the project's results generate cash inflows.",
            "**Breakeven:** the point where cumulative cash returns to zero.",
            "**Payback:** the period from completion to breakeven.",
            "**NPV:** the value accumulated by close.",
          ],
          source: "Slide 30",
        },
        { type: "definition", term: "npv", source: "Slide 30" },
        {"type": "figure", "src": "img/slide-30.jpg", "alt": "Slide 30: cash flow chart with NPV, payback and breakeven", "caption": "Original slide 30: project cash over time and the NPV formula.", "source": "Slide 30 (original)"},
        {
          type: "formula",
          label: "Net present value",
          tex: "\\text{NPV} = \\sum_{t} \\frac{R(t)}{(1+i)^{t}}",
          where: [
            { symbol: "R(t)", meaning: "net cash flow in period $t$: cash inflow − outflow", unit: "currency" },
            { symbol: "i", meaning: "the discount rate", unit: "% per period" },
            { symbol: "t", meaning: "the time period (0 = today)", unit: "periods" },
          ],
          md: "NPV > 0: the project creates value at that discount rate. NPV < 0: it destroys value.",
          source: "Slide 30",
        },
        {
          type: "example",
          title: "Calculating NPV",
          problem: "A project costs €100k today (t = 0) and then returns net cash of €40k, €50k and €60k at the end of years 1, 2 and 3. The discount rate is 10%. Calculate the NPV.",
          steps: [
            { do: "$t=0$: $R = -100$, discount factor $1$ → $-100.00$.", why: "Today's cash is not discounted." },
            { do: "$t=1$: $40 / 1.1 = 36.36$.", why: "$(1+i)^1 = 1.1$." },
            { do: "$t=2$: $50 / 1.1^2 = 50 / 1.21 = 41.32$.", why: "$(1.1)^2 = 1.21$." },
            { do: "$t=3$: $60 / 1.1^3 = 60 / 1.331 = 45.08$.", why: "$(1.1)^3 = 1.331$." },
            { do: "Sum: $-100 + 36.36 + 41.32 + 45.08 = 22.76$.", why: "NPV is the sum of all discounted cash flows." },
          ],
          answer: "NPV ≈ +€22.8k, so the project creates value at a 10% discount rate.",
        },
        {
          type: "callout",
          kind: "added",
          md: "The worked example and the meaning of positive/negative NPV are not on the slide; they were added to show how the formula on Slide 30 is applied.",
        },
      ],
      takeaways: [
        "Execution creates costs (materials, labour); results use creates inflows.",
        "Payback = the period from completion to breakeven.",
        "NPV = Σ R(t) / (1+i)^t, where R = cash inflow − outflow and i = discount rate.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "In the formula on Slide 30, what is $R$?",
          options: ["The revenue only", "Cash inflow − outflow", "The discount rate", "The risk factor"],
          answer: 1,
          explanation: "Slide 30: R = Cash Inflow − Outflow; i = the discount rate.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A project returns €110k one year from now, and nothing else. At a 10% discount rate, what is that cash worth today, in €k?",
          answer: { value: 100, tolerance: 0.5, unit: "€k" },
          explanation: "$110 / 1.1 = 100$.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "On Slide 30, which period is the **payback**?",
          options: ["Start to completion", "Completion to breakeven", "Breakeven to close", "Start to close"],
          answer: 1,
          explanation: "The payback arrow runs from completion to breakeven.",
          difficulty: 1,
        },
      ],
    },
  ],

  /* ---------------------------------------------------------------- terms */
  terms: [
    { id: "scope-management", term: "Scope management", lesson: "intro", short: "Defining what work is required, then making sure **all** of that work, and **only** that work, is completed.", definition: "**Scope management** = defining what work is required, then making sure ALL of that work, and ONLY that work, is completed. Its six processes are Plan Scope Management, Collect Requirements, Define Scope, Create WBS (Planning), Validate Scope and Control Scope (Monitoring & Controlling).", source: "Notes p.1–2", related: ["product-scope", "project-scope", "scope-baseline"] },
    { id: "product-scope", term: "Product scope", lesson: "intro", short: "The features and functions of the product, service or result. Answers **\"What end result is needed?\"**; measured against product requirements.", definition: "**Product scope** is the set of requirements that relate to the product, service or result — the product deliverables with their features and functions. It answers \"What end result is needed?\" and is measured against the product requirements.", source: "Notes p.2", related: ["project-scope"] },
    { id: "project-scope", term: "Project scope", lesson: "intro", short: "The **work** the team does to deliver the product: product scope plus planning, coordination and management. Measured against the scope baseline.", definition: "**Project scope** is the work the team will do to deliver the product. It encompasses product scope plus planning, coordination and management activities (meetings, reports). It answers \"What work must be done to deliver it?\" and is measured against the scope baseline.", source: "Notes p.2", related: ["product-scope", "scope-baseline"] },
    { id: "gold-plating", term: "Gold plating", lesson: "intro", short: "Adding work or features **beyond** what was agreed, usually by the team, without a change request.", definition: "**Gold plating** is delivering more than the agreed scope — extra work not in the project management plan. Scope management means doing all the work and only that work, so gold plating is to be avoided.", source: "Notes p.2", related: ["scope-creep"] },
    { id: "scope-creep", term: "Scope creep", lesson: "intro", short: "Uncontrolled **growth of scope** without approved change requests. Prevented by clear scope definitions and the WBS dictionary.", definition: "**Scope creep** is the uncontrolled expansion of scope. It happens, for example, when a work package with a one- or two-word name allows too much variation. The WBS dictionary helps prevent scope creep before work starts.", source: "Notes p.2, p.6", related: ["gold-plating", "wbs-dictionary"] },
    { id: "scope-management-plan", term: "Scope management plan", lesson: "requirements", short: "Details **how scope will be planned, executed and controlled**, including how to create the WBS and obtain acceptance. Not part of the scope baseline.", definition: "The **scope management plan** details how scope will be planned, executed and controlled. It defines how to achieve the scope, what tools to use, how to create the WBS, how scope will be managed and controlled to the project management plan, and how to obtain acceptance of deliverables.", pitfall: "It is NOT part of the scope baseline.", source: "Notes p.3, p.7", related: ["scope-baseline"] },
    { id: "requirement", term: "Requirement", lesson: "requirements", short: "What stakeholders **need** from a project or product — \"a necessary condition about content and functionality of a product/service\".", definition: "**Requirements** are what stakeholders need from a project or product. They should relate to solving problems or achieving the objectives in the project charter, and may concern how work is planned and managed or the capabilities wanted in the product. Types: quality, business processes, compliance, project management.", example: "Quality: \"The processor should operate at 3 GHz.\"", source: "Notes p.3; Kahoot 3 Q4", related: ["rtm"] },
    { id: "rtm", term: "Requirements traceability matrix", aliases: ["RTM", "traceability matrix"], lesson: "requirements", short: "A table linking each **requirement** to the **objective** it serves (and the deliverable that meets it). Used throughout the project to analyse changes.", definition: "The **requirements traceability matrix (RTM)** links requirements to objectives (or to other requirements) to ensure strategic goals are accomplished, and ensures all client requirements are matched to deliverables. It is used throughout the project to analyse proposed changes to project or product scope.", pitfall: "Not part of the scope baseline.", source: "Notes p.3; Kahoot 3 Q3, Q10", related: ["requirement", "validate-scope"] },
    { id: "define-scope", term: "Define Scope", lesson: "define", short: "The Planning process that decides **what is and is not included**. Output: the project scope statement.", definition: "**Define Scope** is primarily concerned with what is and is not included in the project and its deliverables. Planning is iterative: scope is balanced against budget and schedule until management chooses an option. Its output is the project scope statement.", source: "Notes p.4", related: ["scope-statement"] },
    { id: "scope-statement", term: "Project scope statement", lesson: "define", short: "\"Here is the approved project and product scope.\" Includes deliverables, acceptance criteria, **exclusions**, assumptions and constraints. Created in Planning.", definition: "The **project scope statement** in effect says \"Here is the approved project and product scope for this project.\" It may include product scope, project scope with a description, deliverables, acceptance criteria, exclusions (what is not part of the project), and assumptions and constraints. It is created during Planning (Define Scope).", source: "Notes p.4; Kahoot 3 Q2", related: ["define-scope", "scope-baseline"] },
    { id: "deliverable", term: "Deliverable", lesson: "define", short: "\"A unique result to perform a product/service as part of a project\" — a work product the project must produce.", definition: "A **deliverable** is, in the course's wording, \"a unique result to perform a product/service as part of a project\". Deliverables are the work products that the WBS decomposes into work packages; they are completed in Executing.", source: "Kahoot 3 Q5, Q8", related: ["wbs", "work-package"] },
    { id: "wbs", term: "Work breakdown structure", aliases: ["WBS"], lesson: "wbs", short: "A visual, hierarchical, **deliverable-oriented** decomposition of **all** the project's scope into manageable deliverables and work packages.", definition: "The **work breakdown structure (WBS)** is a required element of project management: an organizational tool showing all the scope of a project broken down into manageable deliverables and work packages — a visual, hierarchical deconstruction of the project deliverables. It is created by the PM with input from the team and stakeholders, and is the foundation of planning.", pitfall: "Deliverables, not activities. Best thought of as an aid for stakeholder communications.", source: "Notes p.4–6; Kahoot 3 Q1, Q6", related: ["work-package", "wbs-dictionary", "scope-baseline"] },
    { id: "work-package", term: "Work package", lesson: "wbs", short: "The **lowest level** of the WBS: a piece of work small enough to estimate, schedule, assign and control.", definition: "A **work package** is the lowest level of WBS decomposition. Costs and schedules are estimated at work package (or activity) level, and work packages are assigned to individuals or parts of the performing organization.", source: "Notes p.4–6", related: ["wbs", "wbs-dictionary"] },
    { id: "wbs-dictionary", term: "WBS dictionary", lesson: "dictionary", short: "Describes the work of **each work package** and its **acceptance criteria**, so a short name can't be misread. Prevents scope creep.", definition: "The **WBS dictionary** provides a description of the work for each WBS work package and lists the acceptance criteria for each deliverable. Typical fields: control account ID, work package name, date of update, responsible organization, description, acceptance criteria, quality metrics, risks, resources, estimated duration and cost, interdependencies, approval.", example: "Element 1.3 Power and Lighting Subsystem — includes design and test; excludes installation into the airframe.", source: "Notes p.6; Slides 28–29; Kahoot 3 Q7", related: ["wbs", "scope-baseline", "scope-creep"] },
    { id: "scope-baseline", term: "Scope baseline", lesson: "dictionary", short: "**Project scope statement + WBS + WBS dictionary.** Not the scope management plan or the RTM.", definition: "The **scope baseline** is the project scope statement plus the WBS plus the WBS dictionary. It is one of the three baselines in the performance measurement baseline (with schedule and cost). The scope management plan and the traceability matrix are not part of it.", formula: "\\text{Scope statement} + \\text{WBS} + \\text{WBS dictionary}", source: "Notes p.6–7; Kahoot 3 Q3", related: ["scope-statement", "wbs", "wbs-dictionary"] },
    { id: "validate-scope", term: "Validate Scope", lesson: "validate-control", short: "Formal **customer/sponsor acceptance** of **verified** deliverables, at the end of **each phase**.", definition: "**Validate Scope** consists of frequent, planned meetings with the customer or sponsor to gain formal acceptance of deliverables during Monitoring & Controlling. The deliverables must already be verified by quality control. The customer either accepts them or makes change requests. It is done at the end of each phase and throughout.", source: "Notes p.7", related: ["control-scope", "rtm"] },
    { id: "control-scope", term: "Control Scope", lesson: "validate-control", short: "**Measuring** work performance against the **scope baseline** and managing changes to it via change requests.", definition: "**Control Scope** is measuring and assessing work performance data against the scope baseline and managing scope baseline changes. If a variance is significant, the PM submits a change request to Perform Integrated Change Control. Outputs: work performance information, change requests, plan and document updates.", pitfall: "Control Scope controls scope; integrated change control determines a change's impact and decides on it.", source: "Notes p.7–8", related: ["validate-scope", "scope-baseline"] },
    { id: "npv", term: "Net present value", aliases: ["NPV"], lesson: "npv", short: "The sum of a project's cash flows, each **discounted** to today's value: $\\text{NPV} = \\sum R(t)/(1+i)^t$.", definition: "**Net present value (NPV)** is the sum over time of the net cash flows R(t) (cash inflow − outflow) discounted at rate i: NPV = Σ R(t)/(1+i)^t. On the project cash curve, costs during execution are recovered during results use; payback runs from completion to breakeven.", formula: "\\text{NPV} = \\sum_t \\frac{R(t)}{(1+i)^t}", source: "Slide 30", related: [] },
  ],

  /* ----------------------------------------------------- final assessment */
  quizTitle: "Core questions",
  quiz: [
    { type: "mcq", lesson: "intro", difficulty: 1, prompt: "Scope management means making sure:", options: ["The project is delivered as fast as possible", "All the required work, and only that work, is completed", "The customer gets as many features as possible", "The budget is spent in full"], answer: 1, explanation: "Notes p.2." },
    { type: "mcq", lesson: "intro", difficulty: 2, prompt: "Which process produces the project scope statement?", options: ["Plan Scope Management", "Collect Requirements", "Define Scope", "Create WBS"], answer: 2, explanation: "Notes p.1." },
    { type: "mcq", lesson: "intro", difficulty: 2, prompt: "Project meetings and status reports belong to:", options: ["Product scope", "Project scope", "Neither", "The WBS dictionary only"], answer: 1, explanation: "Project scope = product scope plus planning, coordination and management activities (meetings, reports)." },
    { type: "mcq", lesson: "requirements", difficulty: 1, prompt: "\"We require risk management procedure X to be used on the project\" is a ___ requirement.", options: ["Quality", "Business process", "Compliance", "Project management"], answer: 3, explanation: "Notes p.3." },
    { type: "truefalse", lesson: "requirements", difficulty: 1, prompt: "Requirements should be ranked and prioritised against the business case to decide what is in and out of scope.", answer: true, explanation: "Notes p.2." },
    { type: "mcq", lesson: "define", difficulty: 2, prompt: "Which document says \"Here is the approved project and product scope for this project\"?", options: ["Project charter", "Project scope statement", "Scope management plan", "WBS dictionary"], answer: 1, explanation: "Notes p.4." },
    { type: "mcq", lesson: "wbs", difficulty: 1, prompt: "A WBS is oriented towards:", options: ["Activities", "Deliverables", "Resources", "Costs"], answer: 1, explanation: "Notes p.4: deliverable-oriented." },
    { type: "multi", lesson: "wbs", difficulty: 2, prompt: "Which are guidelines for creating a WBS?", options: ["Created by the PM with input from the team and stakeholders", "Each level is a breakdown of the previous level", "Include only required project deliverables", "Include only activities, not deliverables"], answer: [0, 1, 2], explanation: "Notes p.5." },
    { type: "mcq", lesson: "wbs", difficulty: 2, prompt: "Which of these does the WBS NOT directly feed, according to the hub diagram?", options: ["Scheduling", "Budgeting", "Risk management", "Stakeholder identification"], answer: 3, explanation: "The hub (Notes p.6) shows scheduling, project control, resources, estimating, budgeting, quality, risk and procurement." },
    { type: "mcq", lesson: "dictionary", difficulty: 1, prompt: "A team member is unsure what work is expected for a work package. They should consult:", options: ["The project charter", "The WBS dictionary", "The stakeholder register", "The RTM"], answer: 1, explanation: "Notes p.6 exam point." },
    { type: "mcq", lesson: "dictionary", difficulty: 2, prompt: "The scope management plan is:", options: ["Part of the scope baseline", "A separate component of the project management plan", "Part of the WBS dictionary", "Created in Executing"], answer: 1, explanation: "Notes p.7 exam point." },
    { type: "mcq", lesson: "validate-control", difficulty: 2, prompt: "What is the difference between Control Quality and Validate Scope?", options: ["There is none", "Control Quality checks correctness internally (verified); Validate Scope gains customer acceptance (accepted)", "Validate Scope happens first", "Control Quality is done by the customer"], answer: 1, explanation: "Notes p.7 flow." },
    { type: "mcq", lesson: "validate-control", difficulty: 2, prompt: "Which information does the PM bring to a Validate Scope meeting to show how requirements were validated?", options: ["The risk register", "The requirements traceability matrix", "The stakeholder cube", "The cost baseline"], answer: 1, explanation: "Notes p.7 tips." },
    { type: "mcq", lesson: "validate-control", difficulty: 3, prompt: "During Control Scope, the PM finds that a work package is 2% behind its scope, well inside the agreed tolerance. What should they do?", options: ["Submit a change request immediately", "Continue monitoring", "Re-baseline the project", "Ask the customer to validate scope"], answer: 1, explanation: "Notes p.8 loop: if the variance is not significant, continue monitoring." },
    { type: "numeric", lesson: "npv", difficulty: 3, prompt: "A project costs €50k today and returns €30k at the end of each of the next two years. At a 10% discount rate, what is its NPV in €k? (Round to one decimal.)", answer: { value: 2.07, tolerance: 0.1, unit: "€k" }, explanation: "$-50 + 30/1.1 + 30/1.21 = -50 + 27.27 + 24.79 = 2.07$." },
  ],

  flashcards: [
    { front: "The 6 scope processes, in order", back: "Plan Scope Management → Collect Requirements → Define Scope → Create WBS → Validate Scope ↔ Control Scope." },
    { front: "Scope baseline = ?", back: "Project scope statement + WBS + WBS dictionary (not the scope management plan, not the RTM)." },
    { front: "Verified vs accepted deliverables", back: "Verified = checked internally by Control Quality. Accepted = formally approved by the customer in Validate Scope." },
    { front: "4 types of requirement", back: "Quality · business processes · compliance · project management." },
  ],

  teachingNotes: [
    { type: "text", md: "**Suggested order:** Lessons 1 → 6 in order. Lesson 7 (NPV) can be taught on its own or together with Module 5 (Cost)." },
    {
      type: "list",
      title: "Discussion questions",
      items: [
        "Draw a WBS for a team event (for example, a product launch). What are the deliverables at level 2?",
        "Write a WBS dictionary entry for one work package, including an exclusion.",
        "Have you seen gold plating on a project? Why is it a problem if the customer liked it?",
        "Why is Validate Scope done at the end of each phase rather than once at the end?",
      ],
    },
    { type: "callout", kind: "tip", title: "What newcomers usually get wrong", md: "Writing activities instead of deliverables in the WBS; thinking the scope management plan or RTM is in the scope baseline; and confusing verified (Control Quality) with accepted (Validate Scope)." },
  ],

  openQuestions: [
    "The notes say the WSC work-package mapping is the note-taker's \"best interpretation of the drag-and-drop exercise\"; the exact mapping used in class may differ.",
  ],

  coverage: [
    { source: "Slide 23", content: "Section title: Scope Management", where: "intro" },
    { source: "Slide 24", content: "Strategic WBS: goals → outcome → trends → strategic projects", where: "wbs" },
    { source: "Slide 25", content: "Airbus aircraft systems WBS (MIL-HDBK-881)", where: "wbs" },
    { source: "Slide 26", content: "Airbus × Singapore Airlines customer-experience breakdown", where: "wbs" },
    { source: "Slide 27", content: "AXA strategic vision", where: "wbs" },
    { source: "Slide 28", content: "WBS dictionary template", where: "dictionary" },
    { source: "Slide 29", content: "WBS dictionary entry: Power and Lighting Subsystem", where: "dictionary" },
    { source: "Slide 30", content: "Project cash flow, payback and NPV", where: "npv" },
    { source: "Notes p.1", content: "Scope processes flowchart and table", where: "intro" },
    { source: "Notes p.2", content: "Introduction; product vs project scope", where: "intro" },
    { source: "Notes p.3", content: "Plan scope management; collect requirements; RTM", where: "requirements" },
    { source: "Notes p.4", content: "RTM example; define scope; scope statement; create WBS; generic WBS", where: "define", note: "RTM in Lesson 2; WBS in Lesson 4" },
    { source: "Notes p.5", content: "WSC example; guidelines for creating a WBS", where: "wbs" },
    { source: "Notes p.6", content: "WBS hub; WBS dictionary; scope baseline", where: "dictionary", note: "Hub diagram is in Lesson 4" },
    { source: "Notes p.7", content: "Scope baseline exam point; validate scope; control scope", where: "validate-control" },
    { source: "Notes p.8", content: "Control scope loop; quick revision", where: "validate-control" },
    { source: "Kahoot 3 (Q1–Q10)", content: "10 questions with answer key", where: "wbs", note: "All 10 are in the Kahoot 3 question set; points taught in Lessons 1–5" },
  ],
});
