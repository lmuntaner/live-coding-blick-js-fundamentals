const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const obj2 = {
  hi: 10,
  1: 100,
};

// sum all the values: 10
const sumValues = (dictionary) => {
  // Option 1: for ... in
  // let sum = 0;
  // for (const k in dictionary) {
  //   sum += dictionary[k];
  // }
  // return sum;

  // Option 2: Object.keys
  // const keys = Object.keys(dictionary);
  // let sum = 0;
  // keys.forEach((k) => {
  //   sum += dictionary[k];
  // })
  // return sum;

  // Option 3: Object.values
  const values = Object.values(dictionary);
  const sum = values.reduce((partialSum, value) => {
    return partialSum + value;
  }, 0);
  return sum;
}

console.log(sumValues(obj)); // 10
console.log(sumValues(obj2));