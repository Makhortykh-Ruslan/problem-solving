/**
 * Problem: Valid Anagram
 * Pattern: HashMap (Frequency Counter)
 * Link: https://leetcode.com/problems/valid-anagram/
 *
 * Description:
 * Given two strings s and t, return true if t is an anagram of s,
 * and false otherwise.
 * An anagram is a word formed by rearranging the letters of another word,
 * using all original letters exactly once.
 *
 * Example:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const hasMap = new Map();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const left = s[i];
    const right = t[i];

    hasMap.set(left, (hasMap.get(left) || 0) + 1);
    hasMap.set(right, (hasMap.get(right) || 0) - 1);
  }

  return [...hasMap.values()].filter(Boolean).length === 0;
};

// Test cases
console.log(isAnagram('anagram', 'nagaram')); // Expected output: true
console.log(isAnagram('rat', 'car')); // Expected output: false
console.log(isAnagram('hello', 'world')); // Expected output: false
