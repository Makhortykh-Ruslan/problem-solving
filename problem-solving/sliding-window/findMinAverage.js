/** 🧩 Sliding Window — задача 5: Minimum Sum Subarray of Size K
 📌 Умова:
 Дано масив nums і число k. Знайти мінімальну суму підмасиву розміру рівно k.

 findMinSum([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3) // → 4 → [1, 2, 1]


 **/

const findMinSum = (nums, k) => {
  let current_sum = 0;
  let left = 0;
  let min_sum = Infinity;

  for (let right = 0; right < nums.length; right++) {
    current_sum += nums[right];

    const windowSize = right - left + 1;

    if (windowSize === k) {
      min_sum = Math.min(min_sum, current_sum);
      current_sum -= nums[left];
      left++;
    }
  }

  return min_sum;
};

const result = findMinSum([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3);
console.log('result', result); // ✅ має бути 4
