# Studio Nex

Personal portfolio and project hub. Hosts demos, planning notes, and devlog entries for browser-based tools and engineering experiments.

**Live:** [studionex.dev](https://studionex.dev)

## About

Studio Nex is a small studio for browser-based tools, mostly for tabletop games and worldbuilding. This repository is the source of the studio's homepage, project pages, and devlog.

## Stack

- React 18 + Vite
- React Router for routing
- CSS Modules for styling
- Deployed to Azure Static Web Apps
- DNS via Cloudflare

No UI framework, no CSS framework. Design tokens and styles are all hand-rolled — see `src/styles/tokens.css`.

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Project structure
src/
components/    Reusable UI pieces (TopNav, ProjectCard, etc.)
pages/         Route-level page components
data/          Project metadata and devlog entries
styles/        Design tokens and base styles

## Adding a project

Project metadata lives in `src/data/projects.js`. Each project has a status (`Live`, `In Progress`, or `Drafting`) that drives its visual treatment on the homepage and project page.

## Adding a devlog entry

Devlog entries live in `src/data/devlog.js`. Entries are tied to a project via `projectSlug`. They appear on the devlog index page filterable by project.
