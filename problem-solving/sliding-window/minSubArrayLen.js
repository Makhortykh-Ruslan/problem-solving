/** 🧩 Sliding Window — задача 1: Minimum Size Subarray Sum
 📌 Умова:
 Дано масив nums і ціле target. Знайти найменший підмасив, сума якого ≥ target. Повернути його довжину. Якщо такого немає — 0.

 minSubArrayLen(7, [2,3,1,2,4,3]) // → 2  → [4,3]

 
 **/

export const minSubArrayLen = (target, nums) => {
  let left = 0;
  let minLength = Infinity;
  let currentSumWindow = 0;
  let windowSize = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSumWindow += nums[right];

    while (currentSumWindow >= target) {
      windowSize = right - left + 1;
      minLength = Math.min(minLength, windowSize);
      currentSumWindow -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

const result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);

console.log('result', result);
