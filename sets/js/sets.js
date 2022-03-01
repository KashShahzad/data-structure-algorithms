class MySet {
  constructor() {
    this.collection = [];
  }

  has(elem) {
    return this.collection.indexOf(elem) !== -1;
  }

  values() {
    return this.collection;
  }

  add(elem) {
    if (!this.has(elem)) {
      this.collection.push(elem);
      return true;
    }
    return false;
  }

  remove(elem) {
    if (!this.has(elem)) {
      index = this.collection.indexOf(elem);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  union(otherSet) {
    var unionSet = new MySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  }

  intersection(otherSet) {
    var interSectionSet = new MySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        interSectionSet.add(e);
      }
    });
    return interSectionSet;
  }

  difference(otherSet) {
    var diffSectionSet = new MySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        diffSectionSet.add(e);
      }
    });
    return diffSectionSet;
  }

  subset(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (e) {
      return otherSet.has(e);
    });
  }
}

var setA = new MySet();
var setB = new MySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
