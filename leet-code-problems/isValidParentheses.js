function isValidParentheses(value) {
  const stack = [];
  const hashSymbols = new Set(['(', '{', '[']);
  const dictionary = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (let el of value) {
    if (hashSymbols.has(el)) {
      stack.push(el);
    } else {
      const revers = dictionary.get(el);

      if (stack.pop() !== revers) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses('[()]'));
