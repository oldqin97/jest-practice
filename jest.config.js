module.exports = {
  // jest每次执行测试文件都会先执行一遍这个文件
  setupFilesAfterEnv: [
    '/Users/qin/Desktop/project/jest-course/tests/utils/jest-setup.ts',
  ],

  testEnvironment: 'jsdom',
  // testEnvironment: 'jest-environment-jsdom-global',

  // 修改路径简写/别名 .test.js
  moduleDirectories: ['node_modules', 'src'],

  // ts支持
  preset: 'ts-jest',

  // 自动清除mock
  clearMocks: true,

  // 开启覆盖率
  collectCoverage: true,

  // 指定生成覆盖率报告文件存放位置
  coverageDirectory: 'coverage',

  coverageProvider: 'v8',
};
