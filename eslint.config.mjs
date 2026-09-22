import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: [
      "apps/**",
      "node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/.expo/**",
    ],
  },
  {
    files: [
      "packages/**/*.js",
      "packages/**/*.mjs",
      "packages/**/*.ts",
      "packages/**/*.tsx",
    ],
    ...eslint.configs.recommended,
  },
  prettier,
];
