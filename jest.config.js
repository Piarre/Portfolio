/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', './'],
  testEnvironment: 'jest-environment-jsdom',
};
module.exports = createJestConfig(customJestConfig);
