const { twoSum } = require('./twoSum');

describe('twoSum', () => {
  test('should return a correct pair', () => {
    expect(twoSum([1, 2, 3, 4, 6], 6)).toEqual([2, 4]);
  });

  test('should return empty array if no pair exists', () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });

  test('should handle multiple same values', () => {
    expect(twoSum([1, 1, 2, 2, 3, 3], 4)).toEqual([1, 3]);
  });

  test('should work with negative numbers', () => {
    expect(twoSum([-3, -1, 0, 2, 4], 1)).toEqual([-1, 2]);
  });

  test('should return first valid pair in sorted array', () => {
    expect(twoSum([1, 2, 3, 4, 4, 5], 8)).toEqual([3, 5]);
  });
});
