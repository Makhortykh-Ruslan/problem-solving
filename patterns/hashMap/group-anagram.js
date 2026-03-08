/**
 * Problem: Group Anagrams
 * Pattern: HashMap
 * Link: https://leetcode.com/problems/group-anagrams/
 *
 * Description:
 * Given an array of strings, group the anagrams together.
 * You can return the answer in any order.
 *
 * Example:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const result = strs.reduce((acc, el) => {
    const sortedStr = el.split('').sort().join('');
    acc[sortedStr] = acc[sortedStr] ? [...acc[sortedStr], el] : [el];

    return acc;
  }, {});

  return Object.values(result);
};

// Test cases
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([''])); // Expected: [[""]]
console.log(groupAnagrams(['a'])); // Expected: [["a"]]
