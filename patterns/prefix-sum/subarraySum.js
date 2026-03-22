/**
 * Problem: Subarray Sum Equals K
 * Pattern: Prefix Sum + HashMap
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/subarray-sum-equals-k/
 *
 * Description:
 * Given an array of integers nums and an integer k,
 * return the total number of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Example:
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 *
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 *
 * Constraints:
 * - 1 <= nums.length <= 2 * 10^4
 * - -1000 <= nums[i] <= 1000
 * - -10^7 <= k <= 10^7
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];

    if (sum === k) {
      count++;
    }

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};

// Test cases
console.log(subarraySum([1, 1, 1], 2)); // Expected: 2
console.log(subarraySum([1, 2, 3], 3)); // Expected: 2
