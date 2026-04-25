/**
 * Problem: Maximum Subarray Sum
 * Pattern: Sliding Window
 * Difficulty: Middle
 * Link: https://itlead.org/ua/problems/max-subarray-sum
 *
 * Description:
 * Write a function that finds the maximum sum of n consecutive
 * elements in an array. Return null if the array is shorter
 * than n or empty. Works with negative numbers.
 *
 * Example:
 * Input: arr = [1, 2, 5, 2, 8, 1, 5], n = 2
 * Output: 10
 *
 * Input: arr = [1, 2, 5, 2, 8, 1, 5], n = 4
 * Output: 17
 *
 * Input: arr = [-1, -2, -3, -4], n = 2
 * Output: -3
 *
 * Input: arr = [1, 2], n = 4
 * Output: null
 *
 * Constraints:
 * - Find contiguous subarray of length n with max sum
 * - Return null if arr.length < n or arr is empty
 * - Works with negative numbers
 */

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number | null}
 */
function maxSubarraySum(arr, n) {
  if (arr.length < n || !arr.length) {
    return null;
  }

  let maxSum = -Infinity;
  let stratSum = 0;

  for (let i = 0; i < n; i++) {
    stratSum += arr[i];
  }

  maxSum = Math.max(maxSum, stratSum);

  let left = 0;
  let right = n;

  while (right < arr.length) {
    stratSum = stratSum - arr[left] + arr[right];

    maxSum = Math.max(maxSum, stratSum);
    left++;
    right++;
  }

  return maxSum;
}

// Test cases
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([-1, -2, -3, -4], 2)); // -3
console.log(maxSubarraySum([1, 2], 4)); // null
console.log(maxSubarraySum([], 2)); // null
