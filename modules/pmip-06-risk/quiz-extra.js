/* ==========================================================================
   Kahoot 6 — Risk Management
   Questions and options are worded exactly as in the Kahoot file (including
   the original spelling "Performa"); the answer is the one marked correct by
   Kahoot. Explanations were added.
   ========================================================================== */
Academy.extraQuiz("pmip-06-risk", {
  id: "kahoot",
  title: "Kahoot 6",
  description: "The 10 Kahoot questions from class, with Kahoot's answer key.",
  source: "Kahoot 6 — Risk Management (Q&A)",
  questions: [
    { lesson: "identify", prompt: "What tools would you use to identify risks?", options: ["EVMS and SWOT", "WBSD, SWOT, PESTLE and RBS", "SWOT, RBS and Montecarlo simulation", "WBSD, power/interest grid"], answer: "B", explanation: "EVMS controls cost; Monte Carlo is quantitative analysis; the power/interest grid classifies stakeholders." },
    { lesson: "responses", prompt: "Purchasing insurance is BEST considered an example of risk:", options: ["Transfer", "Avoidance", "Acceptance", "Mitigation"], answer: "A", explanation: "Insurance moves the financial impact to a party outside the project." },
    { lesson: "identify", prompt: "Which of the following processes has risk register as the primary output?", options: ["Performa qualitative risk analysis", "Identify risks", "Control and monitoring risks", "Plan risk management"], answer: "B", explanation: "Identify Risks produces the risk register (and the risk report); later processes update it." },
    { lesson: "quantitative", prompt: "While preparing your risk responses, you identify additional risks. What should you do?", options: ["Nothing to do", "Add reserves to the project to accommodate the new risks", "Add a 10% contingency to the budget and notify the client", "Document the risk items and calculate the EMV"], answer: "D", explanation: "New risks must be recorded and analysed before reserves or responses are decided." },
    { lesson: "identify", prompt: "The project document to list down all the risks in a hierarchical fashion is called:", options: ["Montecarlo diagram", "Risk Management Plan", "List of risks", "Risk Breakdown Structure"], answer: "D", explanation: "The RBS organises risk categories hierarchically." },
    { type: "multi", lesson: "qualitative", prompt: "During which stage of risk planning are risks prioritised based on probability and impact? (Check all that apply)", options: ["Perform Qualitative risk analysis", "Plan risks responses", "Perform Quantitative risk analysis", "Identify risks"], answer: [0, 2], explanation: "Kahoot marks both: qualitative prioritises all risks subjectively; quantitative quantifies the top ones." },
    { lesson: "quantitative", prompt: "Modelling and simulation techniques to determine overall effects of risks on project goals are done during:", options: ["Identify risks", "Perform quantitative risk analysis", "Plan risk responses", "Perform qualitative risk analysis"], answer: "B", explanation: "e.g. Monte Carlo simulation with @RISK." },
    { lesson: "responses", prompt: "Which of these is not a valid response to positive uncertainty events?", options: ["Enhance", "Mitigate", "Share", "Exploit"], answer: "B", explanation: "Mitigate is a threat response; opportunities use exploit, enhance, share (and accept, escalate)." },
    { lesson: "intro", prompt: "We measure the impact of uncertainty in a project on:", options: ["WBS, WBSD and traceability matrix", "Scope, time, cost and quality", "Project resources", "Procurement and stakeholders"], answer: "B", explanation: "These are the project objectives that risks can affect." },
    { lesson: "quantitative", prompt: "The tool used to quantify the monetary value of a risk is called:", options: ["WBSD", "EMV", "RBS", "EVMS"], answer: "B", explanation: "Expected Monetary Value = Probability × Impact." },
  ],
});
