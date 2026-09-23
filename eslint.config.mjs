import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: [
      'apps/**',
      'node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/.expo/**',
    ],
  },
  {
    files: ['packages/**/*.{js,mjs,ts,tsx}'],
    extends: [eslint.configs.recommended, tseslint.configs.recommended],
  },
  prettier,
]);
