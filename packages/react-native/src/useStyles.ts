import { getTheme } from '@powui/core';
import {
  border,
  breakpoint,
  color,
  gradient,
  gutter,
  motion,
  opacity,
  shadow,
  theme,
  typography,
  zIndex,
} from '@powui/tokens';

/** Plain function, not a hook — reads the mode configure() fixed (or 'light' if never called). */
export function useStyles() {
  const mode = getTheme();

  return {
    mode,
    theme: theme[mode],
    shadow: shadow[mode],
    color,
    gutter,
    border,
    breakpoint,
    gradient,
    motion,
    opacity,
    typography,
    zIndex,
  } as const;
}
