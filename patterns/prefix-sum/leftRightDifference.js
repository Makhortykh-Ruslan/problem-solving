/**
 * Problem: Left and Right Sum Differences
 * Pattern: Prefix Sum
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/left-and-right-sum-differences/
 *
 * Description:
 * Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
 * - answer[i] = |leftSum[i] - rightSum[i]|
 * leftSum[i] is the sum of elements to the left of index i in the array nums.
 * rightSum[i] is the sum of elements to the right of index i in the array nums.
 * If there are no elements to the left/right of i, then leftSum[i] = 0 / rightSum[i] = 0.
 *
 * Example:
 * Input: nums = [10,4,8,3]
 * Output: [15,1,11,22]
 *
 * Input: nums = [1]
 * Output: [0]
 *
 * Constraints:
 * - 1 <= nums.length <= 1000
 * - 1 <= nums[i] <= 10^5
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = function (nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  let leftSum = 0;

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];

    result.push(Math.abs(leftSum - rightSum));
    leftSum += nums[i];
  }

  return result;
};

// Test cases
console.log(leftRightDifference([10, 4, 8, 3])); // Expected: [15,1,11,22]
console.log(leftRightDifference([1])); // Expected: [0]
