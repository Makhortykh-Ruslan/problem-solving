/**
 * Problem: Contains Duplicate
 * Pattern: HashMap
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/contains-duplicate/
 *
 * Description:
 * Given an integer array nums, return true if any value
 * appears at least twice in the array, and false if every
 * element is distinct.
 *
 * Example:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const hashMap = new Map();

  for (const el of nums) {
    hashMap.set(el, (hashMap.get(el) || 0) + 1);

    if (hashMap.get(el) > 1) {
      return true;
    }
  }

  return false;
};

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
