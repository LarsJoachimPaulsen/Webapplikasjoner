/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  
  coverageProvider: "v8",

  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],

  testEnvironment: "jsdom",

  collectCoverageFrom: [
    'src/**/*.js?(x)'
  ], 

  
};
