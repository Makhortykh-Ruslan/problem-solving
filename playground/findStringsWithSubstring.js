/**
 * Problem: Find Strings With Substring
 * Pattern: String Manipulation
 * Difficulty: Easy
 *
 * Description:
 * Given an array of strings and a substring,
 * return all strings that contain this substring.
 * Search is case-sensitive.
 *
 * Example:
 * Input: arr = ["hello","world","help","hi"], substring = "he"
 * Output: ["hello","help"]
 *
 * Input: arr = ["test","best","rest"], substring = "est"
 * Output: ["test","best","rest"]
 *
 * Constraints:
 * - Search is case-sensitive
 */

/**
 * @param {string[]} arr
 * @param {string} substring
 * @return {string[]}
 */
const findStringsWithSubstring = function (arr, substring) {
  const result = [];

  for (const el of arr) {
    let left = 0;
    let right = substring.length;

    while (left < el.length) {
      const window = el.substring(left, right);

      if (window === substring) {
        result.push(el);
        break;
      }
      left++;
      right++;
    }
  }

  return result;
};

// Test cases
console.log(findStringsWithSubstring(['hello'], 'l')); // Expected: ['hello']
console.log(findStringsWithSubstring(['hello', 'world', 'help', 'hi'], 'he')); // ["hello","help"]
console.log(findStringsWithSubstring(['test', 'best', 'rest'], 'est')); // ["test","best","rest"]
console.log(findStringsWithSubstring(['hello', 'world'], 'xyz')); // []
