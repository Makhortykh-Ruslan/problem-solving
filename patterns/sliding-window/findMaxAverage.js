/**
 * Problem: Maximum Average Subarray I
 * Pattern: Sliding Window
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/maximum-average-subarray-i/
 *
 * Description:
 * You are given an integer array nums consisting of n elements,
 * and an integer k. Find a contiguous subarray whose length is
 * equal to k that has the maximum average value and return this value.
 *
 * Example:
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75  ([12,-5,-6,50] / 4 = 12.75)
 *
 * Input: nums = [5], k = 1
 * Output: 5.0
 *
 * Constraints:
 * - n == nums.length
 * - 1 <= k <= n <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return maxSum;
};

// Test cases
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5.0
console.log(findMaxAverage([0, 1, 1, 3, 3], 4)); // 2.0
