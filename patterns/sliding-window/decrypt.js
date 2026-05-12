/**
 * Problem: Defuse the Bomb
 * Pattern: Circular Array / Sliding Window
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/defuse-the-bomb/
 *
 * Description:
 * You have a circular array code and a key k.
 * Replace every number in the array by the following rules:
 * - If k > 0: replace with the sum of the next k numbers
 * - If k < 0: replace with the sum of the previous k numbers
 * - If k == 0: replace with 0
 * The array is circular — after the last element comes the first.
 *
 * Example 1:
 * Input: code = [5,7,1,4], k = 3
 * Output: [12,10,16,13]
 * Explanation: Each number is replaced by the sum of the next 3 numbers.
 * [7+1+4, 1+4+5, 4+5+7, 5+7+1]
 *
 * Example 2:
 * Input: code = [1,2,3,4], k = 0
 * Output: [0,0,0,0]
 * Explanation: When k is zero, all numbers are replaced with 0.
 *
 * Example 3:
 * Input: code = [2,4,9,3], k = -2
 * Output: [12,5,6,13]
 * Explanation: Each number is replaced by the sum of the previous 2 numbers.
 * [3+9, 2+3, 4+2, 9+4]
 *
 * Constraints:
 * - n == code.length
 * - 1 <= n <= 100
 * - 1 <= code[i] <= 100
 * - -(n - 1) <= k <= n - 1
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {};

// Test cases
console.log(decrypt([5, 7, 1, 4], 3)); // [12,10,16,13]
console.log(decrypt([1, 2, 3, 4], 0)); // [0,0,0,0]
console.log(decrypt([2, 4, 9, 3], -2)); // [12,5,6,13]
