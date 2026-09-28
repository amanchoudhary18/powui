import { theme } from './theme';

/** Hard offset shadows only — no blur, no spread. Color tracks theme.edge. */
const offset = {
  sm: 2,
  md: 4,
  lg: 8,
} as const;

export const shadow = {
  light: {
    sm: { x: offset.sm, y: offset.sm, color: theme.light.edge.background },
    md: { x: offset.md, y: offset.md, color: theme.light.edge.background },
    lg: { x: offset.lg, y: offset.lg, color: theme.light.edge.background },
  },
  dark: {
    sm: { x: offset.sm, y: offset.sm, color: theme.dark.edge.background },
    md: { x: offset.md, y: offset.md, color: theme.dark.edge.background },
    lg: { x: offset.lg, y: offset.lg, color: theme.dark.edge.background },
  },
} as const;
