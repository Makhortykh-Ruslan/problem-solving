/**
 * Problem: Top K Frequent Elements
 * Pattern: HashMap + Sorting
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Description:
 * Given an integer array nums and an integer k, return the k most
 * frequent elements. You may return the answer in any order.
 *
 * Example:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * - k is in the range [1, the number of unique elements in the array]
 * - The answer is unique
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const hashMap = new Map();

  for (const el of nums) {
    hashMap.set(el, (hashMap.get(el) || 0) + 1);
  }

  return [...hashMap.entries()]
    .toSorted((a, b) => b[1] - a[1])
    .map((el) => el[0])
    .slice(0, k);
};

// Test cases
console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 1)); // [1]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // [2,-1]
console.log(topKFrequent([3, 0, 1, 0], 1)); // [0]
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1, 2], 2)); // [1,2]
console.log(topKFrequent([4, 4, 4, 6, 6, 7], 1)); // [4]
