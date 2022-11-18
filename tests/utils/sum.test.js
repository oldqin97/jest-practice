const sum = require('../../src/utils/sum');

describe('sum', () => {
  it('sum.js plus', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
