#!/usr/bin/env node
/**
 * Copy top-level host MDX docs into framework Storybook packages.
 *
 * Usage:
 *   node scripts/sync-host-docs.mjs           # all frameworks
 *   node scripts/sync-host-docs.mjs react
 *   node scripts/sync-host-docs.mjs vue
 *   node scripts/sync-host-docs.mjs angular
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const HOST_SRC = path.join(ROOT, "packages/host/src");
const FRAMEWORKS = ["react", "vue", "angular"];

function syncFramework(fw) {
  const destDir = path.join(ROOT, "packages", fw, "src", "docs");
  fs.mkdirSync(destDir, { recursive: true });

  const files = fs
    .readdirSync(HOST_SRC)
    .filter((name) => name.endsWith(".mdx"));

  if (files.length === 0) {
    console.warn(`warn: no MDX files found in ${path.relative(ROOT, HOST_SRC)}`);
    return 0;
  }

  for (const file of files) {
    const src = path.join(HOST_SRC, file);
    const dest = path.join(destDir, file);
    fs.copyFileSync(src, dest);
  }

  console.log(
    `synced ${files.length} host MDX → packages/${fw}/src/docs/ (${files.join(", ")})`,
  );
  return files.length;
}

function main() {
  const arg = process.argv[2];
  const targets =
    !arg || arg === "all"
      ? FRAMEWORKS
      : FRAMEWORKS.includes(arg)
        ? [arg]
        : null;

  if (!targets) {
    console.error(
      `error: unknown target "${arg}". Use: ${FRAMEWORKS.join(" | ")} | all`,
    );
    process.exit(1);
  }

  if (!fs.existsSync(HOST_SRC)) {
    console.error(`error: missing host src at ${path.relative(ROOT, HOST_SRC)}`);
    process.exit(1);
  }

  for (const fw of targets) {
    syncFramework(fw);
  }
}

main();
