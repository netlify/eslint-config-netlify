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
    // Overrides from the AirBnb configs
    "quotes": 0,
    "no-console": 2,
    "no-shadow": [1, {
      builtinGlobals: true,
      allow: ["resolve", "reject", "done", "cb", "status"],
    }],
    "template-curly-spacing": [2, "always"],
    "react/jsx-key": 2,
    "react/no-direct-mutation-state": 2,
    "react/jsx-filename-extension": 0,

    // Class properties
    "class-property/class-property-semicolon": 2,

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
