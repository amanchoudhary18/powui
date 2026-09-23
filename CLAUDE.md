# POWUI

Cross-platform, comic-inspired UI library (React + React Native). pnpm monorepo, no Turborepo. Infrastructure is done. Current phase: design tokens in `@powui/tokens`. No token files exist yet; next up are `gutter.ts` and `typography.ts`.

## Working style

- One step at a time: brief why, exact command/code, wait for the result.
- Explain tradeoffs; recommend one option. Production-quality over clever.
- Don't redesign the monorepo or add tooling without a concrete reason.

## Decisions

- No shadcn, no Radix: own token names and own primitives. devbrock/comic-ui is a visual reference only.
- Tone: comic flavor, but professional. Errors plain; easter eggs dev-only.
- Names: fun accent names, plain roles and variants; no aliases. MCU references stay out of the public API (trademark risk).
- Tokens are `.ts` files (not JSON). Web uses Tailwind v4, fed by a generated `@theme` later.
- Do not: force Expo 58, override `uuid` (known transitive warning), add Turborepo/Storybook/Changesets/CI/publishing without a concrete reason.

## Commands

- Verify: `pnpm verify` (test, format check, lint, typecheck); build: `pnpm build`; watch: `pnpm dev`

## Details

- [agents/architecture.md](agents/architecture.md): layout, dependency graph, principles
- [agents/tokens.md](agents/tokens.md): token files and names (spec, not yet implemented)
- [agents/build-and-quality.md](agents/build-and-quality.md): TypeScript, build, tests, lint, format
