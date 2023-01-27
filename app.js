//  DEFAULT PARAMS

// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y;
//   return x * y;
// }
// function multiply(x, y = 1) {
//   return x * y;
// }

// const greet = (person, greeting = 'hi') => {
//   console.log(`${greeting}, ${person}!`);
// };

// const blah = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// };

// const greet = (person, greeting = 'hi', punctuation = '!') => {
//   console.log(`${greeting}, ${person} ${punctuation}`);
// };

// SPREAD FOR Function Calls

// Math.max(3, 4, 5, 6, 7, 12, 19, 99, 3);
// Math.min(3, 4, 5, 6, 7, 12, 19, 99, 3);

// const nums = [45, 23, 34, 7, 5];

// Math.max(nums); // NaN
// Math.max(...nums);

// function giveMeFOur(a, b, c, d) {
//   console.log('a', a);
//   console.log('b', b);
//   console.log('c', c);
//   console.log('d', d);
// }

// const colors = ['red', 'orange', 'yellow', 'green'];

// const str = 'GOAT';

//  SPREAD IN Array literals

// const cephalopods = [
//   'dumbo octopus',
//   'humboldt squid',
//   'flamboyant cuttlefish',
// ];

// const gastropods = ['gaint african snail', 'banana slug', 'variable neon slug'];

// const cnidaria = ['fire coral', 'moon jelly'];

// const mollusca = [...cephalopods, ...gastropods];

// const inverts = [...cnidaria, ...gastropods, ...cephalopods];

// const cephCopy = [...cephalopods];

//  SPREAD in Object literals

// const feline = {
//   legs: 4,
//   family: 'Felidae',
// };

// const canine = {
//   family: 'Caninae',
//   furry: true,
//   legs: 4,
// };

// const dog = {
//   ...canine,
//   isPet: true,
//   adorable: true,
// };

// const houseCat = {
//   ...feline,
//   isGrumpy: true,
//   personality: 'unpredictable',
// };

// const catDog = {
//   ...canine,
//   ...feline,
// };

// const tripod = {
//   ...canine,
//   legs: 3,
// };

// const catDogClone = {
//   ...catDog,
// };

// const random = [...'hello', { ...catDog }];

//  REST

// function sum() {
//   const argsArray = [...arguments];
//   return argsArray.reduce((acc, cur) => acc + cur);
// }

// function fullName(first, last) {
//   console.log(arguments);
//   console.log(first);
// }

// const multiply = () => {
//   // arguments NOT exist in arrow functions!
//   console.log(arguments);
// };

// function sum(...nums) {
//   return nums.reduce((acc, cur) => acc + cur);
// }

// function fullName(first, last, ...titles) {
//   console.log('first', first);
//   console.log('last', last);
//   console.log('titles', titles);
// }

// const multiply = (...nums) => nums.reduce((acc, cur) => acc * cur);

//  DESTRUCTURING ARRAYs

// const raceResults = [
//   'Eliud Kipchoge',
//   'Feyisa Lelisa',
//   'Galen Rupp',
//   'Ghirmay Ghebreslassie',
//   'Alphonce Simbu',
//   'Jared Ward',
// ];

// // const gold = raceResults[0];
// // const silver = raceResults[1];
// // const bronze = raceResults[2];

// const [gold, silver, bronze] = raceResults;
// const [first, , , fourth] = raceResults;
// const [winner, ...others] = raceResults;

//  DESTRUCTURING OBJECTs

// const runner = {
//   first: 'Eliud',
//   last: 'Kipchoge',
//   country: 'Kenya',
//   title: 'Elder of the Order of the Golden Heart of Kenya',
// };

// // const { first, last, time } = runner;
// // const { country: nation, title: honorific } = runner;
// const { first, last, ...other } = runner;

//  NESTED DESTRUCTURING

// const results = [
//   {
//     first: 'Eliud',
//     last: 'Kipchoge',
//     country: 'Kenya',
//   },
//   {
//     first: 'Feyisa',
//     last: 'Lilesa',
//     country: 'Ethiopia',
//   },
//   {
//     first: 'Galen',
//     last: 'Rupp',
//     country: 'United States',
//   },
// ];

// const [{ first: goldWinner }, { country }] = results;

// const [, silverMedal] = results;
// const { country: silverCountry } = silverMedal;

//  Destructuring Parameters

const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

// function print(person) {
//   const { first, last, title } = person;
//   console.log(`${first}, ${last}, ${title}`);
// }
function print({ first, last, title }) {
  console.log(`${first}, ${last}, ${title}`);
}

const response = ['HTTP/1.1', '200 OK', 'application/json'];

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
