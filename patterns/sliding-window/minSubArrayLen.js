/**
 * Problem: Minimum Size Subarray Sum
 * Pattern: Sliding Window (Dynamic)
 * Link: https://leetcode.com/problems/minimum-size-subarray-sum/
 *
 * Description:
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a subarray whose sum is greater than
 * or equal to target. If there is no such subarray, return 0.
 *
 * Example:
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2 ([4,3])
 *
 * Input: target = 4, nums = [1,4,2,3]
 * Output: 1 ([4])
 *
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  let minLength = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      const length = right - left + 1;
      minLength = minLength === 0 ? length : Math.min(minLength, length);
      sum -= nums[left];
      left++;
    }
  }

  return minLength;
};

// Test cases
console.log(minSubArrayLen(6, [10, 2, 3])); // Expected: 1
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Expected: 2
console.log(minSubArrayLen(4, [1, 4, 2, 3])); // Expected: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Expected: 0
