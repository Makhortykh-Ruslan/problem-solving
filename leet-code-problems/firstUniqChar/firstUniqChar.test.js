const { firstUniqChar } = require('./firstUniqChar');

describe('firstUniqChar', () => {
  test('Should return index 0', () => {
    expect(firstUniqChar('leetcode')).toBe(0);
  });
  test('Should return index 2', () => {
    expect(firstUniqChar('loveleetcode')).toBe(2);
  });
  test('Should return index -1', () => {
    expect(firstUniqChar('aabb')).toBe(-1);
  });
});
