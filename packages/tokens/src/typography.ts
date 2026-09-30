/** Anton (display) and Outfit (body), self-hosted via @powui/tokens' generated CSS; a standard type scale of sizes and weights. */
const fontFamily = {
  display: 'Anton',
  body: 'Outfit',
} as const;

const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const typography = {
  fontFamily,
  fontWeight,
  headingLarge: {
    fontFamily: fontFamily.display,
    size: 36,
    lineHeight: 40,
    weight: fontWeight.normal,
  },
  headingMedium: {
    fontFamily: fontFamily.display,
    size: 30,
    lineHeight: 36,
    weight: fontWeight.normal,
  },
  headingSmall: {
    fontFamily: fontFamily.display,
    size: 24,
    lineHeight: 32,
    weight: fontWeight.normal,
  },
  bodyLarge: {
    fontFamily: fontFamily.body,
    size: 18,
    lineHeight: 28,
    weight: fontWeight.normal,
  },
  bodyMedium: {
    fontFamily: fontFamily.body,
    size: 16,
    lineHeight: 24,
    weight: fontWeight.normal,
  },
  bodySmall: {
    fontFamily: fontFamily.body,
    size: 14,
    lineHeight: 20,
    weight: fontWeight.normal,
  },
} as const;
