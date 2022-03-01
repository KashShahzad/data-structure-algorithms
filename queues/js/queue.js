class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(elem) {
    this.collection.push(elem);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.print();
q.dequeue();
q.front();
q.front();
q.print;
