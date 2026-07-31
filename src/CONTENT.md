# Editing this site on GitHub

Everything you'd want to change lives in `src/data/*.js` — plain arrays and objects, no JSX. Edit a file on github.com (pencil icon), commit to `main`, and the GitHub Actions workflow rebuilds and redeploys automatically (~1-2 min).

- `data/profile.js` — name, bio, rotating roles, email, phone, social links, the four stat numbers
- `data/experience.js` — timeline of roles
- `data/education.js` — degrees
- `data/projects.js` — project cards (first entry is the featured one). Images import from `assets/projects/`; to swap a photo, replace the file there and keep the same name, or add a new file and update the `import`
- `data/publications.js` — publications list (rule-list section, distinct from the live ORCID feed in Science Hub)
- `data/skills.js` — four skill columns
- `data/software.js` — the "Software, a story" chapters
- `data/ieee.js` — IEEE roles, the standard statement, pillars, awards
- `data/partnerships.js` — IEEE PES YP section
- `data/news.js` — curated fallback news items (the News section also live-pulls new GitHub repos/releases and recent ORCID works and layers them on top)

`pages/ScienceHub/ScienceHub.jsx` and `pages/News/News.jsx` fetch live data client-side from the GitHub API, ORCID API, and arXiv (via rss2json) — no build step or secret needed, but you can change the ORCID ID / GitHub username at the top of `ScienceHub.jsx` if either ever changes.

Everything else (layout, colors, fonts) lives in each page's own `.css` file plus the shared tokens in `src/index.css` (`--accent`, `--serif`, `--sans`, `--mono`, etc).
