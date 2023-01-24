if (1 !== 1) {
  console.log('It`s true!');
}

// Example 3
let num = 37;

if (num % 2 !== 0) {
  console.log('ODD NUMBER');
}

// Performance Review
// 3- superstar
// 2 - meets expectations
// 1 - needs improvment
// anything else - wtf?

let rating = 1;
if (rating === 3) {
  console.log(' YOU ARE A SUPERSTAR!');
} else if (rating === 2) {
  console.log('MEETS EXPECTATIONS');
} else if (rating === 1) {
  console.log('NEEDS IMPROVEMENT');
} else {
  console.log('INVALID RATING!');
}

let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`
  );
}

// Nesting Conditionals

// let password = 'kitty';

// if (password.length >= 6) {
//   if (password.indexOf(' ') === -1) {
//     console.log('Valid Password');
//   } else {
//     console.log('Password is long enough, but cannot contains spaces');
//   }
// } else {
//   console.log('Password must be longer!');
// }

// Truty and Falsy values

// Falsy values:
// false
// 0
// ''
// null
// undefined
// NaN

let mystery = 5;

if (mystery) {
  console.log('TRUTHY');
} else {
  console.log('FALSY');
}
///////////////////////////////

let loggedInUser = null;

if (loggedInUser) {
  console.log('YOU ARE LOGGED IN!');
} else {
  console.log('PLEASE LOG IN!');
}

// LOGICAL AND &&

let password = 'chickenGal';
if (password.length >= 8 && password.indexOf(' ') === -1) {
  console.log('VALID PASSWORD');
} else {
  console.log('INVALID PASSWORD');
}

let number = 3;

if (number >= 1 && number <= 10) {
  console.log('NUMBER is between 1 and 10');
} else {
  console.log('Pleas guess a number between 1 and 10');
}

// LOGICAL OR ||

let age = 30;
if (age < 6 || age >= 65) {
  console.log('YOU GET IN FOR FREE');
} else {
  console.log('YOU MUST PAYYY!');
}

let color = 'violet';
if (color === 'purple' || color === 'lilac' || color === 'violet') {
  console.log('GREAT CHOICE!');
}

// Operator NOT !

let loggedInUser1;

// IF there isn`t a logged in user

if (!loggedInUser1) {
  console.log('Get OUT OF HERE!');
}

let flavor = 'watermelon';
// if (flavor !== 'grape' && flavor !== 'cherry') {
//   console.log('We dont have that flavor!');
// }

if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log('We dont have that flavor!');
}

// Operator precedence

let x = 7;
x == 7 || (x === 3 && x > 10);

// NOT (!) has higher precedence than && and ||, && has higher precedence than ||

// Switch statement
let day = 3;

// if (day === 1) {
//   console.log('MONDAY');
// } else if (day === 2) {
//   console.log('TUESDAY');
// } else if (day === 3) {
//   console.log('WEDNESDAY');
// } else if (day === 4) {
//   console.log('THURSDAY');
// } else if (day === 5) {
//   console.log('FRIDAY');
// } else if (day === 6) {
//   console.log('SATURDAY');
// } else if (day === 7) {
//   console.log('SUNDAY');
// } else {
//   console.log('INVALID DAY');
// }

switch (day) {
  case 1:
    console.log('MONDAY');
    break;
  case 2:
    console.log('TUESDAY');
    break;
  case 3:
    console.log('WEDNESDAY');
    break;
  case 4:
    console.log('TURSDAY');
    break;
  case 5:
    console.log('FRIDAY');
    break;
  case 6:
    console.log('SUTARDAY');
    break;
  case 7:
    console.log('SUNDAY');
    break;
  default:
    console.log('INVALID DAY!');
    break;
}

let emoji = 'heart';

switch (emoji) {
  case 'sad face':
  case 'happy face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  case 'heart':
  case 'lips':
    console.log('red');
    break;
}

// Ternary operator

let num1 = 7;
//  if(num1 === 7) {
//   console.log('lucky!');
//  } else {
//   console.log('BAD!');
//  }

// num1 === 7 ? console.log('Lucky!') : console.log('BAD!');

let userStatus = 'offline';

// let statusColor;

// if(statusColor === 'offline') {
//   color = 'red'
// } else {
//   color = 'green';
// }

let statusColor = userStatus === 'offline' ? 'red' : 'green';
console.log(statusColor);
