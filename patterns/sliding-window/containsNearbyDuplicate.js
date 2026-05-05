/**
 * Problem: Contains Duplicate II
 * Pattern: Sliding Window / Hash Map (Tracking last seen index)
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/contains-duplicate-ii/
 *
 * Description:
 * Given an integer array nums and an integer k, return true if there are two
 * distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 *
 * Example 1:
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 *
 * Example 3:
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 * - 0 <= k <= 10^5
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const seenMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (seenMap.has(currentNum) && i - seenMap.get(currentNum) <= k) {
      return true;
    }

    seenMap.set(currentNum, i);
  }

  return false;
};

// Test cases
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
