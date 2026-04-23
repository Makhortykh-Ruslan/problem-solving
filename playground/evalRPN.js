/**
 * Problem: Evaluate Reverse Polish Notation
 * Pattern: Stack
 * Difficulty: Middle
 * Link: https://itlead.org/ua/problems/reverse-polish-notation
 *
 * Description:
 * Напишіть функцію, яка обчислює арифметичний вираз у Зворотній
 * Польській Нотації (постфіксна нотація).
 * Вхід — масив рядкових токенів.
 *
 * Example:
 * Input: ["2", "1", "+", "3", "*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 * Input: ["4", "13", "5", "/", "+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 *
 * Input: ["10"]
 * Output: 10
 *
 * Constraints:
 * - Допустимі оператори: +, -, *, /
 * - Ділення округлюється до нуля: 7/2=3, -7/2=-3
 * - Одне число повертає саме себе
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const symbols = ['+', '*', '/', '-'];
  const stack = [];

  for (const el of tokens) {
    if (symbols.includes(el)) {
      let sum = 0;

      const leftEl = stack.pop();
      const rightEl = stack.pop();

      switch (el) {
        case '+': {
          sum = leftEl + rightEl;
          break;
        }
        case '*': {
          sum = leftEl * rightEl;
          break;
        }
        case '-': {
          sum = rightEl - leftEl;
          break;
        }
        case '/': {
          sum = Math.trunc(rightEl / leftEl);
        }
      }

      stack.push(sum);
    } else {
      stack.push(+el);
    }
  }

  return stack.at(-1);
}

// Test cases
console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(evalRPN(['10'])); // 10
console.log(evalRPN(['2', '1', '-'])); // 1
