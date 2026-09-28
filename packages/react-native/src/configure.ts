import { applyTheme, type Theme } from '@powui/core';
import { Appearance } from 'react-native';

/** mode is one option today; more can be added here later without a rename. */
export type PowConfig = {
  mode?: Theme;
};

/** Call once before rendering — fixes the theme forever, no Provider, no live updates. */
export function configure(config: PowConfig = {}): void {
  const systemScheme =
    Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
  applyTheme(config.mode ?? 'system', systemScheme);
}
