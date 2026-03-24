/**
 * Problem: Binary Search
 * Pattern: Binary Search
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/binary-search/
 *
 * Description:
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 *
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 < nums[i], target < 10^4
 * - All the integers in nums are unique
 * - nums is sorted in ascending order
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let result = -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      result = mid;

      break;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
  }

  return result;
};

// Test cases
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // Expected: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // Expected: -1
