#!/usr/bin/env node

/**
 * add-missing-barrels.js
 *
 * Creates index.ts in every implementation folder from the fixed list
 * that is missing one.
 *
 * Usage:
 *   node add-missing-barrels.js ./src
 *   node add-missing-barrels.js ./src --dry-run
 */

const fs = require('fs');
const path = require('path');

const IMPL_FOLDERS = new Set([
  'abstract',
  'adapters',
  'animations',
  'consts',
  'constants',
  'directives',
  'enums',
  'facades',
  'forms',
  'guards',
  'helpers',
  'interceptors',
  'interfaces',
  'models',
  'pipes',
  'resolvers',
  'services',
  'store',
  'strategies',
  'tokens',
  'types',
  'utils',
  'validators',
  'config',
]);

const args = process.argv.slice(2);
const rootArg = args.find((a) => !a.startsWith('--'));
const isDryRun = args.includes('--dry-run');

if (!rootArg) {
  console.error(
    'Usage: node add-missing-barrels.js <project-root> [--dry-run]',
  );
  process.exit(1);
}

const ROOT = path.resolve(rootArg);
const created = [];

function buildBarrelContent(files) {
  return (
    files
      .map((f) => `export * from './${path.basename(f, '.ts')}';`)
      .join('\n') + '\n'
  );
}

function walk(dir) {
  let entries;

  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }

  const folderName = path.basename(dir);

  if (IMPL_FOLDERS.has(folderName)) {
    const names = entries.map((e) => e.name);
    const hasBarrel = names.includes('index.ts');

    if (!hasBarrel) {
      const tsFiles = entries
        .filter(
          (e) => e.isFile() && e.name.endsWith('.ts') && e.name !== 'index.ts',
        )
        .map((e) => e.name);

      if (tsFiles.length > 0) {
        const barrelPath = path.join(dir, 'index.ts');
        const content = buildBarrelContent(tsFiles);

        if (isDryRun) {
          console.log(`[dry-run] would create: ${barrelPath}`);
          console.log(
            content
              .split('\n')
              .filter(Boolean)
              .map((l) => `  ${l}`)
              .join('\n'),
          );
        } else {
          fs.writeFileSync(barrelPath, content, 'utf8');
          created.push(barrelPath);
          console.log(`created: ${barrelPath}`);
          console.log(
            content
              .split('\n')
              .filter(Boolean)
              .map((l) => `  ${l}`)
              .join('\n'),
          );
        }
      } else {
        console.log(`skipped (no .ts files): ${dir}`);
      }
    }

    // do NOT recurse deeper inside an impl folder
    return;
  }

  for (const entry of entries) {
    if (entry.isDirectory()) {
      walk(path.join(dir, entry.name));
    }
  }
}

console.log(`\nScanning: ${ROOT}`);
console.log(
  isDryRun
    ? 'Mode: dry-run (nothing will be created)\n'
    : 'Mode: live (files will be created)\n',
);

walk(ROOT);

console.log(
  `\nDone. ${created.length} index.ts file(s) ${isDryRun ? 'would be' : 'were'} created.`,
);
