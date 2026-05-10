/**
 * Problem: Longest Harmonious Subsequence
 * Pattern: Hash Map / Frequency Count
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/longest-harmonious-subsequence/
 *
 * Description:
 * A harmonious array is an array where the difference between its maximum and minimum
 * value is exactly 1. Given an integer array nums, return the length of its longest
 * harmonious subsequence among all its possible subsequences.
 * A subsequence is derived from the array by deleting some elements without changing
 * the order of the remaining elements.
 *
 * Example 1:
 * Input: nums = [1,3,2,2,5,2,3,7]
 * Output: 5
 * Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: 2
 * Explanation: The longest harmonious subsequences are [1,2], [2,3], and [3,4],
 * all of which have a length of 2.
 *
 * Example 3:
 * Input: nums = [1,1,1,1]
 * Output: 0
 * Explanation: No harmonious subsequence exists.
 *
 * Constraints:
 * - 1 <= nums.length <= 2 * 10^4
 * - -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function (nums) {
  const hasMap = new Map();

  let result = 0;

  for (const el of nums) {
    hasMap.set(el, (hasMap.get(el) || 0) + 1);
  }

  for (const el of nums) {
    if (hasMap.has(el + 1)) {
      const sum = hasMap.get(el) + hasMap.get(el + 1);

      result = Math.max(result, sum);
    }
  }

  return result;
};

// Test cases
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0
