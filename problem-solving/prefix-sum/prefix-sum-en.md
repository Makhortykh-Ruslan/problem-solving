# Prefix Sum Pattern

## Pattern essence

**Prefix Sum** is a fundamental algorithmic pattern that allows you to efficiently calculate the sum of elements in a subarray or check conditions related to cumulative totals using precomputed information.

This approach is especially useful when you need to:

- repeatedly get the sum within a range
- find a subarray with a specific sum
- compare the “left” and “right” parts of an array
- work with cumulative values

## When to use Prefix Sum

- You need to calculate subarray sums multiple times
- You need to find a subarray whose sum equals a given value
- You want to compare the sum of left and right parts of an array
- You want to optimize from O(n²) to O(n)
- You're working with large arrays or 2D matrices

## Skeleton

### 1. Build prefix sum array:

```ts
const prefix = new Array(nums.length + 1).fill(0);

for (let i = 0; i < nums.length; i++) {
  prefix[i + 1] = prefix[i] + nums[i];
}
