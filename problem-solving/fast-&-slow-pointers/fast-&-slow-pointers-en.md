# 🐢 Fast & Slow Pointers Pattern

## 🔍 Pattern essence

**Fast & Slow Pointers** (also known as Tortoise & Hare) is a pattern where two pointers move through a structure at different speeds:

- `slow` moves one step at a time
- `fast` moves two steps at a time

This approach is useful for detecting **cycles**, finding the **middle of a list**, calculating the **length of a cycle**, or detecting **repeating elements** in sequential data (`next`, `child`, or index-based structures).

---

## ✅ When to use Fast & Slow Pointers:

- You need to detect if there’s a **cycle** in a structure (e.g. Linked List)
- You want to find the **middle** of a list without knowing its length
- You need to find the **start of a cycle** or its **length**
- The data may contain **infinite loops** or repeating patterns
- The problem requires **O(1) space** without using sets or maps

---

## 🔧 Skeleton

```ts
let slow = head;
let fast = head;

while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;

  if (slow === fast) {
    // cycle found or pointers met
  }
}
```

---

## 🧠 Core idea

If `fast` moves twice as fast as `slow` and there's a **cycle**, they will **eventually meet inside the cycle**.  
If `fast` reaches `null`, then there’s **no cycle**.

Each iteration reduces the distance between `slow` and `fast` inside the cycle.  
This pattern runs in **O(n) time** and uses **O(1) space**, with no extra data structures.

---

## 📌 Example problems

- **Linked List Cycle** — detect if a cycle exists
- **Linked List Cycle II** — return the node where the cycle starts
- **Middle of the Linked List** — return the middle node
- **Happy Number** — detect repetition in digit-square sum sequence
- **Find the Duplicate Number** — detect a duplicate without extra space (treat array as graph)

---

## 🛠 Key variations

- **Finding cycle start**: after `slow === fast`, reset `slow` to `head` and move both pointers one step at a time. They’ll meet at the start of the cycle.
- **Cycle length**: after they meet, move `slow` forward and count steps until it meets `fast` again

---

## 🧪 Time & Space Complexity

- **Time:** O(n)
- **Space:** O(1)
