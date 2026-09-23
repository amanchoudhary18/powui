# Architecture

## Layout

- `apps/docs`: Next.js (App Router, Tailwind), consumes `@powui/react`
- `apps/web`: Vite React playground, consumes `@powui/react`
- `apps/native`: Expo 57 playground, consumes `@powui/react-native`
- `packages/core`: platform-independent types/utils (no React)
- `packages/tokens`: design tokens
- `packages/react`, `packages/react-native`: component implementations
- `packages/icons`: shared icons
- `tooling/prettier`: shared prettier config

## Dependency graph

`tokens`, `core`, `icons` -> `react`, `react-native`. `icons` stays independent of `core`.

## Principles

- Platform-independent code goes in `core`; don't make it a dumping ground.
- One design language via tokens for both platforms.
- Apps consume packages; they never hold component implementations.
- React / React Native are peer deps (`react ^19`, `react-native ^0.86`).
- Workspace deps use `workspace:*`.
- Order: tokens -> core abstractions -> primitives -> React -> React Native -> docs -> tests.
