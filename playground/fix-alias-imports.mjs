import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative, resolve } from 'path';

const SRC = './src';

const ALIASES = {
  '@core': 'src/app/core',
  '@icons': 'src/ep-icons',
  '@components': 'src/app/pages',
};

// ── helpers ───────────────────────────────────────────────────────────────────

function getAllFiles(dir, ext = '.ts') {
  const results = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === 'node_modules' || name === 'dist') continue;
      results.push(...getAllFiles(full, ext));
    } else if (name.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

// Resolve alias import path → absolute file path (tries .ts, /index.ts)
function resolveAliasToAbsolute(importPath) {
  for (const [alias, real] of Object.entries(ALIASES)) {
    if (importPath.startsWith(alias + '/') || importPath === alias) {
      const withoutAlias = importPath.replace(alias, resolve(real));
      const candidates = [
        withoutAlias + '.ts',
        withoutAlias + '/index.ts',
        withoutAlias,
      ];
      for (const c of candidates) {
        try {
          statSync(c);
          return c;
        } catch {}
      }
    }
  }
  return null;
}

// Convert absolute target path to relative import from fromFile
function toRelativeImport(fromFile, targetAbsolute) {
  // strip .ts extension
  const target = targetAbsolute.replace(/\.ts$/, '');
  let rel = relative(dirname(fromFile), target).replace(/\\/g, '/');
  if (!rel.startsWith('.')) rel = './' + rel;
  // strip /index suffix
  rel = rel.replace(/\/index$/, '');
  return rel;
}

// ── main ──────────────────────────────────────────────────────────────────────

const allFiles = getAllFiles(SRC);
let totalFixed = 0;
let totalFiles = 0;

for (const file of allFiles) {
  const original = readFileSync(file, 'utf8');
  let updated = original;
  let changed = false;
  const log = [];

  const importRegex =
    /^(import\s+(?:type\s+)?\{[^}]+\}\s+from\s+['"])(@core\/[^'"]+|@icons\/[^'"]+|@components\/[^'"]+)(['"];?)$/gm;

  for (const match of original.matchAll(importRegex)) {
    const [full, prefix, aliasPath, suffix] = match;

    const absoluteTarget = resolveAliasToAbsolute(aliasPath);
    if (!absoluteTarget) continue;

    const relPath = toRelativeImport(file, absoluteTarget);

    // only replace if relative path is shorter than alias path
    if (relPath.length >= aliasPath.length) continue;

    const replacement = `${prefix}${relPath}${suffix}`;
    updated = updated.replace(full, replacement);
    log.push(`  - ${aliasPath}\n  + ${relPath}`);
    changed = true;
  }

  if (changed) {
    writeFileSync(file, updated, 'utf8');
    console.log(`✅ ${file}`);
    for (const l of log) console.log(l);
    totalFixed += log.length;
    totalFiles++;
  }
}

console.log(
  `\nDone. Replaced ${totalFixed} import(s) across ${totalFiles} file(s).`,
);
