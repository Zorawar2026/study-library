/* ==========================================================================
   Kahoot 4 — Scheduling
   Questions and options are worded exactly as in the Kahoot file; the answer
   is the one marked correct by Kahoot. Explanations were added.
   ========================================================================== */
Academy.extraQuiz("pmip-04-schedule", {
  id: "kahoot",
  title: "Kahoot 4",
  description: "The 10 Kahoot questions from class, with Kahoot's answer key.",
  source: "Kahoot 4 — Scheduling (Q&A)",
  questions: [
    { lesson: "cpm", prompt: "Technique used to analyse the sequence of activities with least amount of schedule flexibility", options: ["Work breakdown structure", "Critical path method", "Precedence diagramming", "Flowchart"], answer: "B", explanation: "The critical path is the sequence of activities with the least (zero) float." },
    { lesson: "sequence", prompt: "A dependency requiring that design must be completed before manufacturing is an example of:", options: ["External dependency", "Discretionary dependency", "Scope dependency", "Mandatory dependency"], answer: "D", explanation: "It is inherent in the nature of the work (hard logic)." },
    { lesson: "cpm", prompt: "The slack of an activity is:", options: ["Determining the waiting time between activities", "Determining lag times", "Performing a Monte Carlo analysis", "Time an activity can be delayed without delaying the project"], answer: "D", explanation: "This is total float. Waiting time between activities (A, B) is lag." },
    { type: "truefalse", lesson: "cpm", prompt: "In every project, there must be at least one critical path (True/False)", answer: true, explanation: "There is always a longest path through the network." },
    { lesson: "cpm", prompt: "A project has 3 critical paths. Which BEST describes how this affects the project?", options: ["It makes it more expensive", "It requires more people", "It makes it easier to manage", "It increases the project risk"], answer: "D", explanation: "More activities with zero float means more ways for the end date to slip." },
    { lesson: "sequence", prompt: "In CPM, which of the following relationships is rarely used:", options: ["Finish-to-Start", "Start-to-Start", "Start-to-Finish", "Finish-to-Finish"], answer: "C", explanation: "Notes p.4: SF is rarely used; FS is the most common." },
    { lesson: "sequence", prompt: "A schedule activity may begin 10 days before the predecessor activity finishes. That is:", options: ["Milestone diagram", "Precedence Diagram Method", "A dependency with lead time", "A dependency with lag time"], answer: "C", explanation: "Starting before the predecessor finishes is a lead (overlap)." },
    { lesson: "compress", prompt: "Which is BEST to do when asked to complete a project 2 days earlier than planned", options: ["Work hard and see what the project status is next month", "Ask your manager", "Tell senior manager that is not possible to finish earlier", "Meet your team to look options for crashing or fast tracking"], answer: "D", explanation: "First analyse compression options with the team, then choose the least-impact one (Notes p.7)." },
    { lesson: "sequence", prompt: "Which step do we follow to define the design logic and implementation of a project?", options: ["Define project objectives", "Allocate resources", "Sequence work packages", "Monitor project performance"], answer: "C", explanation: "Sequencing establishes the logical order in which the work will be carried out (Slide 2, step 2)." },
    { lesson: "cpm", prompt: "The Early Start of a deliverable is 12, the Late start is 14. The slack/float is…", options: ["- 2 days", "0 days. It’s a critical activity", "2 days", "What is a slack / float?"], answer: "C", explanation: "Float = LS − ES = 14 − 12 = 2 days." },
  ],
});
