const { ListNode } = require('../listNode');

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node5.next = node3; // create cycle

function hashCycleTwo(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return fast.next.next;
    }
  }

  return null;
}

console.log('hashCycleTwo', hashCycleTwo(node1));
