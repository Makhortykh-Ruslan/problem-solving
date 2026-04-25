/**
 * Problem: Flatten Array
 * Pattern: Recursion / DFS
 * Difficulty: Middle
 * Link: https://itlead.org/ua/problems/flatten-array
 *
 * Description:
 * Write a function that recursively flattens a nested array
 * of any depth into a single flat array.
 *
 * Example:
 * Input: [1, [2, 3], [4, [5, 6]]]
 * Output: [1, 2, 3, 4, 5, 6]
 *
 * Input: [1, [2, [3, [4, [5]]]]]
 * Output: [1, 2, 3, 4, 5]
 *
 * Input: []
 * Output: []
 *
 * Input: [1, 2, 3]
 * Output: [1, 2, 3]
 *
 * Constraints:
 * - Handle arrays of any nesting depth
 * - Preserve the order of elements
 * - Return a new array (do not mutate the original)
 * - Empty array returns empty array
 * - Works with non-numeric values as well
 */

/**
 * @param {any[]} arr
 * @return {any[]}
 */

function flattenArray(arr) {
  const result = [];

  function flatten(deepArray) {
    for (const el of deepArray) {
      if (Array.isArray(el)) {
        flatten(el);
      } else {
        result.push(el);
      }
    }
  }

  flatten(arr);

  return result;
}

// Test cases
console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1,2,3,4,5,6]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // [1,2,3,4,5]
console.log(flattenArray([])); // []
console.log(flattenArray([1, 2, 3])); // [1,2,3]
console.log(flattenArray(['a', ['b', ['c']]])); // ['a','b','c']
