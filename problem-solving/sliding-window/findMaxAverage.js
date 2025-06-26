/** 🧩 Sliding Window — задача 6: Maximum Average Subarray of Size K
 📌 Умова:
 Дано масив nums і ціле k. Знайти найбільше середнє арифметичне підмасиву довжини k.

 findMaxAverage([1,12,-5,-6,50,3], 4) // → 12.75 → [12, -5, -6, 50]


 **/

const findMaxAverage = (nums, k) => {
  let current_sum = 0;
  let max_sum = -Infinity;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    current_sum += nums[right];

    const windowSize = right - left + 1;

    if (windowSize === k) {
      max_sum = Math.max(max_sum, current_sum);
    }

    if (windowSize > k) {
      current_sum -= nums[left];
      left++;
      max_sum = Math.max(max_sum, current_sum);
    }
  }

  return max_sum / k;
};

const result = findMaxAverage([1, 12, -5, -6, 50, 3], 4);

console.log('result', result);
