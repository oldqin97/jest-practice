## 编译 ts 文件

```js
yarn add -D typescript
npx tsc --init
```

> 创建了 tsconfig.json 文件, 完成了对 ts 的支持, Jest 本身不做转译，而是利用别的转译器的能力来转译。

```js
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

```js
yarn add -D ts-jest
```

> 编辑 jest.config.js 添加配置

```js
module.exports = {
  preset: 'ts-jest',
};
```

> 安装 jest 类型声明包

```js
yarn add -D @types/jest
```

> 编辑 tsconfig.json 添加配置

```js
{
  "compilerOptions": {
    "types": ["node", "jest"]
  }
}
```

---

### 测试 js 文件

> sum.ts

```js
const sum = (a: number, b: number) => {
  return a + b;
};

export default sum;
```

> sum.test.ts

```js
import sum from '../../src/utils/sum';

describe('sum ts', () => {
  it('sum.ts plus', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
```

> 执行 yarn run test

![](https://raw.githubusercontent.com/oldqin97/cloudImg/main/blogs/picture/20221119005429.png)

> 文件目录

![](https://raw.githubusercontent.com/oldqin97/cloudImg/main/blogs/picture/20221119005742.png)
