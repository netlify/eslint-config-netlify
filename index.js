module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
    mocha: true,
    jest: true,
  },
  extends: [
    "eslint-config-airbnb",
  ],
  plugins: [
    "class-property",
  ],
  settings: {
    "import/resolver": "webpack",
  },
  globals: {
    netlify: true,
  },
  rules: {
    // Overrides
    "quotes": 0,
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "quote-props": [1, "consistent-as-needed"],
    "no-cond-assign": [2, "except-parens"],
    "space-infix-ops": 0,
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "no-param-reassign": 0,
    "no-console": 2,
    "no-shadow": [1, {
      builtinGlobals: true,
      allow: ["resolve", "reject", "done", "cb", "status"],
    }],
    "template-curly-spacing": [1, "always"],
    "react/jsx-key": 2,
    "react/no-direct-mutation-state": 2,
    "react/jsx-filename-extension": 0,

    // Class properties
    "class-property/class-property-semicolon": 1,

    // Import
    "import/no-extraneous-dependencies": [2, {
      devDependencies: [
        "**/webpack*.js",
        "**/*.spec.js",
        "**/*.stories.js",
        "**/.storybook/*",
      ],
    }],
  },
};
