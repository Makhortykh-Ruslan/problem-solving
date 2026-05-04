/**
 * Problem: Max Consecutive Ones III
 * Pattern: Sliding Window
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/max-consecutive-ones-iii/
 *
 * Description:
 * Given a binary array nums and an integer k, return the maximum
 * number of consecutive 1's in the array if you can flip at most k 0's.
 *
 * Example:
 * Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
 * Output: 6  (flip two 0's at index 3 and 4)
 *
 * Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,1], k = 3
 * Output: 10
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - nums[i] is either 0 or 1
 * - 0 <= k <= nums.length
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let maxResult = 0;

  let left = 0;
  let right = 0;

  let zeroCount = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    if (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }

      left++;
    }

    const length = right - left + 1;
    maxResult = Math.max(maxResult, length);

    right++;
  }

  return maxResult;
};

// Test cases
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(longestOnes([1, 1, 1], 0)); // 3
console.log(longestOnes([0, 0, 0], 0)); // 0
console.log(longestOnes([0, 0, 0], 3)); // 3
