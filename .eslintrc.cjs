const STATUS = {
  ERROR: "error",
  WARN: "warn",
  OFF: "off",
};

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      STATUS.WARN,
      { allowConstantExport: true },
    ],
    "react/prop-types": STATUS.OFF,
    "@tanstack/query/exhaustive-deps": STATUS.ERROR,
    "@tanstack/query/no-rest-destructuring": STATUS.WARN,
    "@tanstack/query/stable-query-client": STATUS.ERROR,
  },
};
