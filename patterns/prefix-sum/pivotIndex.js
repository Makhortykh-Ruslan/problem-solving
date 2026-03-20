/**
 * Problem: Find Pivot Index
 * Pattern: Prefix Sum
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/find-pivot-index/
 *
 * Description:
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly
 * to the left of the index is equal to the sum of all the numbers strictly
 * to the right of the index.
 * If the index is on the left edge of the array, then the left sum is 0.
 * If no such index exists, return -1.
 * If there are multiple pivot indexes, return the left-most pivot index.
 *
 * Example:
 * Input: nums = [1,7,3,6,5,6]
 * Output: 3
 *
 * Input: nums = [1,2,3]
 * Output: -1
 *
 * Input: nums = [2,1,-1]
 * Output: 0
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -1000 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  let leftSum = 0;
  let index = -1;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];

    if (rightSum === leftSum) {
      index = i;
      break;
    }

    leftSum += nums[i];
  }

  return index;
};

// Test cases
console.log(pivotIndex([0, 0])); // Expected: 0
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Expected: 3
console.log(pivotIndex([1, 2, 3])); // Expected: -1
console.log(pivotIndex([2, 1, -1])); // Expected: 0
