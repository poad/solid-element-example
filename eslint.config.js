import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImport from "eslint-plugin-import";
import typeScriptESLintParser from '@typescript-eslint/parser';

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
    ignores: ["./lib/**/*"],
  },
  {
    rules: {
      semi: ["error", "always"],
    },
  },
  {
    files: ["./**/*.js"],
    ignores: ["./*.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        FOO: "readonly",
      },
    },
    rules: {
      semi: "error",
    },
  },
  {
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
