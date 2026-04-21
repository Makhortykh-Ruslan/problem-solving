/**
 * Problem: Merge Sorted Array
 * Pattern: Two Pointers
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/merge-sorted-array/
 *
 * Description:
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 * order, and two integers m and n, representing the number of elements in
 * nums1 and nums2 respectively. Merge nums2 into nums1 as one sorted array.
 * The final sorted array should be stored inside nums1 in-place.
 *
 * Example:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 *
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 *
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 *
 * Constraints:
 * - nums1.length == m + n
 * - nums2.length == n
 * - 0 <= m, n <= 200
 * - -10^9 <= nums1[i], nums2[i] <= 10^9
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
const merge = function (nums1, m, nums2, n) {};

// Test cases
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6]
merge([1], 1, [], 0); // [1]
merge([0], 0, [1], 1); // [1]
