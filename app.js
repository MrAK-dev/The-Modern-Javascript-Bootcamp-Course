const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 0f 7',
  avgGoodSleep: '2:13',
};
console.log(fitBitData);

let data = { a: 1 };

const numbers = {
  100: ' one hundred',
  16: 'sixteen',
};

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
};
let mysteryColor = 'yellow';

console.log(palette[mysteryColor]);
console.log(palette.mysteryColor);

const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;
console.log(userReviews);

const student = {
  firstName: 'David',
  lastName: 'Jones',
  strength: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg);

const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1,
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3,
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2,
  },
];

const game = {
  player1: { username: 'Blue', playingAs: 'X' },
  player2: { username: 'Muffins', playingAs: 'O' },
  board: [
    ['O', null, 'X'],
    ['X', 'O', 'X'],
    [null, 'O', 'X'],
  ],
};

const palette2 = palette;

palette2.green = '#ebf875';
console.log(palette);

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;
console.log(nums === mystery);
moreNums.push(4);
console.log(nums === moreNums);
