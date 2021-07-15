module.exports = {
  globals: {
    jest: {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/src/tests/**/!(*.d).ts',
    '<rootDir>/src/tests/**/*.tsx',
    '<rootDir>/src/**/*.test.ts',
    '<rootDir>/src/**/*.test.tsx',
  ],
  setupFiles: ['<rootDir>/jest/setEnvVars.js'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  roots: ['<rootDir>/src', '<rootDir>', '<rootDir>/node_modules'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts(x)?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  transformIgnorePatterns: [],
};
