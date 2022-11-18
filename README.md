## jest

### 创建项目

```sh
mkdir dirFile
cd dirFile

yarn init -y
yarn add -D jest
npx jest --init
```

按照选项选择会生成一个 jest.config.je 的配置文件

```js
module.exports = {
  // 自动清除 Mock
  clearMocks: true,

  // 开启覆盖率
  collectCoverage: true,

  // 指定生成覆盖率报告文件存放位置
  coverageDirectory: 'coverage',

  // 不用管
  coverageProvider: 'v8',
};
```

### 第一个测试

---

src/utils/sum.js 是第一个业务文件

```je
const sum = (a, b) => a + b;

module.exports = sum;
```

添加测试用例 tests/utils/sum.test.js

```js
const sum = require('../../src/utils/sum');

describe('sum', () => {
  it('可以做加法', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
```

> 执行 npm run test

![](https://raw.githubusercontent.com/oldqin97/cloudImg/main/blogs/picture/20221119003509.png)

![文件构成](https://raw.githubusercontent.com/oldqin97/cloudImg/main/blogs/picture/20221119002642.png)
