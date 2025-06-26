/** 🧩 Sliding Window — задача 4: Longest Substring Without Repeating Characters
 📌 Умова:
 Дано рядок str. Знайти найдовший підрядок без повторюваних символів.

 lengthOfLongestSubstring('abcabcbb') // → 3  → 'abc'


 **/

const lengthOfLongestSubstring = (str) => {
  const uniqueChart = new Set(); // Зберігаємо унікальні символи у поточному "вікні"
  let maxValue = 0; // Максимальна довжина валідного підрядка
  let left = 0; // Ліва межа вікна

  for (let right = 0; right < str.length; right++) {
    // Якщо поточний символ уже є в Set — видаляємо символи зліва,
    // поки не приберемо дублікат
    while (uniqueChart.has(str[right])) {
      uniqueChart.delete(str[left]); // видаляємо символ на позиції left
      left++; // зсуваємо ліву межу вікна
    }

    uniqueChart.add(str[right]); // додаємо новий унікальний символ у вікно

    maxValue = Math.max(maxValue, right - left + 1); // оновлюємо максимальну довжину вікна
  }

  return maxValue; // повертаємо максимальну довжину підрядка без повторів
};

const result = lengthOfLongestSubstring('abcabcbb');

console.log('result', result);
