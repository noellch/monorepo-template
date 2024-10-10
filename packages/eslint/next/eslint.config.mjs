import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsdocPlugin from "eslint-plugin-tsdoc";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: [
      "**/*.d.ts",
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.spec.ts",
      "**/*.spec.tsx",
      "packages/web/.next/**",
      "**/node_modules/**",
    ],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: ["packages/*/tsconfig.json", "tsconfig.json"],
      },
    },
    settings: {
      next: {
        rootDir: ["packages/web"],
      },
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      tsdoc: tsdocPlugin,
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "react-internal/no-production-logging": "off",
      "react/display-name": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@next/next/no-duplicate-head": "off",
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
    },
  },
];
