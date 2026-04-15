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
  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  let maxPalindrome = '';

  for (let i = 0; i < s.length; i++) {
    let currentSub = '';

    for (let j = i; j < s.length; j++) {
      currentSub += s[j];

      if (currentSub.length > maxPalindrome.length) {
        if (isPalindrome(currentSub)) {
          maxPalindrome = currentSub;
        }
      }
    }
  }

  return maxPalindrome;
};

// Test cases
console.log(longestPalindrome('babad')); // "bab" або "aba"
console.log(longestPalindrome('cbbd')); // "bb"
console.log(longestPalindrome('a')); // "a"
console.log(longestPalindrome('ac')); // "a" (або "c")
