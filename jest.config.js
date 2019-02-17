const environmentConfig = {
  node: {
    displayName: 'Unit tests (node)',
    testRegex: '^.+/__tests__/[^/]+\\.spec\\.js',
    testPathIgnorePatterns: ['/node_modules/', '/src/'],
    setupFiles: [
      '<rootDir>/tools/test-setup.js'
    ]
  }
};

const environment = process.env.BABEL_ENV;

module.exports = Object.assign(
  {
    verbose: true
  },
  environmentConfig[environment]
);
