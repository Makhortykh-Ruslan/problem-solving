/**
 * Problem: Middle of the Linked List
 * Pattern: Fast & Slow Pointers
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/
 *
 * Description:
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * Example:
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5] (node with value 3)
 *
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6] (node with value 4)
 *
 * Constraints:
 * - The number of nodes in the list is in the range [1, 100]
 * - 1 <= Node.val <= 100
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  // your code here
};

// Test setup
const buildList = (arr) => {
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
};

const getValues = (node) => {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
};

console.log(getValues(middleNode(buildList([1, 2, 3, 4, 5])))); // Expected: [3,4,5]
console.log(getValues(middleNode(buildList([1, 2, 3, 4, 5, 6])))); // Expected: [4,5,6]
