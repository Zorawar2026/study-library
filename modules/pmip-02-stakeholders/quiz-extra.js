/* ==========================================================================
   Kahoot 2 — Stakeholders Management
   Questions and options are worded exactly as in the Kahoot file. The answer
   is Kahoot's, except Q2 (see its explanation). Explanations were added.
   ========================================================================== */
Academy.extraQuiz("pmip-02-stakeholders", {
  id: "kahoot",
  title: "Kahoot 2",
  description: "The 10 Kahoot questions from class, with Kahoot's answer key. Q1 was shown with the Business Model Evolution diagram (Slide 5).",
  source: "Kahoot 2 — Stakeholders Management (Q&A)",
  questions: [
    {
      lesson: "strategic-thinking",
      prompt: "What is the primary purpose of linking initiatives to a long-term purpose or vision?\n\n*(Shown with the Business Model Evolution diagram: initiatives move in waves from Today towards Purpose, across five streams — Customer and Influencers; Offerings and Value Proposition; Process and Workflow; Technology and Data Analytics; People, Organization and Partnerships.)*",
      options: ["To simplify organizational structures", "To ensure strategic coherence", "To increase reporting requirements", "To reduce operational costs"],
      answer: "B",
      explanation: "Every wave of initiatives moves the organisation in the same direction, towards the purpose.",
    },
    {
      lesson: "strategic-thinking",
      prompt: "Which horizon is most concerned with transformative opportunities that may create entirely new markets?",
      options: ["Horizon 1", "Horizon 3", "Horizon 2", "All horizons equally"],
      answer: "B",
      explanation: "**⚠ Kahoot's answer key marks [C] Horizon 2.** This site marks Horizon 3, because the professor's Slide 15 puts \"exploration into new markets\" and \"new categories that are visionary, transformative, and new to the world\" in Horizon 3 (+10 years); Horizon 2 is \"adjacent growth\" (+4 years). The Kahoot file itself notes this. Confirm with the professor which answer the final test expects.",
    },
    {
      lesson: "identify",
      prompt: "A project stakeholder is…?",
      options: ["Anyone who is involved in the project", "Anyone who can influence the project outcomes", "Anyone positively or negatively impacted by the project", "Anyone who can affect/be affected positively or negatively by the project"],
      answer: "D",
      explanation: "Options A–C are each only part of the definition; D covers both affecting and being affected, positively or negatively.",
    },
    {
      lesson: "identify",
      prompt: "Stakeholders can be identified in which project management process groups?",
      options: ["Initiating and planning", "Monitor&controlling and closing", "Initiating, planning, executing, and monitor&controlling", "Planning and monitor&controlling"],
      answer: "C",
      explanation: "Identification starts in Initiating but continues as new stakeholders appear during the project.",
    },
    {
      lesson: "identify",
      prompt: "Information in the stakeholders matrix should be:",
      options: ["Accessible only to the project manager", "Shared with others at the discretion of the project manager", "Available to all stakeholders and team members", "Available to the project manager and PMO staff"],
      answer: "B",
      explanation: "The register contains sensitive assessments, so the PM decides who sees what.",
    },
    {
      lesson: "classify",
      prompt: "The degree to which a particular stakeholder may be able to positively or negatively affect a project is the:",
      options: ["Level of commitment", "Level of power/influence", "Level of engagement", "Level of interest"],
      answer: "B",
      explanation: "Notes p.3: level of influence.",
    },
    {
      lesson: "kano",
      prompt: "The Kano model is an approach for:",
      options: ["Product/service development and customer satisfaction", "Prioritizing project stakeholders", "Dealing with the transition or transformation of an organization’s goals", "Who is Noriaki Kano?"],
      answer: "A",
      explanation: "Kano classifies features by their effect on customer satisfaction. Prioritising stakeholders is done with grids and the salience model.",
    },
    {
      lesson: "kano",
      prompt: "In the Kano model, the perceived quality levels by the stakeholders are:",
      options: ["It’s too early…Please, let me go!", "Unaware, Resistant, Neutral, Supportive, Leading", "Must-be, Desired, Attractive and Indifferent", "Impact, Influence and Interest"],
      answer: "C",
      explanation: "Option B lists the stakeholder engagement levels, not Kano categories.",
    },
    {
      lesson: "kano",
      prompt: "Attractive functionalities/features/solutions…",
      options: ["None of above", "deliver unexpected, novel, or new high-value benefits to the customer.", "have no impact on customers in one way or another.", "will not necessarily raise satisfaction if they are present."],
      answer: "B",
      explanation: "Option C describes indifferent features; option D describes must-be (dissatisfiers).",
    },
    {
      type: "multi",
      lesson: "engage",
      prompt: "A key to succeed as project leader is: (Check all that apply)",
      options: ["to be faster, better and stronger", "how you involve stakeholders on your projects", "how you handle stakeholder relationships", "to satisfy the stakeholders’ needs and expectations"],
      answer: [0, 1, 2, 3],
      explanation: "Kahoot marked all four options correct.",
    },
  ],
});
