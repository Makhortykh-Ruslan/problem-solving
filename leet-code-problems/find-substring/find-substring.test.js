const { findSubstring } = require('./find-substring');

describe('find substring', () => {
  test('Should search "cat" in "the cat sat on the mat"', () => {
    expect(findSubstring('the cat sat on the mat', 'cat')).toBe('cat');
  });
  test('Should search "on" in "the cat sat on the mat"', () => {
    expect(findSubstring('the cat sat on the mat', 'on')).toBe('on');
  });
  test('Should search "dog" in "the cat sat on the mat"', () => {
    expect(findSubstring('the cat sat on the mat', 'dog')).toBe('');
  });
});
