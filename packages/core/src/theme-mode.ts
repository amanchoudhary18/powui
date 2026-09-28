/** Platform-independent — no React. 'system' resolves via the caller's platform check. */
export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = Exclude<Theme, 'system'>;

export function getThemeMode(
  mode: Theme,
  systemScheme: ResolvedTheme,
): ResolvedTheme {
  return mode === 'system' ? systemScheme : mode;
}
