/**
 * Problem: Search Insert Position
 * Pattern: Binary Search
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/search-insert-position/
 *
 * Description:
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found. If not, return the index
 * where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums contains distinct values sorted in ascending order
 * - -10^4 <= target <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      left = mid;
      break;
    } else if (target >= nums[mid]) {
      left = mid + 1;
    } else if (target <= nums[mid]) {
      right = mid - 1;
    }
  }

  return left;
};

// Test cases
console.log(searchInsert([1, 3], 2)); // Expected: 1
console.log(searchInsert([1], 1)); // Expected: 0
console.log(searchInsert([1, 3, 5, 6], 0)); // Expected: 0
console.log(searchInsert([1, 3, 5, 6], 5)); // Expected: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Expected: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Expected: 4
