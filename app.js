// const numbers = [21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function (num) {
//   console.log(num * 2);
// });

// function printTriple(n) {
//   console.log(n * 3);
// }

// numbers.forEach(printTriple);

// numbers.forEach(function (num, idx) {
//   console.log(idx, num);
// });

// const books = [
//   {
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', ' Neil Gaiman'],
//     rating: 4.25,
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//   },
//   {
//     title: 'American Gods',
//     authors: [' Neil Gaiman'],
//     rating: 4.11,
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//   },
// ];

// books.forEach(function (book) {
//   console.log(book.title.toUpperCase());
// });

// for (let book of books) {
//   console.log(book.title.toUpperCase());
// }

// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title.toUpperCase());
// }

// const numbers = [21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy'];

// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

// const doubles2 = [];
// for (let num of numbers) {
//   doubles2.push(num * 2);
// }

// const numDetail = numbers.map(function (num) {
//   return {
//     value: num,
//     isEven: num % 2 === 0,
//   };
// });

// const wordsWithDot = words.map(function (word) {
//   return word.toUpperCase().split('').join('.');
// });

// const books = [
//   {
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', ' Neil Gaiman'],
//     rating: 4.25,
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//   },
//   {
//     title: 'American Gods',
//     authors: [' Neil Gaiman'],
//     rating: 4.11,
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//   },
// ];

// const titles = books.map(function (book) {
//   return book.title;
// });

// ARROW FUNCTIONS

// const square = function(x) {
//   return x * x;
// }

// const square = (x) => {
//   return x * x;
// };

// const isEven = (num) => {
//   return num % 2 === 0;
// };

// const multiply = (x, y) => {
//   return x * y;
// };

// const greet = () => {
//   console.log('HI!');
// };

// const square = (n) => n * n;

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const doubles1 = nums.map(function (n) {
//   return n * 2;
// });

// const doubles2 = nums.map((n) => {
//   return n * 2;
// });

// const doubles3 = nums.map((n) => n * 2);

// const parityList = nums.map(function (n) {
//   if (n % 2 === 0) {
//     return 'even';
//   }
//   return 'odd';
// });

// const parityList = nums.map((n) => {
//   if (n % 2 === 0) return 'even';
//   return 'odd';
// });

// const parityList = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
// console.log(parityList);

// const movies = [
//   'The Fantastic Mr. Fox',
//   'Mr. and Mrs. Smith',
//   'Mrs. Doubtfire',
//   'Mr. Deeds',
// ];

// const movie = movies.find((movie) => {
//   return movie.includes('Mrs');
// });

// const movie2 = movies.find((m) => m.indexOf('Mrs') === 0);

// const books = [
//   {
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25,
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11,
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//   },
// ];

// const goodBook = books.find((b) => b.rating >= 4.3);
// const neilBook = books.find((b) => b.authors.includes('Neil Gaiman'));

// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// const odds = nums.filter((n) => n % 2 === 1);
// const evens = nums.filter((n) => n % 2 === 0);

// const bigNums = nums.filter((n) => n > 50);

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
];

const goodBooks = books.filter((b) => b.rating > 4.3);

const fantasyBooks = books.filter((book) => book.genres.includes('fantasy'));

const shortForm = books.filter(
  (book) =>
    book.genres.includes('short stories') || book.genres.includes('essays')
);

// const query = 'The';
// const results = books.filter((book) =>
//   book.title.toLowerCase().includes(query.toLowerCase())
// );

const words = ['dog', 'dig', 'log', 'bat', 'wag'];
const all3Lets = words.every((word) => word.length === 3);
const allEndInG = words.every((word) => {
  const last = word.length - 1;
  return word[last] === 'g';
});

const someStartWithD = words.some((word) => word[0] === 'd');

const allGoodBooks = books.every((book) => book.rating > 3.5);

const any2Authors = books.some((book) => book.authors.length === 2);

const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

const badSort = prices.slice().sort();

const ascSort = prices.slice().sort((a, b) => a - b);

const descSort = prices.slice().sort((a, b) => b - a);

books.sort((a, b) => a.rating - b.rating);

const nums = [3, 4, 5, 6, 7];

const product = nums.reduce((acc, curr) => {
  return acc * curr;
});

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const maxGrade = grades.reduce((max, curr) => {
//   if (curr > max) return curr;
//   return max;
// });

const maxGrade = grades.reduce((max, cur) => {
  return Math.max(max, cur);
});
const minGrade = grades.reduce((min, cur) => {
  return Math.min(min, cur);
});

const sum = [10, 20, 30, 40, 50].reduce((sum, cur) => {
  return sum + cur;
}, 1000);

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// const results = votes.reduce((tally, cur) => {
//   if (tally[cur]) {
//     tally[cur]++;
//   } else {
//     tally[cur] = 1;
//   }
//   return tally;
// }, {});
const results = votes.reduce((tally, cur) => {
  tally[cur] = (tally[cur] || 0) + 1;
  return tally;
}, {});

const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});
