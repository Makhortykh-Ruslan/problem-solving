const { runningSum } = require('./running-sum');

describe('runningSum', () => {
  test('Should be [1, 3, 6, 10]', () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  test('Should be [1,1,1,1,1]', () => {
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('Should be [3,1,2,10,1]', () => {
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
  });
});
