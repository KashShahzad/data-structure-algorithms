class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  printCollection() {
    console.log(this.collection);
  }

  enqueue(elem) {
    if (this.isEmpty()) {
      this.collection.push(elem);
    } else {
      var added = false;
      for (var i = 0; i < this.collection.length; i++) {
        if (elem[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, elem);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(elem);
      }
    }
  }

  dequeue() {
    var value = this.collection.shift();
    return value[0];
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

var pq = new PriorityQueue();
pq.enqueue(["alpha", 2]);
pq.enqueue(["bravo", 3]);
pq.enqueue(["charlie", 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
