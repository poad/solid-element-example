// @ts-check

import eslint from '@eslint/js';
// @ts-expect-error ignore type errors
import stylistic from '@stylistic/eslint-plugin';
// @ts-expect-error ignore type errors
import stylisticTs from '@stylistic/eslint-plugin-ts';
// @ts-expect-error ignore type errors
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
// @ts-expect-error ignore type errors
import tseslint from 'typescript-eslint';
// @ts-expect-error ignore type errors
import importPlugin from 'eslint-plugin-import';
// @ts-expect-error ignore type errors
import pluginPromise from 'eslint-plugin-promise';

import solid from 'eslint-plugin-solid';


export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  pluginPromise.configs['flat/recommended'],
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'src/tsconfig.json',
      'src/stories',
      '**/*.css',
      'node_modules/**/*',
      'dist',
    ],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
      '@stylistic/jsx': stylisticJsx,
      solid,
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs'],
        '@typescript-eslint/parser': ['.ts'],
      },
      'import/internal-regex': '^~/',
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/jsx/jsx-indent': ['error', 2],
      "comma-dangle": ["error", "always-multiline"],
      "quotes": ["error", "single"],
      'semi': ["error", "always"],
      'import/namespace': 'off',
      'import/named': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/no-duplicates': 'off',
      'import/default': 'off',
      'import/export': 'off',
    }
  },
);
