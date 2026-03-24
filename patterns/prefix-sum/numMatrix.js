/**
 * Problem: Range Sum Query 2D - Immutable
 * Pattern: Prefix Sum
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/range-sum-query-2d-immutable/
 *
 * Description:
 * Given a 2D matrix, handle multiple queries of the following type:
 * Calculate the sum of the elements inside the rectangle defined by
 * its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Example:
 * Input: matrix = [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]
 * sumRegion(2,1,4,3) → 8
 * sumRegion(1,1,2,2) → 11
 * sumRegion(1,2,2,4) → 12
 *
 * Constraints:
 * - m == matrix.length
 * - n == matrix[i].length
 * - 1 <= m, n <= 200
 */

class NumMatrix {
  constructor(matrix) {
    // your code here
  }

  sumRegion(row1, col1, row2, col2) {
    // your code here
  }
}

// Test cases
const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];
const numMatrix = new NumMatrix(matrix);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Expected: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Expected: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Expected: 12
