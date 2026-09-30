# Tokens

`.ts` files in `packages/tokens/src/`, `as const`, re-exported from `index.ts`. MCU anecdotes: comments only.

## Files

1. `color.ts` — 10 families, each a 50-950 shade scale
2. `theme.ts` — see [theme.md](theme.md)
3. `gradient.ts` — burst, cosmic
4. `border.ts` — width + radius scales
5. `shadow.ts` — hard offset sm/md/lg, color from theme.edge
6. `gutter.ts` — 4px-based scale
7. `typography.ts` — Anton/Outfit, sizes + weights
8. `motion.ts` — duration, easing, press, pop/shake/pulse
9. `z-index.ts` — base to toast
10. `breakpoint.ts` — sm-xxl, web only
11. `opacity.ts` — disabled/muted/hover/full

`scripts/generate-css.mjs` (wired into `build`) → `dist/tokens.css`, `:root` + `[data-theme]`, numbers unitless. Also copies `src/fonts/*.woff2` to `dist/fonts/` and emits self-hosted `@font-face` rules (Anton, Outfit) at the top of `tokens.css`. Import: `@powui/tokens/tokens.css`.

## Deferred

component tokens, Figma sync.
