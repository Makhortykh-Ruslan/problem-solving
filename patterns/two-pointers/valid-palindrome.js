/**
 * Problem: Valid Palindrome
 * Pattern: Two Pointers
 * Link: https://leetcode.com/problems/valid-palindrome/
 *
 * Description:
 * Given a string s, return true if it is a palindrome,
 * otherwise return false.
 * A palindrome reads the same forwards and backwards.
 * Consider only alphanumeric characters, ignore cases.
 *
 * Example:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Input: s = "race a car"
 * Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const isAlphanumeric = (char) => /[a-zA-Z0-9]/.test(char);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftPoint = s[left];
    const rightPoint = s[right];

    if (!isAlphanumeric(leftPoint)) {
      left++;
      continue;
    }

    if (!isAlphanumeric(rightPoint)) {
      right--;
      continue;
    }

    if (leftPoint && rightPoint) {
      const conditional = leftPoint.toLowerCase() === rightPoint.toLowerCase();

      if (!conditional) {
        return false;
      }
    }

    left++;
    right--;
  }

  return true;
};

// Test cases
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
