/**
 * Завдання: Перетворення масиву об'єктів у об'єкт
 * У тебе є масив об'єктів такого вигляду:
 *
 * const data = [
 *     { id: 1, name: 'Alice', age: 25 },
 *     { id: 2, name: 'Bob', age: 30 },
 *     { id: 3, name: 'Charlie', age: 35 },
 * ];
 *
 * Напиши функцію `transformArrayToObject`, яка перетворює цей масив у об'єкт, де:
 * - Ключами будуть значення `id` з кожного об'єкта.
 * - Значеннями будуть відповідні об'єкти.
 *
 * Очікуваний результат:
 *
 * const result = transformArrayToObject(data);
 *
 * console.log(result);
 * // {
 * //     1: { id: 1, name: 'Alice', age: 25 },
 * //     2: { id: 2, name: 'Bob', age: 30 },
 * //     3: { id: 3, name: 'Charlie', age: 35 },
 * // }
 *
 * Підказка:
 * - Спробуй використати метод `reduce`, або почни з простого циклу.
 */

const data = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

function transformArrayToObject(data) {
  return data.reduce((result, el) => {
    result[el.id] = el;
    return result;
  }, {});
}

const result = transformArrayToObject(data);

console.log('result', result);
