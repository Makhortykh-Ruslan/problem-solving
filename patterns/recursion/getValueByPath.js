/**
 * Problem: Get Value By Path
 * Pattern: Object Traversal / Recursion
 * Difficulty: Middle
 * Link: https://itlead.org/ua/problems/get-value-by-path
 *
 * Description:
 * Write a function that accepts an object and a path string
 * in dot-notation and returns the value at that path.
 * If the path does not exist, return undefined.
 *
 * Example:
 * Input: obj = { a: { b: { c: 42 } } }, path = "a.b.c"
 * Output: 42
 *
 * Input: obj = { a: { b: 1 } }, path = "a.x.c"
 * Output: undefined
 *
 * Input: obj = {}, path = "a.b"
 * Output: undefined
 *
 * Constraints:
 * - Path is a string separated by dots (e.g. "a.b.c")
 * - Navigate through nested objects by path
 * - Return undefined for non-existing paths
 * - Path through null returns undefined
 * - Empty object with any path returns undefined
 */

/**
 * @param {object} obj
 * @param {string} path
 * @return {any}
 */
function getValueByPath(obj, path) {}

// Test cases
console.log(getValueByPath({ a: { b: { c: 42 } } }, 'a.b.c')); // 42
console.log(getValueByPath({ a: { b: 1 } }, 'a.x.c')); // undefined
console.log(getValueByPath({}, 'a.b')); // undefined
console.log(getValueByPath({ a: null }, 'a.b')); // undefined
console.log(getValueByPath({ a: 1 }, 'a')); // 1
