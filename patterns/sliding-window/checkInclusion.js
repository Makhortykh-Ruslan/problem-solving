/**
 * Problem: Permutation in String
 * Pattern: Sliding Window
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/permutation-in-string/
 *
 * Description:
 * Given two strings s1 and s2, return true if s2 contains a
 * permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations
 * is a substring of s2.
 *
 * Example:
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true  ("ba" is a permutation of "ab")
 *
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 *
 * Constraints:
 * - 1 <= s1.length, s2.length <= 10^4
 * - s1 and s2 consist of lowercase English letters
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const checkInclusion = function (s1, s2) {
  function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) {
      return false;
    }

    for (const [key, val] of map1) {
      const testVal = map2.get(key);

      if (testVal !== val || (testVal === undefined && !map2.has(key))) {
        return false;
      }
    }

    return true;
  }

  const hashMap1 = new Map();

  for (let i = 0; i < s1.length; i++) {
    hashMap1.set(s1[i], (hashMap1.get(s1[i]) || 0) + 1);
  }

  let left = 0;
  let right = s1.length;

  while (left < s2.length) {
    const hashMap2 = new Map();
    const window = s2.substring(left, right);

    for (let i = 0; i < window.length; i++) {
      hashMap2.set(window[i], (hashMap2.get(window[i]) || 0) + 1);
    }

    if (mapsAreEqual(hashMap1, hashMap2)) {
      return true;
    }

    left++;
    right++;
  }

  return false;
};

// Test cases
console.log(checkInclusion('ab', 'eidbaooo')); // true
console.log(checkInclusion('ab', 'eidboaoo')); // false
console.log(checkInclusion('a', 'a')); // true
console.log(checkInclusion('abc', 'bbbca')); // true
console.log(checkInclusion('hello', 'ooolleoooleh')); // false
