/**
 * Problem: First Bad Version
 * Pattern: Binary Search
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/first-bad-version/
 *
 * Description:
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check.
 * Since each version is developed based on the previous version, all the versions
 * after a bad version are also bad.
 *
 * You are given an API isBadVersion(version) which returns whether version is bad.
 * Implement a function to find the first bad version.
 * You should minimize the number of calls to the API.
 *
 * Example:
 * Input: n = 5, bad = 4
 * Output: 4
 *
 * Input: n = 1, bad = 1
 * Output: 1
 *
 * Constraints:
 * - 1 <= bad <= n <= 2^31 - 1
 */

const isBadVersion = (bad) => (version) => version >= bad;
const isBad = isBadVersion(4);

/**
 * @param {function} isBadVersion
 * @return {function}
 */
const solution = function (isBadVersion) {
  return function (n) {
    let left = 0;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      const result = isBadVersion(mid);

      if (result) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};

// Test cases
console.log(solution(isBad)(5)); // Expected: 4
console.log(solution(isBadVersion(1))(1)); // Expected: 1
console.log(solution(isBadVersion(2))(2)); // Expected: 2
