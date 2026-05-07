/**
 * Problem: Longest Substring with At Least K Repeating Characters
 * Pattern: Divide and Conquer / Sliding Window (with unique chars constraint)
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 *
 * Description:
 * Given a string s and an integer k, return the length of the longest substring of s
 * such that the frequency of each character in this substring is greater than or equal to k.
 * if no such substring exists, return 0.
 *
 * Example 1:
 * Input: s = "aaabb", k = 3
 * Output: 3
 * Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
 *
 * Example 2:
 * Input: s = "ababbc", k = 2
 * Output: 5
 * Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 *
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s consists of only lowercase English letters.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function (s, k) {};

// Test cases
console.log(longestSubstring('aaabbb', 3)); // 6
console.log(longestSubstring('bbaaaa', 4)); // 4
console.log(longestSubstring('ababacb', 3)); // 0;
console.log(longestSubstring('ababacb', 6)); // 0;
console.log(longestSubstring('aaabb', 3)); // 3
console.log(longestSubstring('ababbc', 2)); // 5
