const { formatName } = require('./format-name');

function greetUser(user) {
  const name = formatName(user.firstName, user.lastName);
  return `Hello, ${name}!`;
}

module.exports = { greetUser };
