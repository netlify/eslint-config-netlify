module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
    mocha: true,
    jest: true,
  },
  extends: [
    'eslint-config-airbnb',
  ],
  plugins: [
    'class-property',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
  globals: {
    netlify: true,
    CMS_ENV: true,
  },
  rules: {
    // Overrides from the AirBnb configs
    'no-console': 'error',
    'template-curly-spacing': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', 160, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'new-cap': [2, {
      newIsCap: true,
      capIsNewExceptions: ['Immutable', 'List', 'Map', 'Set']
    }],

    // React
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 2 }],
    'react/no-direct-mutation-state': 'error',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx'] }],

    // Class properties
    'class-property/class-property-semicolon': 2,

    // Import
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/webpack*.js',
        '**/*.spec.js',
      ],
    }],
  },
};
