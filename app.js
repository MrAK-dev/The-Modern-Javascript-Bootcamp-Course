// Arrays
let shoppingList1 = ['cereal', 'cheese', 'ice'];

let lotto = [45, 12, 23, 25, 34];

let myCollection = [12, 'dog', true, null, NaN];

let colors = ['red', 'orange', ' yellow', 'green', 'blue', 'indigo', 'violet'];

let shoppingList = ['Cheddar Cheese', '2% Milk'];
shoppingList[1] = 'Whole Milk';
shoppingList[2] = 'Ice Cream';

shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Potatoes';

let topSongs = [
  'First Time Ever i Saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars',
];

topSongs.push('Fortunate Son');

topSongs.push(true);
topSongs.pop();

let dishesToDo = ['bog platter'];

dishesToDo.unshift('large plate');

dishesToDo.unshift('small plate');

dishesToDo.unshift('frok', 'knife');

dishesToDo.unshift('small spoon');
dishesToDo.unshift('large spoon');

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

console.log(fruits.concat(veggies));

let allFood = fruits.concat(veggies, meats);
console.log(allFood);

let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter',
];

console.log(ingredients.includes('fish'));
console.log(ingredients.includes('water', 3));
console.log(ingredients.includes('water', 0));

if (ingredients.includes('flour')) {
  console.log('Something');
}

console.log(ingredients.indexOf('eel'));
console.log(ingredients.indexOf('maple syrup'));

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
letters.reverse();
console.log(letters);

console.log(letters.join('-'));

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
let swimmers = animals.slice(0, 3);
console.log(swimmers);

let mammals = animals.slice(2, 4);
console.log(mammals);

// let reptails = animals.slice(4, animals.length);
// let reptails = animals.slice(4, 6);
let reptails = animals.slice(4);
console.log(reptails);
let quadruped = animals.slice(-3);
console.log(quadruped);

// animals.slice() - copy of entire array
let copy = animals.slice();

animals.splice(1, 0, 'octopus');
console.log(animals);
animals.splice(3, 2);
console.log(animals);
animals.splice(3, 0, 'snake', 'frog');
console.log(animals);
animals.splice(0, 2, 'SHARK!', 'OKTOPUS!');
console.log(animals);

//SORTING

let people = ['Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
people.sort();
console.log(people);

let nums = [10, 34.1, 100000, 67, 99];
nums.sort();
console.log(nums);

// Intro to reference types
let fruit = 'orange';
let color = fruit;

fruit = 'watermelon';
console.log(color);

let numsT = [5, 6, 7, 8];
let otherNums = numsT;
numsT.push(9);
console.log(otherNums);
otherNums.pop();
otherNums.pop();
console.log(numsT);

const foods = ['milk'];
foods.push('chocolate');
foods.unshift('tortillas');
foods.pop();
foods.pop();
foods.pop();
const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram'],
  ['peahen', 'peacock'],
];
console.log(animalPairs[2][0]);
