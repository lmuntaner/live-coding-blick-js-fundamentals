// const animal = 'cat';

// if (animal === 'dog') {
//   const msg = 'you like dogs';
//   console.log(msg);
// } else if (animal === 'cat') {
//   console.log('You like cats!')
// } else {
//   console.log('You do not like dogs :(');
// }

// const numbers = [10, 20, 33, 44, 51, 120, 1000];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);

// for (let i = 0; i < numbers.length; i = 1 + i) {
//   console.log(numbers[i]);
// }

// function multiply(number1, number2) {
//   const result = number1 * number2;
//   console.log('in da function');
//   return result;
// }

// const multiply = function (number1, number2) {
//   const result = number1 * number2;
//   console.log('in da function');
//   return result;
// }

// console.log(multiply);

// for (let i = 5; i > 0; i--) {
//   multiplyTen(4);
// }

// console.log(1 + 1);
// const multiplication = multiply(3, 13);
// console.log(multiplication);

// const multiplication1 = multiply(6, 13, 1000);
// console.log(multiplication1);

// console.log(multiply(10, 30));
// multiply(1, 10);
// multiply(5, 49);

// eatWord('pizza');
// 'pizza'
// 'pizz'
// 'piz'
// ...
// 'p'

// const eatWord = (word) => {
//   const characters = word.split('');
//   for (let i = characters.length; i > 0; i--) {
//     const subStringCharacters = characters.slice(0, i);
//     const subString = subStringCharacters.join('');
//     console.log(subString);
//   }
// }

function eatWord(word) {
  console.log(word);
  if (word.length === 1) {
    return 'finished eating';
  }
  const slicedWord = word.slice(0, -1);
  return eatWord(slicedWord);
}


// Test
const result = eatWord('salad');
console.log('after da call');
console.log(result);
// 'salad'
// 'sala'
// 'sal'
// ...
// 's'