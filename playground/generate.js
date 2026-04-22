/**
 * Problem: Pascal's Triangle
 * Pattern: Array / Simulation
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/pascals-triangle/
 *
 * Description:
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers above it.
 *
 * Example:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * Input: numRows = 1
 * Output: [[1]]
 *
 * Constraints:
 * - 1 <= numRows <= 30
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [1];
    const prev = result[i - 1];

    if (i === 0) {
      result.push([1]);
      continue;
    }

    for (let j = 0; j < result.length - 1; j++) {
      row.push(prev[j] + prev[j + 1]);
    }

    row.push(1);
    result.push(row);
  }

  return result;
};

// Test cases
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
console.log(generate(2)); // [[1],[1,1]]
