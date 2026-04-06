/**
 * Problem: Valid Anagram
 * Pattern: HashMap
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/valid-anagram/
 *
 * Description:
 * Given two strings s and t, return true if t is an anagram of s,
 * and false otherwise.
 * An anagram is a word formed by rearranging the letters of another word.
 *
 * Example:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const dictionary = new Map();

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    dictionary.set(letter, (dictionary.get(letter) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const letter = t[i];
    const count = dictionary.get(letter);
    dictionary.set(letter, (count || 0) - 1);

    if (dictionary.get(letter) < 0) {
      return false;
    }
  }

  return s.length === t.length;
};

// Test cases
console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('ab', 'a')); // false
