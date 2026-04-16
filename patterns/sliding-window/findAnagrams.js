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
  // your solution here
};

// Test cases
console.log(findAnagrams('cbaebabacd', 'abc')); // [0,6]
console.log(findAnagrams('abab', 'ab')); // [0,1,2]
console.log(findAnagrams('aa', 'bb')); // []
