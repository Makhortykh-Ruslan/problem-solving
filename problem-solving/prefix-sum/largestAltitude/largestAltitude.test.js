const { largestAltitude } = require('./largestAltitude');

describe('largestAltitude', () => {
  test('Should be 1', () => {
    expect(largestAltitude([-5, 1, 5, 0, -7])).toEqual(1);
  });
  test('Should be 1', () => {
    expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toEqual(0);
  });
});
