import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
