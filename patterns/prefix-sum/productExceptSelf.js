/**
 * Problem: Product of Array Except Self
 * Pattern: Prefix Sum
 * Difficulty: Medium (але вирішимо!)
 * Link: https://leetcode.com/problems/product-of-array-except-self/
 *
 * Description:
 * Given an integer array nums, return an array answer such that
 * answer[i] is equal to the product of all the elements of nums except nums[i].
 * You must write an algorithm that runs in O(n) time and
 * without using the division operation.
 *
 * Example:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 * Constraints:
 * - 2 <= nums.length <= 10^5
 * - -30 <= nums[i] <= 30
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let left = 0;

    let sum = 1;

    while (left < nums.length) {
      if (left !== i) {
        sum *= nums[left];
      }

      left++;
    }

    result[i] = sum || 0;
  }

  return result;
};

// Test cases
console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Expected: [0,0,9,0,0]
