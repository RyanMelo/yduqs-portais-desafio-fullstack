import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})
 
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\.(ts|tsx)?$': 'ts-jest',
    "^.+\.(js|jsx)$": "babel-jest",
  }
}
 
export default createJestConfig(config)