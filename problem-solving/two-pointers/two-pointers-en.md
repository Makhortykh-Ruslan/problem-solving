# 🧩 Two Pointers Pattern

## 🔍 Pattern essence

**Two Pointers** is a fundamental algorithmic pattern used when you need to iterate through an array or string from **both ends** or using **two pointers simultaneously**.

This approach is especially effective in **sorted arrays**, or when you need to:
- find a pair of elements
- check symmetry
- operate on indexes
- perform in-place modifications

There are a few typical scenarios:
- **From both ends**: `left` starts at the beginning, `right` at the end → they move towards each other
- **In one direction**: two pointers move with different speeds or delays

---

## ✅ When to use Two Pointers:

- The array is **sorted**
- You need to **find a pair** of elements that meet a certain condition (e.g., sum)
- You want an **O(n)** solution instead of **O(n²)**
- You need **in-place** modification without extra memory
- The problem has **symmetry** or **mirrored structure**

---

## 🔧 Skeleton

```ts
let left = 0;
let right = arr.length - 1;

while (left < right) {
  // process arr[left] and arr[right]

  if (condition → move left) {
    left++;
  } else {
    right--;
  }
}
```

Alternative (one-directional):

```ts
let slow = 0;
for (let fast = 1; fast < arr.length; fast++) {
  // interact between fast and slow
}
```

---

## 📌 Example problems:

- **Two Sum II** — find two numbers in a sorted array that add up to a target
- **Valid Palindrome** — check if a string reads the same forward and backward
- **Reverse String** — reverse a character array **in-place**
- **Container With Most Water** — find the max area between lines (optimization)
- **Remove Duplicates from Sorted Array** — remove duplicates in-place without extra memory
