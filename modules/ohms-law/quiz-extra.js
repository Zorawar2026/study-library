/* ==========================================================================
   SAMPLE EXTRA QUIZ SET for the "ohms-law" module.
   Extra sets are merged into the module's Final assessment and get their own
   filter button. A module can have several extra files; list each one in the
   module's  extraFiles: [...]  array.  Format reference: docs/FORMAT.md
   ========================================================================== */
Academy.extraQuiz("ohms-law", {
  id: "special",
  title: "Special set",
  description: "Placeholder for your additional quiz file (e.g. the professor's exam-style questions).",
  source: "Sample quiz file (demo)",
  questions: [
    {
      type: "mcq",
      lesson: "series-parallel",
      difficulty: 3,
      prompt: "Two identical lamps are connected in series to a battery. A third identical lamp is then connected **in parallel with one of them**. What happens to the brightness of the lamp that is *not* in the parallel pair?",
      options: [
        { text: "It gets dimmer", why: "Total resistance falls, so more current flows through the single lamp, not less." },
        { text: "It gets brighter", why: "Total resistance drops from 2R to 1.5R, so supply current rises and the single lamp (which carries all of it) gets more power." },
        { text: "It stays the same", why: "The change to the rest of the circuit alters the current through it." },
        { text: "It goes out", why: "It is still part of a complete loop." },
      ],
      answer: 1,
      explanation: "Total resistance goes from $2R$ to $R + R/2 = 1.5R$. Supply current rises by a factor $2/1.5 \\approx 1.33$, and all of it passes through the single lamp, so its power ($I^2R$) increases.",
    },
    {
      type: "numeric",
      lesson: "power",
      difficulty: 2,
      prompt: "Electricity costs €0.25 per kWh. What does it cost to run a 2.4 kW heater for 90 minutes? (Answer in euros.)",
      answer: { value: 0.9, tolerance: 0.005, unit: "€" },
      explanation: "$E = 2.4\\ \\text{kW} \\times 1.5\\ \\text{h} = 3.6\\ \\text{kWh}$; cost $= 3.6 \\times 0.25 = €0.90$.",
    },
    {
      type: "truefalse",
      lesson: "ohms-law",
      difficulty: 2,
      prompt: "If a component's I–V graph is a straight line that does **not** pass through the origin, the component is ohmic.",
      answer: false,
      explanation: "Ohmic means $I \\propto V$, which needs a straight line **through the origin**. A line with an offset has a ratio $V/I$ that changes with voltage.",
    },
    {
      type: "short",
      lesson: "series-parallel",
      difficulty: 3,
      prompt: "Explain, using equivalent resistance, why connecting more appliances to a household ring main increases the current drawn from the supply.",
      model_answer: "Household appliances are connected in **parallel**. Each extra branch lowers the equivalent resistance of the whole circuit. With the supply voltage fixed, $I = V/R_{\\text{eq}}$, so a lower $R_{\\text{eq}}$ means a larger total current.",
    },
  ],
});
