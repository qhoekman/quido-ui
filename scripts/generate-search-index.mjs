#!/usr/bin/env node
/**
 * Generate a command-palette search index from Storybook index.json files.
 *
 * Output shape matches Astro ui-docs SearchIndexPayload:
 *   { version: 1, items: SearchIndexItem[] }
 *
 * hrefs are relative ui-docs paths (/{framework}/{slug}), not Storybook deep links.
 *
 * Usage:
 *   node scripts/generate-search-index.mjs --out dist
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const FRAMEWORKS = ["react", "vue", "angular"];

function parseArgs(argv) {
  const args = { out: "dist" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--out") args.out = argv[++i];
  }
  return args;
}

/**
 * Mirror Astro storybookPathToSlug:
 * "Components/Actions/Button" → "components/actions/button"
 */
function storybookPathToSlug(storybookPath) {
  return storybookPath
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, "-")
        .toLowerCase(),
    )
    .join("/");
}

function slugTokens(slug) {
  return slug
    .replace(/^\d+-/, "")
    .split(/[-_/]+/)
    .filter(Boolean)
    .map((t) => t.toLowerCase());
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function readIndex(outDir, framework) {
  const indexPath = path.join(ROOT, outDir, framework, "index.json");
  if (!fs.existsSync(indexPath)) {
    throw new Error(
      `Missing ${indexPath}. Build framework Storybooks before generating the search index.`,
    );
  }
  return JSON.parse(fs.readFileSync(indexPath, "utf8"));
}

function entryToItem(framework, entry) {
  const segments = entry.title.split("/").filter(Boolean);
  const slug = storybookPathToSlug(entry.title);
  const title = segments[segments.length - 1] ?? entry.title;
  const parents = segments.slice(0, -1);
  const description = parents.length ? parents.join(" · ") : framework;

  return {
    id: `design-system-${framework}/${slug}`,
    group: `design-system-${framework}`,
    title,
    description,
    href: `/${framework}/${slug}`,
    keywords: [
      framework,
      ...slugTokens(slug),
      ...segments.map((s) => s.toLowerCase()),
    ],
  };
}

function buildItems(outDir) {
  const items = [];

  for (const framework of FRAMEWORKS) {
    const index = readIndex(outDir, framework);
    const entries = Object.values(index.entries ?? {});
    const docs = entries.filter((e) => e.type === "docs");

    for (const entry of docs) {
      if (!entry.title) continue;
      items.push(entryToItem(framework, entry));
    }
  }

  items.sort((a, b) => a.id.localeCompare(b.id));
  return items;
}

function main() {
  const { out } = parseArgs(process.argv.slice(2));
  const items = buildItems(out);
  const payload = { version: 1, items };
  const outPath = path.join(ROOT, out, "search-index.json");
  ensureDir(outPath);
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(
    `Wrote ${items.length} search items → ${path.relative(ROOT, outPath)}`,
  );
}

main();
