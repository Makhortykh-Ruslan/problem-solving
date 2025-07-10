# 🏹 Binary Search Pattern

## 🔍 Pattern essence

**Binary Search** — це патерн, коли ти ділиш відсортований діапазон навпіл, щоб знайти цільовий елемент або межу (границю):

- Тримаєш дві границі (`left`, `right`)
- На кожній ітерації береш середній (`mid`)
- Порівнюєш з target і звужуєш діапазон: вліво або вправо

**Підходить для задач, де пошук можна розділити навпіл.**

---

## ✅ When to use Binary Search:

- Дані **відсортовані** (масив, діапазон, monotonic function)
- Треба **знайти елемент** чи **границю** (перша/остання поява, min/max)
- Шукаєш **позицію вставки** (lower/upper bound)
- Задача на **Binary Search on Answer** (шукаєш відповідь серед чисел через перевірку)

---

## 🔧 Skeleton

```ts
let left = 0;
let right = arr.length - 1;

while (left <= right) {
  let mid = left + Math.floor((right - left) / 2);

  if (arr[mid] === target) {
    // found target
  } else if (arr[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
