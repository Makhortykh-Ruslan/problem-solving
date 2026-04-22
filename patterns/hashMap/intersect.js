/**
 * Problem: Intersection of Two Arrays II
 * Pattern: HashMap
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/intersection-of-two-arrays-ii/
 *
 * Description:
 * Given two integer arrays nums1 and nums2, return an array of their
 * intersection. Each element in the result must appear as many times
 * as it shows in both arrays. The result can be in any order.
 *
 * Example:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 *
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 *
 * Constraints:
 * - 1 <= nums1.length, nums2.length <= 1000
 * - 0 <= nums1[i], nums2[i] <= 1000
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const hashMap = new Map();

  for (const el of nums1) {
    hashMap.set(el, (hashMap.get(el) || 0) + 1);
  }

  const result = [];

  for (const el of nums2) {
    const count = hashMap.get(el);
    if (count > 0) {
      result.push(el);
      hashMap.set(el, count - 1);
    }
  }

  return result;
};

// Test cases
console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
console.log(intersect([1], [1])); // [1]
console.log(intersect([1], [2])); // []
