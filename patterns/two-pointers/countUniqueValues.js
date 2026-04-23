/**
 * Problem: Count Unique Values
 * Pattern: Two Pointers
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted array of integers, count the number of unique values.
 * The array can have negative numbers. The array is always sorted.
 *
 * Example:
 * Input: [1, 1, 1, 1, 1, 2]
 * Output: 2
 *
 * Input: [-2, -1, -1, 0, 1]
 * Output: 4
 *
 * Input: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
 * Output: 7
 *
 * Input: []
 * Output: 0
 *
 * Constraints:
 * - Array is always sorted in non-decreasing order
 * - Can contain negative numbers
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
const countUniqueValues = function (arr) {
  let left = 0;
  let right = 1;

  let count = arr.length > 0 ? 1 : 0;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      count++;
      left = right;
    }

    right++;
  }

  return count;
};

// Test cases
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
