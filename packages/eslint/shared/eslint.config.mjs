import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsdocPlugin from "eslint-plugin-tsdoc";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default {
  plugins: {
    "@typescript-eslint": typescriptEslint,
    "simple-import-sort": simpleImportSort,
    "unused-imports": unusedImports,
    tsdoc: tsdocPlugin,
    prettier,
  },
  languageOptions: {
    parser: tsParser,
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      project: ["**/tsconfig.json"],
      tsconfigRootDir: process.cwd(),
    },
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^node:"],
          ["^@?\\w"],
          ["^.*\\u0000$"],
          ["^(components|hooks|libs|services|utils)(/.*|$)"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
          ["^(static)(/.*|$)"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "tsdoc/syntax": "warn",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    ...js.configs.recommended.rules,
  },
};
