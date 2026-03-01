/**
 * Problem: Two Sum II - Input Array Is Sorted
 * Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * Description:
 * Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific `target` number.
 * Return the indices of the two numbers (index1 and index2) as an integer array [index1, index2] of length 2.
 * You may not use the same element twice.
 * Your solution must use only O(1) extra space.
 *
 * Example:
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2]
 * Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  // Your solution here
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [1, 2]
console.log(twoSum([2, 3, 4], 6)); // Expected output: [1, 3]
console.log(twoSum([-1, 0], -1)); // Expected output: [1, 2]
