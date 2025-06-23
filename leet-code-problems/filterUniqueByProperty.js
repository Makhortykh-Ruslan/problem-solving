/**
 * Завдання: Фільтрація унікальних об'єктів за властивістю
 * У тебе є масив об'єктів, і треба створити функцію, яка поверне тільки унікальні об'єкти за значенням певної властивості.
 *
 * Наприклад:
 * const data = [
 *     { id: 1, name: 'apple' },
 *     { id: 2, name: 'banana' },
 *     { id: 3, name: 'apple' },
 *     { id: 4, name: 'carrot' },
 *     { id: 5, name: 'banana' },
 *     { id: 6, name: 'grape' },
 * ];
 *
 * Створи функцію filterUniqueByProperty, яка приймає:
 * 1. Масив об'єктів.
 * 2. Назву властивості (строку), за якою треба перевіряти унікальність.
 *
 * Очікуваний результат:
 * const result = filterUniqueByProperty(data, 'name');
 * console.log(result);
 * // [
 * //     { id: 1, name: 'apple' },
 * //     { id: 2, name: 'banana' },
 * //     { id: 4, name: 'carrot' },
 * //     { id: 6, name: 'grape' }
 * // ]
 */

const data = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'apple' },
    { id: 4, name: 'carrot' },
    { id: 5, name: 'banana' },
    { id: 6, name: 'grape' },
];

function filterUniqueByProperty(data, property) {
    const hash = new Map();

    return data.reduce((acc, el) => {
        if (!hash.has(el[property])) {
            hash.set(el[property]);
            acc.push(el);
        }
        return acc;
    }, [])
}


const result = filterUniqueByProperty(data, 'name');
console.log('result', result)