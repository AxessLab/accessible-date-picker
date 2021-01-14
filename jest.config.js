module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  }
};
