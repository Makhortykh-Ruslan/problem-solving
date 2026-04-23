/**
 * Problem: Concatenate Names
 * Pattern: Array / String
 * Difficulty: Junior
 * Link: https://itlead.org/ua/problems/concatenate-strings-from-objects
 *
 * Description:
 * Напишіть функцію, яка приймає масив об'єктів (кожен з властивістю name)
 * і повертає один рядок з усіма іменами, з'єднаними через ", ".
 *
 * Example:
 * Input: [{ name: "John" }, { name: "Jane" }, { name: "Bob" }]
 * Output: "John, Jane, Bob"
 *
 * Input: [{ name: "John" }]
 * Output: "John"
 *
 * Input: []
 * Output: ""
 *
 * Constraints:
 * - Витягнути властивість name з кожного об'єкта
 * - З'єднати всі імена через кому та пробіл ", "
 * - Повернути порожній рядок для порожнього масиву
 */

/**
 * @param {Array<{name: string}>} arr
 * @return {string}
 */
function concatenateNames(arr) {
  return arr.map((el) => el.name).join(', ');
}

// Test cases
console.log(concatenateNames([{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }])); // "John, Jane, Bob"
console.log(concatenateNames([{ name: 'John' }])); // "John"
console.log(concatenateNames([])); // ""
