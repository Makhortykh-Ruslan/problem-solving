/**
 * Problem: Valid Palindrome
 * Pattern: Two Pointers
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/valid-palindrome/
 *
 * Description:
 * A phrase is a palindrome if, after converting all uppercase letters
 * to lowercase and removing all non-alphanumeric characters,
 * it reads the same forward and backward.
 *
 * Given a string s, return true if it is a palindrome, false otherwise.
 *
 * Example:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true  (amanaplanacanalpanama)
 *
 * Input: s = "race a car"
 * Output: false
 *
 * Input: s = " "
 * Output: true
 *
 * Constraints:
 * - 1 <= s.length <= 2 * 10^5
 * - s consists only of printable ASCII characters
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const modifyStr = s.replace(/[^a-zA-Z0-9]/g, '');

  let left = 0;
  let right = modifyStr.length - 1;

  while (left < right) {
    if (modifyStr[left].toLowerCase() !== modifyStr[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

// Test cases
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
console.log(isPalindrome('0P')); // false
