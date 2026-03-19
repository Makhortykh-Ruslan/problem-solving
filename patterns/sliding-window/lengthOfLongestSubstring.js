/**
 * Problem: Longest Substring Without Repeating Characters
 * Pattern: Sliding Window (Dynamic)
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Description:
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 *
 * Example:
 * Input: s = "abcabcbb"
 * Output: 3 ("abc")
 *
 * Input: s = "bbbbb"
 * Output: 1 ("b")
 *
 * Input: s = "pwwkew"
 * Output: 3 ("wke")
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const hashMap = new Set();

  let length = 0;

  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (hashMap.has(s[right])) {
      hashMap.delete(s[left]);
      left++;
    } else {
      hashMap.add(s[right]);
      right++;
      length = Math.max(length, hashMap.size);
    }
  }

  return length;
};

// Test cases
console.log(lengthOfLongestSubstring('au')); // Expected: 2
console.log(lengthOfLongestSubstring('abcabcbb')); // Expected: 3
console.log(lengthOfLongestSubstring('bbbbb')); // Expected: 1
console.log(lengthOfLongestSubstring('pwwkew')); // Expected: 3
