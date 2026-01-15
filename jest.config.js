module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\.mjs$)'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
};
