//  the thing     event type         the code to run
//   button        click              change color
//   input         hits result        get search results
//   image         mouse over         display the img caption

// const btn = document.querySelector('#clicker');

// btn.onclick = greet;

// btn.ondblclick = function () {
//   console.log('YOU CLICKED ME! GO AWAY!');
// };

// function greet() {
//   alert('HEY BUDDY!');
// }

// addEventListener

// const btn = document.querySelector('button');

// btn.onclick = function () {
//   console.log('Clicked!');
// };

// btn.onclick = function () {
//   console.log('Clicked second time');
// };

// btn.addEventListener('click', function () {
//   alert('CLICKED!!');
// });
// btn.addEventListener('click', function () {
//   alert('SECOND CLICK!!');
// });

// btn.addEventListener('mouseover', function () {
//   btn.innerText = 'STOP TOUCHING ME!';
// });

// btn.addEventListener('mouseout', function () {
//   btn.innerText = 'Click Me!';
// });

// window.addEventListener('scroll', function () {
//   console.log('STOP SCROLLING!!!');
// });

// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function () {
//   console.log('MOUSED OVER ME');
//   const height = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);
//   btn.style.left = `${width}px`;
//   btn.style.top = `${height}px`;
// });

// btn.addEventListener('click', function () {
//   btn.innerText = 'You Got Me!';
//   document.body.style.backgroundColor = 'green';
// });

//  EVENTS ON MULTIPLE ELEMENTS

// const colors = [
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'blue',
//   'purple',
//   'indigo',
//   'violet',
// ];

// const h1 = document.querySelector('h1');
// // h1.addEventListener('mouseover', function () {
// //   console.log(this.innerText);
// // });
// const changeColor = function (e) {
//   console.log(e);
//   h1.style.color = this.style.backgroundColor;
// };
// const container = document.querySelector('#boxes');
// for (let color of colors) {
//   const box = document.createElement('div');
//   box.style.backgroundColor = color;
//   box.classList.add('box');
//   container.appendChild(box);
//   // box.addEventListener('click', function () {
//   //   printColor(box);
//   // });
//   box.addEventListener('click', changeColor);
// }

// document.body.addEventListener('keypress', function (e) {
//   console.log(e);
// });

//  Key EVENTS

const input = document.querySelector('#username');
input.addEventListener('keydown', function (e) {
  console.log('KEY DOWN!');
});
input.addEventListener('keyup', function (e) {
  console.log('KEY UP!');
});
input.addEventListener('keypress', function (e) {
  console.log('KEY PRESS!');
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('ul');

addItemInput.addEventListener('keypress', function (e) {
  console.log(e);
  if (e.key === 'Enter') {
    if (!this.value) {
      return;
    }
    //Add new item to list
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.appendChild(newItem);
    this.value = '';
  }
});
