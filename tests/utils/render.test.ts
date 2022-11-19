import renderHtml from 'utils/testDom';

test('DOM Testing', () => {
  renderHtml();
  expect(document.querySelector('h1')?.innerHTML).toBe('Hello World');
});
