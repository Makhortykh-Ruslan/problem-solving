/**
 * Problem: Ransom Note
 * Pattern: HashMap
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/ransom-note/
 *
 * Description:
 * Given two strings ransomNote and magazine, return true if ransomNote
 * can be constructed by using the letters from magazine, and false otherwise.
 * Each letter in magazine can only be used once.
 *
 * Example:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 *
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 *
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 *
 * Constraints:
 * - 1 <= ransomNote.length, magazine.length <= 10^5
 * - ransomNote and magazine consist of lowercase English letters
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const hashMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    hashMap.set(magazine[i], (hashMap.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!hashMap.get(ransomNote[i])) return false;

    if (hashMap.has(ransomNote[i])) {
      hashMap.set(ransomNote[i], hashMap.get(ransomNote[i]) - 1);
    }
  }

  return true;
};

// Test cases
console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
