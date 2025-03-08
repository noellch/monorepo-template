import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsdocPlugin from "eslint-plugin-tsdoc";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

const config = [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    ignores: [
      "**/*.d.ts",
      "**/*.{test,spec}.{ts,tsx}",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/node_modules/**",
      "**/.next/**",
    ],
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
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      next: {
        rootDir: ["packages/client"],
      },
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": "off", // 由 unused-imports 處理
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/ban-types": [
        "error",
        {
          extendDefaults: true,
          types: {
            "{}": true,
          },
        },
      ],
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/no-import-type-side-effects": "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:"],
            ["^@?\\w"],
            ["^import\\s+type"],
            ["^@(/.*|$)"],
            ["^.*\\u0000$"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.s?css$"],
            ["^(static)(/.*|$)"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/dist/**"],
              message: "Do not import from dist directories directly.",
            },
          ],
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react-internal/no-production-logging": "off",
      "react/display-name": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-duplicate-head": "off",
      ...js.configs.recommended.rules,
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-redeclare": "off",
    },
  },
];

export default config;
