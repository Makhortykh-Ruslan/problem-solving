/**
 * Problem: Plus One
 * Pattern: Array
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/plus-one/
 *
 * Description:
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the i-th digit of the integer.
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Example:
 * Input: digits = [1,2,3]
 * Output: [1,2,4]  (123 + 1 = 124)
 *
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]  (4321 + 1 = 4322)
 *
 * Input: digits = [9]
 * Output: [1,0]  (9 + 1 = 10)
 *
 * Constraints:
 * - 1 <= digits.length <= 100
 * - 0 <= digits[i] <= 9
 * - digits does not contain any leading 0's
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  const result = [];

  let temp = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + temp;
    const del = sum % 10;
    temp = Math.floor(sum / 10);
    result.unshift(del);
  }

  if (temp > 0) {
    result.unshift(temp);
  }
  return result;
};

// Test cases
console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([9, 9, 9])); // [1,0,0,0]
