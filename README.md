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

## Automated Dependency Fixes

The `NPM Audit Fix` GitHub Actions workflow runs daily at 00:00 UTC and can also be started manually from the Actions tab. It uses Node.js 22, runs `npm ci` and `npm run audit-fix -- --audit-level=none`, then validates tests (if present), types, and the full build before opening or updating `chore/npm-audit-fix`. It always checks out the default branch, including for manual runs. Only `package.json` and `package-lock.json` changes are included in the pull request.

Node.js 22 avoids a [Puppeteer browser extraction bug](https://github.com/puppeteer/puppeteer/issues/14957) affecting Node.js 26 and recent Node.js 24 releases with the current PDF tooling.

Pull request creation uses the `NPM_AUDIT_FIX_TOKEN` repository Actions secret. Configure it with a fine-grained personal access token scoped to this repository with **Contents: Read and write** and **Pull requests: Read and write** permissions, and replace it before expiry. Obtain organization approval if required.

The workflow does not merge pull requests or force breaking dependency upgrades. `--audit-level=none` lets available fixes proceed even when some vulnerabilities remain; review the audit output in the workflow logs for issues requiring manual remediation. Installation errors and failed validation still stop the workflow. Run `npm run audit-fix` locally to retain npm's default failure threshold for remaining vulnerabilities.

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
