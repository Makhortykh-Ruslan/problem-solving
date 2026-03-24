/**
 * Problem: Count Vowel Substrings of a Stringв
 * Pattern: Prefix Sum / HashMap
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/count-vowel-substrings-of-a-string/
 *
 * Description:
 * A substring is a vowel substring if it only consists of vowels
 * ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.
 * Given a string word, return the number of vowel substrings in word.
 *
 * Example:
 * Input: word = "aeiouu"
 * Output: 2
 *
 * Input: word = "unicornarihan"
 * Output: 0
 *
 * Input: word = "cuaieuouac"
 * Output: 7
 *
 * Constraints:
 * - 1 <= word.length <= 100
 * - word consists of lowercase English letters only
 */

/**
 * @param {string} word
 * @return {number}
 */
const countVowelSubstrings = function (word) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const searchedVowels = new Set();

    searchedVowels.clear();

    for (let j = i; j < word.length; j++) {
      const letter = word[j];

      if (vowels.has(letter)) {
        searchedVowels.add(letter);

        if (searchedVowels.size === 5) {
          count++;
        }
      } else {
        break;
      }
    }
  }

  return count;
};

// Test cases
console.log(countVowelSubstrings('aeiouu')); // Expected: 2
console.log(countVowelSubstrings('unicornarihan')); // Expected: 0
console.log(countVowelSubstrings('cuaieuouac')); // Expected: 7
