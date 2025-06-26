/** 🧩 Two Pointers — задача 1: Two Sum II — Input Array Is Sorted
 📌 Умова:
 Дано відсортований масив numbers і target.
 Потрібно знайти індекси двох чисел, що в сумі дають target.
 Повернути індекси (1-based), якщо пара існує. Гарантовано, що одна відповідь є.  twoSum([2, 7, 11, 15], 9) → [1, 2]
 twoSum([1, 3, 4, 6, 9, 11], 10) → [1, 5]
  **/

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // Знайдено правильну пару
    } else if (sum < target) {
      left++; // Сума замала → зміщуємо лівий вказівник вправо
    } else {
      right--; // Сума завелика → зміщуємо правий вказівник вліво
    }
  }

  return [];
}

console.log('must be [1, 2]', twoSum([2, 7, 11, 15], 9));
console.log('must be [1, 5]', twoSum([1, 3, 4, 6, 9, 11], 10));

module.exports = { twoSum };
