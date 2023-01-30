// Shorthand Object Properties

// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = reviews.reduce((acc, cur) => acc + cur);
//   const avg = sum / arr.length;
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg,
//   };
// };
// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = reviews.reduce((acc, cur) => acc + cur);
//   const avg = sum / arr.length;
//   return {
//     min,
//     max,
//     sum,
//     avg,
//   };
// };

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const stats = getStats(reviews);

//  COMPUTED PROPERTIES

// const role = 'host';
// const person = 'Jools Holland';
// const role2 = 'Director';
// const person2 = 'James Cameron';

// // const team = {};
// // team[role] = person;
// // team[role2] = person2;

// const team = {
//   [role]: person,
//   [role2]: person2,
//   [1 + 6 + 9]: 'sexteen',
// };

// // function addProp(obj, key, val) {
// //   const copy = { ...obj };
// //   copy[key] = val;
// //   return copy;
// // }
// const addProp = (obj, key, val) => {
//   return { ...obj, [key]: val };
// };

// const res = addProp(team, 'happy', ':)');

//  ADDING METHODS TO OBJECT

// const add = function (x, y) {
//   return x + y;
// };

// const math = {
//   add,
// };

// const math = {
//   add: function (x, y) {
//     return x + y;
//   },
//   multiply: function (x, y) {
//     return x * y;
//   },
// };

//  METHOD SHORTHAND Sintax

// const auth = {
//   username: 'TommyBot',
//   login() {
//     console.log('LOGGED YOU IN');
//   },
//   logout() {
//     console.log('GOODBYE');
//   },
// };

// Intro to THIS keyword

function sayHi() {
  console.log('Hi');
  console.log(this);
}

// const greet = function () {
//   console.log(this);
// };

//  THIS in Methods

// const person = {
//   first: 'Cherilyn',
//   last: 'Sarkisian',
//   nickName: 'Cher',
//   fullName() {
//     const { first, last, nickName } = this;
//     return `${first} ${last} AKA ${nickName}`;
//   },
//   printBio() {
//     console.log(this);
//     const fullName = this.fullName();
//     console.log(`${fullName} is a person!`);
//   },
//   laugh: () => {
//     console.log(this);
//     console.log(`${this.nickName} says AHAHHA`);
//   },
// };

// //  THIS Invocation Context

// const printBio = person.printBio;

// const annoyer = {
//   phrases: [
//     'literally',
//     'cray cray',
//     'I can`t even',
//     'Totes!',
//     'YOLO',
//     'Can`t` Stop, Won`t Stop',
//   ],
//   pickPhrase() {
//     const { phrases } = this;
//     const idx = Math.floor(Math.random() * phrases.length);
//     return phrases[idx];
//   },
//   start() {
//     this.timerId = setInterval(() => {
//       console.log(this.pickPhrase());
//     }, 3000);
//   },

//   stop() {
//     clearInterval(this.timerId);
//   },
// };

// Approach withot object:
function initializeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultiple(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCard(deck, drawnCards));
  }
  return cards;
}

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
}

const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pockerHand = drawMultiple(5, firstDeck, drawnCards);

//  Approach with object

// const myDeck = {
//   deck: [],
//   drawnCards: [],
//   suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//   values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//   initializeDeck() {
//     const { suits, values, deck } = this;
//     for (let value of values.split(',')) {
//       for (let suit of suits) {
//         deck.push({ value, suit });
//       }
//     }
//     // return deck;
//   },
//   drawCard() {
//     const card = this.deck.pop();
//     this.drawnCards.push(card);
//     return card;
//   },
//   drawMultiple(numCards) {
//     const cards = [];
//     for (let i = 0; i < numCards; i++) {
//       cards.push(this.drawCard());
//     }
//     return cards;
//   },
//   shuffle() {
//     const { deck } = this;
//     // loop over array baclwards
//     for (let i = deck.length - 1; i > 0; i--) {
//       // pick random index before current element
//       let j = Math.floor(Math.random() * (i + 1));
//       // swap
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//   },
// };
// myDeck.initializeDeck();
// myDeck.shuffle();
// const h1 = myDeck.drawMultiple(2);
// const h2 = myDeck.drawMultiple(2);
// const h3 = myDeck.drawMultiple(5);

//  Deck factory
const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
      const { suits, values, deck } = this;
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({ value, suit });
        }
      }
      // return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      // loop over array baclwards
      for (let i = deck.length - 1; i > 0; i--) {
        // pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        // swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

const deck2 = makeDeck();
deck2.initializeDeck();
