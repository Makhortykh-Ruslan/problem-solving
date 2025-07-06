function isValid(value) {
  const stack = [];
  const openBrackets = new Set(['(', '{', '[']);
  const bracketMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (let el of value) {
    if (openBrackets.has(el)) {
      stack.push(el);
    } else {
      if (stack.length === 0) return false;

      const revers = bracketMap.get(el);

      if (stack.pop() !== revers) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = { isValid };
