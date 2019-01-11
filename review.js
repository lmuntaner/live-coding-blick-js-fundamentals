// Conditionals

if (10 > 5) {
  console.log('You know math');
} else {
  console.log('You do not know math');
}

const isGreaterThan = 10 > 5 ? 'You know math' : 'You do not know math';

// Loops

for (let i = 0; i < 10; i++) {
  console.log('this is a loop', i);
}

const numbers = [1, 2, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log('number: ', numbers[i]);
}

const obj = {
  a: 1,
  b: 2,
};

for (const k in obj) {
  console.log('The key is: ', k);
}

Object.keys(obj);
Object.values(obj);

// Array methods

const greatNums = [10, 20, 40];

greatNums.forEach((element, index, elements) => {
  console.log('the element is: ', element);
});

const multipliedByTen = greatNums.map((element) => {
  return element * 10;
});

const belowTwenty = greatNums.filter((element) => {
  return element < 20;
});

const totalSum = greatNums.reduce((partialSum, element) => {
  return partialSum + element;
}, 0);

// Scope
// Every new block `{}` creates a new scope
// Inner scope has access to the outer scope, NOT the other way around

const available = true;

if (true) {
  const secret = 'secret';
  console.log(available)
}

// This would throw an error
// console.log(secret);

// Class

class Person {
  constructor(name) {
    // const this = {};
    this.name = name;
    this.numLegs = 2;
    // return this;
  }

  sayName() {
    console.log(`HI! This is ${this.name}`);
  }
}

const laurent = new Person('Laurent Meyer');
laurent.sayName();
console.log(laurent instanceof Person);

// Inheritance
class Developer extends Person {
  developApp() {
    console.log('Developing....');
  }
}

const dan = new Developer('Dan Abramov');
dan.sayName();
dan.developApp();

