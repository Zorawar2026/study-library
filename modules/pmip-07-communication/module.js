/* ==========================================================================
   Project Management in Practice — Module 7: Effective Communication
   Sources: Slides "6_Effective Communication for Project Leaders" (12 slides).
   No notes or Kahoot were provided for this topic.
   ========================================================================== */

const PM7_SVG_FUNNEL = `<svg viewBox="0 0 560 330" width="560" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:13px">
<g fill="currentColor" font-weight="700" text-anchor="middle"><text x="280" y="18">What I mean</text><text x="280" y="322">What the audience remembers</text></g>
<path d="M150 30H410L384 78H176Z" fill="#c8553d"/><path d="M176 80H384L358 128H202Z" fill="#5fae8c"/><path d="M202 130H358L332 178H228Z" fill="#4f9fc0"/><path d="M228 180H332L306 228H254Z" fill="#6c7a89"/><path d="M254 230H306L298 278H262Z" fill="#e3a33b"/><rect x="266" y="280" width="28" height="22" fill="#e3a33b"/>
<g fill="#fff" font-weight="800" text-anchor="middle"><text x="280" y="59">1</text><text x="280" y="109">2</text><text x="280" y="159">3</text><text x="280" y="209">4</text><text x="280" y="259">5</text></g>
<g fill="currentColor" font-weight="600"><text x="140" y="59" text-anchor="end">How I communicate it</text><text x="400" y="109">What I say</text><text x="190" y="159" text-anchor="end">What they listen to</text><text x="345" y="209">What they understand</text><text x="248" y="259" text-anchor="end">What they interpret</text></g></svg>`;

const PM7_SVG_SERIAL = `<svg viewBox="0 0 560 280" width="560" xmlns="http://www.w3.org/2000/svg" style="font-family:var(--font-body);font-size:12px">
<defs><marker id="pm7a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<rect style="fill:var(--t-blue)" x="210" y="40" width="140" height="200" opacity="0.12"/>
<g stroke="currentColor" stroke-width="1.5" fill="none"><path d="M70 240H540" marker-end="url(#pm7a)"/><path d="M70 240V20" marker-end="url(#pm7a)"/></g>
<path d="M95 60C140 160 180 220 270 222C350 224 420 200 480 90" stroke="currentColor" stroke-width="2.5" fill="none"/>
<path d="M330 222C400 220 450 216 520 212" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" fill="none"/>
<g fill="currentColor"><text x="60" y="44" text-anchor="end">100</text><text x="60" y="244" text-anchor="end">0</text><text x="305" y="268" text-anchor="middle">Position in sequence</text>
<text x="20" y="140" transform="rotate(-90 20 140)" text-anchor="middle">Percentage recalled</text>
<text x="130" y="234" text-anchor="middle" font-size="11">Primacy</text><text x="280" y="234" text-anchor="middle" font-size="11">Intermediate</text><text x="460" y="234" text-anchor="middle" font-size="11">Recency</text>
<text x="100" y="30" font-weight="700">Primacy effect</text><text x="400" y="30" font-weight="700">Recency effect</text></g>
<g fill="currentColor" font-size="10" opacity="0.75"><text x="400" y="200">dashed: delayed recall —</text><text x="400" y="212">recency fades</text></g></svg>`;

Academy.module({
  id: "pmip-07-communication",
  title: "Effective Communication for Project Leaders",
  subtitle: "The three laws of communication, the Mehrabian principle, how messages get lost, primacy and recency, knowing your audience, storytelling and the Pyramid Principle.",
  category: "Project Management in Practice",
  icon: "7",
  color: "#5b9dff",
  version: "1.0",
  updated: "2026-11-24",
  studyTime: "45–60 min",

  sources: [
    { id: "S7", label: "Slides — Effective Communication for Project Leaders", detail: "Prof. José Cobo, ESCP Business School. 12 slides. Referred to as *Slide 1–12*. No notes or Kahoot were provided for this topic, so the slides are the only source; explanations beyond them are marked as added." },
  ],

  overview:
    "Communication is how a project leader **stays focused and effective**. This module covers three laws of communication — it is [[impossible-not-to-communicate|impossible not to communicate]]; [[communication-formula|communication = (content + structure) × relationship]]; and the question of who is responsible when a message is misunderstood — plus the [[mehrabian|Mehrabian principle]].\n\nIt then shows how a message is lost on its way from *what I mean* to *what the audience remembers*, and how [[serial-position|primacy and recency]] decide what people recall. It ends with three tools for building a message: [[know-your-audience|knowing your audience]], [[storytelling|storytelling]] and the [[pyramid-principle|Pyramid Principle]].",

  prerequisites: ["Module 2: stakeholders (your audiences)."],

  objectives: [
    "State the three laws of communication and explain each.",
    "Describe the Mehrabian principle and its limits.",
    "Explain how a message is lost between what I mean and what the audience remembers.",
    "Use primacy and recency to decide where to put key messages.",
    "Analyse an audience by role, expectation and familiarity.",
    "Build a storytelling narrative and structure a message with the Pyramid Principle.",
  ],

  lessons: [
    /* ------------------------------------------------------------------ */
    {
      id: "laws",
      title: "The laws of communication",
      source: "Slides 1–6",
      summary: "Why communication is a core skill for project leaders, the three laws of communication and the Mehrabian principle.",
      builds_on: [],
      blocks: [
        {
          type: "intuition",
          md: "Everything a project leader does sends a message — what they say, how they say it, and even what they don't say. Effective communication means making sure the message people receive is the one you meant.",
        },
        {
          type: "quote",
          md: "Effective Communication — How you stay focused and effective",
          source: "Slide 2",
          note: "Illustrated by a row of light bulbs with only one lit: the one idea that gets through.",
        },
        {"type": "diagram", "kind": "cards", "title": "The three laws of communication", "cols": 3, "cards": [{"title": "Law I", "text": "It's impossible not to communicate", "icon": "eye", "tone": "violet"}, {"title": "Law II", "text": "Communication = [Content + Structure] × Relationship", "icon": "link", "tone": "cyan"}, {"title": "Law III", "text": "When B misinterprets A, who is responsible?", "icon": "message", "tone": "pink"}], "source": "Slides 3–6"},
        { type: "heading", text: "Law I — It's impossible not to communicate" },
        { type: "definition", term: "impossible-not-to-communicate", source: "Slide 3" },
        {"type": "figure", "src": "img/slide-03.jpg", "alt": "Slide 3: five people whose posture is annotated with possible meanings", "caption": "Original slide 3: body language sends messages even in silence.", "source": "Slide 3 (original)"},
        {
          type: "text",
          md: "Slide 3 shows five people whose posture alone sends messages — labelled *nervousness*, *hiding something, but what?*, *menacing*, *confident*, *genuine*, *insecure?*, *indignant*, *wants to leave*, *lying?*. None of them is speaking, yet each is communicating.",
          source: "Slide 3",
        },
        { type: "heading", text: "The Mehrabian principle" },
        { type: "definition", term: "mehrabian", source: "Slide 4" },
        {"type": "diagram", "kind": "donut", "title": "The Mehrabian principle", "unit": "%", "center": "Feelings", "segments": [{"title": "Body language", "value": 55, "tone": "pink"}, {"title": "Tone of voice", "value": 38, "tone": "blue"}, {"title": "Words", "value": 7, "tone": "red"}], "caption": "Shares for judging feelings and attitudes when words and non-verbal signals disagree.", "source": "Slide 4"},
        {"type": "figure", "src": "img/slide-04.jpg", "alt": "Slide 4: pie chart 55% body language, 38% tone, 7% words", "caption": "Original slide 4: the Mehrabian principle.", "source": "Slide 4 (original)"},
        {
          type: "table",
          caption: "The Mehrabian principle (Slide 4)",
          headers: ["Channel", "Share"],
          rows: [["Body language", "**55%**"], ["Tone of voice", "**38%**"], ["Words", "**7%**"]],
          source: "Slide 4",
        },
        {
          type: "callout",
          kind: "added",
          title: "Important limit of the 7–38–55 figures",
          md: "Albert Mehrabian's studies (1960s–1970s) measured how people judge a speaker's **feelings and attitudes** (liking or disliking) when words, tone and body language **contradict** each other. They do not mean that words carry only 7% of the meaning of every message — in a technical briefing, the words matter a great deal. The practical lesson is: **when your words, voice and body language disagree, people believe the voice and body language**.",
        },
        { type: "heading", text: "Law II — Communication = [Content + Structure] × Relationship" },
        { type: "definition", term: "communication-formula", source: "Slide 5" },
        {"type": "diagram", "kind": "equation", "title": "Law II", "ops": ["+", "×", "="], "terms": [{"title": "Content", "text": "what you say", "tone": "cyan"}, {"title": "Structure", "text": "how it is organised", "tone": "green"}, {"title": "Relationship", "text": "multiplies everything", "tone": "pink"}, {"title": "Communication"}], "source": "Slide 5"},
        {
          type: "formula",
          label: "Law II",
          tex: "\\text{Communication} = [\\text{Content} + \\text{Structure}] \\times \\text{Relationship}",
          md: "**Level of relationship conditions content** (Slide 5). Content and structure *add up*, but the relationship *multiplies* them: with a strong relationship, a good message is amplified; with no relationship (close to zero), even excellent content and structure achieve little.",
          source: "Slide 5",
        },
        {
          type: "callout",
          kind: "added",
          md: "The explanation of why the relationship *multiplies* rather than adds is an interpretation of the formula; the slide states the formula and \"level of relationship conditions content\".",
        },
        { type: "heading", text: "Law III — Who is responsible for a misunderstanding?" },
        {
          type: "quote",
          md: "When B misinterprets a message from A, the responsible is…",
          source: "Slide 6",
          note: "The slide leaves the sentence open for discussion.",
        },
        { type: "definition", term: "sender-responsibility", source: "Slide 6" },
        {
          type: "callout",
          kind: "added",
          md: "The slide does not give the answer. The usual answer in leadership communication — and the one consistent with the rest of this deck (\"know your audience\", the communication funnel) — is **A, the sender**: the person communicating is responsible for making sure the message is understood, by adapting it to the audience and checking understanding. Confirm the answer intended in class with the professor.",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "If I say nothing, I'm not communicating.", right: "**Law I:** silence, posture and absence all send messages (Slide 3)." },
            { wrong: "A perfectly written message works regardless of who sends it.", right: "**Law II:** the relationship multiplies content and structure (Slide 5)." },
            { wrong: "Only 7% of any message is the words.", right: "That figure applies to feelings and attitudes when channels **conflict** (added note)." },
          ],
        },
      ],
      takeaways: [
        "Law I: it's impossible not to communicate — body language communicates even in silence.",
        "Mehrabian: body language 55%, tone of voice 38%, words 7% — when judging feelings from inconsistent signals.",
        "Law II: Communication = [Content + Structure] × Relationship; the level of relationship conditions content.",
        "Law III: when B misinterprets A, the usual answer is that A (the sender) is responsible.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "According to the Mehrabian principle on Slide 4, what share is attributed to **tone of voice**?",
          options: ["7%", "38%", "55%", "93%"],
          answer: 1,
          explanation: "Body language 55%, tone of voice 38%, words 7%.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In Law II, what happens if the relationship is very weak?",
          options: ["Content and structure compensate fully", "Communication is weak even with good content and structure, because the relationship multiplies them", "Only structure matters", "Nothing changes"],
          answer: 1,
          explanation: "Communication = [content + structure] × relationship: a factor near zero makes the product small.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which statement is Law I?",
          options: ["Communication = content × relationship", "It's impossible not to communicate", "The sender is always right", "Words are 7% of communication"],
          answer: 1,
          explanation: "Slide 3.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "message-loss",
      title: "How messages get lost — and what people remember",
      source: "Slides 7–8",
      summary: "The communication funnel from what I mean to what the audience remembers, and the primacy and recency effects.",
      builds_on: ["laws"],
      blocks: [
        { type: "definition", term: "communication-funnel", source: "Slide 7" },
        {"type": "figure", "src": "img/slide-07.jpg", "alt": "Slide 7: communication funnel", "caption": "Original slide 7: from what I mean to what the audience remembers.", "source": "Slide 7 (original)"},
        {
          type: "figure",
          svg: PM7_SVG_FUNNEL,
          alt: "A funnel narrowing from 'What I mean' at the top to 'What the audience remembers' at the bottom, through five numbered levels: 1 how I communicate it, 2 what I say, 3 what they listen to, 4 what they understand, 5 what they interpret.",
          caption: "The communication funnel: at each level, part of the message is lost.",
          source: "Slide 7 (redrawn)",
        },
        {
          type: "list",
          title: "From what I mean to what the audience remembers",
          items: ["Start: **What I mean**", "Level 1: **How I communicate it**", "Level 2: **What I say**", "Level 3: **What they listen to**", "Level 4: **What they understand**", "Level 5: **What they interpret**", "End: **What the audience remembers**"],
          source: "Slide 7",
        },
        {
          type: "callout",
          kind: "tip",
          title: "Using the funnel",
          md: "Each level is a place where meaning can be lost, so each suggests a check: choose the right channel (1), say it clearly (2), make sure they are listening (3), check understanding — e.g. ask them to summarise (4), and confirm the interpretation and next steps in writing (5).",
        },
        {
          type: "callout",
          kind: "added",
          md: "The \"Using the funnel\" checks are added; Slide 7 shows the funnel without commentary.",
        },
        { type: "heading", text: "Primacy and recency" },
        { type: "definition", term: "serial-position", source: "Slide 8" },
        {"type": "figure", "src": "img/slide-08.jpg", "alt": "Slide 8: U-shaped recall curve", "caption": "Original slide 8: primacy and recency effects.", "source": "Slide 8 (original)"},
        {
          type: "figure",
          svg: PM7_SVG_SERIAL,
          alt: "A U-shaped curve of percentage recalled against position in a sequence: high at the start (primacy effect), low in the intermediate positions, high again at the end (recency effect). A dashed line shows that under delayed recall the end of the curve stays low.",
          caption: "Percentage recalled by position in a sequence.",
          source: "Slide 8 (redrawn)",
        },
        {
          type: "table",
          headers: ["Effect", "Explanation on the slide"],
          rows: [
            ["**Primacy effect**", "Initial items are stored in long-term memory more efficiently"],
            ["**Recency effect**", "Last few items are still in working memory and are readily available"],
            ["Intermediate positions", "Lowest recall"],
          ],
          source: "Slide 8 (Source: *Two Stage Mechanisms in Free Recall* (1966), Glanzer & Cunitz)",
        },
        {
          type: "callout",
          kind: "key",
          title: "For project leaders",
          md: "Put the **key message at the start** and **repeat it at the end**; don't bury it in the middle. This is exactly what the Pyramid Principle does (next lesson): key idea first, conclusion \"go back to the key message\".",
        },
        {
          type: "callout",
          kind: "added",
          md: "The \"For project leaders\" advice and the link to the Pyramid Principle are added. The dashed line on the slide is read here as delayed recall, in line with the cited Glanzer & Cunitz study, where the recency effect disappears after a delay; the slide does not label it.",
        },
      ],
      takeaways: [
        "A message passes through: what I mean → how I communicate it → what I say → what they listen to → what they understand → what they interpret → what the audience remembers. Something is lost at each step.",
        "Primacy: early items go to long-term memory. Recency: last items are still in working memory. The middle is remembered least.",
        "Put the key message first and repeat it at the end.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "In the funnel on Slide 7, what comes immediately after \"What they listen to\"?",
          options: ["What I say", "What they understand", "What they interpret", "What the audience remembers"],
          answer: 1,
          explanation: "… 3 what they listen to → 4 what they understand → 5 what they interpret.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Why are the last items in a list well remembered right after hearing them?",
          options: ["They are stored in long-term memory", "They are still in working memory", "They are repeated", "They are more important"],
          answer: 1,
          explanation: "Slide 8: recency effect.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Where should a key message NOT be placed in a presentation?",
          options: ["At the start", "In the middle only", "At the end", "At the start and the end"],
          answer: 1,
          explanation: "Intermediate positions have the lowest recall.",
          difficulty: 1,
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "storytelling",
      title: "Know your audience, storytelling and the Pyramid Principle",
      source: "Slides 9–12",
      summary: "Analysing the audience for each story, building a contextual narrative, and structuring the message from key idea to arguments to data.",
      builds_on: ["message-loss"],
      blocks: [
        { type: "heading", text: "Know your audience for each story" },
        { type: "definition", term: "know-your-audience", source: "Slide 9" },
        {"type": "diagram", "kind": "cards", "title": "Know your audience", "cols": 3, "cards": [{"title": "Role", "text": "seniority and urgency", "icon": "users", "tone": "green"}, {"title": "Expectation", "text": "what's in it for them?", "icon": "target", "tone": "cyan"}, {"title": "Familiarity", "text": "with the topic / problem", "icon": "book", "tone": "violet"}], "source": "Slide 9"},
        {
          type: "table",
          caption: "Three questions about the audience (Slide 9)",
          headers: ["Dimension", "What to consider"],
          rows: [["**Role**", "Seniority and urgency"], ["**Expectation**", "What's in it for them?"], ["**Familiarity**", "With the topic/problem"]],
          source: "Slide 9",
        },
        {
          type: "callout",
          kind: "note",
          md: "This links to stakeholder analysis in [Module 2](module.html?m=pmip-02-stakeholders#L-identify): role ≈ power and position; expectation ≈ the stakeholder's expectations and interest.",
        },
        { type: "heading", text: "Build contextual narratives = storytelling" },
        { type: "definition", term: "storytelling", source: "Slide 10" },
        {"type": "diagram", "kind": "flow", "title": "Build a contextual narrative", "steps": [{"title": "Who am I telling my story to?", "text": "audience", "icon": "users", "tone": "green"}, {"title": "Why am I telling this story?", "text": "purpose / insight", "icon": "bulb", "tone": "yellow"}, {"title": "How do I make it believable?", "text": "drive it with data", "icon": "chart", "tone": "cyan"}, {"title": "How do I make it engaging?", "text": "visualisation: style, volume of data, highlighting", "icon": "eye", "tone": "pink"}], "source": "Slide 10"},
        {
          type: "table",
          caption: "Four questions of a story (Slide 10)",
          headers: ["Question", "Answer it with"],
          rows: [
            ["Who am I telling my story to?", "**Audience**"],
            ["Why am I telling this story?", "**Purpose / insight**"],
            ["How do I make this story believable?", "**Drive it with data**"],
            ["How do I make this story engaging?", "**Choice of visualisation** — style, volume of data, highlighting"],
          ],
          source: "Slide 10",
        },
        { type: "heading", text: "The Pyramid Principle" },
        { type: "definition", term: "pyramid-principle", source: "Slides 11–12" },
        {"type": "diagram", "kind": "layers", "title": "The Pyramid Principle", "rows": [{"label": "Introduction", "boxes": [{"title": "Context – Situation – Implication"}], "tone": "blue"}, {"boxes": [{"title": "KEY idea or message", "text": "what this is about"}], "tone": "pink"}, {"label": "Arguments", "boxes": [{"title": "Argument 1"}, {"title": "Argument 2"}, {"title": "Argument 3"}], "tone": "violet"}, {"label": "Support", "boxes": ["Data", "Data", "Data", "Data", "Data", "Data"], "tone": "cyan"}, {"boxes": [{"title": "Conclusion: go back to the KEY message"}], "tone": "pink"}], "source": "Slides 11–12"},
        {"type": "gallery", "images": [{"src": "img/slide-11.jpg", "caption": "Slide 11: the Pyramid Principle", "alt": "Slide 11: pyramid principle diagram"}, {"src": "img/slide-12.jpg", "caption": "Slide 12: the template", "alt": "Slide 12: key idea, arguments and data template"}], "source": "Slides 11–12 (original)", "cols": 2},
        {
          type: "steps",
          title: "Structure of the Pyramid Principle (Slides 11–12)",
          items: [
            "**Context – Situation – Implication** (the introduction).",
            "**KEY idea or message** — *what this is about*.",
            "**Arguments 1, 2, 3** — reached by **inductive–deductive reasoning**, each answering the audience's **implicit questions** (how? in what manner? with whom? by when?).",
            "**Support / data** — two pieces under each argument (*other data*).",
            "**Conclusion: go back to the KEY message** (*End: go back to key message*).",
          ],
          source: "Slides 11–12",
        },
        {
          type: "text",
          md: "Slide 11 labels the top part (context and key idea) as the **INTRODUCTION** and the lower part (arguments and data) as the **ARGUMENTS**.",
          source: "Slide 11",
        },
        {
          type: "example",
          title: "Using the Slide 12 template for a project update",
          problem: "You must tell the steering committee that the project needs a two-week extension. Build the message with the Pyramid Principle.",
          steps: [
            { do: "**Context – situation – implication:** \"The supplier delivered the hardware 10 days late; testing can't start until it is installed; without action, go-live slips by a month.\"", why: "Sets the scene in the audience's terms." },
            { do: "**Key message:** \"We recommend a two-week extension, with go-live on 15 March.\"", why: "One clear idea, stated first (primacy)." },
            { do: "**Argument 1:** it is the lowest-cost option — *support:* crashing costs €40k vs €8k for the extension; *data:* updated cost estimate.", why: "Each argument answers an implicit question (why this option?)." },
            { do: "**Argument 2:** quality is protected — *support:* full test cycle kept; *data:* defect rates from the last release.", why: "" },
            { do: "**Argument 3:** risk is controlled — *support:* supplier now on site; *data:* updated risk register.", why: "" },
            { do: "**Conclusion:** \"So we recommend the two-week extension to 15 March.\"", why: "Go back to the key message (recency)." },
          ],
          answer: "Key idea first, three supported arguments, key idea again at the end.",
        },
        {
          type: "callout",
          kind: "added",
          md: "The worked example is not in the slides; it applies the Slide 12 template to a project situation. The Pyramid Principle was developed by Barbara Minto at McKinsey; the slides do not name its author.",
        },
        {
          type: "misconceptions",
          items: [
            { wrong: "Build up to the conclusion so the audience follows your reasoning.", right: "The Pyramid Principle puts the **key message first**, then the arguments, then returns to it (Slides 11–12)." },
            { wrong: "More data makes a story more convincing.", right: "Data makes it **believable**, but engagement depends on choosing the **style, volume of data and highlighting** (Slide 10)." },
          ],
        },
      ],
      takeaways: [
        "Know your audience: role (seniority and urgency), expectation (what's in it for them?), familiarity (with the topic).",
        "Storytelling: audience → purpose/insight → believable (data) → engaging (visualisation).",
        "Pyramid Principle: context–situation–implication → key idea → 3 arguments → support/data → back to the key message.",
      ],
      check: [
        {
          type: "mcq",
          prompt: "On Slide 9, \"What's in it for them?\" is the question for which dimension?",
          options: ["Role", "Expectation", "Familiarity", "Urgency"],
          answer: 1,
          explanation: "Role = seniority and urgency; expectation = what's in it for them; familiarity = with the topic/problem.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "According to Slide 10, how do you make a story **believable**?",
          options: ["Make it short", "Drive it with data", "Use many colours", "Tell it twice"],
          answer: 1,
          explanation: "Believable → data; engaging → choice of visualisation.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "What comes immediately after \"Context – Situation – Implication\" in the Pyramid Principle?",
          options: ["Argument 1", "Support/data", "The key idea or message", "The conclusion"],
          answer: 2,
          explanation: "Slides 11–12.",
          difficulty: 1,
        },
      ],
    },
  ],

  /* ---------------------------------------------------------------- terms */
  terms: [
    { id: "impossible-not-to-communicate", term: "Law I: it's impossible not to communicate", lesson: "laws", short: "Every behaviour — posture, silence, expression — **sends a message**, whether we intend it or not.", definition: "**Law I** states that it is impossible not to communicate: body language and behaviour send messages (confidence, nervousness, insecurity, wanting to leave…) even when nothing is said.", source: "Slide 3", related: ["mehrabian"] },
    { id: "mehrabian", term: "Mehrabian principle", aliases: ["7-38-55 rule"], lesson: "laws", short: "**Body language 55%, tone of voice 38%, words 7%** — strictly, for judging feelings when words and non-verbal signals conflict.", definition: "The **Mehrabian principle** (Slide 4) attributes 55% of communication to body language, 38% to tone of voice and 7% to words. Mehrabian's research measured how people judge feelings and attitudes when the channels are inconsistent, so it shows that non-verbal signals dominate when they contradict the words.", pitfall: "Doesn't mean words are only 7% of every message.", source: "Slide 4 (limits added)", related: ["impossible-not-to-communicate"] },
    { id: "communication-formula", term: "Law II: Communication = [Content + Structure] × Relationship", lesson: "laws", short: "Content and structure add up; the **relationship multiplies** them. The level of relationship conditions content.", definition: "**Law II**: Communication = [Content + Structure] × Relationship. The level of relationship conditions content: a strong relationship amplifies a message, a weak one diminishes it whatever its content and structure.", formula: "\\text{Communication} = [\\text{Content} + \\text{Structure}] \\times \\text{Relationship}", source: "Slide 5", related: ["sender-responsibility"] },
    { id: "sender-responsibility", term: "Law III: responsibility for misunderstanding", lesson: "laws", short: "\"When B misinterprets a message from A, the responsible is…\" — usually answered **A, the sender**.", definition: "**Law III** asks who is responsible when B misinterprets a message from A. The slide leaves it open; the usual answer is the sender (A), who must adapt the message to the audience and check understanding.", source: "Slide 6 (answer added)", related: ["communication-funnel", "know-your-audience"] },
    { id: "communication-funnel", term: "Communication funnel", lesson: "message-loss", short: "What I mean → how I communicate it → what I say → what they listen to → what they understand → what they interpret → **what the audience remembers**.", definition: "The **communication funnel** (Slide 7) shows a message narrowing through five levels — how I communicate it, what I say, what they listen to, what they understand, what they interpret — between what I mean and what the audience remembers. Meaning is lost at each level.", source: "Slide 7", related: ["serial-position"] },
    { id: "serial-position", term: "Primacy and recency effects", aliases: ["serial position effect"], lesson: "message-loss", short: "People remember the **first** items (primacy: long-term memory) and the **last** items (recency: working memory) best; the **middle** least.", definition: "The **primacy effect**: initial items are stored in long-term memory more efficiently. The **recency effect**: the last few items are still in working memory and readily available. Items in intermediate positions are recalled least (Glanzer & Cunitz, 1966).", source: "Slide 8", related: ["pyramid-principle"] },
    { id: "know-your-audience", term: "Know your audience", lesson: "storytelling", short: "For each story, consider **role** (seniority and urgency), **expectation** (what's in it for them?) and **familiarity** (with the topic).", definition: "**Know your audience for each story**: analyse the audience's role (seniority and urgency), expectation (what's in it for them?) and familiarity with the topic or problem, and tailor the message accordingly.", source: "Slide 9", related: ["storytelling"] },
    { id: "storytelling", term: "Storytelling", aliases: ["contextual narrative"], lesson: "storytelling", short: "Build a contextual narrative: **audience** → **purpose/insight** → **believable** (data) → **engaging** (visualisation).", definition: "**Storytelling** = building contextual narratives by answering four questions: who am I telling my story to (audience)? why am I telling it (purpose/insight)? how do I make it believable (drive it with data)? how do I make it engaging (choice of visualisation — style, volume of data, highlighting)?", source: "Slide 10", related: ["know-your-audience", "pyramid-principle"] },
    { id: "pyramid-principle", term: "Pyramid Principle", lesson: "storytelling", short: "Context–situation–implication → **key message** → **3 arguments** → **support/data** → conclusion: **back to the key message**.", definition: "The **Pyramid Principle** structures a message top-down: an introduction (context, situation and implication), the key idea or message, arguments built by inductive–deductive reasoning that answer the audience's implicit questions, support and data under each argument, and a conclusion that goes back to the key message.", source: "Slides 11–12", related: ["storytelling", "serial-position"] },
  ],

  /* ----------------------------------------------------- final assessment */
  quizTitle: "Core questions",
  quiz: [
    { type: "mcq", lesson: "laws", difficulty: 1, prompt: "A project leader sits silently with arms crossed during a meeting. According to Law I:", options: ["They are not communicating", "They are communicating anyway", "Only their words count", "Law I doesn't apply to meetings"], answer: 1, explanation: "It's impossible not to communicate." },
    { type: "mcq", lesson: "laws", difficulty: 2, prompt: "A manager says \"I'm fine with the change\" in a flat voice while looking away. Based on the Mehrabian principle, the team will most likely believe:", options: ["The words: she is fine", "The tone and body language: she is not fine", "Neither", "Only what she writes later"], answer: 1, explanation: "When channels conflict, tone (38%) and body language (55%) outweigh words (7%)." },
    { type: "truefalse", lesson: "laws", difficulty: 2, prompt: "In Law II, relationship is added to content and structure.", answer: false, explanation: "It multiplies them: [content + structure] × relationship." },
    { type: "mcq", lesson: "message-loss", difficulty: 1, prompt: "What is at the top of the communication funnel?", options: ["What I say", "What I mean", "What they listen to", "What the audience remembers"], answer: 1, explanation: "Slide 7." },
    { type: "mcq", lesson: "message-loss", difficulty: 2, prompt: "The primacy effect happens because:", options: ["The first items are still in working memory", "The first items are stored in long-term memory more efficiently", "People stop listening at the end", "The middle items are repeated"], answer: 1, explanation: "Slide 8." },
    { type: "multi", lesson: "storytelling", difficulty: 2, prompt: "Which are the three audience dimensions on Slide 9?", options: ["Role", "Expectation", "Familiarity", "Budget"], answer: [0, 1, 2], explanation: "Role, expectation, familiarity." },
    { type: "mcq", lesson: "storytelling", difficulty: 2, prompt: "In storytelling, \"choice of visualisation — style, volume of data, highlighting\" answers which question?", options: ["Who am I telling my story to?", "Why am I telling this story?", "How do I make this story believable?", "How do I make this story engaging?"], answer: 3, explanation: "Slide 10." },
    { type: "mcq", lesson: "storytelling", difficulty: 2, prompt: "How does the Pyramid Principle end?", options: ["With a new argument", "With the data", "By going back to the key message", "With questions from the audience"], answer: 2, explanation: "Slides 11–12: conclusion — go back to the key message." },
    { type: "short", lesson: "storytelling", difficulty: 3, prompt: "Explain how the Pyramid Principle uses the primacy and recency effects.", model_answer: "The Pyramid Principle states the **key message near the start** (after a brief context–situation–implication), where the **primacy effect** helps it go into long-term memory, and **repeats it in the conclusion**, where the **recency effect** keeps it in working memory. The arguments and data sit in the middle, where recall is lowest — they support the message but don't need to be remembered word for word." },
  ],

  flashcards: [
    { front: "The three laws of communication", back: "I: it's impossible not to communicate. II: Communication = [Content + Structure] × Relationship. III: when B misinterprets A, who is responsible? (usually A, the sender)." },
    { front: "Mehrabian percentages", back: "Body language 55% · tone of voice 38% · words 7%." },
    { front: "Pyramid Principle structure", back: "Context–situation–implication → key message → 3 arguments → support/data → back to key message." },
  ],

  teachingNotes: [
    { type: "text", md: "**Suggested order:** Lessons 1 → 3. Start with Law III as an open question to the group before revealing the usual answer." },
    {
      type: "list",
      title: "Exercises",
      items: [
        "Take your last project update e-mail and rewrite it with the Pyramid Principle.",
        "For your next presentation, fill in Role / Expectation / Familiarity for each main audience member.",
        "Play \"telephone\": pass a three-point project message through four people and compare it with the original — which funnel levels lost the most?",
      ],
    },
    { type: "callout", kind: "tip", title: "What newcomers usually get wrong", md: "Over-applying the 7–38–55 figures; building up to the conclusion instead of stating it first; and blaming the listener for misunderstandings instead of checking understanding." },
  ],

  openQuestions: [
    "Slide 6 (Law III) leaves the answer open; the usual answer (A, the sender) was added — confirm with the professor.",
    "No notes or Kahoot were provided for this topic, so the assessment questions were written from the slides.",
  ],

  coverage: [
    { source: "Slide 1", content: "Title", where: "laws" },
    { source: "Slide 2", content: "How you stay focused and effective", where: "laws" },
    { source: "Slide 3", content: "Law I: it's impossible not to communicate", where: "laws" },
    { source: "Slide 4", content: "Mehrabian principle", where: "laws" },
    { source: "Slide 5", content: "Law II: [content + structure] × relationship", where: "laws" },
    { source: "Slide 6", content: "Law III: who is responsible for a misunderstanding", where: "laws" },
    { source: "Slide 7", content: "Communication funnel", where: "message-loss" },
    { source: "Slide 8", content: "Primacy and recency effects", where: "message-loss" },
    { source: "Slide 9", content: "Know your audience", where: "storytelling" },
    { source: "Slide 10", content: "Storytelling", where: "storytelling" },
    { source: "Slides 11–12", content: "Pyramid Principle", where: "storytelling" },
  ],
});
