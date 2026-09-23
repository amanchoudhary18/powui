# Build and quality

- One TypeScript everywhere: 6.0.3 (Expo 57 requires it). Also aligned: ESLint 9.39.5, React 19.2.3, `@types/react` 19.2.18, `@types/node` 20.
- `tsconfig.base.json`: strict, ES2022, ESM, Bundler resolution. `react` adds DOM libs and `jsx: react-jsx`; `react-native` has no DOM.
- Each package: `src/index.ts`, `tsconfig.json`, `tsconfig.build.json` (excludes tests).
- Build: `tsup && tsc -p tsconfig.build.json && cp dist/index.d.ts dist/index.d.cts`. tsup emits ESM + CJS + sourcemaps (`dts: false`); tsc emits types.
- Exports: `import` and `require` each have their own `types`. Packages set `sideEffects: false`, `files: ["dist"]`.
- Apps consume `dist`, so rebuild after package changes (`pnpm dev` rebuilds JS only).
- Tests: Vitest (root config, node env, globals). Tests are first-class.
- Prettier: config in `tooling/prettier`, wired via root `package.json`; `.prettierignore` skips `apps/`.
- ESLint: root flat config with `typescript-eslint`, packages only. Each app has its own config (Next, Vite, Expo).
- Packages are private; peer deps `react ^19.0.0`, `react-native ^0.86.0`.
