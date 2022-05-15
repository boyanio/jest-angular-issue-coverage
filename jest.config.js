module.exports = {
  globalSetup: "jest-preset-angular/global-setup",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>packages/**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transformIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["cobertura"],
  coverageDirectory: "<rootDir>reports/coverage",
  collectCoverageFrom: ["packages/**/*.ts", "!**/node_modules/**"],
};
