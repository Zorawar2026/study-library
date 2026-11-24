# Module format reference

Every module is one folder inside `modules/`:

```
modules/
  catalog.js                 ← site title + list of module ids (home page order)
  <module-id>/
    module.js                ← all lessons, terms, quiz, coverage for the module
    quiz-extra.js            ← optional extra quiz set(s), merged into the Final assessment
    img/                     ← optional images used by figure blocks
```

The **module id** must be the folder name, using only lowercase letters, digits, `-` and `_` (e.g. `thermodynamics-1`).

Both tabs are generated from `module.js`:

| What you write | Where it appears |
|---|---|
| `lessons[].blocks` | Deep Dive lessons |
| `terms[]` | Quick Reference dropdowns, flashcards, definition boxes in lessons, hover text on `[[term]]` links |
| `quiz[]` + `quiz-extra.js` | Final assessment (with a filter button per set) |
| `lessons[].check[]` | "Check your understanding" at the end of each lesson |
| `coverage[]` | "Sources & coverage" table (proof nothing was lost) |

Because each definition lives in exactly one place (`terms`), the Deep Dive and Quick Reference can never disagree.

---

## 1. Module header

```js
Academy.module({
  id: "thermo-1",                       // = folder name
  title: "First Law of Thermodynamics",
  subtitle: "One line shown under the title",
  category: "Thermodynamics",           // groups cards on the home page (filter chips)
  icon: "Q",                            // 1–2 characters or an emoji
  color: "#2b6cb0",                     // accent colour for this module
  version: "1.0",
  updated: "2026-11-23",
  studyTime: "90 min",
  extraFiles: ["quiz-extra.js"],        // optional, any number of extra quiz files

  sources: [ { id: "S", label: "Lecture slides, Week 4", detail: "Slides 1–38", url: "https://…", license: "CC BY 4.0" } ],
  overview: "Markdown text…",
  prerequisites: ["…"],
  objectives: ["…"],                    // "After this module you can…"

  lessons: [ … ],
  terms: [ … ],
  quizTitle: "Core questions",          // name of the main question set
  quiz: [ … ],
  flashcards: [ { front: "…", back: "…" } ],  // optional extras; every term already gets a card
  teachingNotes: [ …blocks… ],
  openQuestions: ["…"],
  coverage: [ … ],
  conceptMap: { nodes: [...], edges: [...] }   // optional; default is built from lessons' builds_on
});
```

## 2. Lessons

```js
{
  id: "first-law",                      // unique within the module
  title: "The first law",
  source: "Slides 8–15; Notes p.4–6",   // shown under the title
  summary: "One or two sentences.",
  builds_on: ["internal-energy"],       // lesson ids → arrows in the concept map
  blocks: [ … ],                        // the content, in reading order (see §4)
  takeaways: ["…", "…"],
  check: [ …questions… ]                // 3–5 recommended (see §6)
}
```

## 3. Terms (Quick Reference)

```js
{
  id: "internal-energy",                // used in [[internal-energy]] links and definition blocks
  term: "Internal energy",              // display name
  aliases: ["U"],                       // shown next to the name and searchable
  lesson: "first-law",                  // which lesson explains it (for grouping + "Full explanation →")
  short: "2–4 line overview for the dropdown.",
  definition: "Full, precise definition (shown in the lesson's definition block).",
  formula: "\\Delta U = Q - W",         // optional, TeX
  example: "One-line example.",         // optional
  pitfall: "Common mistake.",           // optional, shown as 'Watch out'
  source: "Slide 9",
  related: ["heat", "work"]             // other term ids
}
```

## 4. Content blocks

Every block accepts an optional `source` (shown as a small "↳ Slide 9" tag) and an optional `id`.

| type | Fields | Use for |
|---|---|---|
| `text` | `md` | Ordinary explanation (Markdown, see §5) |
| `intuition` | `md` | Plain-language explanation / analogy, shown first |
| `heading` | `text` | Sub-heading inside a lesson |
| `definition` | `term`, optional `md`, `showFormula: true` | Shows the term's full definition from `terms` |
| `formula` | `tex`, `label`, `where: [{symbol, meaning, unit}]`, `md` | An equation with every symbol defined |
| `example` | `title`, `problem`, `steps: [{do, why}]`, `answer`, `hideSolution` | Worked example, every step justified |
| `callout` | `kind`, `title`, `md` | `note`, `tip`, `key`, `warning`, `exam`, `conflict` (source disagreement), `added` (not from course material) |
| `quote` | `md`, `source`, `note` | Verbatim wording from a slide/notes when the exact words matter |
| `list` | `items`, `ordered`, `title` | Bullet or numbered list |
| `steps` | `items`, `title` | A procedure |
| `table` | `headers`, `rows`, `caption` | Any table (cells accept inline Markdown and math) |
| `figure` | `src` (e.g. `"img/slide-07.png"`) **or** `svg`, `alt`, `caption` | Diagrams and slide images |
| `code` | `code`, `title` | Code or pseudo-code |
| `usage` | `use: [...]`, `avoid: [...]` | When to use / when not to use |
| `misconceptions` | `items: [{wrong, right}]` | Common mistakes and corrections |
| `details` | `summary`, `blocks: [...]`, `open` | Collapsible "show derivation / more detail" |

`conflict` callouts are also listed automatically in the module's *Open questions & source conflicts* section.

## 5. Markdown and math

Inside `md`, `short`, `prompt`, `explanation`, table cells, list items etc.:

| Write | Get |
|---|---|
| `**bold**`, `*italic*`, `` `code` ``, `==highlight==` | formatting |
| `$E = mc^2$` | inline math (KaTeX) |
| `$$ \int_0^1 x\,dx $$` | display math |
| `[[term-id]]` or `[[term-id\|label]]` | link to the term's Quick Reference entry (hover shows the short definition). Prefer the label form so the sentence reads naturally. |
| `[text](https://…)` | external link |
| blank line | new paragraph |
| `- item` / `1. item` (indent 2 spaces to nest) | lists |
| `### Heading` | small heading |
| `\$` | a literal dollar sign |

**Backslashes:** the files are JavaScript, so every TeX backslash is written twice inside quotes: `"\\frac{a}{b}"`, `"$\\Omega$"`. Line breaks inside a string are written `\n`.

## 6. Questions

Used in `quiz`, in `quiz-extra.js`, and in each lesson's `check`.

```js
{ type: "mcq", prompt: "…", options: ["A", "B", "C", "D"], answer: 1 }          // answer = position (0 = first) or "B"
{ type: "mcq", prompt: "…", options: [{ text: "…", why: "why right/wrong" }, …], answer: "C" }
{ type: "multi", prompt: "…", options: [...], answer: [0, 2] }                 // select all that apply
{ type: "truefalse", prompt: "…", answer: true }
{ type: "numeric", prompt: "…", answer: { value: 12, tolerance: 0.1, unit: "Ω" } }   // or tolerancePct: 2
{ type: "short", prompt: "…", model_answer: "…" }                              // self-marked
```

Optional on every question: `explanation`, `lesson` (id), `difficulty` (1–3), `source`, `id`.

## 7. Extra quiz files

```js
// modules/thermo-1/quiz-extra.js
Academy.extraQuiz("thermo-1", {
  id: "exam-set",                        // unique per module
  title: "Professor's exam set",         // name of the filter button
  description: "Exam-style questions from the additional quiz file.",
  source: "Quiz_week4.pdf",
  questions: [ …questions… ]
});
```

Then list the file in the module: `extraFiles: ["quiz-extra.js"]`. Several sets can live in one file (call `Academy.extraQuiz` more than once) or in several files.

## 8. Coverage checklist

One row per slide (or slide range) and per page of notes, so you can prove nothing was dropped:

```js
coverage: [
  { source: "Slide 1", content: "Title", where: "", status: "omitted", note: "No teachable content" },
  { source: "Slides 2–7", content: "Definitions of heat and work", where: "heat-work" },     // lesson id
  { source: "Slide 9", content: "Sign convention", where: "term:sign-convention" },          // or a term
  { source: "Notes p.5", content: "Extra derivation", where: "first-law", status: "partial", note: "Diagram redrawn, not copied" }
]
```

`status` is `covered` (default), `partial` or `omitted`. The content checker warns about every `omitted` row.

## 9. Concept map (optional override)

By default the map shows one box per lesson with arrows from `builds_on`. For a custom map:

```js
conceptMap: {
  nodes: [ { id: "a", label: "Heat", term: "heat" }, { id: "b", label: "First law", lesson: "first-law" } ],
  edges: [ { from: "a", to: "b", label: "is one input to" } ]
}
```
