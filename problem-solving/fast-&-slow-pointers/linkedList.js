import { ListNode } from './listNode.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  print() {
    let current = this.head;

    while (current) {
      current = current.next;
    }
  }

  logHead() {
    console.log('this.head', this.head);
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);

list.logHead();
