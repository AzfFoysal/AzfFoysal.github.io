# azffoysal.github.io

Personal academic + professional portfolio for **Md Abu Zehad Foysal**.

## What is included

- Responsive single-page portfolio (`index.html`)
- Academic CV page (`cv.html`) with **Print / Save PDF**
- Industry profile / resume page (`resume.html`) with **Print / Save PDF**
- Light/dark theme
- Mobile navigation
- SEO meta tags + Person structured data
- `robots.txt`, `sitemap.xml`, web manifest, and favicon
- No build system and no external JavaScript dependency

That means GitHub Pages can host the site directly from the repository root.

## Publish on GitHub Pages — exact steps

### Option A — easiest: upload through GitHub.com

1. Sign in to GitHub as **AzfFoysal**.
2. Create a **new public repository** named exactly:
   `AzfFoysal.github.io`
3. Do **not** add another README, `.gitignore`, or license during creation if you plan to upload this folder as-is.
4. Open the new repository.
5. Choose **Add file → Upload files**.
6. Upload the **contents inside this folder**, not the parent folder itself:
   - `index.html`
   - `cv.html`
   - `resume.html`
   - `assets/`
   - `.nojekyll`
   - `robots.txt`
   - `sitemap.xml`
   - `site.webmanifest`
   - `README.md`
7. Commit the files to the `main` branch.
8. Open **Settings → Pages**.
9. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
10. Save.
11. After GitHub finishes deployment, visit:
   `https://azffoysal.github.io`

For a repository named `<username>.github.io`, GitHub often recognizes the Pages site automatically, but checking **Settings → Pages** confirms the deployment source.

### Option B — Git command line

```bash
git clone https://github.com/AzfFoysal/AzfFoysal.github.io.git
cd AzfFoysal.github.io

# Copy this site's files into the repository, then:
git add .
git commit -m "Launch personal academic portfolio"
git push origin main
```

Then verify **Settings → Pages → Deploy from branch → main / root**.

## How updates work

There is no database and no server to maintain. The website is made of static HTML/CSS/JS.

- Edit `index.html` to change biography, research, publications, experience, projects, or links.
- Edit `cv.html` for the academic CV.
- Edit `resume.html` for the industry version.
- Edit `assets/css/styles.css` to change the design.
- Replace `assets/img/md-abu-zehad-foysal.png` to change the photo.
- Push/commit the changed file to GitHub.
- GitHub Pages automatically republishes the site.

Typical update time is a few minutes after a commit.

## Adding a new publication

In `index.html`, search for:

```html
<div class="publication-list">
```

Copy one existing `<article class="publication">...</article>` block, paste it inside the publication list, then change:
- year
- type
- title
- authors
- journal/conference
- result/summary
- DOI / paper / code links

Commit the change. The live site updates automatically.

## Adding a new project

In `index.html`, search for:

```html
<div class="project-grid">
```

Duplicate a project card, edit its text and GitHub/demo link, then commit.

## Important privacy note

The public website intentionally shows email and general location but does **not** display a phone number, passport/visa data, or other identity documents.

If you later upload a CV PDF containing a phone number, that PDF will be publicly accessible.

## Optional next improvements

- Buy a custom domain such as `azffoysal.com` and connect it in **Settings → Pages → Custom domain**.
- Add a professional publication PDF folder if you want visitors to download papers directly.
- Add Google Analytics or another privacy-friendly analytics tool.
- Add a dedicated research page with thesis diagrams, Grad-CAM examples, and model-comparison charts.
- Add a publications data file and automate publication rendering if the list grows.

## Local preview

From this directory:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`
