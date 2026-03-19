### Prefix Sum

#### Core Concept

The "Prefix Sum" pattern involves **precomputing cumulative sums** from the start of the array to each index. This allows retrieving the sum of any subarray in O(1) instead of O(n).

The key insight: instead of recalculating the sum from `i` to `j` every time — we build a prefix sum array once and then simply subtract.

#### Main Strategies

1. **Prefix Sum Array:** Build a helper array `prefix` where `prefix[i]` = sum of all elements from `0` to `i`.
    - Sum of subarray from `i` to `j` = `prefix[j] - prefix[i-1]`
2. **Prefix Sum + HashMap:** Store prefix sums in a hash table to find subarrays with a target sum in O(1).

#### Use Cases

- Sum of subarray from `i` to `j` in O(1).
- Count of subarrays with sum equal to `k`.
- Finding equilibrium index.
- Problems on 2D matrices.

#### Advantages

- **Time Complexity:** O(N) to build, O(1) per sum query.
- **Space Complexity:** O(N) to store the prefix array.