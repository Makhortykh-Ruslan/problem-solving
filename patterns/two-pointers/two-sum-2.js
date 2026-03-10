/**
 * Problem: Two Sum II - Input Array Is Sorted
 * Pattern: Two Pointers
 * Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * Description:
 * Given a 1-indexed sorted array of integers,
 * find two numbers that add up to target.
 * Return their indices as [index1, index2].
 * Must use only O(1) extra space.
 *
 * Example:
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2]
 *
 * Input: numbers = [2, 3, 4], target = 6
 * Output: [1, 3]
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let leftPoint = 0;
  let rightPoint = numbers.length - 1;

  while (leftPoint < rightPoint) {
    const sum = numbers[leftPoint] + numbers[rightPoint];
    const result = sum === target;

    if (result) {
      return [leftPoint + 1, rightPoint + 1];
    }

    if (sum > target) {
      rightPoint--;
    }

    if (sum < target) {
      leftPoint++;
    }
  }
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [1, 2]
console.log(twoSum([2, 3, 4], 6)); // Expected output: [1, 3]
console.log(twoSum([-1, 0], -1)); // Expected output: [1, 2]
