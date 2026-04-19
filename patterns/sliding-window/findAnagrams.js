/**
 * Problem: Find All Anagrams in a String
 * Pattern: Sliding Window + HashMap
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 *
 * Description:
 * Given two strings s and p, return an array of all the start
 * indices of p's anagrams in s. You may return the answer in any order.
 *
 * Example:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 *
 * Input: s = "abab", p = "ab"
 * Output: [0,1,2]
 *
 * Constraints:
 * - 1 <= s.length, p.length <= 3 * 10^4
 * - s and p consist of lowercase English letters
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const result = [];

  const pCount = new Map();
  const sCount = new Map();

  for (const char of p) {
    pCount.set(char, (pCount.get(char) || 0) + 1);
  }

  function areMapsEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (const [key, val] of map1) {
      if (map2.get(key) !== val) return false;
    }
    return true;
  }

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const charRight = s[right];
    sCount.set(charRight, (sCount.get(charRight) || 0) + 1);

    if (right - left + 1 > p.length) {
      const charLeft = s[left];
      if (sCount.get(charLeft) === 1) {
        sCount.delete(charLeft);
      } else {
        sCount.set(charLeft, sCount.get(charLeft) - 1);
      }
      left++;
    }

    if (right - left + 1 === p.length) {
      if (areMapsEqual(pCount, sCount)) {
        result.push(left);
      }
    }
  }

  return result;
};
// Test cases
console.log(findAnagrams('cbaebabacd', 'abc')); // [0,6]
console.log(findAnagrams('abab', 'ab')); // [0,1,2]
console.log(findAnagrams('aa', 'bb')); // []
