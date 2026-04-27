/**
 * Problem: Longest Common Prefix
 * Pattern: String
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/longest-common-prefix/
 *
 * Description:
 * Write a function to find the longest common prefix string
 * amongst an array of strings. If there is no common prefix,
 * return an empty string "".
 *
 * Example:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 * Input: strs = ["a"]
 * Output: "a"
 *
 * Constraints:
 * - 1 <= strs.length <= 200
 * - 0 <= strs[i].length <= 200
 * - strs[i] consists of only lowercase English letters
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  const sortedData = strs.sort();
  const firstWord = sortedData[0];
  const lastWord = sortedData[sortedData.length - 1];

  let i = 0;

  while (i < firstWord.length && firstWord[i] === lastWord[i]) {
    i++;
  }

  return firstWord.substring(0, i);
}

// Test cases
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
console.log(longestCommonPrefix(['a'])); // "a"
console.log(longestCommonPrefix(['ab', 'a'])); // "a"
