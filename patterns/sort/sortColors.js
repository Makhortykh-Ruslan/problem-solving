/**
 * Problem: Sort Colors
 * Pattern: Сounting sort
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/sort-colors/
 *
 * Description:
 * Given an array nums with n objects colored red, white, or blue,
 * represented by integers 0, 1, and 2, sort them in-place so that
 * objects of the same color are adjacent, in the order 0, 1, 2.
 * You must solve this without using the library's sort function.
 *
 * Example:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 *
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 300
 * - nums[i] is either 0, 1, or 2
 * - Must solve in-place without sort()
 */

/**
 * @param {number[]} nums
 * @return {void}
 */
function sortColors(nums) {
  const dictionary = nums.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : (acc[el] = 1);

    return acc;
  }, {});

  nums.length = 0;
  for (const el in dictionary) {
    let left = 0;
    while (left < dictionary[el]) {
      nums.push(+el);
      left++;
    }
  }

  return nums;
}

// Test cases
console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // [0,1,2]
console.log(sortColors([0])); // [0]
