const { defaults: ts } = require('ts-jest/presets')

/** @type {import('jest').Config} */
module.exports = {
  transform: {
    ...ts.transform,
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node','d.ts'],
  coverageDirectory: '.coverage',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  modulePaths: ['./src']
};