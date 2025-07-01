const { containsDuplicate } = require('./contains-duplicate');

describe('containsDuplicate', () => {
  test('Should return true if array contains duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 4, 1])).toBe(true);
  });

  test('Should return false if array contains duplicates', () => {
    expect(containsDuplicate([11, 12, 13, 15, 22])).toBe(false);
  });

  test('Should return true if array contains duplicates', () => {
    expect(containsDuplicate([1, 1, 1, 2, 2, 3, 3])).toBe(true);
  });
});
