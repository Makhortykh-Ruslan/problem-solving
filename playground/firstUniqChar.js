/**
 * Problem: First Unique Character in a String
 * Pattern: HashMap
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/first-unique-character-in-a-string/
 *
 * Description:
 * Given a string s, find the first non-repeating character
 * and return its index. If it does not exist, return -1.
 *
 * Example:
 * Input: s = "leetcode"
 * Output: 0
 *
 * Input: s = "loveleetcode"
 * Output: 2
 *
 * Input: s = "aabb"
 * Output: -1
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s consists of only lowercase English letters
 */

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const hashMap = new Map();
  let step = 0;

  while (step < s.length) {
    hashMap.set(s[step], (hashMap.get(s[step]) || 0) + 1);
    step++;
  }

  step = 0;

  while (step < s.length) {
    const result = hashMap.get(s[step]);

    if (result === 1) {
      return step;
    }

    step++;
  }

  return -1;
};

// Test cases
console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1
