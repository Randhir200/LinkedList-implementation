class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtBegin(data) {
    //1. new node for the data
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    console.log('insertion at begining = ' + data);
  }

  printLL(head) {
    let cur = this.head;
    while (cur != null) {
      console.log(cur.data);
      cur = cur.next;
    }
  }

  insertAtEnd(data) {
    //1. create new node
    let newNode = new Node(data);
    //2. Iteration
    let cur = this.head;
    while (cur.next != null) {
      cur = cur.next;
    }
    cur.next = newNode;
  }
  deletionAtBegin(){
      let deleted = this.head
      this.head =this.head.next;
      return deleted;
  }
  deletionAtPos(pos){
      let cur = this.head;
      let prev = null;
      let count = 1;
      while(count!=pos){
          prev = cur
          cur = cur.next;
          count++;
      }
      prev.next = cur.next;
  }
}

let ll1 = new LinkedList();
ll1.insertAtBegin(7);
ll1.insertAtBegin(5);
ll1.insertAtBegin(10);
ll1.insertAtEnd(50);
ll1.insertAtBegin(30);
let  d = ll1.deletionAtBegin();
ll1.deletionAtPos(2)
ll1.printLL();
console.log(d);
