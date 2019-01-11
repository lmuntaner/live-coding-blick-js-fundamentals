// VALUES ARE TRUTHY OR FALSY
// ! NOT OPERATOR. Returns a boolean -> FALSY -> true, TRUTHY -> false
// TERNARY OPERATOR

const checks = {
};

// customer 1, orders a dish of price 5
const amount = 5;
// checks['1'] = checks['1'] + amount;
// if (checks['1']) {
//   checks['1'] = checks['1'] + amount;
// } else {
//   checks['1'] = amount;
// }
checks[1] = checks[1] ? checks['1'] + amount : amount;
// checks[1] = undefined ? checks['1'] + amount : amount;
// checks[1] = false ? checks['1'] + amount : amount;
// checks[1] = amount;
// checks[1] = 5

// checks[1] = 10 ? checks['1'] + amount : amount;
// checks[1] = true ? checks['1'] + amount : amount;
// checks[1] = checks['1'] + amount;
// checks[1] = 10 + amount
// checks[1] = 10 + 5
// checks[1] = 15

const isGreaterThanTen = amount > 10 ? 'Yes' : 'No';
// const iGTT = false ? 'Yes' : 'No';
// const iGTT = 'No';
// let isGreaterThanTen;
// if (amount > 10) {
//   isGreaterThanTen = 'Yes';
// } else {
//   isGreaterThanTen = 'No';
// }
isGreaterThanTen


// customer 2, orders a dish of price 10


console.log(checks)

