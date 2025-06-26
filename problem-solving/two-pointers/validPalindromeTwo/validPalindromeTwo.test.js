const { validPalindromeTwo } = require('./validPalindromeTwo');

describe('validPalindromeTwo', () => {
  test('should return true for single deletion making it palindrome', () => {
    expect(validPalindromeTwo('abca')).toBe(true);
  });

  test('should return false if no way to form palindrome with one deletion', () => {
    expect(validPalindromeTwo('abc')).toBe(false);
  });

  test('should return true for long valid palindrome after one removal', () => {
    expect(validPalindromeTwo('eeccccbebaeeabebccceea')).toBe(true);
  });
});
