import objToSearchStr from 'utils/objToSearchStr';

test('objToSearchStr', () => {
  expect(
    objToSearchStr({
      a: '1',
      b: '2',
    }),
  ).toEqual('a=1&b=2');
});
