/**
 * Problem: Find Deepest Max Element
 * Pattern: Recursion / DFS
 * Difficulty: Middle
 * Link: https://itlead.org/ua/problems/find-deepest-max-element
 *
 * Description:
 * Write a function that finds the maximum element in a nested array
 * and returns an object with its value and depth level.
 * Depth is indexed from 0 at the root array.
 * If the same maximum appears at different depths — return the deepest one.
 *
 * Example:
 * Input: [1, [2, [3]], 4]
 * Output: { value: 4, depth: 0 }
 * Explanation: 4 is max, found at depth 0
 *
 * Input: [1, [5, [5]]]
 * Output: { value: 5, depth: 2 }
 * Explanation: 5 appears at depth 1 and 2 — return deepest
 *
 * Input: [1, [2, [3]]]
 * Output: { value: 3, depth: 2 }
 *
 * Constraints:
 * - Traverse nested arrays tracking depth
 * - Find maximum value across all depths
 * - If same max at different depths — pick the deepest
 * - Return { value, depth }
 */

/**
 * @param {any[]} arr
 * @return {{ value: number, depth: number }}
 */
function findDeepestMax(arr) {
  const result = {
    value: -Infinity,
    depth: 0,
  };

  function flatten(deepArray, depth) {
    for (const el of deepArray) {
      if (Array.isArray(el)) {
        flatten(el, depth + 1);
      } else {
        if (el > result.value || (el === result.value && depth > result.depth)) {
          result.value = el;
          result.depth = depth;
        }
      }
    }
  }

  flatten(arr, result.depth);

  return result;
}

// Test cases
console.log(findDeepestMax([-1, [-2, [-3]]])); // {"value":-1,"depth":0}
console.log(findDeepestMax([1, [2, [3, 4], 5]])); // {"value":5,"depth":1}
console.log(findDeepestMax([1, [5, [5]]])); // { value: 5, depth: 2 }
console.log(findDeepestMax([1, [2, [3]]])); // { value: 3, depth: 2 }
