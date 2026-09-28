import { gutter } from './gutter';
import { shadow } from './shadow';

/** Durations, easing curves, and press offsets (mirrors shadow.ts). */
const duration = {
  fast: 150,
  base: 200,
  slow: 300,
  slower: 2000,
} as const;

const easing = {
  linear: [0, 0, 1, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  pulse: [0.4, 0, 0.6, 1],
} as const;

export const motion = {
  duration,
  easing,
  press: {
    sm: shadow.light.sm.x,
    md: shadow.light.md.x,
    lg: shadow.light.lg.x,
  },
  pop: { duration: duration.fast, easing: easing.easeOut, scale: 1.1 },
  shake: { duration: duration.fast, distance: gutter.space1, count: 3 },
  pulse: { duration: duration.slower, easing: easing.pulse, opacity: 0.5 },
} as const;
