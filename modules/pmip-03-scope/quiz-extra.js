/* ==========================================================================
   Kahoot 3 — Scope Management
   Questions and options are worded exactly as in the Kahoot file (including
   the original spelling "funcionality" and "priorization"); the answer is the
   one marked correct by Kahoot. Explanations were added.
   ========================================================================== */
Academy.extraQuiz("pmip-03-scope", {
  id: "kahoot",
  title: "Kahoot 3",
  description: "The 10 Kahoot questions from class, with Kahoot's answer key.",
  source: "Kahoot 3 — Scope Management (Q&A)",
  questions: [
    { lesson: "wbs", prompt: "The Work Breakdown Structure (WBS) is:", options: ["tool to define the details of project deliverables", "tool to review the key project stakeholders", "visual, hierarchical deconstruction of the project deliverables", "systematic approach to feature priorization"], answer: "C", explanation: "Option A describes the WBS dictionary; option D is closer to the Kano model." },
    { lesson: "define", prompt: "During which part of the project management process is the project scope statement created?", options: ["Initiating", "Executing", "Monitoring and controlling", "Planning"], answer: "D", explanation: "Define Scope is a Planning process (Notes p.4)." },
    { lesson: "dictionary", prompt: "All of the following are parts of the scope baseline EXCEPT the:", options: ["Project scope statement", "Traceability Matrix", "WBS dictionary", "Work breakdown structure"], answer: "B", explanation: "Scope baseline = scope statement + WBS + WBS dictionary." },
    { lesson: "requirements", prompt: "A requirement is:", options: ["The application of tools and techniques to meet the customer expectations", "A necessary condition about content and funcionality of a product/service", "The transformation of an idea into a reality", "A unique result to perform a product/service as part of a project"], answer: "B", explanation: "Option C is the course's definition of a project; option D is a deliverable." },
    { lesson: "define", prompt: "A deliverable is:", options: ["The transformation of an idea into a reality", "The application tools and techniques to meet the customer expectations", "A necessary condition about content and funcionality of a product/service", "A unique result to perform a product/service as part of a project"], answer: "D", explanation: "Option C is a requirement; option A is a project." },
    { lesson: "wbs", prompt: "The WBS can BEST be thought of as an effective aid for _____ communications.", options: ["Stakeholders", "Team", "Sponsor", "Customer"], answer: "A", explanation: "Notes p.6 exam point: stakeholder communications (which include the team, sponsor and customer)." },
    { lesson: "dictionary", prompt: "We can find all the details of the project deliverables in:", options: ["Work Breakdown Structure", "WBS Dictionary", "Traceability Matrix", "Kano model"], answer: "B", explanation: "The WBS only names deliverables; the WBS dictionary describes them." },
    { lesson: "intro", prompt: "Which process group focuses on completing the project deliverables?", options: ["Executing", "Initiating", "Planning", "Closing"], answer: "A", explanation: "Deliverables are produced in Executing, then verified and validated in Monitoring & Controlling." },
    { lesson: "intro", prompt: "To properly manage the development of a project you should ensure that are approved:", options: ["Customer expectations and implementation tools.", "The requirements and the project deliverables.", "Corrective actions, preventive actions and change requests.", "Change management protocol"], answer: "B", explanation: "Scope must be defined and approved before work starts, and deliverables formally accepted throughout." },
    { lesson: "requirements", prompt: "A traceability matrix allows to:", options: ["Ensure that all available resources are allocated", "It’s Friday, then, it’s Saturday Sunday…What?", "Ensure all client requirements are matched to deliverables", "Define the deliverable code, its responsible and resources"], answer: "C", explanation: "Option D describes the WBS dictionary." },
  ],
});
