for (let i = 1; i <= 10; i++) {
  console.log('Hello!: ', i);
}

const examScores = [98, 77, 84, 81, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}

const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86,
  },
  {
    firstName: 'Artemis',
    grade: 97,
  },
  {
    firstName: 'Apollo',
    grade: 90,
  },
  {
    firstName: 'Hera',
    grade: 72,
  },
];

// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored ${student.grade}`);
// }

let total = 0;
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
}
console.log(total / myStudents.length);

const word = 'stressed';
let reversedWord = '';
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
  console.log(word[i]);
  console.log(reversedWord);
}

// for (let i = 1; i <= 10; i++) {
//   console.log('OUTER LOOP:', i);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log('    INNER LOOP:', j);
//   }
// }

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}
console.log(totalScore);

let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
// while (guess !== target) {
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN!`);

// while(some condition)
// in the loop, update or attempt to make that condition false

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

while (true) {
  if (target === guess) break;
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!`);

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

// FOR OF

for (let subreddit of subreddits) {
  console.log(subreddit);
}

for (let char of 'helloooasfad') {
  console.log(char.toUpperCase());
}

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     sum += row[j];
//   }
//   console.log(`$${row} summed to ${sum}`);
// }

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`$${row} summed to ${sum}`);
}

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++) {
  // console.log(words1[i], words2[i])
  console.log(`${words1[i]}${words2[i]}`);
}

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5,
};

// for (let movie of movieReviews) {
//   console.log(x);
// }
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let totalR = 0;
for (let rating of ratings) {
  console.log(rating);
  totalR += rating;
}

let avg = totalR / ratings.length;
console.log(avg);

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000,
};

let totalJ = 0;
for (let property in jeopardyWinnings) {
  totalJ += jeopardyWinnings[property];
}
console.log(totalJ);

for (let k in [88, 99, 77, 66]) {
  console.log(k);
}
