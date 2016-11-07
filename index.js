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
    quotes: [2, "double"],
    "no-console": 2,
    "no-shadow": [1, {
      builtinGlobals: true,
      allow: ["resolve", "reject", "done", "cb"],
    }],
    "template-curly-spacing": [2, "always"],
    "jsx-quotes": [2, "prefer-double"],
    "max-len": [2, {
      code: 100,
      comments: 100,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "new-cap": [2, {
      newIsCap: true,
      capIsNewExceptions: ["Immutable", "List", "Map", "Set", "OrderedMap"],
    }],

    // React
    "react/jsx-handler-names": [2, {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on",
    }],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [2, { maximum: 2 }],
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
