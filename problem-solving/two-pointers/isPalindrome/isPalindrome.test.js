const { isPalindrome } = require('./isPalindrome');

describe('isPalindrome', () => {
  test('should return true for "A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('should return false for "race a car"', () => {
    expect(isPalindrome('race a car')).toEqual(false);
  });
});
