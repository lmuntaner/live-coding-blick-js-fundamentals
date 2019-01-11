/*
  `class`
  `new`
  `constructor`
  `this`
*/

class Person {
  constructor(name) {
    // const newObj = {};
    // newObj.name = name;
    // return newObj;

    console.log('in da constructor');
    this.name = name;
  }

  solveProblem(student) {
    console.log('solving! to ', student);
    console.log(this.name);
  }
}

console.log(Person);

const l = new Person('Laurent');
console.log(l);
l.solveProblem('Danielle');

console.log('-------------------------------')
const fante = new Person('Fante');
console.log(fante);
fante.solveProblem('Buk');

