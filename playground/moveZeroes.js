/**
 * Problem: Move Zeroes
 * Pattern: Two Pointers
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/move-zeroes/
 *
 * Description:
 * Given an integer array nums, move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 * You must do this in-place without making a copy of the array.
 *
 * Example:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Input: nums = [0]
 * Output: [0]
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -2^31 <= nums[i] <= 2^31 - 1
 */

/**
 * @param {number[]} nums
 * @return {void} (modify nums in-place)
 */
const moveZeroes = function (nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
  }

  return nums;
};

// Test cases
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([1, 0, 0, 2, 3])); // [1,2,3,0,0]
