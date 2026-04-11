#!/usr/bin/env node

/**
 * remove-component-barrels.js
 *
 * Finds and removes index.ts files that sit in the same folder
 * as a *.component.ts file — which violates the barrel rule.
 *
 * Usage:
 *   node remove-component-barrels.js ./src
 *   node remove-component-barrels.js ./src --dry-run
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const rootArg = args.find((a) => !a.startsWith('--'));
const isDryRun = args.includes('--dry-run');

if (!rootArg) {
  console.error(
    'Usage: node remove-component-barrels.js <project-root> [--dry-run]',
  );
  process.exit(1);
}

const ROOT = path.resolve(rootArg);
const deleted = [];
const skipped = [];

function walk(dir) {
  let entries;

  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }

  const names = entries.map((e) => e.name);
  const hasComponent = names.some((n) => n.endsWith('.component.ts'));
  const hasBarrel = names.includes('index.ts');

  if (hasComponent && hasBarrel) {
    const barrelPath = path.join(dir, 'index.ts');

    if (isDryRun) {
      skipped.push(barrelPath);
      console.log(`[dry-run] would delete: ${barrelPath}`);
    } else {
      fs.unlinkSync(barrelPath);
      deleted.push(barrelPath);
      console.log(`deleted: ${barrelPath}`);
    }
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
    ? 'Mode: dry-run (nothing will be deleted)\n'
    : 'Mode: live (files will be deleted)\n',
);

walk(ROOT);

const count = isDryRun ? skipped.length : deleted.length;
console.log(
  `\nDone. ${count} index.ts file(s) ${isDryRun ? 'would be' : 'were'} removed.`,
);
