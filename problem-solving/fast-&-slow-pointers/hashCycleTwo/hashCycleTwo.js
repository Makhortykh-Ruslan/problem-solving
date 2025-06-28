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
  const nodeHash = new Map();
  let fast = head;
  let slow = head;

  nodeHash.set(head, true);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (nodeHash.has(slow)) {
      return slow;
    }

    nodeHash.set(slow, true);
  }

  return null;
}

console.log('hashCycleTwo', hashCycleTwo(node1));
