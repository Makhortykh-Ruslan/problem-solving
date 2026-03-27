/**
 * Problem: Sqrt(x)
 * Pattern: Binary Search
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/sqrtx/
 *
 * Description:
 * Given a non-negative integer x, return the square root of x rounded down
 * to the nearest integer. The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 *
 * Example:
 * Input: x = 4
 * Output: 2
 *
 * Input: x = 8
 * Output: 2 (sqrt(8) = 2.82..., rounded down = 2)
 *
 * Constraints:
 * - 0 <= x <= 2^31 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let left = 0;
  let right = x;

  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const compare = mid * mid;

    if (compare === x) {
      result = mid;

      break;
    } else if (compare < x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

// Test cases
console.log(mySqrt(4)); // Expected: 2
console.log(mySqrt(8)); // Expected: 2
console.log(mySqrt(0)); // Expected: 0
console.log(mySqrt(1)); // Expected: 1
