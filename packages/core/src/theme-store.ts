import { getThemeMode, type ResolvedTheme, type Theme } from './theme-mode';

/** Module-level, set once via configure(); defaults to 'light' until then. */
let mode: ResolvedTheme = 'light';

/** Shared half of configure() — systemScheme detection stays platform-specific, so it's a parameter. */
export function applyTheme(theme: Theme, systemScheme: ResolvedTheme): void {
  mode = getThemeMode(theme, systemScheme);
}

export function getTheme(): ResolvedTheme {
  return mode;
}
