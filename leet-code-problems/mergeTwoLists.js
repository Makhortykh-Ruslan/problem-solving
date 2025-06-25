/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1, list2) {}

class NodeList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const nodeValue = new NodeList(value);

    if (!this.head) {
      this.head = nodeValue;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = nodeValue;
  }

  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) return current.value;
      current = current.next;
      count++;
    }

    return null;
  }

  deleteAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current.next) {
      if (count === index - 1) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
      count++;
    }
  }

  deleteDuplicates() {
    let current = this.head;

    while (current && current.next) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
}

const nodeList1 = new LinkedList();

const nodeList2 = new LinkedList();

nodeList1.append(1);
nodeList1.append(2);
nodeList1.append(4);

nodeList2.append(1);
nodeList2.append(3);
nodeList2.append(4);

let current = nodeList1.head;
let current2 = nodeList2.head;

let dummy = new NodeList(-1);
let tail = dummy;

while (current && current2) {
  if (current.value < current2.value) {
    tail.next = current;
    current = current.next;
  } else {
    tail.next = current2;
    current2 = current2.next;
  }
  tail = tail.next;
}

console.log(dummy);
