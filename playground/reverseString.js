/**
 * Problem: Reverse String
 * Pattern: Two Pointers
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/reverse-string/
 *
 * Description:
 * Write a function that reverses a string.
 * The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place
 * with O(1) extra memory.
 *
 * Example:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 *
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s[i] is a printable ASCII character
 * - Must be in-place, O(1) extra memory
 */

/**
 * @param {character[]} s
 * @return {void} - modify s in-place
 */
const reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  return s;
};

// Test cases
console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]
