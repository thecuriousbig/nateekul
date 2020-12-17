module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/.storybook/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/lib/', '/tests/', '/coverage/', '/.storybook/'],
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@assets(.*)$': '<rootDir>/assets$1',
    '^@layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@locales(.*)$': '<rootDir>/src/localized$1',
    '^@context(.*)$': '<rootDir>/src/context$1',
    '^@queries(.*)$': '<rootDir>/src/queries$1',
    '^@data(.*)$': '<rootDir>/src/data$1',
    '^@typeDefs(.*)$': '<rootDir>/src/types$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@public(.*)$': '<rootDir>/public$1'
  },
  transform: {
    '.(ts|tsx)': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
