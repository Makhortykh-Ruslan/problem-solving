### Fast & Slow Pointers

#### Core Concept

The "Fast & Slow Pointers" pattern uses two pointers that move through a data structure at **different speeds**. The fast pointer moves 2 steps at a time, the slow pointer moves 1 step.

The key insight: if there is a cycle — the fast pointer will eventually catch up to the slow pointer. If there is no cycle — the fast pointer reaches the end.

#### Main Strategies

1. **Cycle Detection:** Fast moves 2 steps, slow moves 1. If they meet — cycle exists.
   - _Example:_ Linked List Cycle
2. **Find Middle:** When fast reaches the end, slow is at the middle.
   - _Example:_ Middle of the Linked List
3. **Find Cycle Start:** After detection, reset one pointer to head and move both 1 step — they meet at cycle start.

#### Use Cases

- Detect cycle in a linked list.
- Find middle of a linked list.
- Find start of a cycle.
- Happy number problem.

#### Advantages

- **Time Complexity:** O(N)
- **Space Complexity:** O(1) — no extra memory needed.