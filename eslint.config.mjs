import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ...pluginJs.configs.recommended,
    files: ["**/*.js"], // Target JavaScript files
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript features
      sourceType: "module", // Enable ES Modules (import/export)
      globals: {
        window: "readonly", // Browser globals (e.g., `window`)
        document: "readonly",
        console: "readonly",
        module: "readonly", // Node.js globals (if needed)
        require: "readonly",
      },
    },
    rules: {
      semi: ["error", "always"], // Enforce semicolons
      quotes: ["error", "double"], // Use double quotes
      "no-unused-vars": ["warn"], // Warn for unused variables
      indent: ["error", 2], // Enforce 2-space indentation
    },
  },
];
