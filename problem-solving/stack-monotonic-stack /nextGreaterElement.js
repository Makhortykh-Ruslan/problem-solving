/**
 *
 * 🧾 Next Greater Element I
 * 🧩 Умова:
 * Дано два масиви без дублікатів:
 *
 * nums1 — підмножина nums2
 *
 * Для кожного елемента x з nums1, знайди перше число, яке знаходиться праворуч від x у nums2 і є більшим за x.
 *
 * Якщо такого числа немає — поверни -1.


 Input:
 nums1 = [4,1,2]
 nums2 = [1,3,4,2]

 Output:
 [-1,3,-1]

 Пояснення:
 - для 4 → справа в nums2 нічого більшого → -1
 - для 1 → наступне більше = 3
 - для 2 → справа нічого → -1

 **/

function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const hashMap = new Map();

  for (let i = 0; i < nums2.length; i++) {
    const currentNumber = nums2[i];

    while (stack.length && stack.at(-1) < currentNumber) {
      const topNumber = stack.pop();
      hashMap.set(topNumber, currentNumber);
    }

    stack.push(currentNumber);
  }

  while (stack.length) {
    const topNumber = stack.pop();
    hashMap.set(topNumber, -1);
  }

  return nums1.map((el) => hashMap.get(el));
}

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
