const { resolve } = require("node:path")
const project = resolve(process.cwd(), "tsconfig.json")

/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: project,
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: 2022
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        project,
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    "tailwindcss/classnames-order": "off",
    "arrow-body-style": ["error", "always"],
    "react/prop-types": "off",
    "react/jsx-curly-brace-presence": ["warn", "never"],
    "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
    "@tanstack/query/exhaustive-deps": "off",
    "@typescript-eslint/no-unsafe-member-access": "off", // TODO: enable and fix issuess
    "@typescript-eslint/no-unsafe-argument": "off", // TODO: enable and fix issuess
    "@typescript-eslint/no-unsafe-assignment": "off", // TODO: enable and fix issuess
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false
      }
    ],
    "react/self-closing-comp": "error",
    "react/jsx-boolean-value": ["error", "never"],
    "import/prefer-default-export": "off",
    "import/namespace": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ]
  }
}
