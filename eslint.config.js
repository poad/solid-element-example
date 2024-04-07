import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImport from "eslint-plugin-import";
import typeScriptESLintParser from '@typescript-eslint/parser';
import solid from 'eslint-plugin-solid';

export default [
  {
    plugins: {
      eslintImport,
    },
    rules: {
      "eslintImport/default": "error",
    },
  },
  {
    rules: {
      semi: ["error", "always"],
    },
  },
  {
    plugins: {
      solid,
    },
    files: ["./src/*.js", "./src/*.ts", "./src/*.jsx", "./src/*.tsx"],
    languageOptions: {
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
      },
      parser: typeScriptESLintParser,
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
  },
  eslintConfigPrettier,
];
