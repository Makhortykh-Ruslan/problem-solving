const { isValid } = require('./isValid');

describe('isValid', () => {
  test('Should be true "()"', () => {
    expect(isValid('()')).toBe(true);
  });
  test('Should be true "()[]{}"', () => {
    expect(isValid('()[]{}')).toBe(true);
  });
  test('Should be false "(]"', () => {
    expect(isValid('(]')).toBe(false);
  });
});
