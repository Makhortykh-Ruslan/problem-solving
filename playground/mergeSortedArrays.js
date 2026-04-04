/**
 * Problem: Merge Two Sorted Arrays
 * Pattern: Two Pointers
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/merge-sorted-array/
 *
 * Description:
 * Given two sorted arrays nums1 and nums2, merge them into
 * one sorted array and return it.
 *
 * Example:
 * Input: nums1 = [1,3,5], nums2 = [2,4,6]
 * Output: [1,2,3,4,5,6]
 *
 * Input: nums1 = [1,2,3], nums2 = [4,5,6]
 * Output: [1,2,3,4,5,6]
 *
 * Constraints:
 * - 0 <= nums1.length, nums2.length <= 1000
 * - -10^4 <= nums1[i], nums2[i] <= 10^4
 * - Both arrays are sorted in non-decreasing order
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const mergeSortedArrays = function (nums1, nums2) {
  let left = 0;
  let right = 0;

  const result = [];

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      result.push(nums1[left]);
      left++;
    } else {
      result.push(nums2[right]);
      right++;
    }
  }

  while (left < nums1.length) {
    result.push(nums1[left]);
    left++;
  }

  while (right < nums2.length) {
    result.push(nums2[right]);
    right++;
  }

  return result;
};

// Test cases
console.log(mergeSortedArrays([1, 2, 3, 0, 0, 0], [2, 5, 6])); // Expected: [1,2,2,3,5,6]
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected: [1,2,3,4,5,6]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // Expected: [1,2,3,4,5,6]
console.log(mergeSortedArrays([], [1, 2, 3])); // Expected: [1,2,3]
console.log(mergeSortedArrays([1], [])); // Expected: [1]
