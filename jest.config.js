module.exports = {
  preset: 'ts-jest',
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
}
