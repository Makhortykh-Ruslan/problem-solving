function maxSubarraySumOfSizeK(nums, k) {
    //  рахуємо всі елементи з масиву
    let currentSum = 0;
    //  рахуємо розмір вікна
    let windowSize = 0;
    //  наш результат
    let maxSum = -Infinity;
    //  діва частина вікна
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        // сумуємо кожен елемент з масиву
        currentSum += nums[right];

        // рахуємо розмір вікна.
        windowSize = right - left + 1;

        // якщо розмір вікна дорівнює таргету - або коли ми заповнили розмір вікна максимальною
        // кількосттю елементів тоді вже починажмо ковзати по масиву саме вікном
        if (windowSize === k) {
            // оновлюємо максемальне значення
            maxSum = Math.max(maxSum, currentSum);
            // робимо мінус з загальної суму а точніше віднімаємо непотрібне
            currentSum -= nums[left];
            // рухаємо ліву частину вперед
            left++
        }
    }


    return maxSum;
}

const result = maxSubarraySumOfSizeK([2,1,5,1,3,2], 3)

console.log('result', result)