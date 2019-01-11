class Person {
  constructor(name) {
    this.name = name;
  }
}

const s = new Person('Sheldon');
const l = new Person('Leonard');

class Bank {
  static transfer(bankOrigin, accountOrigin, bankDestination, accountDestination, amount) {
    bankOrigin.withdraw(accountOrigin, amount);
    bankDestination.deposit(accountDestination, amount);
  }

  constructor(name) {
    // const this = {};
    // this.name = name;
    // return this;
    this.name = name;
    this.customers = {};
  }

  addCustomer(customer) {
    this.customers[customer.name] = 0;
  }

  deposit(customer, amount) {
    console.log(`Depositing ${amount} to ${customer.name}...`);
    // const newAmount = this.customers[customer] + amount;
    // this.customers[customer] = newAmount;
    this.customers[customer.name] += amount;
  }

  withdraw(customer, amount) {
    console.log(`Withdrawing ${amount} from ${customer.name}...`);
    this.customers[customer.name] -= amount;
  }
}

const ubs = new Bank('UBS');
ubs.addCustomer(s);
console.log(ubs.customers); // { Sheldon: 0 }
ubs.deposit(s, 100);
console.log(ubs.customers); // { Sheldon: 100 }
ubs.deposit(s, 200);
console.log(ubs.customers); // { Sheldon: 300 }

const creditSuisse = new Bank('Credit Suisse');
creditSuisse.addCustomer(l);
creditSuisse.deposit(l, 50);
console.log(creditSuisse.customers); // { Leonard: 50 }

console.log('----------------------------')
Bank.transfer(ubs, s, creditSuisse, l, 25);
console.log(creditSuisse.customers); // { Leonard: 75 }
console.log(ubs.customers); // { Sheldon: 275 }
