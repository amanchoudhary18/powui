import { color } from './color';

/** Light + dark theme built from color.ts; each entry is { background, text, hoverBackground }. See agents/theme.md. */
type ColorState = {
  background: string;
  text: string;
  hoverBackground: string;
};

const state = (
  background: string,
  text: string,
  hoverBackground: string,
): ColorState => ({ background, text, hoverBackground });

const lightSurface = state(color.paper[50], color.ink[950], color.paper[100]);
const lightEdge = state(color.ink[800], color.paper[50], color.ink[900]);

const light = {
  surface: lightSurface,
  text: state(
    lightSurface.background,
    color.ink[950],
    lightSurface.hoverBackground,
  ),
  edge: lightEdge,

  primary: state(color.red[500], color.paper[50], color.red[600]),
  secondary: state(color.blue[500], color.paper[50], color.blue[600]),
  outline: state('transparent', lightEdge.background, color.paper[100]),
  ghost: state('transparent', color.ink[950], color.paper[100]),
  link: state('transparent', color.red[500], color.paper[100]),

  gamma: state(color.green[500], color.paper[50], color.green[600]),
  vision: state(color.yellow[400], color.ink[900], color.yellow[500]),
  villain: state(color.red[700], color.paper[50], color.red[800]),
  cosmic: state(color.blue[700], color.paper[50], color.blue[800]),
  mutant: state(color.purple[500], color.paper[50], color.purple[600]),
  vibranium: state(color.gray[700], color.paper[50], color.gray[800]),
} as const;

const darkSurface = state(color.ink[950], color.paper[50], color.ink[900]);
const darkEdge = state(color.paper[100], color.ink[900], color.paper[200]);

const dark = {
  surface: darkSurface,
  text: state(
    darkSurface.background,
    color.paper[50],
    darkSurface.hoverBackground,
  ),
  edge: darkEdge,

  primary: state(color.red[500], color.paper[50], color.red[400]),
  secondary: state(color.blue[500], color.paper[50], color.blue[400]),
  outline: state('transparent', darkEdge.background, color.ink[900]),
  ghost: state('transparent', color.paper[50], color.ink[900]),
  link: state('transparent', color.red[500], color.ink[900]),

  gamma: state(color.green[500], color.paper[50], color.green[400]),
  vision: state(color.yellow[400], color.ink[900], color.yellow[300]),
  villain: state(color.red[700], color.paper[50], color.red[600]),
  cosmic: state(color.blue[700], color.paper[50], color.blue[600]),
  mutant: state(color.purple[500], color.paper[50], color.purple[400]),
  vibranium: state(color.gray[700], color.paper[50], color.gray[600]),
} as const;

export const theme = { light, dark } as const;
