/**
 * Problem: Linked List Cycle
 * Pattern: Fast & Slow Pointers
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/linked-list-cycle/
 *
 * Description:
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be
 * reached again by continuously following the next pointer.
 * Return true if there is a cycle, or false otherwise.
 *
 * Example:
 * Input: head = [3,2,0,-4], pos = 1 (tail connects to node index 1)
 * Output: true
 *
 * Input: head = [1,2], pos = 0
 * Output: false
 *
 * Constraints:
 * - The number of nodes in the list is in the range [0, 10^4]
 * - -10^5 <= Node.val <= 10^5
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

// Test setup
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(0);
const n4 = new ListNode(-4);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2; // cycle!

const n5 = new ListNode(1);
const n6 = new ListNode(2);
n5.next = n6;

console.log(hasCycle(n1)); // Expected: true
console.log(hasCycle(n5)); // Expected: false
