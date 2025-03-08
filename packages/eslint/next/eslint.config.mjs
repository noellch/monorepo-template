const config = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: [
      "**/*.d.ts",
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.spec.ts",
      "**/*.spec.tsx",
      "packages/client/.next/**",
      "**/node_modules/**",
    ],
    settings: {
      next: {
        rootDir: ["packages/client"],
      },
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-internal/no-production-logging": "off",
      "react/display-name": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-duplicate-head": "off",
    },
  },
];

export default config;
