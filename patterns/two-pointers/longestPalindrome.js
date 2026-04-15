/**
 * Problem: Longest Palindromic Substring
 * Pattern: String Manipulation / Two Pointers
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Description:
 * Given a string s, return the longest palindromic substring in s.
 * A string is palindromic if it reads the same forward and backward.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 * - 1 <= s.length <= 1000
 * - s consists of only digits and English letters.
 */

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  // Твій код тут
};

// Test cases
console.log(longestPalindrome('babad')); // "bab" або "aba"
console.log(longestPalindrome('cbbd')); // "bb"
console.log(longestPalindrome('a')); // "a"
console.log(longestPalindrome('ac')); // "a" (або "c")
