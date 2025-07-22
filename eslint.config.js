import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.mjs'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'error',
    }
  }
]);