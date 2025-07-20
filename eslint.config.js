import { defineConfig } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.mjs'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'error',
    }
  }
]);