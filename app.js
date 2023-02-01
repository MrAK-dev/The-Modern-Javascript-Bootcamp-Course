//  name todd
// email -> todd@gmail.com
//  age -> 89

//  XML

//  <name>
//  <first>Todd</first>
// <last>Snith</last>
// </name>
// <email>todd@gmail.com</email>

//  JSON
// {
//   "name": {
//     "first": "Todd",
//     "last": "Smith",
//     "email": "Todd@gmail.com"
//   }
// }

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function () {
//   console.log('First Req  WORKED!');
//   const data = JSON.parse(this.responseText);
//   const filmUrl = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener('load', function () {
//     console.log('Second Req  WORKED!');
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData);
//   });
//   filmReq.addEventListener('error', function (e) {
//     console.log('ERROR', e);
//   });
//   filmReq.open('GET', filmUrl);
//   filmReq.send();
//   // for (let planet of data.results) {
//   //   console.log(planet.name);
//   // }
// });
// firstReq.addEventListener('error', () => {
//   console.log('ERROR!');
// });
// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log('Request Sended!');

//  FETCH

// fetch('https://swapi.dev/api/planets/')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Status Code Error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log('Fetched all planets (first 10)');
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//     // const filmUrl = data.results[0].films[0];
//     const nextUrl = data.next;
//     // return fetch(filmUrl);
//     return fetch(nextUrl);
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Status Code Error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log('FETCHED Next 10 planets');
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//   })
//   .catch((err) => {
//     console.log('SOmeting wents wrong with fetch', err);
//   });

// const checkStatusAndParse = (response) => {
//   if (!response.ok) {
//     throw new Error(`Status Code Error: ${response.status}`);
//   }
//   return response.json();
// };

// const printPlanets = (data) => {
//   console.log('Loaded 10 more planets...');
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
//   return fetch(url);
// };

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log('SOmeting wents wrong with fetch', err);
//   });

//  AXIOS

// axios
//   .get('https://swapi.dev/api/planets/')
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// axios
//   .get('https://swapi.dev/api/planets/')
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//     return axios.get(data.next);
//   })
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//   })
//   .catch((err) => {
//     console.log('ERROR!', err);
//   });

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log('ERROR!', err);
  });
