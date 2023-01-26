// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled ${roll}`);
// }

// function throwDice(numRolls) {
//   for (let i = 0; i < numRolls; i++) {
//     rollDie();
//   }
// }

// throwDice(3);

// function greet() {
//   console.log('Hi');
// }

// function greet(nickname) {
//   console.log(`Hi, ${nickname}!`);
// }

// greet('Tim');

// FUNCTIONS WITH MULTIPLe Args

// function square(num) {
//   console.log(num * num);
// }

// function sum(x, y) {
//   console.log(x + y);
// }

// function divide(a, b) {
//   console.log(a / b);
// }

// divide(1, 4);

// The return statement

// function add(x, y) {
//   return x + y;
// }
// const total = add(4, 5);
// console.log(total);

// function square(x) {
//   return x * x;
//   console.log('All DOne');
// }

// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   }
//   return false;
// }
// console.log(isPurple('purPle'));

// function isPurple(color) {
//   return color.toLowerCase() === 'purple';
// }
// console.log(isPurple('pink'));

// function containsPurple(arr) {
//   for (let color of arr) {
//     if (color === 'purple' || color === 'magenta') {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(containsPurple(['blue', 'pink', 'magentaa']));

// Challenge 1

// Write a isValidPassword function
// It acceots 2 arguments: password and username
// Password must :
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true
// Otherwise false

// function isValidPassword(password, username) {
//   if (
//     password.length >= 8 &&
//     !password.includes(' ') &&
//     !password.includes(username)
//   ) {
//     return true;
//   }
//   return false;
// }

// console.log(isValidPassword('achtung1', 'c'));

// Challenge 2

// Write a function to find the average value in an array of numbers

// function findAverage(arr) {
//   if (!Array.isArray(arr)) {
//     return;
//   }

//   let total = 0;
//   for (let num of arr) {
//     total += num;
//   }
//   return total / arr.length;
// }

// console.log(findAverage([1, 2, 334, 4, 5]));

// Challenge 3

// A pangram is a sentence that contains every letter of the alphabet, like :
// 'The quick brown fox jumps over the lazy dog'
// 'The five boxing wizards jump quickly'

// Write a function called isPangram, which checks to see if a given sentence
// contains every letter of the alphabet. Make sure you ignore string casing!

// function isPangram(str) {
//   let lowerCasedSentence = str.toLowerCase();
//   for (let letter of 'abcdefghijklmnopqrstuvweyz') {
//     if (lowerCasedSentence.indexOf(letter) === -1) {
//       return false;
//     }
//   }
//   return true;
// }
// function isPangram(str) {
//   let lowerCasedSentence = str.toLowerCase();
//   for (let letter of 'abcdefghijklmnopqrstuvweyz') {
//     if (!lowerCasedSentence.includes(letter)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram('The five boxing wizards jump quickly'));

// Challenge 4

// Write a getCard() function which returns a random playing card object, like:
// {
//  value: 'K',
//  suit: 'clubs'
// }

// Pick a random value from:
//----2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades,hearts,diamonds
//Return both in an object

// function getCard() {
//   const values = [
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A',
//   ];
//   const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//   const randomValueIdx = Math.floor(Math.random() * values.length);
//   const randomSuitIdx = Math.floor(Math.random() * suits.length);
//   return {
//     value: values[randomValueIdx],
//     suit: suits[randomSuitIdx],
//   };
// }
function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

  return {
    value: pick(values),
    suit: pick(suits),
  };
}
console.log(getCard());
