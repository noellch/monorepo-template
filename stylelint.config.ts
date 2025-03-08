const config: import("stylelint").Config = {
  allowEmptyInput: true,
  extends: [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "stylelint-prettier/recommended",
    "stylelint-config-tailwindcss",
  ],
  rules: {
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9-_]+$",
      {
        message: "Class names should be kebab-case or BEM format.",
      },
    ],
  },
  fix: true,
};

export default config;
