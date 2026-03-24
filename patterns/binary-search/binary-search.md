### Binary Search

#### Core Concept

The "Binary Search" pattern involves finding a target value in a **sorted** array by repeatedly dividing the search space in half. Instead of checking every element linearly, we eliminate half of the remaining elements on each step.

The key insight: if the array is sorted — you can always determine which half contains the target and discard the other half.

#### Main Strategies

1. **Classic Binary Search:** Find exact target in a sorted array.
    - Compare target with middle element → go left or right
2. **Find Boundary:** Find first/last position where condition is true.
    - _Example:_ Find first bad version, find insertion position.
3. **Binary Search on Answer:** Search on result space, not array.
    - _Example:_ Minimize maximum value, find kth smallest.

#### Use Cases

- Find index of target in sorted array.
- Find first/last occurrence of element.
- Find minimum in rotated sorted array.
- Search in 2D sorted matrix.
- Minimize/maximize a value with a condition.

#### Advantages

- **Time Complexity:** O(log N) instead of O(N) — extremely fast on large arrays.
- **Space Complexity:** O(1) — no extra memory needed.