# Vite + React

## Getting started

```bash
npm install
```

## Customize your portfolio

- Update text/links/projects in `src/data/portfolio.js`
- Profile photo:
  - Easiest: put a photo at `public/profile.png` (or `.jpg` / `.jpeg` / `.webp`) and update `profilePhotoUrl` in `src/data/portfolio.js`
  - If you want an SVG file: put the photo in `public/` as above, then run `npm run profile:svg` to generate `public/profile.svg` (the site already points to `/profile.svg`)

### Dev server

Runs Vite via nodemon (auto-restarts when config/env files change):

```bash
npm run start
```

Runs Vite directly (normal HMR flow):

```bash
npm run dev
```

### Build / preview

```bash
npm run build
npm run preview
```
