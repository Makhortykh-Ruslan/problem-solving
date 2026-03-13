/**
 * Problem: 3Sum
 * Pattern: Two Pointers
 * Link: https://leetcode.com/problems/3sum/
 *
 * Description:
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k,
 * and nums[i] + nums[j] + nums[k] == 0.
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 * Input: nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 * Input: nums = [0, 0, 0]
 * Output: [[0, 0, 0]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const sortedNums = nums.toSorted((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] > 0) break;
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const total = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (total > 0) {
        right--;
      } else if (total < 0) {
        left++;
      } else {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;
        while (left < right && sortedNums[left] === sortedNums[left - 1]) left++;
        while (left < right && sortedNums[right] === sortedNums[right + 1]) right--;
      }
    }
  }

  return result;
};

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0])); // Expected: [[0,0,0]]
console.log(threeSum([0, 1, 1])); // Expected: []
