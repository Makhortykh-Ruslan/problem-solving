/**
 * Problem: Guess Number Higher or Lower
 * Pattern: Binary Search
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/guess-number-higher-or-lower/
 *
 * Description:
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number I picked
 * is higher or lower than your guess.
 *
 * You call a pre-defined API guess(num) which returns three possible results:
 * -1: Your guess is higher than the number I picked (i.e. num > pick)
 *  1: Your guess is lower than the number I picked (i.e. num < pick)
 *  0: your guess is equal to the number I picked (i.e. num == pick)
 *
 * Return the number that I picked.
 *
 * Example:
 * Input: n = 10, pick = 6
 * Output: 6
 *
 * Input: n = 1, pick = 1
 * Output: 1
 *
 * Constraints:
 * - 1 <= n <= 2^31 - 1
 * - 1 <= pick <= n
 */

/**
 * @param {number} num
 * @return {-1|0|1}
 */
const guess = (num) => {
  const pick = 6;
  if (num > pick) return -1;
  if (num < pick) return 1;
  return 0;
};

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let left = 0;
  let right = n;

  let result = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (guess(mid) === 0) {
      result = mid;
      break;
    } else if (guess(mid) === 1) {
      left = mid + 1;
    } else if (guess(mid) === -1) {
      right = mid - 1;
    }
  }

  return result;
};
// Test cases
console.log(guessNumber(10)); // Expected: 6
console.log(guessNumber(1)); // Expected: 1
