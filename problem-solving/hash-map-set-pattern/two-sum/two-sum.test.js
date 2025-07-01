const { twoSum } = require('./two-sum');

describe("twoSum basic case'", () => {
  test('Case 1 should return [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test('Case 2 should return [2, 3]', () => {
    expect(twoSum([10, 20, 8, 13, 1, 3], 21)).toEqual([2, 3]);
  });
  test('Case 3 should return [0, 1]', () => {
    expect(twoSum([9, 9], 18)).toEqual([0, 1]);
  });
});
