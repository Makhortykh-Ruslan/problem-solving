import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative, resolve } from 'path';

const SRC = './src';

const ALIASES = {
  '@core': 'src/app/core',
  '@icons': 'src/ep-icons',
  '@components': 'src/app/pages',
};

// ── helpers ──────────────────────────────────────────────────────────────────

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

// Build a map: ClassName → absolute file path
function buildClassMap(files) {
  const map = new Map(); // className → filePath
  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    const matches = content.matchAll(/export\s+(?:class|abstract\s+class|interface|enum)\s+(\w+)/g);
    for (const [, name] of matches) {
      if (!map.has(name)) map.set(name, file);
    }
  }
  return map;
}

// Resolve alias path to absolute
function resolveAlias(importPath) {
  for (const [alias, real] of Object.entries(ALIASES)) {
    if (importPath.startsWith(alias + '/') || importPath === alias) {
      return importPath.replace(alias, real);
    }
  }
  return null;
}

// Convert absolute path to alias import string
function toAliasImport(fromFile, targetFile) {
  for (const [alias, real] of Object.entries(ALIASES)) {
    const absReal = resolve(real);
    const absTarget = resolve(targetFile).replace(/\\/g, '/');
    const absRealNorm = absReal.replace(/\\/g, '/');
    if (absTarget.startsWith(absRealNorm + '/')) {
      const rel = absTarget.slice(absRealNorm.length + 1).replace(/\.ts$/, '');
      return `${alias}/${rel}`;
    }
  }
  // fallback: relative
  const rel = relative(dirname(fromFile), targetFile).replace(/\.ts$/, '').replace(/\\/g, '/');
  return rel.startsWith('.') ? rel : './' + rel;
}

// Extract class names from imports: [...] in @Component decorator
function extractImportedClasses(content) {
  const decoratorMatch = content.match(/@Component\s*\([\s\S]*?\)\s*export\s+class/);
  if (!decoratorMatch) return [];

  const decorator = decoratorMatch[0];
  const importsMatch = decorator.match(/imports\s*:\s*\[([^\]]*)\]/s);
  if (!importsMatch) return [];

  return [...importsMatch[1].matchAll(/\b([A-Z]\w+)\b/g)].map(([, name]) => name);
}

// Extract already-imported names at top of file
function extractTopImports(content) {
  const imported = new Set();
  const importLines = content.matchAll(/^import\s+\{([^}]+)\}\s+from\s+['"][^'"]+['"]/gm);
  for (const [, names] of importLines) {
    for (const name of names.split(',')) {
      imported.add(name.trim());
    }
  }
  return imported;
}

// Find the last import line index
function lastImportLineIndex(lines) {
  let last = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) last = i;
  }
  return last;
}

// ── main ─────────────────────────────────────────────────────────────────────

const allFiles = getAllFiles(SRC);
const classMap = buildClassMap(allFiles);

const componentFiles = allFiles.filter(f => f.endsWith('.component.ts'));

let totalFixed = 0;
let totalFiles = 0;

for (const file of componentFiles) {
  const content = readFileSync(file, 'utf8');
  const importedClasses = extractImportedClasses(content);
  if (!importedClasses.length) continue;

  const topImports = extractTopImports(content);
  const missing = importedClasses.filter(cls => !topImports.has(cls));
  if (!missing.length) continue;

  // Group missing by source file
  const toAdd = new Map(); // importPath → [className]
  for (const cls of missing) {
    const sourcePath = classMap.get(cls);
    if (!sourcePath) {
      console.warn(`⚠️  Cannot find source for: ${cls} (in ${file})`);
      continue;
    }
    const importPath = toAliasImport(file, sourcePath);
    if (!toAdd.has(importPath)) toAdd.set(importPath, []);
    toAdd.get(importPath).push(cls);
  }

  if (!toAdd.size) continue;

  const lines = content.split('\n');
  const insertAt = lastImportLineIndex(lines) + 1;
  const newImports = [...toAdd.entries()].map(
    ([path, names]) => `import { ${names.join(', ')} } from '${path}';`
  );

  lines.splice(insertAt, 0, ...newImports);
  writeFileSync(file, lines.join('\n'), 'utf8');

  console.log(`✅ ${file}`);
  for (const line of newImports) console.log(`   + ${line}`);

  totalFixed += newImports.length;
  totalFiles++;
}

console.log(`\nDone. Added ${totalFixed} import(s) across ${totalFiles} file(s).`);
