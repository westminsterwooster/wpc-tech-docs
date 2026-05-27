# WPC Insider Technology Documentation

This repository contains the Westminster Presbyterian Church insider technology documentation for Mackey Hall. The site is built with Docusaurus and published as docs version `2026.05a`.

## Requirements

- Node.js 20 or newer
- npm

## Install

```bash
npm ci
```

Use `npm install` instead when intentionally updating dependencies.

## Local Development

```bash
npm run start
```

The local server opens the Docusaurus site with live reload.

## Build

```bash
npm run build
npm run serve
```

`npm run build` writes the static site to `build/`. The output is suitable for Cloudflare Pages, GitHub Pages, or any static host.

## Versioning

The current published documentation version is `2026.05a`.

To create a future version:

```bash
npm run docs:version -- 2026.06a
```

Then update the versioned links if the public docs version changes.

## Deployment

For Cloudflare Pages, use:

- Build command: `npm run build`
- Build output directory: `build`
- Node version: `20` or newer

For GitHub Pages, the included workflow builds the site and deploys the `build/` directory.

## Authoring Notes

- Keep docs in `docs/` for the editable current source.
- Version snapshots live in `versioned_docs/`.
- Curated navigation lives in `sidebars.ts`.
- Versioned sidebar snapshots live in `versioned_sidebars/`.
- Keep images near the related documentation unless they are global site assets.
