/**
 * Problem: Best Time to Buy and Sell Stock
 * Pattern: Sliding Window
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Description:
 * Given an array prices where prices[i] is the price of a stock on day i.
 * Find the maximum profit you can achieve by buying on one day
 * and selling on a later day.
 * Return 0 if no profit is possible.
 *
 * Example:
 * Input: prices = [7, 1, 5, 3, 6, 4]
 * Output: 5
 *
 * Input: prices = [7, 6, 4, 3, 1]
 * Output: 0
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function (prices) {
  let lowSubBuy = 0;

  let left = 0;
  let right = 1;

  while (right < prices.length) {
    const profit = prices[right] - prices[left];

    if (prices[right] < prices[left]) {
      left = right;
      right++;
    } else {
      lowSubBuy = Math.max(lowSubBuy, profit);
      right++;
    }
  }

  return lowSubBuy;
};

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Expected: 0
