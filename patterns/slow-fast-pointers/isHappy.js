/**
 * Problem: Happy Number
 * Pattern: Fast & Slow Pointers
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/happy-number/
 *
 * Description:
 * Write an algorithm to determine if a number n is happy.
 * A happy number is defined by the following process:
 * - Starting with any positive integer, replace the number by the sum
 *   of the squares of its digits.
 * - Repeat the process until the number equals 1 (happy) or it loops
 *   endlessly in a cycle (not happy).
 * - Numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 * Example:
 * Input: n = 19
 * Output: true
 * Explanation: 1² + 9² = 82 → 8² + 2² = 68 → 6² + 8² = 100 → 1² + 0² + 0² = 1
 *
 * Input: n = 2
 * Output: false
 *
 * Constraints:
 * - 1 <= n <= 2^31 - 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const hashMap = new Set();
  let transformToString = String(n);

  while (true) {
    let calculate = 0;

    for (let i = 0; i < transformToString.length; i++) {
      calculate = calculate + transformToString[i] * transformToString[i];
    }

    if (calculate === 1) {
      return true;
    }

    if (hashMap.has(calculate)) {
      return false;
    }

    transformToString = String(calculate);
    hashMap.add(calculate);
  }
};

// Test cases
console.log(isHappy(59)); // Expected: false
console.log(isHappy(19)); // Expected: true
console.log(isHappy(2)); // Expected: false
console.log(isHappy(1)); // Expected: true
