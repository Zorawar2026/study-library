# Study Library

A static website for interactive learning modules. Each module has two tabs:

- **Deep Dive**: full lessons with definitions, formulas (every symbol explained), worked examples, misconceptions, a concept map, flashcards, quizzes, teaching notes and a coverage table that shows where every slide and note page ended up.
- **Quick Reference**: every important term as a dropdown with a short overview, formula, example and a link to the full explanation.

The home page shows one card per module and searches across all modules' terms.

No build step, no server code, no dependencies to install. It runs on GitHub Pages as-is, and also works by double-clicking `index.html` on your own computer.

## Folder structure

```
index.html            home page (module cards + search)
module.html           module page (Deep Dive / Quick Reference)
check.html            content checker: finds broken links and invalid quiz answers
modules/
  catalog.js          site title + list of modules  ← edit when adding a module
  ohms-law/           sample module showing every feature (delete when you have your own)
    module.js
    quiz-extra.js
assets/               site code and styles (no need to touch)
  vendor/katex/       math renderer (MIT licence), bundled so formulas work offline
docs/
  FORMAT.md           the module file format
  PROMPT.md           the prompt for turning your notes + slides into a module
```

## Preview on your computer

Double-click `index.html`. Everything works locally, including quizzes and saved progress.

## Publish on GitHub Pages

**Option A: in the browser (no Git needed)**

1. Sign in at github.com and click **New repository**. Give it a name (for example `study-library`), choose **Public**, and click **Create repository**.
2. On the new repository's page, click **uploading an existing file**, or **Add file → Upload files**.
3. Drag *the contents* of this folder (`index.html`, `module.html`, `check.html`, `assets`, `modules`, `docs`, `README.md`, `.nojekyll`) into the upload area. Folders keep their structure. Click **Commit changes**.
   On a Mac, `.nojekyll` is hidden in Finder; press `Cmd + Shift + .` to show it. The site works without it, but it stops GitHub from processing the files unnecessarily.
4. Go to **Settings → Pages**. Under *Build and deployment*, set **Source** to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then click **Save**.
5. After a minute or two, the page shows your site's address: `https://<your-username>.github.io/<repository-name>/`.

**Option B: with Git**

```bash
cd study-library
git init
git add .
git commit -m "Study library"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

Then do step 4 above.

Every later change (a new module, a fix) goes live a minute or two after you upload or push it.

**Updating a site you already published (browser method).** Open the repository, click **Add file → Upload files**, and drag in the same items as in step 3. Files with the same name are replaced, and new ones (such as the `img` folders) are added. Click **Commit changes**.

GitHub's web uploader takes at most **100 files at a time**. This site is just under that, so one upload normally works. If GitHub says there are too many files, upload in two goes: first `index.html`, `module.html`, `check.html`, `assets`, `docs` and `README.md`, then the `modules` folder.

## Adding a module

1. Generate it with the prompt in [`docs/PROMPT.md`](docs/PROMPT.md), attaching your notes, the slides, any extra quiz file, plus `docs/FORMAT.md` and `modules/ohms-law/module.js` as format references.
2. Create `modules/<module-id>/` and save `module.js` (and `quiz-extra.js` if there is one) in it. Put any images in `modules/<module-id>/img/`.
3. Add the id to the list in `modules/catalog.js`.
4. Open `check.html` and fix anything listed as an **error**.
5. Upload the new folder and the changed `catalog.js` to GitHub.

To add another quiz set to an existing module, create a new file (for example `quiz-extra-2.js`) using `Academy.extraQuiz(...)` as shown in `docs/FORMAT.md`, and add its name to that module's `extraFiles` list.

## Things to know

- **Progress** (completed lessons, quiz scores, known flashcards) is saved in each visitor's own browser. It isn't shared between people or devices.
- **Public site:** anything you put in `modules/` is public. Only publish material you have the right to share, and credit sources with the `license` and `url` fields in each module's `sources`.
- **Printing:** printing a module page expands every section, so you get a complete handout.
- **Theme:** the site opens in the dark theme. The button at the top right switches between dark and light, and the choice is remembered in that browser.
- **Slide images** open full size when clicked; press Esc or click outside to close.
- **Fonts** come from Google Fonts. If they can't load, the site falls back to system fonts and still works.
