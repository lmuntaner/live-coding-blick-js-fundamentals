const group = {
  Amy: 20,
  Bill: 15,
  Chris: 10
};

const splitTheBill = (payments) => {
  // let sum = 0;
  // for (const key in payments) {
  //   sum = sum + payments[key];
  // }
  // const keys = Object.keys(payments);
  // const count = keys.length;
  // const split = sum / count;
  // const result = {};
  // for (let i = 0; i < keys.length; i++) {
  //   const key = keys[i];
  //   const initialPayment = payments[key];
  //   const personSplit = split - initialPayment;
  //   result[key] = personSplit;
  // }
  const values = Object.values(payments);
  console.log(values);
  // const sum = (accumulator, value) => {
  //   console.log('in da sumFn', value);
  //   const partialSum = accumulator + value;
  //   return partialSum;
  // };
  // const split = values.reduce(sum, 0);
  // console.log(split);
  // const addTen = (dog) => {
  //   console.log('in da addTen', dog);
  //   return dog + 10;
  // };
  // const numbers = values.map(addTen);
  const greaterThanTen = (cat) => {
    console.log('in da greaterThanTen', cat);
    return cat > 10;
  }
  // const lowNumbers = values.filter(greaterThanTen);

  const lowNumbers = [];
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const isGreater = greaterThanTen(value);
    if (isGreater) {
      lowNumbers.push(value);
    }
  }
  console.log(value);
  // addTen(values[0]);
  // addTen(values[1]);
  // addTen(values[2]);
  console.log(lowNumbers)
}

splitTheBill(group); // => { Amy: -5, Bill: 0, Chris: 5 }