// function getData() {
//   const data = axios.get('https://swapi.dev/api/planets/');
//   console.log(data);
// }

// function greet() {
//   return 'Hello';
// }
// async function greet() {
//   return 'Hello';
// }

// greet().then((val) => {
//   console.log('Promise resolved with:', val);
// });

// async function add(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw 'X and Y must be a numbers';
//   }
//   return x + y;
// }
// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//       reject('X and Y must be a numbers');
//     }
//     resolve(x + y);
//   });
// }

// add(6, 7)
//   .then((val) => {
//     console.log('Promise resolved with:', val);
//   })
//   .catch((err) => {
//     console.log('Promise rejected with:', err);
//   });

// function getPlanets() {
//   return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then((res) => {
//   console.log(res.data);
// });

// async function getPlanets() {
//   const res = await axios.get('https://swapi.dev/api/planets/');
//   console.log(res.data);
// }
// getPlanets();

// async function getPlanets() {
//   const res = await axios.get('https://swapi.dev/api/planetss/');
//   console.log(res.data);
// }
// getPlanets().catch((err) => {
//   console.log('In Catch');
//   console.log(err);
// });

// async function getPlanets() {
//   try {
//     const res = await axios.get('https://swapi.dev/api/planetss/');
//     console.log(res.data);
//   } catch (e) {
//     console.log('In Catch!!', e);
//   }
// }
// getPlanets();

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bodyBoundary = document.body.clientWidth;
//       const elRight = element.getBoundingClientRect().right;
//       const currLeft = element.getBoundingClientRect().left;
//       if (elRight + amount > bodyBoundary) {
//         reject({ bodyBoundary, elRight, amount });
//       } else {
//         element.style.transform = `translateX(${currLeft + amount}px)`;
//         resolve();
//       }
//     }, delay);
//   });
// };
// const btn = document.querySelector('button');
// async function animateRight(el, amt) {
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
// }
// animateRight(btn, 100).catch((err) => {
//   console.log('All done!!!');
//   animateRight(btn, -100);
// });
// const btn = document.querySelector('button');
// moveX(btn, 300, 1000)
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => {
//     console.log('It Moves!');
//   })
//   .catch(({ bodyBoundary, amount, elRight }) => {
//     console.log(`Body is ${bodyBoundary}px wide`);
//     console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
//   });

//  SEQUENTIAL REQUESTS!
// async function get3Pokemon() {
//   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }
// get3Pokemon();

//  PARALLEL REQUESTS!
// async function get3Pokemon() {
//   const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   const poke1 = await prom1;
//   const poke2 = await prom2;
//   const poke3 = await prom3;
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }
// get3Pokemon();

// function changeBodyColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// }

// async function lightShow() {
//   await changeBodyColor('teal', 1000);
//   await changeBodyColor('pink', 1000);
//   await changeBodyColor('indigo', 1000);
//   await changeBodyColor('violet', 1000);
// }

// async function lightShow() {
//   const p1 = changeBodyColor('teal', 1000);
//   const p2 = changeBodyColor('pink', 1000);
//   const p3 = changeBodyColor('indigo', 1000);
//   const p4 = changeBodyColor('violet', 1000);
//   await p1;
//   await p2;
//   await p3;
//   await p4;
// }

// lightShow();

//  Promise.all;
// async function get3Pokemon() {
//   const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   const poke1 = await prom1;
//   const poke2 = await prom2;
//   const poke3 = await prom3;
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }
// get3Pokemon();

async function get3Pokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  const results = await Promise.all([prom1, prom2, prom3]);
  console.log(results);
  printPokemon(results);
}
function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}
get3Pokemon();
