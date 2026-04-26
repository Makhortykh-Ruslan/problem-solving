/**
 * Problem: Valid Parentheses
 * Pattern: Stack
 * Difficulty: Middle
 * Link: https://leetcode.com/problems/valid-parentheses/
 *
 * Description:
 * Given a string s containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 * A string is valid if open brackets are closed by the same type of
 * brackets and in the correct order.
 *
 * Example:
 * Input: s = "()"
 * Output: true
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 * Input: s = "(]"
 * Output: false
 *
 * Input: s = "([)]"
 * Output: false
 *
 * Constraints:
 * - Only '(', ')', '{', '}', '[', ']' characters
 * - Open brackets must be closed by the same type
 * - Open brackets must be closed in the correct order
 * - Every close bracket has a corresponding open bracket
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const hashSymbols = new Set(['(', '{', '[']);
  const dictionary = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (let i = 0; i < s.length; i++) {
    const el = s[i];

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

// Test cases
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('')); // true
