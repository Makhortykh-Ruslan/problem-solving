import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.js';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': 'off',
      'prettier/prettier': ['error', prettierConfig],
    },
  },
];
