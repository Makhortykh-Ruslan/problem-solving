/**
 * Problem: Two Sum
 * Pattern: HashMap
 * Link: https://leetcode.com/problems/two-sum/
 *
 * Description:
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 *
 * Input: nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }

    hashMap.set(num, i);
  }
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected output: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected output: [0, 1]
