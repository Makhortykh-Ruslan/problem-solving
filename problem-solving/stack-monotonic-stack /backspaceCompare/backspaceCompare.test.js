const { backspaceCompare } = require('./backspaceCompare');

describe('backspaceCompare', () => {
  test('Should be true with s =  "ab#c", t = ad#c', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBe(true);
  });
  test('Should be false with s = "a#c", t = "b"', () => {
    expect(backspaceCompare('a#c', 'b')).toBe(false);
  });
  test('Should be true with s =  "a##c", t = #a#c', () => {
    expect(backspaceCompare('a##c', '#a#c')).toBe(true);
  });
});
