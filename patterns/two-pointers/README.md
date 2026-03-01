### Two Pointers

#### Core Concept

The "Two Pointers" pattern involves using two variables (indices) that move through a data structure (typically an array or string) simultaneously. This allows for efficient searching for pairs of elements, subarrays, or in-place manipulations without significant additional memory.

#### Main Strategies

1.  **Opposite Ends:** One pointer starts at the beginning (`left = 0`), and the other starts at the end (`right = array.length - 1`). They move toward each other until they meet.
    - _Example:_ Palindrome check, finding a pair of numbers in a sorted array with a target sum.
2.  **Same Direction (Fast & Slow):** Both pointers start from the beginning but move at different speeds or under different conditions.
    - _Example:_ Removing duplicates from an array, finding a cycle in a linked list.

#### Use Cases

- Searching for pairs in sorted arrays.
- Reversing arrays or strings.
- Removing duplicates.
- Merging two sorted arrays.
- Linked list problems (finding the middle, cycle detection).

#### Advantages

- **Time Complexity:** Typically $O(N)$ instead of $O(N^2)$, as we usually traverse the array only once.
- **Space Complexity:** $O(1)$, as we only use a few extra variables.
