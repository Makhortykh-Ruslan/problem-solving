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
// const merge = function (nums1, m, nums2, n) {
//   let p1 = m - 1;
//   let p2 = n - 1;
//   let lastP = m + n - 1;
//
//   while (p2 >= 0) {
//     if (p1 < 0) {
//       nums1[lastP] = nums2[p2];
//       p2--;
//       lastP--;
//     } else if (nums1[p1] < nums2[p2]) {
//       nums1[lastP] = nums2[p2];
//       p2--;
//       lastP--;
//     } else if (nums1[p1] >= nums2[p2]) {
//       nums1[lastP] = nums1[p1];
//       p1--;
//       lastP--;
//     }
//   }
//
//   return nums1;
// };

const merge = function (nums1, m, nums2, n) {
  let right = m;

  for (let i = 0; i < nums2.length; i++) {
    nums1[right] = nums2[i];
    right++;
  }

  nums1.sort((a, b) => a - b);

  return nums1;
};

// Test cases
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
