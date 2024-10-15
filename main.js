const LinkedList = require('./LinkedList');

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.prepend('monkey');

console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
list.pop();
console.log(list.size());
console.log(list.contains('cow'));
console.log(list.find('hamster'));
list.insertAt('horse', 3);
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
