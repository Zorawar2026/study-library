# Prompt for generating a new module

Use this every time you add a topic. Start a new Claude conversation and attach:

1. Your **notes** for the topic
2. The **lecture slides** (PDF or PPTX)
3. Any **extra quiz file** for the topic (optional)
4. `docs/FORMAT.md` and `modules/ohms-law/module.js` from this site, so the output matches the format exactly

Then paste the prompt below, filling in the `[brackets]`.

Large topics produce long files. The prompt asks for the work in stages so nothing is cut short; just reply "continue" between stages.

---

```
I'm building a static study website. Each topic is one "module": a JavaScript data file that the site turns
into two tabs, a Deep Dive (full lessons) and a Quick Reference (one dropdown per term). The exact format is
in the attached FORMAT.md, and the attached module.js is a complete working example. Follow that format exactly.

TOPIC: [TOPIC NAME]
MODULE ID (folder name): [e.g. thermo-1]
CATEGORY (home-page group): [e.g. Thermodynamics]
COLOUR: [e.g. #2b6cb0]
AUDIENCE: me (revision) and junior colleagues who know [PREREQUISITES] but not this topic.

ATTACHED SOURCES
- Notes: [file name]
- Slides: [file name]
- Extra quiz file: [file name, or "none"]

THE MOST IMPORTANT RULE: NOTHING MAY BE LOST
1. Every concept, definition, formula, derivation, diagram, table, example, remark and caveat in the slides
   and notes must appear in the module, with AT LEAST the same level of detail as the source. Do not
   summarise, shorten or merge points away. If the source explains something in five steps, the module
   explains it in at least five steps.
2. Where the exact wording of a definition, law or rule matters, reproduce it in a `quote` block with its
   source, and then explain it in plain words.
3. Keep every worked example from the sources, with every step, and add the reasoning ("why") for each step.
4. Diagrams: draw every model, process and framework as a `diagram` block (the kinds are in FORMAT.md
   §4a: flow, cycle, hub, matrix, stack, tree, continuum, equation, compare, cards, layers, donut, gantt).
   For slide pictures that can't be redrawn, tell me which slide image to save as
   modules/[id]/img/slide-NN.jpg and reference it in a `figure` or `gallery` block with a full caption
   that describes what the slide shows.
5. Tag every block with `source` (e.g. "Slide 12", "Notes p.3").
6. If notes and slides disagree, keep both versions in a `callout` with kind "conflict", and explain which
   is correct and why. Never pick one silently.
7. You may add explanation that isn't in the sources only inside a `callout` with kind "added".
8. Never invent facts, numbers, or citations. Anything you can't resolve goes in `openQuestions`.
9. `coverage` must have one row for EVERY slide (or small slide range) and EVERY page of notes, with
   where it ended up. Mark anything left out as "omitted" with the reason.

STRUCTURE
- Lessons in logical teaching order, each with: summary, an `intuition` block first, `definition` blocks
  for every term introduced, `formula` blocks with every symbol defined in `where`, worked `example`s,
  `usage` (when to use / not use) where relevant, `misconceptions`, `takeaways`, and 3–5 `check` questions
  with explanations.
- `terms`: every technical term, keyword and concept in the topic — err on the side of including too many.
  Each needs `short` (a 2–4 line overview that makes sense on its own, for quick revision) AND `definition`
  (full and precise), plus `formula`, `example`, `pitfall` and `related` where they apply. Use `[[term-id|label]]`
  links in lesson text wherever a term is mentioned.
- `quiz`: 15–25 questions covering every lesson and objective, mixed types (mcq, multi, truefalse, numeric,
  short), difficulty 1–3, each with an `explanation`, and `why` for each mcq option where helpful.
- `teachingNotes`: suggested teaching order, discussion questions, what juniors usually get wrong.

EXTRA QUIZ FILE (if attached)
- Convert it into quiz-extra.js using Academy.extraQuiz("[module id]", {...}) with id "special" and a title
  of my choice: [e.g. "Professor's special set"].
- Keep every question and every option WORDED EXACTLY as in the file. Do not drop or merge questions.
- Use the answer key from the file. If an answer isn't given, work it out, and begin its explanation with
  "(Answer not given in the quiz file — derived.)".
- Set `lesson` on each question to the lesson it tests, and add an explanation to each.
- Add "quiz-extra.js" to the module's `extraFiles`.

WORK IN STAGES (wait for my "continue" after each)
Stage 1 — Inventory, no code yet:
  a) a table of every slide and every notes page with a one-line description of its content;
  b) proposed lessons (id, title, which slides/pages each covers, builds_on);
  c) the full list of term ids and names;
  d) every conflict, gap or unclear point you found.
Stage 2 — module.js part 1: the header, `terms`, and `sources`.
Stage 3 — module.js part 2: the lessons, a few at a time (as many stages as needed).
Stage 4 — module.js part 3: `quiz`, `flashcards`, `teachingNotes`, `openQuestions`, `coverage`, and the closing `});`.
Stage 5 — quiz-extra.js (if there's an extra quiz file).
Stage 6 — Self-check: compare against the Stage 1 inventory and list anything missing or shortened; fix it.
  Confirm every [[link]] and definition block uses a real term id, every `lesson` and `builds_on` uses a real
  lesson id, every mcq answer points to an existing option, and every TeX backslash is doubled ("\\frac").

At the end, give me the complete files in order so I can paste them into modules/[id]/module.js and
modules/[id]/quiz-extra.js, plus the line to add to modules/catalog.js.
```

---

## After you get the files

1. Create the folder `modules/<id>/` and paste the files in (if the module came in parts, paste them one after another into a single `module.js`).
2. Save any slide images it asked for into `modules/<id>/img/`.
3. Add `"<id>",` to the list in `modules/catalog.js`.
4. Open `check.html` on your site (or locally). Fix every **error** it lists; you can paste the error list back to Claude and ask for corrected lines.
5. Open the module and skim the **Sources & coverage** table at the bottom of the Deep Dive to confirm every slide and page is accounted for.
6. Upload / commit to GitHub.
