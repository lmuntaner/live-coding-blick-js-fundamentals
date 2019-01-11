class Person {
  constructor(name) {
    console.log('in da Person constructor');
    this.name = name;
  }
  sayHello() {
    console.log(`${this.name} says hi!`);
  }
}

class Writer extends Person {
  constructor(n, style) {
    super(style);
    this.style = style;
  }
  sayHello() {
    super.sayHello();
    console.log(`${this.name} says hi very fancy!`);
  }
  writeBook() {
    console.log(`${this.name} writes a ${this.style} book!`);
  }
}

class Developer extends Person {
  developsApp() {
    console.log(`${this.name} develops an application`);
  }
}

// const laurent = new Person('Laurent Meyer');
// laurent.sayHello();
// console.log(laurent.style);

const buk = new Writer('Henry Chinaski', 'fiction');
buk.writeBook();
buk.sayHello();

// const dan = new Developer('Dan Abramov');
// dan.developsApp();
// dan.sayHello();
// console.log(dan.style);
