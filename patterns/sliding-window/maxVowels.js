/**
 * Problem: Maximum Number of Vowels in a Substring of Given Length
 * Pattern: Sliding Window
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 *
 * Description:
 * Given a string s and an integer k, return the maximum number
 * of vowel letters in any substring of s with length k.
 * Vowel letters are 'a', 'e', 'i', 'o', 'u'.
 *
 * Example:
 * Input: s = "abciiidef", k = 3
 * Output: 3
 * Explanation: "iii" has 3 vowels
 *
 * Input: s = "aeiou", k = 2
 * Output: 2
 *
 * Input: s = "leetcode", k = 3
 * Output: 2
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s consists of lowercase English letters
 * - 1 <= k <= s.length
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function maxVowels(s, k) {}

// Test cases
console.log(maxVowels('abciiidef', 3)); // 3
console.log(maxVowels('aeiou', 2)); // 2
console.log(maxVowels('leetcode', 3)); // 2
console.log(maxVowels('rhythms', 4)); // 0
