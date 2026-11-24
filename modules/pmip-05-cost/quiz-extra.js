/* ==========================================================================
   Kahoot 5 — Cost Management / EVMS
   Questions and options are worded exactly as in the Kahoot file (Q9's joke
   option is the digits of pi, as in the original); the answer is the one
   marked correct by Kahoot. Explanations were added.
   ========================================================================== */
Academy.extraQuiz("pmip-05-cost", {
  id: "kahoot",
  title: "Kahoot 5",
  description: "The 10 Kahoot questions from class, with Kahoot's answer key.",
  source: "Kahoot 5 — Cost Management EVMS (Q&A)",
  questions: [
    { lesson: "budget", prompt: "The reserve between the cost baseline and the budget can be BEST described as:", options: ["Management reserve", "Contingency reserve", "Cost estimate", "Cost accounting"], answer: "A", explanation: "Cost budget − cost baseline = management reserve. The contingency reserve is inside the baseline." },
    { lesson: "evm", prompt: "If EV = 350, AC = 400, and PV = 325, what is the cost variance (CV)?", options: ["400", "-75", "-50", "350"], answer: "C", explanation: "CV = EV − AC = 350 − 400 = −50. (−75 would be PV − AC, a common mistake.)" },
    { lesson: "forecast", prompt: "A way to compute estimate at completion (EAC) is to take the budget at completion (BAC) and:", options: ["Divide by SPI", "Multiply by SPI", "Multiply by CPI", "Divide by CPI"], answer: "D", explanation: "EAC = BAC / CPI (Slide 22)." },
    { lesson: "forecast", prompt: "Estimate at completion (EAC) is a periodic evaluation of:", options: ["The value of work performed", "The anticipated total cost at project completion", "None of above", "The cost of work completed"], answer: "B", explanation: "Option A is EV; option D is AC." },
    { lesson: "evm", prompt: "A schedule performance index (SPI) of 0.76 means:", options: ["You are progressing at 76% of the rate originally planned", "You are ahead of schedule", "You are over budget", "You are progressing at 24% of the rate originally planned"], answer: "A", explanation: "SPI = EV / PV = 0.76 → 76% of the planned rate; behind schedule. SPI says nothing about cost." },
    { lesson: "budget", prompt: "The cost contingency reserve should be:", options: ["Hidden to prevent management from disallowing the reserve", "Added to each activity to provide a shorter critical path", "Added to direct costs of the project to manage known risks", "Maintained to cover cost overruns"], answer: "C", explanation: "Contingency reserves cover known (identified) risks and are part of the cost baseline (Slide 12: +<10%)." },
    { lesson: "evm", prompt: "If CPI=1.3, SPI=0.8, what’s the status of the project?", options: ["Under budget and ahead of schedule", "Over budget and ahead of schedule", "Under budget and behind schedule", "Over budget and behind schedule"], answer: "C", explanation: "CPI above 1 → under budget; SPI below 1 → behind schedule." },
    { lesson: "evm", prompt: "EV = 100, PV = 110, AC = 100. The schedule performance index is:", options: ["0.91", "1", "1.1", "-10"], answer: "A", explanation: "SPI = EV / PV = 100 / 110 = 0.91. (1 is the CPI; −10 is the SV.)" },
    { lesson: "practice", prompt: "Project budget=10.000. PV=4.000. Project is 30% completed and 20% of budget spent. The AC is:", options: ["2400", "3000", "2000", "3.1415926535897932384626433832795028841971"], answer: "C", explanation: "AC = 20% × 10,000 = 2,000. EV = 30% × 10,000 = 3,000 is a distractor." },
    { lesson: "evm", prompt: "You are managing a project with EV=15.000, PV=12.000, AC=11.000. The project is:", options: ["Behind schedule and over its budget", "Ahead of schedule and over its budget", "Ahead of schedule and under its budget", "Behind schedule and under its budget"], answer: "C", explanation: "SV = EV − PV = +3,000 (ahead); CV = EV − AC = +4,000 (under budget)." },
  ],
});
