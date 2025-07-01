const { isIsomorphic } = require('./isIsomorphic');

describe('isIsomorphic', () => {
  test('Should return true for isomorphic strings: "egg" → "add"', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
  });

  test('Should return true for isomorphic strings: "paper" → "title"', () => {
    expect(isIsomorphic('paper', 'title')).toBe(true);
  });

  test('Should return true for identical strings: "abc" → "abc"', () => {
    expect(isIsomorphic('abc', 'abc')).toBe(true);
  });

  test('Should return false when same char maps to multiple: "foo" → "bar"', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false); // o → a, o → r — конфлікт
  });

  test('Should return false when different chars map to same: "ab" → "aa"', () => {
    expect(isIsomorphic('ab', 'aa')).toBe(false); // a → a, b → a — конфлікт
  });

  test('Should return false for different lengths', () => {
    expect(isIsomorphic('abc', 'de')).toBe(false);
  });
});
