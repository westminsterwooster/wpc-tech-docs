import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const changelogPath = "docs/changelog.md";
const configPath = ".github/changelog.json";
const startMarker = "<!-- changelog:auto:start -->";
const endMarker = "<!-- changelog:auto:end -->";

const config = JSON.parse(readFileSync(configPath, "utf8"));
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const token = process.env.GITHUB_TOKEN;

if (!owner || !repo) {
  throw new Error("GITHUB_REPOSITORY must be set to owner/repo.");
}

if (!token) {
  throw new Error("GITHUB_TOKEN must be set.");
}

function labelNames(pr) {
  return pr.labels.map((label) => label.name.toLowerCase());
}

function hasAnyLabel(labels, expected) {
  const expectedLabels = new Set(expected.map((label) => label.toLowerCase()));
  return labels.some((label) => expectedLabels.has(label));
}

function cleanTitle(title) {
  return title
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/^bump\b/i, "Update")
    .replace(/\s+across 1 directory\b/i, "")
    .trim()
    .replace(/\.$/, "");
}

function markdownText(value) {
  return cleanTitle(String(value ?? ""))
    .replace(/\\/g, "\\\\")
    .replace(/([`*_{}\[\]<>()#+.!|-])/g, "\\$1");
}

function prNumber(value) {
  const number = Number(value);
  if (!Number.isSafeInteger(number) || number < 1) {
    throw new Error(`Invalid pull request number: ${value}`);
  }

  return number;
}

function prUrl(pr) {
  const number = prNumber(pr.number);
  const url = new URL(`/${owner}/${repo}/pull/${number}`, "https://github.com");
  return url.href;
}

function bullet(pr) {
  return `- ${markdownText(pr.title)} ([#${prNumber(pr.number)}](${prUrl(pr)}))`;
}

function github(path, searchParams = {}) {
  const url = new URL(path, "https://api.github.com");
  for (const [key, value] of Object.entries(searchParams)) {
    url.searchParams.set(key, String(value));
  }

  const output = execFileSync(
    "gh",
    [
      "api",
      `${url.pathname}${url.search}`,
      "--jq",
      "map({number,title,merged_at,updated_at,labels:(.labels | map({name}))})",
    ],
    {
      encoding: "utf8",
      env: {
        ...process.env,
        GH_TOKEN: token,
      },
    },
  );

  return JSON.parse(output);
}

function getMergedPullRequests() {
  const prs = [];
  let page = 1;

  while (true) {
    const batch = github(`/repos/${owner}/${repo}/pulls`, {
      state: "closed",
      sort: "updated",
      direction: "desc",
      per_page: 100,
      page,
    });

    if (batch.length === 0) {
      break;
    }

    for (const pr of batch) {
      if (!pr.merged_at) {
        continue;
      }

      if (new Date(pr.merged_at) < new Date(config.since)) {
        continue;
      }

      prs.push(pr);
    }

    if (batch.every((pr) => new Date(pr.updated_at) < new Date(config.since))) {
      break;
    }

    page += 1;
  }

  return prs.sort((a, b) => new Date(b.merged_at) - new Date(a.merged_at));
}

function takeSectionItems(items) {
  return items.slice(0, config.maxItemsPerSection).map(bullet);
}

function section(title, items, emptyText) {
  const lines = [`### ${title}`];
  const bullets = takeSectionItems(items);
  lines.push(...(bullets.length > 0 ? bullets : [`- ${emptyText}`]));
  return lines.join("\n");
}

function buildGeneratedBlock(prs) {
  const included = prs.filter((pr) => {
    const labels = labelNames(pr);
    return !hasAnyLabel(labels, config.skipLabels);
  });

  const major = included.filter((pr) => {
    const labels = labelNames(pr);
    return !hasAnyLabel(labels, config.maintenanceLabels);
  });
  const documentation = major.filter((pr) =>
    hasAnyLabel(labelNames(pr), config.documentationLabels),
  );
  const siteChanges = major.filter((pr) => !documentation.includes(pr));
  const maintenance = included.filter((pr) =>
    hasAnyLabel(labelNames(pr), config.maintenanceLabels),
  );

  return [
    startMarker,
    `## ${config.sectionTitle}`,
    "",
    "_Generated from merged GitHub pull requests. Package updates are grouped separately so the public-facing changes stay easy to scan._",
    "",
    section("Site and Content Changes", siteChanges, "No site or content changes merged yet."),
    "",
    section("Documentation Changes", documentation, "No documentation-only changes merged yet."),
    "",
    section("Package and Maintenance Updates", maintenance, "No package or maintenance updates merged yet."),
    "",
    endMarker,
  ].join("\n");
}

function updateChangelog(generatedBlock) {
  const changelog = readFileSync(changelogPath, "utf8");

  if (changelog.includes(startMarker) && changelog.includes(endMarker)) {
    const pattern = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`);
    return changelog.replace(pattern, generatedBlock);
  }

  return changelog.replace("# Changelog", `# Changelog\n\n${generatedBlock}`);
}

const prs = getMergedPullRequests();
const generatedBlock = buildGeneratedBlock(prs);

writeFileSync(changelogPath, updateChangelog(generatedBlock));
