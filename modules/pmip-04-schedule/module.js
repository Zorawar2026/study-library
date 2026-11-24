/* ==========================================================================
   Project Management in Practice — Module 4: Schedule Management
   Sources: Notes "PMP Review Notes - Module 4: Schedule Management" (9 pages),
            Slides "3_Schedule Management 2026" (18 slides),
            Kahoot 4 (in quiz-extra.js).
   ========================================================================== */

const PM4_SVG_CPM = `<svg viewBox="0 0 560 270" width="560" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:12px">
<defs><marker id="pm4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
<marker id="pm4b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#c0392b"/></marker></defs>
<g stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#pm4a)"><path d="M110 125L158 75"/><path d="M250 60H298"/><path d="M250 75L298 190"/><path d="M390 60L438 125"/></g>
<g stroke="#c0392b" stroke-width="2.5" fill="none" marker-end="url(#pm4b)"><path d="M110 155L158 205"/><path d="M250 220H298"/><path d="M390 205L438 155"/></g>
<g style="fill:var(--surface);stroke:currentColor;stroke-width:1.5"><rect x="20" y="110" width="90" height="60" rx="6"/><rect x="160" y="30" width="90" height="60" rx="6"/><rect x="300" y="30" width="90" height="60" rx="6"/></g>
<g style="fill:var(--surface);stroke:#c0392b;stroke-width:2.5"><rect x="20" y="110" width="90" height="60" rx="6"/><rect x="160" y="190" width="90" height="60" rx="6"/><rect x="300" y="190" width="90" height="60" rx="6"/><rect x="440" y="110" width="90" height="60" rx="6"/></g>
<g fill="currentColor" font-size="11">
<text x="26" y="124">0</text><text x="104" y="124" text-anchor="end">3</text><text x="26" y="164">0</text><text x="104" y="164" text-anchor="end">3</text>
<text x="166" y="44">3</text><text x="244" y="44" text-anchor="end">5</text><text x="166" y="84">5</text><text x="244" y="84" text-anchor="end">7</text>
<text x="166" y="204">3</text><text x="244" y="204" text-anchor="end">7</text><text x="166" y="244">3</text><text x="244" y="244" text-anchor="end">7</text>
<text x="306" y="44">5</text><text x="384" y="44" text-anchor="end">7</text><text x="306" y="84">10</text><text x="384" y="84" text-anchor="end">12</text>
<text x="306" y="204">7</text><text x="384" y="204" text-anchor="end">12</text><text x="306" y="244">7</text><text x="384" y="244" text-anchor="end">12</text>
<text x="446" y="124">12</text><text x="524" y="124" text-anchor="end">14</text><text x="446" y="164">12</text><text x="524" y="164" text-anchor="end">14</text></g>
<g fill="currentColor" text-anchor="middle" font-weight="700" font-size="14"><text x="65" y="145">A · 3</text><text x="205" y="65">B · 2</text><text x="205" y="225">C · 4</text><text x="345" y="65">D · 2</text><text x="345" y="225">E · 5</text><text x="485" y="145">F · 2</text></g>
<g fill="#2c7fb8" font-weight="700" text-anchor="middle"><text x="205" y="22">slack B = 2</text><text x="345" y="22">slack D = 5</text></g>
<g fill="currentColor" font-size="10" opacity="0.8"><text x="20" y="20">Node: ES (top left) · EF (top right)</text><text x="20" y="34">LS (bottom left) · LF (bottom right)</text><text x="400" y="262" fill="#c0392b" font-weight="700" font-size="11">critical path A–C–E–F = 14</text></g></svg>`;

const PM4_SVG_LEVEL = `<svg viewBox="0 0 560 200" width="560" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:11px">
<g fill="currentColor" font-weight="700" font-size="12"><text x="20" y="16">Before levelling</text><text x="300" y="16">After levelling</text></g>
<g stroke="currentColor" stroke-width="1" opacity="0.6"><path d="M20 170H250M300 170H540"/></g>
<g fill="#c0622b"><rect x="40" y="145" width="40" height="25"/><rect x="110" y="95" width="40" height="75"/><rect x="180" y="155" width="40" height="15"/></g>
<g fill="#2c7fb8"><rect x="310" y="135" width="40" height="35"/><rect x="368" y="135" width="40" height="35"/><rect x="426" y="135" width="40" height="35"/><rect x="484" y="160" width="40" height="10"/></g>
<g fill="currentColor" text-anchor="middle"><text x="60" y="140">5</text><text x="130" y="90">15</text><text x="200" y="150">3</text><text x="330" y="130">7</text><text x="388" y="130">7</text><text x="446" y="130">7</text><text x="504" y="155">2</text>
<text x="60" y="186">M1</text><text x="130" y="186">M2</text><text x="200" y="186">M3</text><text x="330" y="186">M1</text><text x="388" y="186">M2</text><text x="446" y="186">M3</text><text x="504" y="186">M4</text></g>
<text x="420" y="60" fill="currentColor" text-anchor="middle" opacity="0.8">flatter, but one month longer</text></svg>`;

Academy.module({
  id: "pmip-04-schedule",
  title: "Schedule Management",
  subtitle: "Planning the schedule, defining and sequencing activities, estimating durations, the critical path method and float, compression and resource optimisation, controlling the schedule, and the agile organisation.",
  category: "Project Management in Practice",
  icon: "4",
  color: "#b5651d",
  version: "1.0",
  updated: "2026-11-24",
  studyTime: "120–140 min",
  extraFiles: ["quiz-extra.js"],

  sources: [
    { id: "N4", label: "Notes — PMP Review Notes, Module 4: Schedule Management", detail: "9 pages (from PMP Learning Module 4). Referred to as *Notes p.1–9*." },
    { id: "S4", label: "Slides — Schedule Management Plan (2026)", detail: "Prof. José R. Cobo, Ph.D, PMP®, ESCP Business School. 18 slides. Referred to as *Slide 1–18*." },
    { id: "K4", label: "Kahoot 4 — Scheduling", detail: "10 questions with the answer key revealed by Kahoot. Shown in the *Kahoot 4* question set." },
  ],

  overview:
    "Schedule management covers the processes required to manage the **timely completion of the project**. A key responsibility of the project manager is to make sure the required end date can be met — and to create options to make it happen — **before** executing starts.\n\nThis module follows the schedule processes in order: planning schedule management, [[activity|defining activities]], [[logical-relationship|sequencing]] them with [[dependency|dependencies]], [[lead|leads]] and [[lag|lags]], estimating durations without [[padding|padding]], and developing the schedule with the [[cpm|critical path method]] and [[float|float]]. It then covers [[fast-tracking|fast tracking]], [[crashing|crashing]] and [[resource-leveling|resource optimisation]], controlling the schedule against the [[schedule-baseline|schedule baseline]], and the agile organisation (tribes, squads and chapters) shown in the slides.",

  prerequisites: ["Module 3: WBS, work packages and the WBS dictionary.", "Module 1: baselines and integrated change control."],

  objectives: [
    "Explain why the schedule must be realistic before executing starts, and list the schedule processes in order.",
    "Describe the contents of the schedule management plan.",
    "Decompose work packages into activities, and explain rolling wave planning and milestones.",
    "Apply the four logical relationships, the four types of dependency, and leads and lags.",
    "Explain why padding is bad practice and name the estimating techniques on the slides.",
    "Calculate the critical path, ES/EF/LS/LF and total float of a network.",
    "Choose between fast tracking, crashing, resource levelling and resource smoothing.",
    "Describe the control schedule loop and the roles in an agile organisation.",
  ],

  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: "overview",
      title: "Why schedule management matters, and the big picture",
      source: "Notes p.1; Slides 1–2, 4–6",
      summary: "The PM's responsibility for a realistic end date, the order of the schedule processes, and how they continue from the scope work.",
      builds_on: [],
      blocks: [
        {
          type: "intuition",
          md: "A deadline is a promise. Schedule management is how the PM finds out — **before** the team starts — whether that promise can be kept, and what it would take to keep it.",
        },
        {
          type: "quote",
          md: "Processes required to manage timely completion of the project.",
          source: "Slide 4",
        },
        {
          type: "callout",
          kind: "key",
          md: "A key responsibility of the project manager is making sure **the required end date can be met**, and **creating options** to make it happen, **before project executing starts**. The schedule must be **realistic** before executing begins, and you must know the **options for compressing** it.",
          source: "Notes p.1",
        },
        { type: "heading", text: "From scope to schedule" },
        {
          type: "text",
          md: "**From scope we have:** the scope statement, the WBS, the WBS dictionary and the traceability matrix (Module 3). **What are the next steps?**",
          source: "Slide 6",
        },
        {
          type: "table",
          caption: "The schedule processes (Notes p.1), compared with the next steps listed on Slide 6",
          headers: ["#", "Process (Notes)", "Process group", "Output", "Slide 6"],
          rows: [
            ["1", "Plan Schedule Management", "Planning", "Schedule management plan", "—"],
            ["2", "Define Activities", "Planning", "Work packages decomposed into activities; activity list, milestone list", "Define Activities"],
            ["3", "Sequence Activities", "Planning", "Logical relationships (FS/SS/FF/SF), dependencies, leads & lags → project schedule network diagram", "Sequence Activities"],
            ["—", "—", "—", "—", "Estimate Activity Resources"],
            ["4", "Estimate Activity Durations", "Planning", "Effort vs duration estimates for each activity", "Estimate Activity Durations"],
            ["5", "Develop Schedule", "Planning", "Critical path method, float, schedule compression, resource optimisation → schedule baseline (part of the PM plan)", "Develop Schedule"],
            ["6", "Control Schedule", "Monitoring & Controlling", "Measure vs baseline; corrective & preventive actions; change requests", "Control Schedule"],
          ],
          source: "Notes p.1; Slide 6",
        },
        {
          type: "callout",
          kind: "note",
          md: "Slide 6 also lists **Estimate Activity Resources** as a step; the notes do not have a separate section for it. Resource estimation appears on Slide 2 (step 3) and in this module's estimating lesson.",
          source: "Slide 6; Notes p.1",
        },
        {
          type: "text",
          md: "Control Schedule feeds back into planning: variances and approved changes loop back to the planning processes.",
          source: "Notes p.1",
        },
        { type: "heading", text: "The professor's summary: 5 steps from WBS to Gantt chart" },
        {
          type: "steps",
          items: [
            "**Define deliverables + work packages** (from the WBS).",
            "**Sequence the work packages** using FS, SS, FF and SF relationships.",
            "**Estimate resources and allocate them:** *work* (€ per unit of time — people, equipment) and *material* (€ per unit).",
            "**Estimate the duration of the work packages** → this gives the **direct costs**.",
            "**Optimise the schedule:** use the **CPM** to find the **critical path**, then apply **compression techniques**.",
          ],
          source: "Slide 2",
        },
        {
          type: "text",
          md: "The result is a **Gantt chart** that shows, for every work package, its timing ($t$), its resources ($R$) and its cost (€).",
          source: "Slide 2",
        },
        { type: "heading", text: "The schedule at strategic level" },
        {
          type: "text",
          md: "Slide 5 shows a long-term roadmap: a **New 2035 Product–Service Portfolio** for *[your company]*, laid out by quarter from **Q1 2027 to Q4 2034**. Each stream (for example **Artificial Intelligence**) contains projects scheduled over time — e.g. an *AI personalization platform* and a *smart customer assistant*, followed by *predictive and recommendation services*.",
          source: "Slide 5",
        },
      ],
      takeaways: [
        "The PM must make sure the end date can be met — and create options — before executing starts.",
        "Processes: Plan Schedule Management → Define Activities → Sequence Activities → Estimate Activity Durations → Develop Schedule (Planning) → Control Schedule (Monitoring & Controlling).",
        "Slide 2's five steps: define deliverables/WPs → sequence → estimate and allocate resources → estimate durations (direct costs) → optimise with CPM and compression.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "By when must the schedule be realistic?",
          options: ["By the first status report", "Before project executing starts", "By the end of the first phase", "Before closing"],
          answer: 1,
          explanation: "Notes p.1.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which schedule process is in Monitoring & Controlling?",
          options: ["Sequence Activities", "Develop Schedule", "Control Schedule", "Define Activities"],
          answer: 2,
          explanation: "All the others are Planning processes.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "On Slide 2, estimating the duration of work packages gives you:",
          options: ["The critical path", "The direct costs", "The WBS", "The lag times"],
          answer: 1,
          explanation: "Step 4: estimate duration of WPs → direct costs (duration × the € per unit of time of the resources).",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "plan-define",
      title: "Plan schedule management and define activities",
      source: "Notes p.1–3",
      summary: "What the schedule management plan specifies, how work packages become activities, rolling wave planning and milestones.",
      builds_on: ["overview"],
      blocks: [
        { type: "heading", text: "Plan Schedule Management" },
        { type: "definition", term: "plan-schedule-management", source: "Notes p.1" },
        {
          type: "list",
          items: [
            "Many PMs just work and **hope to meet the deadline**. Proper schedule management means **developing and following a plan** and **measuring progress** along the way.",
            "As part of planning you decide **in advance**: the measures of performance; how and when you will capture data to evaluate schedule performance; how you will use the data to keep the project on track; and what you will do when variances occur.",
          ],
          source: "Notes p.1",
        },
        {
          type: "list",
          title: "Key questions it answers",
          items: ["\"Who will be involved, and what approach will we take to plan the schedule?\"", "\"What processes and procedures will we use to create the schedule?\""],
          source: "Notes p.1",
        },
        { type: "definition", term: "schedule-management-plan", source: "Notes p.2" },
        {
          type: "table",
          caption: "What the schedule management plan specifies",
          headers: ["Element", "Content"],
          rows: [
            ["**Rules for estimation**", "Units (hours, days, weeks); estimate both **effort** (labour, e.g. 12 hours) and **duration** (work periods, e.g. 1.5 days)"],
            ["**Schedule baseline**", "Used to measure against during monitoring & controlling"],
            ["**Variance threshold**", "The acceptable amount of variance"],
            ["**Performance measures**", "Used to identify variances early"],
            ["**Variance management**", "Plan for how schedule variances will be managed"],
            ["**Changes**", "Schedule change control procedures"],
            ["**Reports**", "Types of reports required relating to schedule"],
            ["**Project reporting**", "Formats and frequency"],
            ["**Releases and iterations**", "Length of releases and iterations (adaptive life cycle)"],
          ],
          source: "Notes p.2",
        },
        { type: "definition", term: "effort-duration", source: "Notes p.2" },
        { type: "heading", text: "Define Activities" },
        { type: "definition", term: "activity", source: "Notes p.2" },
        {
          type: "steps",
          title: "Decomposition",
          items: ["Project", "Deliverables (WBS)", "Work packages (lowest WBS level)", "Activities (schedule level)", "Sequenced in the network diagram"],
          source: "Notes p.2",
        },
        {
          type: "callout",
          kind: "note",
          md: "Defining activities is **not always a separate process**: many PMs combine it with creating the WBS and WBS dictionary, decomposing work packages straight into activities.",
          source: "Notes p.2",
        },
        { type: "heading", text: "Rolling wave planning" },
        { type: "definition", term: "rolling-wave", source: "Notes p.3" },
        {
          type: "table",
          caption: "As time passes, the \"detail wave\" rolls forward",
          headers: ["Near term", "Mid term", "Far future"],
          rows: [["Detailed activities", "Work packages", "High-level deliverables / planning packages"]],
          source: "Notes p.3",
        },
        {
          type: "callout",
          kind: "key",
          md: "Iterations of rolling wave planning may add new activities and further detail others, so they may require **updates to the PM plan** (schedule, scope and/or cost baselines). Such changes need **integrated change control**, starting with a **change request**.",
          source: "Notes p.3",
        },
        { type: "heading", text: "Milestones" },
        { type: "definition", term: "milestone", source: "Notes p.3" },
        {
          type: "list",
          items: [
            "Examples: a completed design; customer-imposed due dates for interim deliverables; a company-required checkpoint.",
            "**Initial milestones** are documented in the **project charter**; the PM can add more milestones as **checkpoints** to help control the project.",
            "If a milestone is reached and the planned work is not complete, the project is **not progressing as planned**.",
          ],
          source: "Notes p.3",
        },
        {
          type: "callout",
          kind: "exam",
          md: "\"What is a milestone's duration?\" → It has **no duration** (zero).",
          source: "Notes p.3",
        },
      ],
      takeaways: [
        "Plan Schedule Management documents how you will plan, manage and control the project to the schedule baseline, and manage variances.",
        "The schedule management plan sets estimation rules (effort and duration), the baseline, variance thresholds, performance measures, change procedures and reporting.",
        "Work packages are decomposed into activities small enough to estimate, schedule, monitor and control.",
        "Rolling wave planning = progressive elaboration; its changes go through integrated change control.",
        "Milestones are significant events with zero duration; initial ones are in the charter.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "A task takes 12 hours of labour, spread over 1.5 working days. Which figure is the **effort** and which the **duration**?",
          options: ["Effort 1.5 days, duration 12 hours", "Effort 12 hours, duration 1.5 days", "Both are effort", "Both are duration"],
          answer: 1,
          explanation: "Notes p.2: effort = labour (12 hours); duration = work periods (1.5 days).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Rolling wave planning is a form of:",
          options: ["Crashing", "Progressive elaboration", "Resource levelling", "Fast tracking"],
          answer: 1,
          explanation: "Notes p.3.",
          difficulty: 1,
        },
        {
          type: "truefalse",
          prompt: "A milestone is a short activity, usually lasting one day.",
          answer: false,
          explanation: "A milestone is a significant event with zero duration; it is not a work activity.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "sequence",
      title: "Sequence activities: relationships, dependencies, leads and lags",
      source: "Notes p.3–4; Slides 2, 7; Kahoot 4 Q2, Q6, Q7, Q9",
      summary: "Putting activities in order: the four logical relationships, the four types of dependency, leads and lags, and the network diagram.",
      builds_on: ["plan-define"],
      blocks: [
        { type: "definition", term: "sequence-activities", source: "Notes p.3" },
        {
          type: "callout",
          kind: "exam",
          md: "The step that **defines the design logic and implementation** of a project is to **sequence work packages** (Kahoot 4 Q9).",
          source: "Kahoot 4 Q9; Slide 2",
        },
        { type: "heading", text: "The four logical relationships" },
        { type: "definition", term: "logical-relationship", source: "Notes p.3–4" },
        {
          type: "table",
          caption: "The four logical relationships (A = predecessor, B = successor)",
          headers: ["Relationship", "Rule", "How often used"],
          rows: [
            ["**Finish-to-Start (FS)**", "A must **finish** before B can **start**", "Most commonly used"],
            ["**Start-to-Start (SS)**", "A must **start** before B can **start**", ""],
            ["**Finish-to-Finish (FF)**", "A must **finish** before B can **finish**", ""],
            ["**Start-to-Finish (SF)**", "A must **start** before B can **finish**", "Rarely used"],
          ],
          source: "Notes p.3–4; Kahoot 4 Q6",
        },
        {
          type: "callout",
          kind: "tip",
          title: "Memory tip",
          md: "The **first word** belongs to the **predecessor** (A), the **second word** to the **successor** (B).",
          source: "Notes p.4",
        },
        { type: "heading", text: "Types of dependency" },
        { type: "definition", term: "dependency", source: "Notes p.4" },
        {
          type: "table",
          caption: "Types of dependency",
          headers: ["Type", "What it means", "Example / exam note"],
          rows: [
            ["**Mandatory** (hard logic)", "Inherent in the nature of the work, or required by a contract", "You must design before you build; deliverable designs complete before manufacturing begins"],
            ["**Discretionary** (soft logic)", "The way the organisation has **chosen** to have the work performed", "Key when compressing the schedule — these can be changed to **fast track** the project"],
            ["**External**", "Based on the needs or desires of a party **outside** the project", "Government approvals; suppliers' deliveries"],
            ["**Internal**", "Based on the needs of the project; may be something the team can control", "Team must finish testing a component before integrating it"],
          ],
          source: "Notes p.4",
        },
        {
          type: "callout",
          kind: "note",
          md: "- The notes say the *Internal* example (testing before integrating) is \"an added illustration, not from the module\".\n- Dependencies can be **combined**: e.g. mandatory + external, discretionary + internal.\n- Exam check: designs of several deliverables must be complete before manufacturing can begin → **mandatory** dependency (Notes p.4; Kahoot 4 Q2).",
          source: "Notes p.4; Kahoot 4 Q2",
        },
        { type: "heading", text: "Leads and lags" },
        { type: "definition", term: "lead", source: "Notes p.4; Slide 7" },
        { type: "definition", term: "lag", source: "Notes p.4; Slide 7" },
        {
          type: "example",
          title: "A lead and a lag",
          problem: "(1) Database design runs from day 1 to day 20, and web page design (FS) can start 5 days before it finishes. (2) Writing a draft and editing it are linked SS + 15 days.",
          steps: [
            { do: "**Lead:** without it, web page design starts on day 21. With a 5-day lead it starts on **day 16**; days 16–20 overlap.", why: "A lead lets the successor start before the predecessor is completed (acceleration)." },
            { do: "**Lag:** editing starts **15 days after writing starts**.", why: "SS + 15: start-to-start with 15 days of waiting time inserted (delay)." },
          ],
          answer: "Lead = start early (overlap); lag = waiting time (delay).",
          source: "Notes p.4",
        },
        {
          type: "callout",
          kind: "exam",
          md: "- \"Lag means\" → **waiting time** (Notes p.4).\n- \"A schedule activity may begin 10 days before the predecessor activity finishes\" → a dependency with **lead** time (Kahoot 4 Q7).\n- Don't confuse lag with float: time an activity can be delayed without delaying the project finish = **total float**; without delaying the early start of its successor = **free float**.",
          source: "Notes p.4; Kahoot 4 Q7",
        },
        { type: "heading", text: "The network diagram" },
        { type: "definition", term: "network-diagram", source: "Notes p.3; Slide 7" },
        {
          type: "list",
          title: "The example network on Slide 7",
          items: [
            "**Begin** leads to three activities: **A**, **H** and **K**.",
            "A → B. B → C is **SS** (start-to-start). H → C. C → D → E. B → E. E → **End**.",
            "H → F. F → G is **FS + 15** (finish-to-start with a 15-day lag). G → End.",
            "H → I is **SS + 10** (start-to-start with a 10-day lag). K → I. I → J. J → End.",
            "K → L. L → J is **FF** (finish-to-finish).",
          ],
          source: "Slide 7",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "A lag and a lead are the same thing in opposite directions, so either can be used.", right: "A lead **accelerates** the successor (overlap); a lag **delays** it (waiting time) (Notes p.4)." },
            { wrong: "Mandatory dependencies can be changed to fast track.", right: "Only **discretionary** dependencies (soft logic) can be changed to fast track (Notes p.4)." },
          ],
          source: "Notes p.4",
        },
      ],
      takeaways: [
        "Sequence Activities puts activities in order and produces the project schedule network diagram.",
        "FS is the most common relationship; SF is the rarest. First word = predecessor, second = successor.",
        "Mandatory = hard logic; discretionary = soft logic (changed to fast track); external = outside party; internal = within the project.",
        "Lead = start early (overlap); lag = waiting time (delay).",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Testing of a module cannot **finish** until coding of that module has **finished**. Which relationship is this?",
          options: ["Finish-to-Start", "Start-to-Start", "Finish-to-Finish", "Start-to-Finish"],
          answer: 2,
          explanation: "A (coding) must finish before B (testing) can finish.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The team prefers to finish the user manual before training starts, but it is not technically required. This is a:",
          options: ["Mandatory dependency", "Discretionary dependency", "External dependency", "Lag"],
          answer: 1,
          explanation: "It is how the organisation has chosen to do the work — soft logic.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "You must wait 3 days after pouring concrete before building the frame. This waiting time is a:",
          options: ["Lead", "Lag", "Float", "Milestone"],
          answer: 1,
          explanation: "Notes p.4 example of a lag.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "On Slide 7, what is the relationship between F and G?",
          options: ["SS + 10", "FS + 15", "FF", "SS"],
          answer: 1,
          explanation: "F → G is labelled FS + 15: G can start 15 days after F finishes.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "estimate",
      title: "Estimate activity durations",
      source: "Notes p.5; Slides 2, 17",
      summary: "The inputs to realistic duration estimates, why padding is bad practice, and the estimating techniques on the slides.",
      builds_on: ["sequence"],
      blocks: [
        {
          type: "text",
          md: "Once activities are defined and sequenced, estimate **how long each activity will take**. For realistic estimates you need access to these inputs:",
          source: "Notes p.5",
        },
        {
          type: "table",
          caption: "Inputs to Estimate Activity Durations",
          headers: ["Input", "Why it matters"],
          rows: [
            ["Activity list & activity attributes", "Including required leads and lags to factor into the estimates"],
            ["Assumption log", "Assumptions and constraints that contribute to risk in the activities"],
            ["Lessons learned register", "From earlier in this project or past similar projects"],
            ["Resource breakdown structure (RBS)", "Categories of resources required"],
            ["Resource requirements", "Skill levels of the resources needed for specific work"],
            ["Project team assignments", "Number and experience level of the people committed"],
            ["Resource calendars", "When key specialised resources are available; if not available, add time (less experienced people may do the work)"],
            ["Risk register", "Identified threats and opportunities to reflect in the estimates"],
          ],
          source: "Notes p.5",
        },
        { type: "heading", text: "Estimating techniques (Slide 17)" },
        { type: "definition", term: "estimating-techniques", source: "Slide 17" },
        {
          type: "table",
          headers: ["Technique", "Description"],
          rows: [
            ["**Expert judgment**", "Estimates from people with experience of similar work"],
            ["**Analogous estimating**", "**Top-down** estimating, using **historical data**"],
            ["**Parametric estimating**", "An **algorithm** calculates duration from project parameters"],
            ["**Group decision making**", "e.g. brainstorming"],
            ["**Reserve analysis**", "Including **contingency reserves (buffers)** for schedule uncertainty"],
          ],
          source: "Slide 17",
        },
        {
          type: "example",
          title: "Parametric estimating (Slide 17)",
          problem: "The assigned resource can install **25 metres of cable per hour**. How long does it take to install **1,000 metres**?",
          steps: [{ do: "Duration = quantity ÷ rate = $1000 / 25 = 40$.", why: "Parametric estimating uses an algorithm based on a project parameter (here, metres per hour)." }],
          answer: "40 hours.",
          source: "Slide 17",
        },
        {
          type: "callout",
          kind: "note",
          md: "Slide 2 adds that resources are estimated and allocated as **work** (€ per unit of time — people, equipment) or **material** (€ per unit). Multiplying durations by these rates gives the **direct costs** — the bridge to cost management (Module 5).",
          source: "Slide 2",
        },
        { type: "heading", text: "Padding vs proper estimating" },
        { type: "definition", term: "padding", source: "Notes p.5" },
        {
          type: "example",
          title: "The scenario in the notes",
          problem: "A team member is asked \"How much time do you need for Deliverable 3?\" and thinks: *\"I have no idea… I'll take my best guess and double it.\"* What is wrong, and what should happen instead?",
          steps: [
            { do: "This is **padding**: extra time added because the estimator lacks information.", why: "Padding is not a normal or appropriate practice — it hides uncertainty and erodes trust in the schedule." },
            { do: "**Clarify first** with the WBS, the WBS dictionary and information from the PM.", why: "In a properly managed project, estimators have the WBS (may even have helped create it) and the WBS dictionary. The PM's role is to give the team enough information to estimate each activity properly." },
            { do: "If still uncertain, **identify it as a risk** and cover it with a **contingency reserve**.", why: "When there are many unknowns, the potential need for extra time or funds is handled with reserves through the risk management process — visible, not hidden." },
          ],
          answer: "Unknowns? → clarify with WBS / WBS dictionary / PM → still uncertain? → identify as risk → contingency reserve (not hidden padding).",
          source: "Notes p.5",
        },
      ],
      takeaways: [
        "Realistic estimates need activity attributes, assumptions, lessons learned, RBS, resource requirements, team assignments, resource calendars and the risk register.",
        "Techniques: expert judgment, analogous (top-down, historical), parametric (algorithm), group decision making, reserve analysis.",
        "Padding is bad practice; handle uncertainty with visible contingency reserves via risk management. The PM gives estimators enough information.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "Estimating an activity's duration from the actual duration of a similar activity on a past project is:",
          options: ["Parametric estimating", "Analogous estimating", "Reserve analysis", "Padding"],
          answer: 1,
          explanation: "Analogous = top-down estimating using historical data (Slide 17).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A painter covers 15 m² per hour. How many hours does 300 m² take (parametric estimate)?",
          answer: { value: 20, tolerance: 0.01, unit: "hours" },
          explanation: "$300 / 15 = 20$ hours.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "An estimator is very uncertain about an activity. What is the correct way to handle the uncertainty?",
          options: ["Double the estimate", "Give the most optimistic estimate", "Clarify with the WBS dictionary; if still uncertain, identify a risk and use a contingency reserve", "Leave the activity out of the schedule"],
          answer: 2,
          explanation: "Notes p.5 flow.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "cpm",
      title: "Develop schedule: the critical path method and float",
      source: "Notes p.6–7; Slides 3, 7, 12–14; Kahoot 4 Q1, Q3–Q5, Q10",
      summary: "How the schedule is built, how to find the critical path, how to calculate ES, EF, LS, LF and float, and why knowing them helps.",
      builds_on: ["estimate"],
      blocks: [
        {
          type: "intuition",
          md: "The project can't finish until its **longest chain of dependent activities** finishes. That chain is the critical path. Everything else has some spare time — float — that the PM can use.",
        },
        { type: "heading", text: "Develop Schedule" },
        {
          type: "list",
          items: [
            "After the network diagram and duration estimates are complete, the data is entered into **scheduling software**. The schedule includes all project data: activities, duration estimates, dependencies, leads and lags.",
            "Representations of the schedule: **bar charts (Gantt)** and **milestone charts**.",
            "The **approved** project schedule = the **schedule baseline**, and it is part of the **project management plan**.",
          ],
          source: "Notes p.6",
        },
        {
          type: "steps",
          items: ["Network diagram + duration estimates + resources/calendars", "Scheduling tool (CPM, compression, resource optimisation)", "Project schedule", "Approval", "Schedule baseline"],
          source: "Notes p.6",
        },
        { type: "heading", text: "Critical path method (CPM)" },
        { type: "definition", term: "cpm", source: "Notes p.6; Kahoot 4 Q1" },
        { type: "definition", term: "critical-path", source: "Notes p.6; Slides 7, 13" },
        {
          type: "callout",
          kind: "key",
          md: "Critical path activities have **zero float**. Any problem with the critical path must be addressed **before the project begins** — the PM is responsible for a realistic, achievable schedule.\n\nIf **any task on the critical path is late, the whole project is late** (Slide 7).",
          source: "Notes p.6; Slide 7",
        },
        {
          type: "formula",
          label: "Forward and backward pass",
          tex: "EF = ES + d \\qquad LS = LF - d \\qquad \\text{Total float} = LS - ES = LF - EF",
          where: [
            { symbol: "ES", meaning: "early start: the latest EF of all predecessors", unit: "day" },
            { symbol: "EF", meaning: "early finish", unit: "day" },
            { symbol: "LF", meaning: "late finish: the earliest LS of all successors", unit: "day" },
            { symbol: "LS", meaning: "late start", unit: "day" },
            { symbol: "d", meaning: "activity duration", unit: "days" },
          ],
          md: "Forward pass (left to right) gives ES and EF; backward pass (right to left, starting from the project end) gives LF and LS.",
          source: "Notes p.7 (float formula); Slide 3",
        },
        {
          type: "callout",
          kind: "added",
          md: "The EF/LS formulas and the forward/backward-pass rules are not written out in the notes; they are the standard CPM rules applied in the professor's Slide 3 example below.",
        },
        {
          type: "figure",
          svg: PM4_SVG_CPM,
          alt: "Network with six activities. A (3 days) leads to B (2 days) and C (4 days). B leads to D (2 days) and E (5 days). C leads to E. D and E lead to F (2 days). Each node shows early start, early finish, late start and late finish. Critical path A, C, E, F in red, 14 days. Slack of B is 2, slack of D is 5.",
          caption: "The professor's CPM example. Each node: ES and EF on top, LS and LF below. Critical path in red.",
          source: "Slide 3 (redrawn)",
        },
        {
          type: "example",
          title: "Working through Slide 3",
          problem: "Activities: A (3 days); B (2) and C (4) after A; D (2) after B; E (5) after B and C; F (2) after D and E. Find ES, EF, LS, LF, the slack of each activity and the critical path.",
          steps: [
            { do: "**Forward pass.** A: ES 0, EF 3. B: 3–5. C: 3–7. D: ES = EF(B) = 5, EF 7. E: ES = max(EF B = 5, EF C = 7) = **7**, EF 12. F: ES = max(EF D = 7, EF E = 12) = **12**, EF **14**.", why: "Each activity starts as soon as **all** its predecessors finish." },
            { do: "**Backward pass.** F: LF 14, LS 12. E: LF 12, LS 7. D: LF 12, LS 10. B: LF = min(LS D = 10, LS E = 7) = **7**, LS 5. C: LF 7, LS 3. A: LF = min(LS B = 5, LS C = 3) = **3**, LS 0.", why: "Each activity must finish before the **earliest** late start of its successors." },
            { do: "**Slack = LS − ES.** A 0, **B 2**, C 0, **D 5**, E 0, F 0.", why: "Matches the slide: S_B = 2, S_D = 5." },
            { do: "**Critical path** = the activities with zero slack: **A – C – E – F** = 3 + 4 + 5 + 2 = **14 days**.", why: "It is the longest path, so it sets the shortest project duration. Path A–B–D–F is only 9 days, A–B–E–F 12 days." },
          ],
          answer: "Project duration 14 days; critical path A–C–E–F; B can slip 2 days and D 5 days without delaying the project.",
          source: "Slide 3",
        },
        {
          type: "text",
          md: "On the right of Slide 3, the same schedule is drawn as a **Gantt chart** (axis marked 3, 5, 7, 12, 14): A, then B and C, D, E and F, with the **float of B and D shown as dashed boxes**. Above it, two small sketches show a **lag time** (a 2-day gap) and a **lead time** (an overlap).",
          source: "Slide 3",
        },
        {
          type: "callout",
          kind: "note",
          md: "Slide 3 also has handwritten resource notes on the Gantt chart: \"JM + A\" next to C, and \"L + A\" next to D with the A crossed out and an arrow. This appears to show a resource (A) being moved from D, which has float, to C, which is critical — using float to reallocate resources. The slide does not explain the notation.",
          source: "Slide 3",
        },
        {
          type: "example",
          title: "A second example (from the notes)",
          problem: "Start → A (3 days) → B (4 days) → E (2 days) → End, and in parallel A → C (2 days) → D (1 day) → E. Which path is critical, and what is the float on C and D?",
          steps: [
            { do: "Path A–B–E = 3 + 4 + 2 = **9 days**.", why: "Add the durations along each path." },
            { do: "Path A–C–D–E = 3 + 2 + 1 + 2 = **8 days**.", why: "" },
            { do: "Critical path = A–B–E (longest, float 0). Float on C and D = 9 − 8 = **1 day**.", why: "Non-critical activities can slip by the difference between their path and the critical path." },
          ],
          answer: "Project duration 9 days; float on C and D = 1 day.",
          source: "Notes p.6 (the notes mark this example as illustrative, not from the module)",
        },
        { type: "heading", text: "Float" },
        { type: "definition", term: "float", source: "Notes p.7; Slides 7, 14; Kahoot 4 Q3" },
        {
          type: "table",
          caption: "Types of float",
          headers: ["Type", "Definition"],
          rows: [
            ["**Total float**", "Time an activity can be delayed **without delaying the project end date** (formula: LS − ES or LF − EF)"],
            ["**Free float**", "Time an activity can be delayed **without delaying the early start of its successor**"],
            ["**Project float**", "Time the **project** can be delayed **without delaying the externally imposed completion date** required by the customer or management. **Negative float** = the estimated finish is after the desired date."],
          ],
          source: "Notes p.7",
        },
        {
          type: "callout",
          kind: "exam",
          md: "- Early start 12, late start 14 → float = LS − ES = 14 − 12 = **2 days** (Kahoot 4 Q10).\n- In every project there must be **at least one** critical path (Kahoot 4 Q4).\n- A project with **3 critical paths** has **higher risk** — more activities with zero float that can delay the end date (Kahoot 4 Q5).\n- Confirming an end date can still be met by analysing the sequence of activities with the **least scheduling flexibility** → the **critical path method** (Notes p.7; Kahoot 4 Q1).",
          source: "Notes p.7; Kahoot 4 Q1, Q4, Q5, Q10",
        },
        { type: "heading", text: "Why a detailed schedule is useful" },
        {
          type: "list",
          items: [
            "**Define the critical path:** the sequence of activities that determines the duration of the project (Slide 13).",
            "**Define the slacks of non-critical activities:** the amount of time an activity may be delayed without delaying the project date (Slide 14).",
            "**Identify over-allocated resources** (Slides 15–16, next lesson).",
          ],
          source: "Slides 12–16",
        },
        {
          type: "list",
          title: "Benefits of knowing the critical path (Notes p.7)",
          items: [
            "**Better allocation of resources:** use float to focus management. E.g. assign less experienced (but skilled enough) resources to the activity with the **most float** — if their work takes longer, the project is less likely to be delayed.",
            "**Helps team members juggle work across multiple projects:** float tells them how much time flexibility they have per activity (they still need PM approval for any delay from the plan).",
          ],
          source: "Notes p.7",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "The critical path is the path with the most important activities.", right: "It is the **longest-duration** path, which sets the shortest possible project duration (Notes p.6)." },
            { wrong: "Float is wasted time that should be removed.", right: "Float is an **asset**: if you know where it is, you can use it to organise and manage the project (Notes p.7)." },
            { wrong: "Free float and total float are the same.", right: "Total float protects the **project end date**; free float protects the **successor's early start** (Notes p.7)." },
          ],
          source: "Notes p.6–7",
        },
      ],
      takeaways: [
        "Approved schedule = schedule baseline (part of the PM plan); shown as Gantt and milestone charts.",
        "Critical path = longest path = shortest project duration; its activities have zero float.",
        "Forward pass → ES/EF; backward pass → LS/LF; total float = LS − ES = LF − EF.",
        "Total float → project end date; free float → successor's early start; project float → externally imposed date. Negative float = behind the required date.",
        "Every project has at least one critical path; several critical paths increase risk.",
      ],
      check: [
        {
          type: "numeric",
          prompt: "An activity has ES = 8 and LS = 13. What is its total float, in days?",
          answer: { value: 5, tolerance: 0.01, unit: "days" },
          explanation: "Total float = LS − ES = 13 − 8 = 5.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In the Slide 3 example, what is the ES of activity E, and why?",
          options: ["5, because B finishes at 5", "7, because E must wait for both B (EF 5) and C (EF 7)", "3, because A finishes at 3", "12, because F starts at 12"],
          answer: 1,
          explanation: "ES = the latest EF of all predecessors = max(5, 7) = 7.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Time an activity can be delayed without delaying the early start of its successor is:",
          options: ["Total float", "Free float", "Project float", "Lag"],
          answer: 1,
          explanation: "Notes p.7.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Your project has negative project float. This means:",
          options: ["The project will finish early", "The estimated finish is after the required date", "There is no critical path", "Resources are under-allocated"],
          answer: 1,
          explanation: "Notes p.7.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "compress",
      title: "Schedule compression and resource optimisation",
      source: "Notes p.7–8; Slides 3, 15–17; Kahoot 4 Q8",
      summary: "What to do when the date can't be met — fast tracking and crashing — and how resource levelling and smoothing deal with over-allocated resources.",
      builds_on: ["cpm"],
      blocks: [
        { type: "heading", text: "Schedule compression" },
        {
          type: "list",
          items: [
            "A very common project problem is an **unrealistic timeframe**. It arises during **planning** (management or the customer requires an end date that cannot be met) or during **executing** (the PM must bring the project back in line with the schedule baseline or adjust for changes).",
            "PMs have a professional responsibility to **push back, present options**, and make sure the project is achievable through proper planning and schedule network analysis techniques such as schedule compression.",
          ],
          source: "Notes p.7",
        },
        {
          type: "quote",
          md: "Compression is a way to make use of float on the critical path.",
          source: "Notes p.7",
        },
        {
          type: "callout",
          kind: "added",
          md: "Critical-path activities have zero float, so this sentence is easiest to read as: compression **shortens the critical path** to remove **negative float** (or create float) so the required date can be met.",
        },
        {
          type: "steps",
          title: "Decision flow when the schedule does not meet the required date (negative float)",
          items: [
            "Required end date not met?",
            "**Analyse the critical path** → identify compression options.",
            "**Fast tracking** (parallel work, + risk) **or crashing** (add resources, + cost).",
            "**Compare all options** → choose the one(s) with the **least negative impact**.",
            "Still impossible? → **present options** to the sponsor/customer (cut scope, change date, etc.).",
          ],
          source: "Notes p.7",
        },
        {
          type: "callout",
          kind: "exam",
          md: "- With negative project float, is your **first** choice to tell the customer the date cannot be met? → **No.** First analyse what can be done by compressing the schedule, see all potential choices, then select the least-impact option(s) (Notes p.7).\n- Asked to complete a project 2 days earlier than planned → **meet your team to look at options for crashing or fast tracking** (Kahoot 4 Q8).",
          source: "Notes p.7; Kahoot 4 Q8",
        },
        { type: "definition", term: "fast-tracking", source: "Notes p.8; Slide 17" },
        { type: "definition", term: "crashing", source: "Notes p.8; Slide 17" },
        {
          type: "table",
          caption: "Fast tracking vs crashing",
          headers: ["Aspect", "Fast tracking", "Crashing"],
          rows: [
            ["What it is", "Re-plan critical path activities planned in **series** to be done in **parallel** (overlap)", "**Add or adjust resources** to compress the schedule while keeping the original scope"],
            ["Main trade-off", "Saves time but **adds risk** (rework)", "**Always increases cost** and may increase risk — trades time for money"],
            ["Example", "Before: A → B → C. After: A → B with C overlapping B (changes discretionary dependencies)", "Before: B = 10 days, 1 person. After: B = 5 days, 2 people; same sequence, more cost"],
            ["Slide 3 shorthand", "= R, = €, ↓ t (same resources, same cost, less time)", "↑ R, ↑↑ €, ↓↓ t (more resources, much more cost, much less time)"],
            ["Slide 17 condition", "Only works if activities **can be overlapped** to shorten the project duration", "Shortens the schedule for the **least incremental cost**; works only for activities on the **critical path** where additional resources will shorten the activity's duration"],
          ],
          source: "Notes p.8; Slides 3, 17",
        },
        {
          type: "callout",
          kind: "key",
          md: "Goal of both: manage the schedule **without changing the schedule baseline** (and without reducing scope).",
          source: "Notes p.8",
        },
        { type: "heading", text: "Over-allocated resources" },
        { type: "definition", term: "over-allocation", source: "Slide 15" },
        {
          type: "text",
          md: "Slide 16 shows a weekly histogram of **staff hours for senior designers** from January to May. From January to March the bars are far above the available-capacity line (peaking near 275 hours in one week of January); in April and May they drop below it. The resource is **over-allocated** in the first months and under-used later.",
          source: "Slide 16",
        },
        { type: "heading", text: "Resource optimisation" },
        { type: "definition", term: "resource-leveling", source: "Notes p.8" },
        { type: "definition", term: "resource-smoothing", source: "Notes p.8" },
        {
          type: "figure",
          svg: PM4_SVG_LEVEL,
          alt: "Two bar charts. Before levelling: 5, 15 and 3 resources in months 1 to 3. After levelling: 7, 7, 7 and 2 resources in months 1 to 4.",
          caption: "Resource levelling: usage of 5 → 15 → 3 resources per month becomes 7 → 7 → 7 → 2 — flatter, but longer.",
          source: "Notes p.8 (redrawn)",
        },
        {
          type: "table",
          caption: "Levelling vs smoothing",
          headers: ["", "Resource levelling", "Resource smoothing"],
          rows: [
            ["Produces", "A **resource-limited** schedule", "A schedule with resources levelled **only within the limits of float**"],
            ["Effect on duration and cost", "**Lengthens** the schedule and **increases** cost to deal with limited resources", "Activity completion dates are **not delayed**"],
            ["Critical path / end date", "**Can** change", "Does **not** change"],
            ["Example", "Usage of 5 → 15 → 3 resources per month is unacceptable; or only 15 resources are not available and you prefer to lengthen the project rather than hire more", "—"],
          ],
          source: "Notes p.8",
        },
        {
          type: "callout",
          kind: "exam",
          md: "No rush on the project, and time and cost matter less than the number of resources used each month → **perform resource optimisation (levelling)**, not fast tracking.",
          source: "Notes p.8",
        },
      ],
      takeaways: [
        "With negative float, first compress: analyse the critical path, compare all options, pick the least-impact one; only then present options to the sponsor/customer.",
        "Fast tracking = parallel work, adds risk (same resources and cost). Crashing = more resources, always adds cost.",
        "Over-allocation = more work assigned than a resource can achieve in the time period.",
        "Resource levelling can lengthen the schedule and change the critical path; resource smoothing stays within float.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "To meet a deadline, the PM overlaps design and build, which were planned one after the other. This:",
          options: ["Is crashing and increases cost", "Is fast tracking and increases risk", "Is resource levelling and lengthens the schedule", "Changes the scope"],
          answer: 1,
          explanation: "Doing in parallel what was planned in series is fast tracking; the trade-off is risk (rework).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Crashing only helps for activities that are:",
          options: ["Off the critical path", "On the critical path and shortened by additional resources", "Already finished", "Milestones"],
          answer: 1,
          explanation: "Slide 17.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which technique never delays activity completion dates?",
          options: ["Resource levelling", "Resource smoothing", "Crashing", "Fast tracking"],
          answer: 1,
          explanation: "Smoothing levels resources only within the limits of float.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "control",
      title: "Control schedule and the schedule baseline",
      source: "Notes p.9; Slide 18",
      summary: "Keeping the project on its baseline through repeated corrective and preventive action.",
      builds_on: ["compress"],
      blocks: [
        { type: "definition", term: "schedule-baseline", source: "Notes p.6, p.9; Slide 18" },
        {
          type: "text",
          md: "Slide 18 shows the **time baseline**: the approved Gantt chart (project → A1, A2, A3 → work packages 11, 12, 21, 31, 32 → activities 111–322), with each activity's assigned resource (e.g. Project Manager, John, Joana, Alice, Consultant, Anne).",
          source: "Slide 18",
        },
        { type: "definition", term: "control-schedule", source: "Notes p.9" },
        {
          type: "callout",
          kind: "key",
          md: "The project — and the PM — will be **unsuccessful** if the schedule baseline (the end date agreed in planning, adjusted for approved changes) is **not met**. Without control, all the planning effort to build a realistic schedule could be wasted.",
          source: "Notes p.9",
        },
        {
          type: "steps",
          title: "The control loop (repeated throughout the project)",
          items: [
            "**Measure** actual progress.",
            "**Compare** with the schedule baseline.",
            "**Variance beyond threshold?** If no → continue monitoring.",
            "If yes → **analyse the cause** (critical path, float) → take **corrective / preventive action** (e.g. compression).",
            "If the baseline must change → **change request** → **integrated change control** → update baseline/plan.",
          ],
          source: "Notes p.9",
        },
      ],
      takeaways: [
        "Approved schedule = schedule baseline, part of the PM plan.",
        "Control Schedule = measuring is not enough; it means taking corrective and preventive action over and over to keep the project in line with the plan.",
        "Changes to the baseline go through a change request and integrated change control.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "A variance is within the threshold set in the schedule management plan. What should the PM do?",
          options: ["Submit a change request", "Continue monitoring", "Crash the project", "Re-baseline"],
          answer: 1,
          explanation: "Notes p.9 loop.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The schedule baseline must change. What is required?",
          options: ["The PM's decision", "A change request through integrated change control", "The team's agreement", "Nothing — baselines update automatically"],
          answer: 1,
          explanation: "Notes p.9; Module 1.",
          difficulty: 1,
        },
        {
          type: "truefalse",
          prompt: "Control Schedule is mainly about measuring progress and reporting it.",
          answer: false,
          explanation: "Notes p.9: monitoring and controlling goes beyond measuring — it means taking corrective and preventive action over and over to keep the project in line with the plan.",
          difficulty: 2,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "agile-org",
      title: "The agile organisation and the agile project team",
      source: "Slides 8–11",
      summary: "The shift from organisations as machines to organisations as organisms, and the roles in an agile organisation: tribe, squad, chapter, product owner and agile coach.",
      builds_on: ["overview"],
      blocks: [
        { type: "heading", text: "A new organisational paradigm" },
        {
          type: "table",
          caption: "From organisations as \"machines\" to organisations as \"organisms\" (Slide 8)",
          headers: ["Organisations as \"machines\"", "Organisations as \"organisms\""],
          rows: [
            ["Top-down hierarchy", "Leadership shows direction and enables action"],
            ["Bureaucracy", "Quick changes, flexible resources"],
            ["Silos", "Teams built around end-to-end accountability"],
            ["Detailed instruction", "\"Boxes and lines\" less important; focus on action"],
          ],
          source: "Slide 8",
        },
        { type: "heading", text: "The journey to an agile organisation" },
        {
          type: "list",
          items: [
            "A **tribe** is made of several **squads**, with a **tribe lead** and an **agile coach**. Across the squads run **chapters**, each with a **chapter lead**; each squad has a **product owner**.",
            "**Co-location and communication.** **Sharing \"why and how\".**",
            "\"Agile is all about **collaboration** — both with the customer and across our teams.\"",
            "**No fixed structure** — it constantly evolves.",
          ],
          source: "Slides 9–10",
        },
        {
          type: "table",
          caption: "Roles in the agile organisation (Slide 10)",
          headers: ["Role", "What it is", "Responsibilities"],
          rows: [
            ["**[[squad|Squad]]**", "The basis of the new agile organisation", "Includes no more than 9 people; is self-steering and autonomous; comprises representatives of different functions working in a single location; has end-to-end responsibility for achieving a client-related objective; can change functional composition as the mission evolves; is dismantled as soon as the mission is executed"],
            ["**[[tribe|Tribe]]**", "A collection of squads with interconnected missions", "Empowers the **tribe lead** to establish priorities, allocate budgets, and form the interface with other tribes to ensure knowledge/insights are shared"],
            ["**[[chapter|Chapter]]**", "Develops expertise and knowledge across squads", "The **chapter lead** is responsible for one chapter and represents the hierarchy for squad members (personal development, coaching, staffing and performance management)"],
            ["**[[product-owner|Product owner]]**", "A squad member, not its leader", "Responsible for coordinating squad activities; manages the backlog, to-do lists and priority setting"],
            ["**[[agile-coach|Agile coach]]**", "—", "Coaches individuals and squads to create high-performing teams"],
          ],
          source: "Slide 10",
        },
        { type: "heading", text: "The agile project team" },
        {
          type: "text",
          md: "Slide 11 places the **agile unit (tribe)** — squads 1, 2, 3 … — across the organisation's **departments/disciplines**: each squad draws people from several disciplines. The **rest of the organisation** sits alongside the tribe.",
          source: "Slide 11",
        },
        {
          type: "callout",
          kind: "added",
          md: "The tribe/squad/chapter model shown on these slides is widely known as the \"Spotify model\"; the slides do not name it.",
        },
      ],
      takeaways: [
        "From machines (hierarchy, bureaucracy, silos, detailed instruction) to organisms (direction-setting leadership, flexible resources, end-to-end teams, focus on action).",
        "Squad = up to 9 people, cross-functional, self-steering, end-to-end responsible, dismantled when the mission is done.",
        "Tribe = squads with interconnected missions, led by a tribe lead; chapter = expertise across squads, led by a chapter lead.",
        "Product owner coordinates the squad and manages the backlog; agile coach builds high-performing teams.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "What is the maximum size of a squad on Slide 10?",
          options: ["5 people", "7 people", "9 people", "12 people"],
          answer: 2,
          explanation: "\"Includes no more than 9 people.\"",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Who manages the squad's backlog and priorities?",
          options: ["The tribe lead", "The chapter lead", "The product owner", "The agile coach"],
          answer: 2,
          explanation: "Slide 10: the product owner is a squad member, not its leader, and manages backlog, to-do lists and priority setting.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which role handles squad members' personal development, staffing and performance management?",
          options: ["Product owner", "Chapter lead", "Agile coach", "Tribe lead"],
          answer: 1,
          explanation: "The chapter lead represents the hierarchy for squad members.",
          difficulty: 2,
        },
      ],
    },
  ],

  /* ---------------------------------------------------------------- terms */
  terms: [
    { id: "plan-schedule-management", term: "Plan Schedule Management", lesson: "plan-define", short: "Documenting **how** you will plan, manage and control the project to the schedule baseline, and how you will manage variances.", definition: "**Plan Schedule Management** is documenting how you will plan, manage and control the project to the schedule baseline, and how you will manage schedule variances. It answers who will be involved, what approach will be used, and what processes and procedures will create the schedule.", source: "Notes p.1", related: ["schedule-management-plan"] },
    { id: "schedule-management-plan", term: "Schedule management plan", lesson: "plan-define", short: "Part of the PM plan: estimation rules, schedule baseline, variance threshold, performance measures, change procedures, reporting, and release/iteration length.", definition: "The **schedule management plan** is part of the project management plan. It specifies rules for estimation (units; effort and duration), the schedule baseline, the variance threshold, performance measures, variance management, schedule change control procedures, report types, reporting formats and frequency, and the length of releases and iterations (adaptive life cycle).", source: "Notes p.2", related: ["plan-schedule-management", "schedule-baseline"] },
    { id: "effort-duration", term: "Effort vs duration", lesson: "plan-define", short: "**Effort** = labour (e.g. 12 hours). **Duration** = work periods (e.g. 1.5 days). Both are estimated.", definition: "**Effort** is the amount of labour required (e.g. 12 hours); **duration** is the number of work periods the activity spans (e.g. 1.5 days). The schedule management plan requires estimating both.", source: "Notes p.2", related: ["schedule-management-plan"] },
    { id: "activity", term: "Activity", aliases: ["Define Activities"], lesson: "plan-define", short: "A unit of work produced by decomposing a **work package**, small enough to estimate, schedule, monitor and control.", definition: "**Define Activities** takes the work packages from the WBS and decomposes them into the activities required to produce the deliverables and achieve the project objectives. Activities must be small enough to estimate, schedule, monitor and control, and are then sequenced.", source: "Notes p.2", related: ["milestone", "network-diagram"] },
    { id: "rolling-wave", term: "Rolling wave planning", lesson: "plan-define", short: "Plan **near-term work in detail** and future work at a high level, elaborating it as it gets closer. A form of **progressive elaboration**.", definition: "**Rolling wave planning** is used when a project has too many unknowns to schedule everything up front: near-term work is planned in detail (activities), mid-term at work-package level, far-future work as high-level deliverables or planning packages. It is a form of progressive elaboration; resulting baseline changes need integrated change control.", source: "Notes p.3", related: ["activity"] },
    { id: "milestone", term: "Milestone", lesson: "plan-define", short: "A **significant event** in the schedule with **zero duration** — not a work activity. Initial milestones are in the charter.", definition: "**Milestones** are significant events in the schedule. They are not work activities and have zero duration (e.g. a completed design, a customer-imposed due date, a company checkpoint). Initial milestones are documented in the project charter; the PM can add more as checkpoints.", source: "Notes p.3", related: ["activity"] },
    { id: "sequence-activities", term: "Sequence Activities", lesson: "sequence", short: "Putting activities in the **order** the work will be performed. Output: the **project schedule network diagram**.", definition: "**Sequence Activities** takes the activities and puts them in the order in which the work will be performed, using logical relationships, dependencies, leads and lags. Its result is the project schedule network diagram. It defines the design logic and implementation of the project.", source: "Notes p.3; Kahoot 4 Q9", related: ["logical-relationship", "network-diagram"] },
    { id: "logical-relationship", term: "Logical relationships", aliases: ["FS", "SS", "FF", "SF"], lesson: "sequence", short: "**FS** (finish→start, most common), **SS**, **FF**, **SF** (rarest). First word = predecessor, second = successor.", definition: "The four **logical relationships** between a predecessor A and a successor B: finish-to-start (A finishes before B starts — most common), start-to-start (A starts before B starts), finish-to-finish (A finishes before B finishes), start-to-finish (A starts before B finishes — rarely used).", source: "Notes p.3–4; Kahoot 4 Q6", related: ["dependency", "lead", "lag"] },
    { id: "dependency", term: "Dependency types", aliases: ["mandatory", "discretionary", "external", "internal"], lesson: "sequence", short: "**Mandatory** (hard logic) · **discretionary** (soft logic, changed to fast track) · **external** (outside party) · **internal** (within the project).", definition: "**Mandatory** dependencies (hard logic) are inherent in the work or required by contract. **Discretionary** dependencies (soft logic) reflect how the organisation has chosen to work, and can be changed to fast track. **External** dependencies depend on a party outside the project. **Internal** dependencies are based on the needs of the project. Types can be combined.", example: "Design must be complete before manufacturing → mandatory.", source: "Notes p.4; Kahoot 4 Q2", related: ["logical-relationship", "fast-tracking"] },
    { id: "lead", term: "Lead", lesson: "sequence", short: "The successor can **start before** its predecessor is completed — **overlap / acceleration**.", definition: "A **lead** is the amount of time by which a successor activity can be advanced with respect to its predecessor: it can start before the predecessor is completed. Example: web page design starts 5 days before database design finishes.", source: "Notes p.4; Slide 7; Kahoot 4 Q7", related: ["lag"] },
    { id: "lag", term: "Lag", lesson: "sequence", short: "**Waiting time** inserted between activities — a **delay** of the successor.", definition: "A **lag** is the amount of time by which a successor activity is delayed with respect to its predecessor — waiting time. Example: wait 3 days after pouring concrete before building the frame; SS + 15 between writing and editing a draft.", pitfall: "Lag is not float.", source: "Notes p.4; Slide 7", related: ["lead", "float"] },
    { id: "network-diagram", term: "Project schedule network diagram", aliases: ["precedence diagram"], lesson: "sequence", short: "A diagram of activities connected by their **logical relationships** (with leads and lags). Output of Sequence Activities; input to CPM.", definition: "The **project schedule network diagram** (precedence diagram) shows activities as nodes connected by their logical relationships, with any leads and lags. It is the result of Sequence Activities and the basis for the critical path method.", source: "Notes p.3; Slide 7", related: ["sequence-activities", "cpm"] },
    { id: "estimating-techniques", term: "Estimating techniques", aliases: ["analogous", "parametric"], lesson: "estimate", short: "Expert judgment · **analogous** (top-down, historical data) · **parametric** (algorithm, e.g. 1,000 m ÷ 25 m/h = 40 h) · group decision making · reserve analysis.", definition: "The **estimating techniques** on Slide 17: expert judgment; analogous estimating (top-down, using historical data); parametric estimating (an algorithm calculates duration from project parameters); group decision making (brainstorming); reserve analysis (contingency reserves/buffers for schedule uncertainty).", source: "Slide 17", related: ["padding"] },
    { id: "padding", term: "Padding", aliases: ["pad"], lesson: "estimate", short: "Extra time or cost **hidden** in an estimate because the estimator lacks information. **Bad practice** — use visible reserves via risk management instead.", definition: "A **pad** is extra time or cost added to an estimate because the estimator does not have enough information. Padding is not appropriate: it hides uncertainty and erodes trust. The PM should give estimators enough information (WBS, WBS dictionary); remaining uncertainty should be handled with reserves through risk management.", source: "Notes p.5", related: ["estimating-techniques"] },
    { id: "cpm", term: "Critical path method", aliases: ["CPM"], lesson: "cpm", short: "Finds the **longest-duration path** through the network and the earliest/latest start and finish of each activity.", definition: "The **critical path method (CPM)** determines the longest-duration path through the network diagram, plus the earliest and latest each activity can start and finish. It is the technique used to analyse the sequence of activities with the least amount of scheduling flexibility.", source: "Notes p.6–7; Kahoot 4 Q1", related: ["critical-path", "float"] },
    { id: "critical-path", term: "Critical path", lesson: "cpm", short: "The **longest** path through the network = the **shortest** possible project duration. Its activities have **zero float**; if any is late, the project is late.", definition: "The **critical path** is the longest-duration path through the network; it determines the shortest time in which the project can be completed. Critical path activities have zero float: if any task on the critical path is late, the whole project is late. Every project has at least one critical path; several increase risk.", source: "Notes p.6; Slides 7, 13; Kahoot 4 Q4–Q5", related: ["cpm", "float"] },
    { id: "float", term: "Float", aliases: ["slack", "total float", "free float", "project float"], lesson: "cpm", short: "**Total float** = LS − ES: delay possible without delaying the **project**. **Free float**: without delaying the **successor**. **Project float**: without missing the **imposed date**.", definition: "**Float** (slack, schedule flexibility) is an asset. Total float = the time an activity can be delayed without delaying the project end date (LS − ES or LF − EF). Free float = without delaying the early start of its successor. Project float = the time the project can be delayed without delaying the externally imposed completion date; negative float means the estimated finish is after the desired date.", formula: "\\text{Total float} = LS - ES = LF - EF", example: "ES 12, LS 14 → float 2 days.", source: "Notes p.7; Slide 14; Kahoot 4 Q3, Q10", related: ["critical-path", "cpm"] },
    { id: "schedule-baseline", term: "Schedule baseline", aliases: ["time baseline"], lesson: "control", short: "The **approved** project schedule. Part of the PM plan; the project is measured against it.", definition: "The **schedule baseline** is the approved project schedule — the end date agreed in planning, adjusted for approved changes. It is part of the project management plan and is used to measure performance during Monitoring & Controlling.", source: "Notes p.6, p.9; Slide 18", related: ["control-schedule"] },
    { id: "fast-tracking", term: "Fast tracking", lesson: "compress", short: "Doing critical-path activities planned in **series** in **parallel**. Saves time, **adds risk**; same resources and cost.", definition: "**Fast tracking** re-plans critical path activities planned in series to be done in parallel (overlap), by changing discretionary dependencies. It saves time but adds risk (rework). It only works if activities can be overlapped to shorten the project duration.", source: "Notes p.8; Slides 3, 17", related: ["crashing", "dependency"] },
    { id: "crashing", term: "Crashing", lesson: "compress", short: "**Adding resources** to critical-path activities to shorten them. **Always increases cost** — trades time for money.", definition: "**Crashing** adds or adjusts resources to compress the schedule while keeping the original scope, for the least incremental cost. It always increases cost and may increase risk. It works only for activities on the critical path where additional resources will shorten the activity's duration.", source: "Notes p.8; Slides 3, 17", related: ["fast-tracking"] },
    { id: "over-allocation", term: "Over-allocated resource", lesson: "compress", short: "A resource assigned **more work than it can achieve** within a particular time period.", definition: "A resource becomes **over-allocated** when we assign more work than the resource can achieve within a particular time period. A detailed schedule helps identify over-allocations, which are then resolved by resource optimisation.", source: "Slides 15–16", related: ["resource-leveling", "resource-smoothing"] },
    { id: "resource-leveling", term: "Resource levelling", aliases: ["resource leveling"], lesson: "compress", short: "Flattening resource peaks into a **resource-limited** schedule. Can **lengthen** the schedule, increase cost and **change the critical path**.", definition: "**Resource levelling** produces a resource-limited schedule. It lengthens the schedule and increases cost to deal with limited resources, availability and other constraints, levelling the peaks and valleys of resource use. It can change the critical path and end date.", example: "5 → 15 → 3 resources per month becomes 7 → 7 → 7 → 2.", source: "Notes p.8", related: ["resource-smoothing", "over-allocation"] },
    { id: "resource-smoothing", term: "Resource smoothing", lesson: "compress", short: "Levelling resources **only within float**, so completion dates are **not delayed** and the critical path does not change.", definition: "**Resource smoothing** is a modified form of levelling in which resources are levelled only within the limits of float, so activity completion dates are not delayed and the critical path and end date do not change.", source: "Notes p.8", related: ["resource-leveling"] },
    { id: "control-schedule", term: "Control Schedule", lesson: "control", short: "Measuring progress against the **schedule baseline** and taking **corrective and preventive action** over and over; baseline changes go through change control.", definition: "**Control Schedule** means measuring actual progress against the schedule baseline and, when variances exceed the threshold, analysing the cause and taking corrective or preventive action (e.g. compression) — repeatedly, throughout the project. If the baseline must change, a change request goes through integrated change control.", source: "Notes p.9", related: ["schedule-baseline"] },
    { id: "squad", term: "Squad", lesson: "agile-org", short: "The basis of the agile organisation: **≤ 9 people**, cross-functional, self-steering, **end-to-end responsible** for a client objective; dismantled when the mission is done.", definition: "A **squad** includes no more than 9 people; is self-steering and autonomous; comprises representatives of different functions in a single location; has end-to-end responsibility for a client-related objective; can change composition as the mission evolves; and is dismantled as soon as the mission is executed.", source: "Slide 10", related: ["tribe", "chapter", "product-owner"] },
    { id: "tribe", term: "Tribe", aliases: ["tribe lead"], lesson: "agile-org", short: "A collection of **squads with interconnected missions**, led by a **tribe lead** who sets priorities and budgets.", definition: "A **tribe** is a collection of squads with interconnected missions. The tribe lead establishes priorities, allocates budgets and forms the interface with other tribes so that knowledge and insights are shared.", source: "Slides 9–10", related: ["squad"] },
    { id: "chapter", term: "Chapter", aliases: ["chapter lead"], lesson: "agile-org", short: "Develops **expertise across squads**. The **chapter lead** handles personal development, coaching, staffing and performance.", definition: "A **chapter** develops expertise and knowledge across squads. The chapter lead is responsible for one chapter and represents the hierarchy for squad members (personal development, coaching, staffing and performance management).", source: "Slide 10", related: ["squad"] },
    { id: "product-owner", term: "Product owner", lesson: "agile-org", short: "A squad **member (not its leader)** who coordinates squad activities and manages the **backlog** and priorities.", definition: "The **product owner** is a squad member, not its leader, responsible for coordinating squad activities and managing the backlog, to-do lists and priority setting.", source: "Slide 10", related: ["squad"] },
    { id: "agile-coach", term: "Agile coach", lesson: "agile-org", short: "Coaches individuals and squads to create **high-performing teams**.", definition: "The **agile coach** coaches individuals and squads to create high-performing teams.", source: "Slide 10", related: ["squad", "tribe"] },
  ],

  /* ----------------------------------------------------- final assessment */
  quizTitle: "Core questions",
  quiz: [
    { type: "mcq", lesson: "overview", difficulty: 1, prompt: "What is the output of Sequence Activities?", options: ["The schedule baseline", "The project schedule network diagram", "The activity list", "The resource calendar"], answer: 1, explanation: "Notes p.1, p.3." },
    { type: "mcq", lesson: "plan-define", difficulty: 2, prompt: "Where are the initial milestones of a project documented?", options: ["In the WBS dictionary", "In the project charter", "In the risk register", "In the resource calendar"], answer: 1, explanation: "Notes p.3." },
    { type: "mcq", lesson: "plan-define", difficulty: 2, prompt: "Rolling wave planning adds new activities that change the cost baseline. What is needed?", options: ["Nothing — rolling wave planning allows it", "A change request through integrated change control", "Sponsor's verbal approval", "A new charter"], answer: 1, explanation: "Notes p.3." },
    { type: "mcq", lesson: "sequence", difficulty: 1, prompt: "Which logical relationship is most commonly used?", options: ["Start-to-Start", "Finish-to-Finish", "Finish-to-Start", "Start-to-Finish"], answer: 2, explanation: "Notes p.3." },
    { type: "mcq", lesson: "sequence", difficulty: 2, prompt: "A building permit must be granted by the city before construction starts. This is a:", options: ["Mandatory internal dependency", "Discretionary dependency", "External dependency", "Lead"], answer: 2, explanation: "Government approvals are external dependencies (Notes p.4)." },
    { type: "mcq", lesson: "estimate", difficulty: 2, prompt: "Which estimating technique uses an algorithm based on project parameters?", options: ["Expert judgment", "Analogous", "Parametric", "Group decision making"], answer: 2, explanation: "Slide 17." },
    { type: "truefalse", lesson: "estimate", difficulty: 1, prompt: "Padding estimates is an appropriate way to protect the schedule from uncertainty.", answer: false, explanation: "Notes p.5: use visible reserves through risk management instead." },
    {
      type: "numeric",
      lesson: "cpm",
      difficulty: 3,
      prompt: "Activities: P (4 days); Q (3) after P; R (6) after P; S (2) after Q and R. What is the project duration in days?",
      answer: { value: 12, tolerance: 0.01, unit: "days" },
      explanation: "Paths: P–Q–S = 4+3+2 = 9; P–R–S = 4+6+2 = 12. Critical path P–R–S = 12 days.",
    },
    {
      type: "numeric",
      lesson: "cpm",
      difficulty: 3,
      prompt: "In the previous network (P 4; Q 3 after P; R 6 after P; S 2 after Q and R), what is the total float of Q, in days?",
      answer: { value: 3, tolerance: 0.01, unit: "days" },
      explanation: "Q: ES 4, EF 7. Backward: S LS = 10, so Q LF = 10, LS = 7. Float = 7 − 4 = 3 (or 12 − 9 = 3).",
    },
    { type: "mcq", lesson: "cpm", difficulty: 2, prompt: "Who should be assigned to the activity with the most float, according to the notes?", options: ["The most expensive expert", "A less experienced but skilled-enough resource", "Nobody — it can wait", "The project manager"], answer: 1, explanation: "If their work takes longer, the project is less likely to be delayed (Notes p.7)." },
    { type: "mcq", lesson: "compress", difficulty: 2, prompt: "The sponsor needs the project 3 weeks earlier, and budget is not an issue but risk must stay low. Which technique fits best?", options: ["Fast tracking", "Crashing", "Resource levelling", "Padding"], answer: 1, explanation: "Crashing trades money for time; fast tracking adds risk." },
    { type: "mcq", lesson: "compress", difficulty: 2, prompt: "Which statement about resource levelling is correct?", options: ["It never changes the end date", "It can lengthen the schedule and change the critical path", "It always reduces cost", "It only uses float"], answer: 1, explanation: "Notes p.8; smoothing is the one that stays within float." },
    { type: "mcq", lesson: "control", difficulty: 1, prompt: "Control Schedule belongs to which process group?", options: ["Planning", "Executing", "Monitoring & Controlling", "Closing"], answer: 2, explanation: "Notes p.1." },
    { type: "mcq", lesson: "agile-org", difficulty: 2, prompt: "Which statement describes a squad?", options: ["A permanent department led by a manager", "A cross-functional, self-steering team of up to 9 people with end-to-end responsibility", "A group of chapter leads", "The tribe's budget committee"], answer: 1, explanation: "Slide 10." },
    { type: "short", lesson: "compress", difficulty: 3, prompt: "Management asks for an end date that your schedule shows is 2 weeks too early. Describe, step by step, what you do.", model_answer: "1) Don't simply refuse or accept. 2) **Analyse the critical path** to find compression options. 3) Look at **fast tracking** (overlap critical activities by changing discretionary dependencies — adds risk) and **crashing** (add resources to critical activities — adds cost), and any other options. 4) **Compare all options** and choose those with the **least negative impact**. 5) If the date is still impossible, **present the options** to the sponsor/customer — e.g. cut scope or change the date. (Notes p.7; Kahoot 4 Q8.)" },
  ],

  flashcards: [
    { front: "FS / SS / FF / SF", back: "First word = predecessor, second = successor. FS most common; SF rarest." },
    { front: "Lead vs lag", back: "Lead = start early (overlap). Lag = waiting time (delay)." },
    { front: "Total float formula", back: "LS − ES = LF − EF." },
    { front: "Fast tracking vs crashing", back: "Fast tracking: parallel work, + risk (=R, =€, ↓t). Crashing: + resources, + cost (↑R, ↑↑€, ↓↓t)." },
    { front: "Levelling vs smoothing", back: "Levelling can lengthen the schedule and change the critical path. Smoothing stays within float — no delay." },
  ],

  teachingNotes: [
    { type: "text", md: "**Suggested order:** Lessons 1 → 7 in order; Lesson 5 (CPM) is the heart of the module — work through the Slide 3 example on a whiteboard. Lesson 8 (agile organisation) can be taught separately." },
    {
      type: "list",
      title: "Discussion questions",
      items: [
        "Find a discretionary dependency on your current project. Could you fast track it, and what would the risk be?",
        "When would you crash rather than fast track?",
        "Why is padding tempting, and how would you get the same protection honestly?",
        "Which parts of your organisation look like a \"machine\" and which like an \"organism\"?",
      ],
    },
    { type: "callout", kind: "tip", title: "What newcomers usually get wrong", md: "Confusing lag with float; thinking the critical path is the *shortest* path; forgetting that ES must wait for **all** predecessors; and choosing to tell the customer the date is impossible before analysing compression options." },
  ],

  openQuestions: [
    "Slide 3's handwritten notes \"JM + A\" and \"L + A\" (with A crossed out) are not explained; the lesson gives an interpretation (resource A moved from D to C using float).",
    "Slide 6 lists \"Estimate Activity Resources\" as a step; the notes have no separate section for it.",
    "The notes' sentence \"Compression is a way to make use of float on the critical path\" is ambiguous because critical-path activities have zero float; see the clarification in Lesson 6.",
  ],

  coverage: [
    { source: "Slide 1", content: "Title: Schedule Management Plan", where: "overview" },
    { source: "Slide 2", content: "Five steps from WBS to Gantt chart", where: "overview" },
    { source: "Slide 3", content: "CPM worked example; Gantt; lag/lead; crashing vs fast tracking", where: "cpm" },
    { source: "Slide 4", content: "Section title and definition of schedule management", where: "overview" },
    { source: "Slide 5", content: "New 2035 product–service portfolio roadmap", where: "overview" },
    { source: "Slide 6", content: "From scope to the next steps", where: "overview" },
    { source: "Slide 7", content: "Network diagram; critical path, float, lead and lag definitions", where: "sequence", note: "Definitions are in Lesson 5" },
    { source: "Slide 8", content: "New organisational paradigm", where: "agile-org" },
    { source: "Slides 9–10", content: "The journey to an agile organisation; roles", where: "agile-org" },
    { source: "Slide 11", content: "The agile project team", where: "agile-org" },
    { source: "Slide 12", content: "Develop Schedule (Gantt example)", where: "cpm" },
    { source: "Slides 13–14", content: "Why a detailed schedule: critical path, slacks", where: "cpm" },
    { source: "Slides 15–16", content: "Over-allocated resources; staff-hours histogram", where: "compress" },
    { source: "Slide 17", content: "Estimating techniques; crashing; fast tracking", where: "estimate", note: "Compression is in Lesson 6" },
    { source: "Slide 18", content: "Time baseline", where: "control" },
    { source: "Notes p.1", content: "Why schedule management matters; process flow; plan schedule management", where: "overview" },
    { source: "Notes p.2", content: "Schedule management plan; define activities", where: "plan-define" },
    { source: "Notes p.3", content: "Rolling wave; milestones; sequence activities; FS/SS", where: "plan-define", note: "Sequencing is in Lesson 3" },
    { source: "Notes p.4", content: "FF/SF; dependency types; leads and lags", where: "sequence" },
    { source: "Notes p.5", content: "Estimate activity durations; padding", where: "estimate" },
    { source: "Notes p.6", content: "Develop schedule; CPM; worked example", where: "cpm" },
    { source: "Notes p.7", content: "Float; benefits of the critical path; schedule compression", where: "cpm", note: "Compression is in Lesson 6" },
    { source: "Notes p.8", content: "Fast tracking vs crashing; resource optimisation", where: "compress" },
    { source: "Notes p.9", content: "Control schedule; quick revision", where: "control" },
    { source: "Kahoot 4 (Q1–Q10)", content: "10 questions with answer key", where: "cpm", note: "All 10 are in the Kahoot 4 question set; points taught in Lessons 3, 5 and 6" },
  ],
});
