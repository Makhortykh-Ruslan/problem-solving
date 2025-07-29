const { greetUser } = require('./greet-user');
const { formatName } = require('./format-name');

jest.mock('./format-name', () => ({
  formatName: jest.fn(),
}));

describe('greetUser', () => {
  test('should return greeting with formatted name', () => {
    const user = { firstName: 'John', lastName: 'Doe' };

    formatName.mockReturnValue('John Doe');

    const result = greetUser(user);

    expect(formatName).toHaveBeenCalledWith('John', 'Doe');
    expect(result).toBe('Hello, John Doe!');
  });
});
