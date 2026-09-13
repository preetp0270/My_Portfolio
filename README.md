# Preet Patel — Portfolio

Modern React + Vite portfolio website, ready for **GitHub Pages** deployment.

## Features

- Clean dark theme with teal accents
- Fully responsive (mobile-first)
- Smooth scrolling & sticky navbar
- **Projects driven by a data file** — add new projects without touching UI code
- Skills with progress bars
- Education & contact sections
- Your real profile image included

## Quick Start (Local)

```bash
cd Preet_Portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Adding New Projects (Future-proof)

1. Open `src/data/projects.js`
2. Copy any existing project object
3. Paste it at the end of the array
4. Update:
   - `title`
   - `description`
   - `tags` (array of strings)
   - `github` / `live` (URLs or `""`)
   - `featured` (`true` / `false`)
5. Save → refresh or rebuild

Same pattern for skills (`src/data/skills.js`) and education (`src/data/education.js`).

## Deploy to GitHub Pages

### Option A — Project site (`username.github.io/repo-name`)

1. Create a new repo (e.g. `portfolio`) on GitHub
2. In `vite.config.js` set:
   ```js
   base: '/portfolio/',   // must match repo name
   ```
3. Push the code
4. In GitHub → Settings → Pages → Source: **GitHub Actions** or deploy the `dist` folder

Recommended workflow (add `.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Option B — User site (`username.github.io`)

1. Create repo named exactly `Preetp2708.github.io`
2. Keep `base: './'` or set `base: '/'`
3. Build & push the `dist` contents to the `main` (or `gh-pages`) branch

### Manual build & push

```bash
npm run build
# then upload the contents of the `dist` folder to your GitHub Pages branch
```

## Project Structure

```
Preet_Portfolio/
├── public/
│   └── my_img.jpeg          # Your profile photo
├── src/
│   ├── data/
│   │   ├── projects.js      # ← Edit this to add projects
│   │   ├── skills.js
│   │   └── education.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Tech Stack

- React 19
- Vite 8
- Pure CSS (no Tailwind required)
- Inter + JetBrains Mono fonts

---

Made with ❤️ by Preet Patel
