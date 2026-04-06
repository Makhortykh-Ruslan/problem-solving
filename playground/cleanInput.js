/**
 * Problem: Clean Up User Input
 * Pattern: String Manipulation
 * Difficulty: Easy
 *
 * Description:
 * Given a string with extra spaces, punctuation and mixed case,
 * return a cleaned version:
 * - all lowercase
 * - no punctuation (.,!?;:)
 * - no leading/trailing spaces
 * - single spaces between words (no double spaces)
 *
 * Example:
 * Input: "  Hello,   World!  "
 * Output: "hello world"
 *
 * Input: "Hi!! How    are you???"
 * Output: "hi how are you"
 *
 * Constraints:
 * - Input is a non-empty string
 */

/**
 * @param {string} s
 * @return {string}
 */
const cleanInput = function (s) {
  return s
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

// Test cases
console.log(cleanInput('  Hello,   World!  ')); // "hello world"
console.log(cleanInput('Hi!! How    are you???')); // "hi how are you"
console.log(cleanInput('...Nice   to meet you.')); // "nice to meet you"
