/**
 * Problem: Container With Most Water
 * Pattern: Two Pointers
 * Link: https://leetcode.com/problems/container-with-most-water/
 *
 * Description:
 * Given an integer array height of length n.
 * Find two lines that together with the x-axis form a container,
 * such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 *
 * Example:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 * Input: height = [1,1]
 * Output: 1
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (numbers) {
  let maxArea = 0;

  let leftPoint = 0;
  let rightPoint = numbers.length - 1;

  while (leftPoint < rightPoint) {
    const weight = rightPoint - leftPoint;
    const height = Math.min(numbers[leftPoint], numbers[rightPoint]);

    const squad = weight * height;

    if (squad > maxArea) {
      maxArea = squad;
    }

    if (numbers[leftPoint] < numbers[rightPoint]) {
      leftPoint++;
    } else {
      rightPoint--;
    }
  }

  return maxArea;
};

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected output: 49
console.log(maxArea([1, 1])); // Expected output: 1
