module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
        paths: ["./src"],
      },
      alias: [
        ["~components", "./src/components"],
        ["~theme", "./src/theme"],
        ["~static", "./static"],
        ["~src", "./src"],
      ],
    },
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/react",
    "plugin:react/recommended",
    "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
}
