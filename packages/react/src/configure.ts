import { applyTheme, type Theme } from '@powui/core';

/** mode is one option today; more can be added here later without a rename. */
export type PowConfig = {
  mode?: Theme;
};

function getSystemScheme(): 'light' | 'dark' {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

/** Call once before rendering — fixes the theme forever, no Provider, no live updates. */
export function configure(config: PowConfig = {}): void {
  applyTheme(config.mode ?? 'system', getSystemScheme());
}
