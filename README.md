# WPC Insider Technology Documentation

This repository contains the Westminster Presbyterian Church insider technology documentation for Mackey Hall.

The site is built with Docusaurus and published as a single current documentation site.

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

`npm run build` checks local Markdown links, builds the Docusaurus site, generates the printable PDF, and writes the static site to `build/`. The output is suitable for Cloudflare Pages, GitHub Pages, or any static host.

For a full validation and release-style build:

```bash
npm run build:all
```

## Publishing Workflow

The published site always serves the current docs from `docs/`. Changes merge through pull requests, and `docs/changelog.md` is updated automatically from merged GitHub pull requests. No manual docs version bumps are needed.

## Deployment

For Cloudflare Pages, use:

- Build command: `npm run build:all`
- Build output directory: `build`
- Node version: `20` or newer

For GitHub Pages, the included workflow builds the site and deploys the `build/` directory.

## Authoring Notes

- Keep docs in `docs/` for the editable current source.
- Curated navigation lives in `sidebars.ts`.
- Keep images near the related documentation unless they are global site assets.
