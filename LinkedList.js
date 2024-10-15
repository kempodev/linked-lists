class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.list = [];
  }
  append(value) {
    const newNode = new Node();
    newNode.value = value;
    this.list.push(newNode);
    if (this.list[this.list.length - 2]) {
      this.list[this.list.length - 2].nextNode = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    this.list.unshift(newNode);
    if (this.list[1]) {
      newNode.nextNode = this.list[1];
    }
  }
  size() {
    return this.list.length;
  }
  head() {
    return this.list[0];
  }
  tail() {
    return this.list[this.list.length - 1];
  }
  at(index) {
    return this.list[index];
  }
  pop() {
    if (this.list.length > 0) {
      this.list.pop();
    }
    if (this.list[this.list.length - 1]) {
      this.list[this.list.length - 1].nextNode = null;
    }
  }
  contains(value) {
    return this.list.find((node) => node.value === value) ? true : false;
  }
  find(value) {
    const index = this.list.findIndex((node) => node.value === value);
    return index > 0 ? index : null;
  }
  toString() {
    if (this.list.length < 1) return 'null';
    let node = this.head();
    let result = '';
    do {
      result += `( ${node.value} ) -> `;
      node = node.nextNode;
    } while (node !== null);
    result += `${node}`;
    return result;
  }
  insertAt(value, index) {
    if (index > this.list.length || index < 0 || typeof index !== 'number') {
      console.error('Invalid index: ' + index);
      return;
    }
    const newNode = new Node();
    newNode.value = value;
    this.list.splice(index, 0, newNode);
    newNode.nextNode = this.list[index + 1] || null;
    if (index !== 0) {
      this.list[index - 1].nextNode = newNode;
    }
  }
  removeAt(index) {
    if (
      index > this.list.length - 1 ||
      index < 0 ||
      typeof index !== 'number'
    ) {
      console.error('Invalid index: ' + index);
      return;
    }
    this.list.splice(index, 1);
    if (index !== 0) {
      this.list[index - 1].nextNode = this.list[index] || null;
    }
  }
}

module.exports = LinkedList;
