# Sliding Window

## 🧠 Concept

Sliding Window is a common algorithmic pattern used for solving problems involving **contiguous sequences** — such as substrings, subarrays, or ranges — in **linear time**.

Instead of using nested loops (O(n²)), we maintain a moving "window" between two pointers — typically called `left` and `right` — to track a valid range as we iterate over the input.

There are two main types of sliding windows:

- **Fixed-size window**: The window always has a fixed length (e.g., length `k`)
- **Dynamic-size window**: The window grows or shrinks depending on the condition

---

## ✅ When to use Sliding Window:

- You're working with **arrays or strings**
- The problem involves **finding max/min/sum/length** over **a continuous range**
- You want to avoid **brute-force nested loops** (O(n²))

---

## 🔧 Skeleton

```ts
let left = 0;

for (let right = 0; right < arr.length; right++) {
  // Expand the window by including arr[right]

  while (/* condition is invalid */) {
    // Shrink the window by excluding arr[left]
    left++;
  }

  // At this point: valid window → update result if needed
}
```
