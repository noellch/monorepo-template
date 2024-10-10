import sharedConfig from "../shared/eslint.config.mjs";
import nextEslintConfig from "../next/eslint.config.mjs";

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
    rules: {
      ...sharedConfig.rules,
    },
  },
  ...nextEslintConfig,
];
