# POWUI

Cross-platform, comic-inspired UI library (React + React Native). pnpm monorepo, no Turborepo. Infrastructure is done. `@powui/tokens` is fully implemented (see agents/tokens.md), plus a web CSS-generation build step and `configure`/`useStyles` in `@powui/react` and `@powui/react-native` (see agents/theme.md). Current phase: no actual components exist yet — that's next.

## Working style

- One step at a time: brief why, exact command/code, wait for the result.
- Explain tradeoffs; recommend one option. Production-quality over clever.
- Don't redesign the monorepo or add tooling without a concrete reason.

## Decisions

- No shadcn, no Radix: own token names and own primitives. devbrock/comic-ui is a visual reference only.
- Tone: comic flavor, but professional. Errors plain; easter eggs dev-only.
- Names: fun accent names, plain roles and variants; no aliases. MCU references stay out of the public API (trademark risk) — exception: `theme.ts`'s `vision` accent (yellow) is a direct MCU character reference, explicitly approved despite the risk.
- Tokens are `.ts` files (not JSON). No Tailwind: web consumes tokens as generated CSS custom properties; CSS Modules only where real selectors (hover, media queries) are needed.
- Do not: force Expo 58, override `uuid` (known transitive warning), add Turborepo/Storybook/Changesets/CI/publishing without a concrete reason.

## Commands

- Verify: `pnpm verify` (test, format check, lint, typecheck); build: `pnpm build`; watch: `pnpm dev`

## Details

- [agents/architecture.md](agents/architecture.md): layout, dependency graph, principles
- [agents/tokens.md](agents/tokens.md): token files and names
- [agents/theme.md](agents/theme.md): theme.ts shape, configure/useStyles consumption
- [agents/build-and-quality.md](agents/build-and-quality.md): TypeScript, build, tests, lint, format
