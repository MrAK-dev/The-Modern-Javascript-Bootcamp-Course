// const repeat = (str, times) => {
//   let result = '';
//   for (let i = 0; i < times; i++) {
//     result += str;
//   }

//   return result;
// };

// const scream = (str) => {
//   return str.toUpperCase() + '!!!';
// };

// const getRantText = (phrase) => {
//   let text = scream(phrase);
//   let rant = repeat(text, 8);
//   return rant;
// };

// const makeRant = (phrase, el) => {
//   const h1 = document.createElement('h1');
//   h1.innerText = getRantText(phrase);
//   el.appendChild(h1);
// };
// console.log('HELLO');
// makeRant('I hate mayonnaise', document.body);
// makeRant('If you have to cough, please cover your mouth', document.body);

// console.log('I HAPPEN FIRST!');
// alert('Hi THere');
// setTimeout(function () {
// console.log('I HAPPEN THIRD');
// }, 3000);
// console.log('I happend second');

//  CALLBACK HELL

// const btn = document.querySelector('button');

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   setTimeout(() => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;
//     if (elRight + amount > bodyBoundary) {
//       console.log('DONE - CANNOT GO THAT FAR');
//       onFailure();
//     } else {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }
//   }, delay);
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 5400, 1000);
//       });
//     });
//   });
// });

// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//     //success
//     moveX(
//       btn,
//       400,
//       1000,
//       () => {
//         // success
//         moveX(
//           btn,
//           700,
//           1000,
//           () => {
//             // success
//             console.log('REALLY?');
//           },
//           () => {
//             // fail
//             alert('CANNOT MOVE FUTHER!');
//           }
//         );
//       },
//       () => {
//         // fail
//       }
//     );
//   },
//   () => {
//     // fail
//     alert('CANNOT MOVE FURTHER!');
//   }
// );

//  PROMISE

// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// willGetYouADog
//   .then(() => {
//     console.log('YAY WE GOT A DOG!!!');
//   })
//   .catch(() => {
//     console.log(':( NO DOG');
//   });
// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand > 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 5000);
//   });
// };

// makeDogPromise()
//   .then(() => {
//     console.log('YAY WE GOT A DOG!!!');
//   })
//   .catch(() => {
//     console.log(':( NO DOG');
//   });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         '/users': [
//           { id: 1, username: 'Bilbo' },
//           { id: 5, username: 'Esmeralda' },
//         ],
//         '/users/1': {
//           id: 1,
//           username: 'Bilbo',
//           upvotes: 350,
//           city: 'Lisbon',
//           topPostId: 454321,
//         },
//         '/users/5': {
//           id: 5,
//           username: 'Esmeralda',
//           upvotes: 571,
//           city: 'Honolulu',
//         },
//         '/posts/454321': {
//           id: 454321,
//           title: 'Ladies & Gentlemen, may I introduce my pet pig, Hamlet',
//         },
//         '/about': 'This is the about page',
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 1000);
//   });
// };

// fakeRequest('/about')
//   .then((res) => {
//     console.log('Status code', res.status);
//     console.log('Data', res.data);
//     console.log('Request worked!');
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log('Request failed!');
//   });

// fakeRequest('/users')
//   .then((res) => {
//     const id = res.data[0].id;
//     fakeRequest(`/users/${id}`).then((res) => {
//       const postId = res.data.topPostId;
//       fakeRequest(`/posts/${postId}`).then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log('OH NO!', err);
//   });

// fakeRequest('/users')
//   .then((res) => {
//     console.log(res);
//     const id = res.data[0].id;
//     return fakeRequest(`/users/${id}`);
//   })
//   .then((res) => {
//     console.log(res);
//     const postId = res.data.topPostId;
//     return fakeRequest(`/posts/${postId}`);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log('OH NO!', err);
//   });

const btn = document.querySelector('button');
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000)
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => {
    console.log('It Moves!');
  })
  .catch(({ bodyBoundary, amount, elRight }) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
  });
