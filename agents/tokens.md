# Tokens

Plain `.ts` files in `packages/tokens/src/`, `as const`, re-exported from `index.ts`. MCU anecdotes go in comments only.

## Files

1. `color.ts`: palette (blue, yellow, red, purple, orange, green, gold, gray, ink, paper), each soft/base/deep. Stones: blue Space, yellow Mind, red Reality, purple Power, orange Soul, green Time; gold Gauntlet, gray Vibranium
2. `theme.ts`: light + dark, same shape
3. `gradient.ts`: burst, cosmic
4. `border.ts`: widths, radius none
5. `shadow.ts`: hard offset, sm/md/lg, color from theme edge
6. `gutter.ts`: 4px-based scale for React Native (web uses Tailwind)
7. `typography.ts`: Bangers (display), Outfit (body), not bundled
8. `motion.ts`: durations, easing, press offsets, pop/shake/pulse

## theme.ts

- Plain roles: surface, text, edge.
- Plain variants: primary (red), secondary (blue), outline, ghost, link.
- Fun accents, no plain aliases: gamma (green), impact (yellow), villain (deep red), cosmic (blue), mutant (purple), vibranium (dark gray).
- Dark: same role names, different values; edges paper-toned, page ink.

## Deferred

z-index, breakpoints, opacity, component tokens, font loading, Figma sync.
