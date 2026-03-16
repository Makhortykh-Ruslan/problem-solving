### Sliding Window

#### Core Concept

The "Sliding Window" pattern involves maintaining a dynamic or 
fixed-size window (subarray or substring) that slides over the data structure. 
Instead of recalculating from scratch for each position, 
we add the new element on the right and remove the old element on the left — making it highly efficient.

#### Main Strategies

1. **Fixed Size Window:** The window size `k` is constant. Slide it one step at a time.
    - _Example:_ Maximum sum of subarray of size k.
2. **Dynamic Size Window:** The window grows or shrinks based on a condition.
    - _Example:_ Longest substring without repeating characters, minimum subarray with sum ≥ target.

#### Use Cases

- Finding maximum/minimum sum of a subarray of size k.
- Longest/shortest subarray or substring matching a condition.
- Counting distinct elements in a window.
- String pattern matching.

#### Advantages

- **Time Complexity:** $O(N)$ instead of $O(N^2)$, as each element is added and removed from the window at most once.
- **Space Complexity:** $O(1)$ for fixed window, $O(K)$ for dynamic window where K is the number of unique elements tracked.