// Turns the built token objects into CSS custom properties (dist/index.js -> dist/tokens.css); numbers are unitless, wrap at the call site.
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const fontsDir = join(__dirname, '..', 'src', 'fonts');

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

// Self-hosted so consumers of @powui/react/@powui/react-native never depend on a font CDN.
const fontFace = `@font-face {
  font-family: 'Anton';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./fonts/Anton-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('./fonts/Outfit-Variable.woff2') format('woff2-variations');
}
`;

const css = `${fontFace}
:root {
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
cpSync(fontsDir, join(distDir, 'fonts'), { recursive: true });
writeFileSync(join(distDir, 'tokens.css'), css);
