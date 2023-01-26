//  FUNCTION SCOPE
// function lol() {
//   let person = 'Tom';
//   const age = 45;
//   var color = 'teal';
//   console.log(age);
// }

// function changeColor() {
//   let color = 'purple';
//   const age = 19;
//   console.log(age);
// }

// lol();
// changeColor();

// let bird = 'mandarin duck';

// function birdWatch() {
//   let bird = 'golden pheasant';
//   console.log(bird);
// }
// birdWatch();
// console.log(bird);

// BLOCK SCOPE

// if (true) {
//   // let animal = 'eel';
//   // const animal = 'eel';
//   var animal = 'eel';
//   console.log(animal);
// }
// console.log(animal);

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// for (var i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// console.log(i);

// function doubleArr(arr) {
//   const result = [];
//   for (let num of arr) {
//     let double = num * 2;
//     result.push(double);
//   }
//   return result;
// }

// console.log(doubleArr([1, 2, 3, 4]));

// LEXICAL SCOPE

// function outer() {
//   let movie = 'Amadeus';

//   function inner() {
//     let movie = 'The shining';
//     console.log(movie.toUpperCase());
//   }
//   inner();
// }

// outer();

// FUNCTION EXPRESSION

// function add(x, y) {
//   return x + y;
// }

// const sum = function (x, y) {
//   return x + y;
// };

// console.log(add(4, 5));
// console.log(sum(9, 3));
// console.dir(sum);
// console.dir(add);

// const product = function multiply(x, y) {
//   return x * y;
// };

// console.dir(product);

//  HIGH ORDER FUNCTIONS

// function add(x, y) {
//   return x + y;
// }

// const subtract = function (x, y) {
//   return x - y;
// };

// function multiply(x, y) {
//   return x * y;
// }

// const divide = function (x, y) {
//   return x / y;
// };

// const operations = [add, subtract, multiply, divide];
// for (let funk of operations) {
//   console.log(funk(30, 5));
// }

// const thing = {
//   doSomething: multiply,
// };
// console.log(thing.doSomething(50, 2));

//  FUNCTIONS as ARGUMENTS

// function callThreeTimes(f) {
//   f();
//   f();
//   f();
// }

// function cry() {
//   console.log('BOO HOO I`m SO SAD');
// }

// function rage() {
//   console.log('I HATE EVERYTHING!');
// }
// // callThreeTimes(rage);

// function repeatNTimes(action, num) {
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }

// // repeatNTimes(rage, 13);
// // repeatNTimes(cry, 5);

// function pickOne(f1, f2) {
//   const random = Math.random();
//   if (random < 0.5) {
//     f1();
//   } else {
//     f2();
//   }
// }

// pickOne(rage, cry);

//  FUNCTIONS AS RETURN VALUE

// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// const triple = multiplyBy(3);

// const double = multiplyBy(2);
// const halve = multiplyBy(0.5);

// console.log(triple(5));
// console.log(double(5));
// console.log(halve(5));

// function makeBetweenFunc(x, y) {
//   return function (num) {
//     if (num >= x && num <= y) {
//       return true;
//     }
//     return false;
//   };
// }
// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }
// const isChild = makeBetweenFunc(0, 18);
// console.log(isChild(15));

// const isInNineties = makeBetweenFunc(1990, 2000);
// console.log(isInNineties(1989));

//  Callbacks

// function grumpus() {
//   alert('ARGH GO AWAY!');
// }

// setTimeout(function () {
//   alert('WELCOME!');
// }, 2000);

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   alert('WHY DID YOU CLICK ME??!!');
// });

//  HOISTING

// console.log(animal);
// // var animal = 'Tapir';
// console.log(animal);

// console.log(shrimp);
// let shrimp = 'Harlequin Shrimp';

// console.log(shrimp);

// console.log(shrimp);
// const shrimp = 'Harlequin Shrimp';

// console.log(shrimp);

// howl();
// function howl() {
//   console.log('AWOOOOO');
// }

hoot();
const hoot = function () {
  console.log('HOOO HOOO');
};
hoot();
