# 🏹 Binary Search Pattern

## 🔍 Pattern essence

**Binary Search** is a pattern where you repeatedly divide a sorted range in half to find a target element or a boundary:

- Maintain two boundaries (`left`, `right`)
- On each iteration, pick the middle (`mid`)
- Compare with the target and shrink the search space: move left or right

**Works best when the search space can be divided in half each time.**

---

## ✅ When to use Binary Search:

- Data is **sorted** (array, range, monotonic function)
- You need to **find an element** or a **boundary** (first/last occurrence, min/max)
- Looking for an **insert position** (lower/upper bound)
- The problem can be solved with **Binary Search on Answer** (searching for the answer within a numeric range using a check function)

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
