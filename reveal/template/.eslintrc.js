/* eslint-env node */
module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 12
  },
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "comma-dangle": ["error", "never"],
    "no-unused-vars": ["error"],
    "semi": ["error", "always"]
  }
};
