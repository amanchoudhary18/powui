# Theme

`theme.ts`: light + dark, same shape. Entry = `{ background, text, hoverBackground }`.

- Roles: surface, text, edge
- Variants: primary (red), secondary (blue), outline/ghost/link (no background)
- Accents: gamma, vision, villain, cosmic, mutant, vibranium — `vision` is an approved MCU exception, see CLAUDE.md
- Dark: edge goes light-toned, surface goes dark
- hoverBackground: darker in light theme, lighter in dark theme

## Consumption

- `configure({ mode })` — call once at startup, fixes the theme forever. No Provider, no Context, no live updates.
- `useStyles()` — plain function (not a hook), reads the fixed mode.
- `@powui/core`: `applyTheme`, `getTheme`, `Theme`/`ResolvedTheme` types — no React.
