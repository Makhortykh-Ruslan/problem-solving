const { removeDuplicates } = require('./removeDuplicates');

describe('removeDuplicates', () => {
  test('Should be ca', () => {
    expect(removeDuplicates('abbaca')).toBe('ca');
  });
  test('Should be ay', () => {
    expect(removeDuplicates('azxxzy')).toBe('ay');
  });
});
