// jest.config.cjs
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Map .js → .ts in imports
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
