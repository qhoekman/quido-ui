#!/usr/bin/env node
/**
 * Generate hierarchical llms.txt indexes and clean .md exports from Storybook MDX.
 * Spec: https://llmstxt.org/
 *
 * Usage:
 *   node scripts/generate-llms-txt.mjs --out dist --base-url https://ui.squid-ware.nl
 *   node scripts/generate-llms-txt.mjs --out dist --base-url https://ui.squid-ware.nl --public
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const GITHUB_BLOB = "https://github.com/qhoekman/quido-ui/blob/main";

const FRAMEWORKS = [
  {
    id: "react",
    label: "React",
    pkg: "@quido-ui/react",
    srcRoot: path.join(ROOT, "packages/react/src"),
    packageDir: path.join(ROOT, "packages/react"),
    optionalSectionPrefixes: ["Features/Effects"],
  },
  {
    id: "vue",
    label: "Vue",
    pkg: "@quido-ui/vue",
    srcRoot: path.join(ROOT, "packages/vue/src"),
    packageDir: path.join(ROOT, "packages/vue"),
    optionalSectionPrefixes: [],
  },
  {
    id: "angular",
    label: "Angular",
    pkg: "@quido-ui/angular",
    srcRoot: path.join(ROOT, "packages/angular/src"),
    packageDir: path.join(ROOT, "packages/angular"),
    optionalSectionPrefixes: [],
  },
];

const HOST_DOCS = [
  {
    file: "readme.mdx",
    slug: "readme",
    title: "Readme",
    blurb: "Product overview, philosophy, and how to run Storybooks",
  },
  {
    file: "design-system.mdx",
    slug: "design-system",
    title: "Design System",
    blurb: "CSS tokens (system vs application) and how to include them",
  },
  {
    file: "technical-design.mdx",
    slug: "technical-design",
    title: "Technical Design",
    blurb: "Monorepo layout, Storybook composition, and framework conventions",
  },
  {
    file: "handbook.mdx",
    slug: "handbook",
    title: "Handbook",
    blurb: "Front-end guidelines for this monorepo",
  },
  {
    file: "contribution.mdx",
    slug: "contribution",
    title: "Contribution",
    blurb: "PR workflow, branching, and Conventional Commits",
  },
];

function parseArgs(argv) {
  const args = { out: "dist", baseUrl: "https://ui.squid-ware.nl", public: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--out") args.out = argv[++i];
    else if (a === "--base-url") args.baseUrl = argv[++i].replace(/\/$/, "");
    else if (a === "--public") args.public = true;
  }
  return args;
}

function walkDir(dir, predicate, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "dist") continue;
      walkDir(full, predicate, results);
    } else if (predicate(full, entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeFile(filePath, contents) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, contents, "utf8");
}

function titleCaseFromSlug(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function findAdjacentStories(mdxPath) {
  const dir = path.dirname(mdxPath);
  const base = path.basename(mdxPath, ".mdx");
  // button.mdx → button.stories.tsx; button.component.mdx → button.component.stories.ts
  const candidates = [
    `${base}.stories.tsx`,
    `${base}.stories.ts`,
    `${base}.stories.jsx`,
    `${base}.stories.js`,
  ];
  for (const name of candidates) {
    const full = path.join(dir, name);
    if (fs.existsSync(full)) return full;
  }
  // Fallback: any *.stories.* in the same directory
  const found = fs
    .readdirSync(dir)
    .filter((f) => /\.stories\.(tsx?|jsx?|mjs)$/.test(f));
  return found.length ? path.join(dir, found[0]) : null;
}

function readStoryTitle(storiesPath) {
  if (!storiesPath) return null;
  const text = fs.readFileSync(storiesPath, "utf8");
  const m = text.match(/title:\s*['"]([^'"]+)['"]/);
  return m ? m[1] : null;
}

function findSourceCandidates(mdxPath, mdxContent) {
  const dir = path.dirname(mdxPath);
  const imports = [
    ...mdxContent.matchAll(
      /import\s+\w+\s+from\s+['"](?:!!raw-loader!)?(\.\/[^'"]+?)(?:\?raw)?['"]/g,
    ),
  ].map((m) => m[1].replace(/\?raw$/, ""));

  const existing = [];
  for (const rel of imports) {
    const full = path.resolve(dir, rel);
    if (fs.existsSync(full)) existing.push(full);
  }

  if (existing.length) return existing;

  // Heuristic fallbacks next to the MDX
  const base = path.basename(mdxPath, ".mdx");
  const guesses = [
    `${base}.tsx`,
    `${base}.ts`,
    `${base}.vue`,
    `${base}.component.ts`,
    `${base.replace(/\.component$/, "")}.component.ts`,
  ];
  for (const g of guesses) {
    const full = path.join(dir, g);
    if (fs.existsSync(full)) existing.push(full);
  }
  return existing;
}

function convertMdxToMarkdown(mdxContent, mdxPath) {
  let text = mdxContent;

  // Remove import lines
  text = text.replace(/^import\s.+?;?\s*$/gm, "");

  // Inline Source with template literal
  text = text.replace(
    /<Source\b([^>]*)\/>/gs,
    (_full, attrs) => {
      const langMatch = attrs.match(/language=["']([^"']+)["']/);
      const lang = langMatch ? langMatch[1] : "";
      const tmpl = attrs.match(/code=\{\s*`([\s\S]*?)`\s*\}/);
      if (tmpl) {
        const code = tmpl[1].replace(/\\`/g, "`").replace(/\\\$/g, "$");
        return `\n\`\`\`${lang}\n${code.trimEnd()}\n\`\`\`\n`;
      }
      const varMatch = attrs.match(/code=\{\s*(\w+)\s*\}/);
      if (varMatch) {
        const sources = findSourceCandidates(mdxPath, mdxContent);
        if (sources.length) {
          const rel = path.relative(ROOT, sources[0]).replace(/\\/g, "/");
          return `\n> Component source: [\`${path.basename(sources[0])}\`](${GITHUB_BLOB}/${rel})\n`;
        }
        return `\n> See co-located component source next to this docs page.\n`;
      }
      return "";
    },
  );

  // Multi-line / self-closing Storybook blocks
  text = text.replace(/<(Meta|Canvas|Controls|ArgTypes)\b[^>]*\/>/gs, "");
  text = text.replace(
    /<(Meta|Canvas|Controls|ArgTypes)\b[^>]*>[\s\S]*?<\/\1>/gs,
    "",
  );

  // Any remaining JSX-ish tags that are empty storybook leftovers
  text = text.replace(/<\/?(?:Meta|Canvas|Controls|ArgTypes|Source)\b[^>]*>/gs, "");

  // Collapse excess blank lines
  text = text.replace(/\n{3,}/g, "\n\n").trim() + "\n";
  return text;
}

function metaTitleFromMdx(content) {
  const m = content.match(/<Meta\s+title=["']([^"']+)["']\s*\/>/);
  return m ? m[1] : null;
}

function relativeSrcPath(srcRoot, mdxPath) {
  // packages/react/src/components/button/button.mdx → components/button
  const rel = path.relative(srcRoot, mdxPath).replace(/\\/g, "/");
  const withoutExt = rel.replace(/\.mdx$/, "");
  // Strip trailing filename if it matches parent folder (button/button → button)
  const parts = withoutExt.split("/");
  const last = parts[parts.length - 1];
  const parent = parts[parts.length - 2];
  if (
    parent &&
    (last === parent ||
      last === `${parent}.component` ||
      last.replace(/\.component$/, "") === parent)
  ) {
    parts.pop();
  } else {
    // keep path but drop .component suffix from last segment for cleaner URLs
    parts[parts.length - 1] = last.replace(/\.component$/, "");
  }
  return parts.join("/");
}

function displayNameFromStoryTitle(storyTitle, fallbackSlug) {
  if (!storyTitle) return titleCaseFromSlug(fallbackSlug.split("/").pop());
  const segments = storyTitle.split("/");
  return segments[segments.length - 1];
}

function sectionKeyFromStoryTitle(storyTitle, relPath) {
  if (storyTitle) {
    const parts = storyTitle.split("/");
    if (parts.length >= 2) {
      // Components/Actions/Button → Components/Actions
      // Features/Website/Components/Hero → Features/Website
      // Features/Effects/Foo → Features/Effects
      if (parts[0] === "Features" && parts.length >= 2) {
        return `Features/${parts[1]}`;
      }
      if (parts.length >= 3) {
        return `${parts[0]}/${parts[1]}`;
      }
      return parts[0];
    }
    return parts[0];
  }
  // Path-based: components/button → Components; features/website/... → Features/Website
  const parts = relPath.split("/");
  if (parts[0] === "features" && parts[1]) {
    return `Features/${titleCaseFromSlug(parts[1])}`;
  }
  if (parts[0] === "components") return "Components";
  return titleCaseFromSlug(parts[0] || "Other");
}

function collectFrameworkEntries(fw) {
  const mdxFiles = walkDir(fw.srcRoot, (_full, name) => name.endsWith(".mdx"));
  const entries = [];

  for (const mdxPath of mdxFiles) {
    const content = fs.readFileSync(mdxPath, "utf8");
    const storiesPath = findAdjacentStories(mdxPath);
    const storyTitle = readStoryTitle(storiesPath);
    const metaTitle = metaTitleFromMdx(content);
    const relPath = relativeSrcPath(fw.srcRoot, mdxPath);
    const displayName =
      metaTitle || displayNameFromStoryTitle(storyTitle, relPath);
    const section = sectionKeyFromStoryTitle(storyTitle, relPath);
    const markdown = convertMdxToMarkdown(content, mdxPath);

    entries.push({
      mdxPath,
      relPath,
      displayName,
      storyTitle: storyTitle || relPath,
      section,
      markdown,
      outMdRel: `docs/${relPath}.md`,
    });
  }

  entries.sort((a, b) => {
    const s = a.section.localeCompare(b.section);
    if (s !== 0) return s;
    return a.displayName.localeCompare(b.displayName);
  });

  return entries;
}

function isOptionalSection(fw, section) {
  return fw.optionalSectionPrefixes.some(
    (prefix) => section === prefix || section.startsWith(`${prefix}/`),
  );
}

function buildFrameworkLlmsTxt(fw, entries, baseUrl) {
  const lines = [];
  lines.push(`# squid·ware UI — ${fw.label}`);
  lines.push("");
  lines.push(
    `> ${fw.pkg} component catalog for squid·ware UI. Copy a component into your app and change it when you need to. Shared look via CSS tokens from \`@quido-ui/styles\`.`,
  );
  lines.push("");
  lines.push("Important notes:");
  lines.push("");
  lines.push(
    `- Docs below are clean markdown exports from Storybook MDX. Live canvas: [${baseUrl}/${fw.id}/](${baseUrl}/${fw.id}/)`,
  );
  lines.push(
    `- Prefer design tokens over raw colors; see the host [Design System](${baseUrl}/docs/design-system.md).`,
  );
  lines.push("");

  const primary = new Map();
  const optional = new Map();

  for (const e of entries) {
    const bucket = isOptionalSection(fw, e.section) ? optional : primary;
    if (!bucket.has(e.section)) bucket.set(e.section, []);
    bucket.get(e.section).push(e);
  }

  for (const [section, items] of primary) {
    lines.push(`## ${section}`);
    lines.push("");
    for (const e of items) {
      const url = `${baseUrl}/${fw.id}/${e.outMdRel}`;
      lines.push(`- [${e.displayName}](${url}): ${e.storyTitle}`);
    }
    lines.push("");
  }

  if (optional.size) {
    lines.push("## Optional");
    lines.push("");
    for (const [section, items] of optional) {
      lines.push(`### ${section}`);
      lines.push("");
      for (const e of items) {
        const url = `${baseUrl}/${fw.id}/${e.outMdRel}`;
        lines.push(`- [${e.displayName}](${url}): ${e.storyTitle}`);
      }
      lines.push("");
    }
  }

  return lines.join("\n").trimEnd() + "\n";
}

function buildRootLlmsTxt(baseUrl) {
  return `# squid·ware UI

> Multi-framework component catalog (React, Vue, Angular). Copy-paste / opt-out components with shared CSS tokens. Workspace packages \`@quido-ui/*\`; published at ${baseUrl}.

Important notes:

- Opt-out: components work as-is; paste the source into your project and edit it.
- Shared design tokens via \`@quido-ui/styles\` (system + application, light/dark).
- Requires Node.js 20.19+ and pnpm. Host Storybook composes Angular, React, and Vue catalogs.

## Docs

${HOST_DOCS.map(
  (d) =>
    `- [${d.title}](${baseUrl}/docs/${d.slug}.md): ${d.blurb}`,
).join("\n")}

## Frameworks

- [React](${baseUrl}/react/llms.txt): \`@quido-ui/react\` catalog
- [Vue](${baseUrl}/vue/llms.txt): \`@quido-ui/vue\` catalog
- [Angular](${baseUrl}/angular/llms.txt): \`@quido-ui/angular\` catalog

## Optional

- [Live Storybook](${baseUrl})
- [GitHub](https://github.com/qhoekman/quido-ui)
`;
}

function writeHostDocs(outRoot) {
  const hostSrc = path.join(ROOT, "packages/host/src");
  let count = 0;
  for (const doc of HOST_DOCS) {
    const mdxPath = path.join(hostSrc, doc.file);
    if (!fs.existsSync(mdxPath)) {
      console.warn(`warn: missing host MDX ${doc.file}`);
      continue;
    }
    const content = fs.readFileSync(mdxPath, "utf8");
    const md = convertMdxToMarkdown(content, mdxPath);
    writeFile(path.join(outRoot, "docs", `${doc.slug}.md`), md);
    count++;
  }
  return count;
}

function writeFrameworkOutputs(fw, entries, outRoot) {
  const fwOut = path.join(outRoot, fw.id);
  for (const e of entries) {
    writeFile(path.join(fwOut, e.outMdRel), e.markdown);
  }
  return entries.length;
}

function maybeWritePublic(fwId, llmsTxt, isHost) {
  const publicDir = isHost
    ? path.join(ROOT, "packages/host/public")
    : path.join(ROOT, `packages/${fwId}/public`);
  if (!fs.existsSync(publicDir)) {
    console.warn(`warn: skip --public, missing ${path.relative(ROOT, publicDir)}`);
    return;
  }
  writeFile(path.join(publicDir, "llms.txt"), llmsTxt);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const outRoot = path.isAbsolute(args.out)
    ? args.out
    : path.join(ROOT, args.out);

  fs.mkdirSync(outRoot, { recursive: true });

  const rootLlms = buildRootLlmsTxt(args.baseUrl);
  writeFile(path.join(outRoot, "llms.txt"), rootLlms);
  if (args.public) maybeWritePublic(null, rootLlms, true);

  const hostCount = writeHostDocs(outRoot);

  let fwTotal = 0;
  for (const fw of FRAMEWORKS) {
    const entries = collectFrameworkEntries(fw);
    fwTotal += writeFrameworkOutputs(fw, entries, outRoot);
    const llms = buildFrameworkLlmsTxt(fw, entries, args.baseUrl);
    writeFile(path.join(outRoot, fw.id, "llms.txt"), llms);
    if (args.public) maybeWritePublic(fw.id, llms, false);
  }

  console.log(
    `generate-llms-txt: wrote root llms.txt, ${hostCount} host docs, ${fwTotal} framework docs → ${path.relative(ROOT, outRoot) || "."}`,
  );
}

main();
