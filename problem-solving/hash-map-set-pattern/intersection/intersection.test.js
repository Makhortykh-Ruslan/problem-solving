const { intersection } = require('./intersection');

describe('intersection', () => {
  test('Should return [2]', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  });

  test('Should return [123]', () => {
    expect(intersection([3, 5, 4, 10, 123], [123])).toEqual([123]);
  });
});
