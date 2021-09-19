module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true,
    },
  },
  rules: {
    quotes: ["error", "double"],
    "object-curly-spacing": "off",
    "quote-props": "off",
    "max-len": "off",
  },
};
