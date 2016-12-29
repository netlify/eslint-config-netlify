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
    "no-plusplus": 0,
    "no-param-reassign": 0,
    "no-trailing-spaces": 0,
    "space-infix-ops": 0,
    "space-before-function-paren": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "no-bitwise": 0,
    "key-spacing": [0, { beforeColon: false, afterColon: true, mode: "minimum" }],
    "max-len": [1, 120, 2, { ignoreComments: true }],
    "quote-props": [1, "consistent-as-needed"],
    "no-cond-assign": [2, "except-parens"],
    "no-unused-vars": [1, { vars: "local", args: "none" }],
    "import/imports-first": 1,
    "comma-dangle": 1,
    "object-shorthand": 1,
    "guard-for-in": 1,
    "prefer-template": 1,
    "new-cap": [1, { 
      capIsNewExceptions: ["List", "Map", "OrderedMap", "Set", "OrderedSet", "Stack", "Range", "Repeat", "Record"],
    }],
    "no-console": 2,
    "no-shadow": [1, {
      builtinGlobals: true,
      allow: ["resolve", "reject", "done", "cb", "status", "history", "name", "event", "Map"],
    }],
    "template-curly-spacing": [1, "always"],
    "react/forbid-prop-types": 0,
    "react/no-direct-mutation-state": 2,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 1,

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
