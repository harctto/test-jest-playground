const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>components/$1',
    '^@/pages/(.*)$': '<rootDir>pages/$1',
    '^@/styles/(.*)$': '<rootDir>styles/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
}

module.exports = createJestConfig(customJestConfig)