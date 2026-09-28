// Turns the built token objects into CSS custom properties (dist/index.js -> dist/tokens.css); numbers are unitless, wrap at the call site.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const tokens = await import(join(distDir, 'index.js'));

const toKebabCase = (key) =>
  String(key)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();

function flatten(value, path, out) {
  if (Array.isArray(value)) {
    out.push([path.join('-'), value.join(', ')]);
    return;
  }
  if (value !== null && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      flatten(child, [...path, toKebabCase(key)], out);
    }
    return;
  }
  out.push([path.join('-'), String(value)]);
}

function toDeclarations(entries) {
  return entries.map(([name, value]) => `  --${name}: ${value};`).join('\n');
}

// theme and shadow are the only light/dark-aware exports; the rest goes in :root.
const modeAware = new Set(['theme', 'shadow']);

const rootEntries = [];
const lightEntries = [];
const darkEntries = [];

for (const [tokenName, tokenValue] of Object.entries(tokens)) {
  if (modeAware.has(tokenName)) {
    flatten(tokenValue.light, [tokenName], lightEntries);
    flatten(tokenValue.dark, [tokenName], darkEntries);
  } else {
    flatten(tokenValue, [tokenName], rootEntries);
  }
}

const css = `:root {
${toDeclarations(rootEntries)}
}

[data-theme='light'] {
${toDeclarations(lightEntries)}
}

[data-theme='dark'] {
${toDeclarations(darkEntries)}
}
`;

mkdirSync(distDir, { recursive: true });
writeFileSync(join(distDir, 'tokens.css'), css);
