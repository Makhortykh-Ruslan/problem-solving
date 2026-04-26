/**
 * Problem: Fibonacci Number
 * Pattern: Recursion / Dynamic Programming
 * Difficulty: Junior
 * Link: https://leetcode.com/problems/fibonacci-number/
 *
 * Description:
 * Given n, return the nth Fibonacci number.
 * The Fibonacci sequence starts with F(0) = 0, F(1) = 1,
 * and every subsequent number is the sum of the two preceding ones:
 * F(n) = F(n-1) + F(n-2)
 *
 * Example:
 * Input: n = 0
 * Output: 0
 *
 * Input: n = 1
 * Output: 1
 *
 * Input: n = 6
 * Output: 8
 *
 * Constraints:
 * - F(0) = 0, F(1) = 1
 * - For n > 1: F(n) = F(n-1) + F(n-2)
 */

/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

// Test cases
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(6)); // 8
console.log(fib(10)); // 55
