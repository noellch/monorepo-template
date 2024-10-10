import sharedConfig from "../shared/eslint.config.mjs";

export default [
  {
    ...sharedConfig,
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
    settings: {
      next: {
        rootDir: ["packages/web"],
      },
      react: {
        version: "detect",
      },
    },
    rules: {
      ...sharedConfig.rules,
      "react/react-in-jsx-scope": "off",
      "react-internal/no-production-logging": "off",
      "react/display-name": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-duplicate-head": "off",
    },
  },
];
