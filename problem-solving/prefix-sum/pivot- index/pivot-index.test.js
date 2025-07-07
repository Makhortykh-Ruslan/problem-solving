const { pivotIndex } = require('./pivot-index');

describe('pivotIndex', () => {
  test('Should be 3', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
  });

  test('Should be -1', () => {
    expect(pivotIndex([1, 2, 3])).toEqual(-1);
  });

  test('Should be 0', () => {
    expect(pivotIndex([2, 1, -1])).toEqual(0);
  });
});
