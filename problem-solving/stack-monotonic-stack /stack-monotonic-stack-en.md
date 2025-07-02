# Stack / Monotonic Stack

## 🧠 Concept

**Stack** is a data structure based on the **LIFO (Last In — First Out)** principle.  
It’s used in problems that require tracking the **most recent state**, checking **balanced brackets**, or finding **previous smaller/greater elements**.

**Monotonic Stack** is a special type of stack that maintains its elements in a **monotonic order** (increasing or decreasing).  
Its power lies in solving "next greater/smaller element" problems in **O(n)** time without nested loops.

---

## ✅ When to use Stack / Monotonic Stack

- You need to **store state/history** and process the last added item
- You're solving problems like:
    - Validating parentheses
    - Reverse Polish Notation
    - Next Greater/Smaller Element
    - Trapping Rain Water
    - Largest Rectangle in Histogram

---

## 🔧 Basic Stack Template

```ts
const stack: number[] = [];

for (let i = 0; i < arr.length; i++) {
  const el = arr[i];

  // logic using stack[stack.length - 1]
  // for comparison, removal, etc.
}
