module.exports = {
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
