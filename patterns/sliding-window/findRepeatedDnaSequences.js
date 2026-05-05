/**
 * Problem: Repeated DNA Sequences
 * Pattern: Sliding Window / Hash Map
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/repeated-dna-sequences/
 *
 * Description:
 * Given a string s that represents a DNA sequence, return all the 10-letter-long
 * sequences (substrings) that occur more than once in a DNA molecule.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * Output: ["AAAAACCCCC","CCCCCAAAAA"]
 *
 * Example 2:
 * Input: s = "AAAAAAAAAAAAA"
 * Output: ["AAAAAAAAAA"]
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s[i] is either 'A', 'C', 'G', or 'T'.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
  const hashMap = new Map();

  const result = [];

  let left = 0;
  let right = 10;

  while (left < s.length) {
    const window = s.substring(left, right);

    if (hashMap.get(window) === 1) {
      result.push(window);
    }

    hashMap.set(window, (hashMap.get(window) || 0) + 1);

    left++;
    right++;
  }

  return result;
};

// Test cases
console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')); // ["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA')); // ["AAAAAAAAAA"]
