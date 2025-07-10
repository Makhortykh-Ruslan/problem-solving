const { searchInsert } = require('./search-insert');

describe('Search insert', () => {
  test('Should return an index 2', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
  });
  test('Should return an index 1', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
  });
  test('Should return an index 4', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
  });
  test('Should return index 0 when target is less than all', () => {
    expect(searchInsert([1, 3, 5, 6], -5)).toEqual(0);
  });
  test('Should return 0 for empty array', () => {
    expect(searchInsert([], 10)).toEqual(0);
  });
});
