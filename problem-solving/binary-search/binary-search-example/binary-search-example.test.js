const { binarySearchExample } = require('./binary-search-example');

describe('Binary Search Example', () => {
  test('Should return an index 6', () => {
    expect(binarySearchExample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toEqual(6);
  });
  test('Should return -1', () => {
    expect(binarySearchExample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 16)).toEqual(
      -1
    );
  });
  test('Should return 0', () => {
    expect(binarySearchExample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toEqual(0);
  });
  test('Should return 9', () => {
    expect(binarySearchExample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toEqual(9);
  });
  test('Should return empty array', () => {
    expect(binarySearchExample([], -1)).toEqual(-1);
  });
  test('Should return 2', () => {
    expect(binarySearchExample([1, 2, 2, 2, 3], 2)).toEqual(2);
  });
  test('Should return 0 for single-element array when found', () => {
    expect(binarySearchExample([5], 5)).toEqual(0);
  });
  test('Should return -1 for single-element array when not found', () => {
    expect(binarySearchExample([5], 2)).toEqual(-1);
  });
});
