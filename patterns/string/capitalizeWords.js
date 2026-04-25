/**
 * Problem: Capitalize Words
 * Pattern: String Manipulation
 * Difficulty: Junior
 * Link: https://itlead.org/ua/problems/capitalize-words
 *
 * Description:
 * Write a function that capitalizes the first letter of each word
 * in a string. All other letters must be lowercase.
 *
 * Example:
 * Input: "hello world"
 * Output: "Hello World"
 *
 * Input: "HELLO WORLD"
 * Output: "Hello World"
 *
 * Input: ""
 * Output: ""
 *
 * Constraints:
 * - Words are separated by spaces
 * - First letter of each word becomes uppercase
 * - All other letters become lowercase
 * - Empty string returns empty string
 */

/**
 * @param {string} str
 * @return {string}
 */
function capitalizeWords(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const first = str[i - 1];

    if (!first || first === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}

// Test cases
console.log(capitalizeWords('hello world')); // "Hello World"
console.log(capitalizeWords('HELLO WORLD')); // "Hello World"
console.log(capitalizeWords('')); // ""
console.log(capitalizeWords('javaScript is fun')); // "Javascript Is Fun"
