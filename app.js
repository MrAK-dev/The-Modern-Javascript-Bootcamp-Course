// const h1 = document.querySelector('h1');
// h1.innerText = 'I`m hungry!';
// h1.textContent = 'I`m not hungry!';
const ul = document.querySelector('ul');
// ul.innerText = 'I AM A BIG UL!';
const p = document.querySelector('#main');
p.innerText;
p.textContent;

const form = document.querySelector('form');
// form.innerHTML = 'not useful text';
// form.innerHTML = '<b>I am a bold tag</b>';
document.querySelector('h1');
// h1.innerHTML += ' is cool';
// h1.innerHTML += ' <em>!!!!</em>';
// h1.innerText += ' <em>!!!!</em>';

const inputs = document.querySelectorAll('input');

const range = document.querySelector('input[type="range"]');
range.getAttribute('max');
range.getAttribute('min');
range.setAttribute('min', -500);

const firstLi = document.querySelector('li');
firstLi.parentElement;
firstLi.parentElement.parentElement;
firstLi.nextElementSibling;
const thirdLi = firstLi.nextElementSibling.nextElementSibling;
thirdLi.previousSibling;

const allLis = document.querySelectorAll('li');
// for (let i = 0; i < allLis.length; i++) {
//   console.log(allLis[i].innerText);
//   allLis[i].innerText = 'We are the champions';
// }

// for (let li of allLis) {
//   li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>';
// }

// h1.style.color = 'orchid';

p.style.color = 'white';
p.style.backgroundColor = 'black';
p.style.fontSize = '40px';

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// allLis.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// });

const li = document.querySelector('li');
const styles = getComputedStyle(li);
// li.style.color = 'pink';

// const compStyles = getComputedStyle(h1);

const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

// todo.getAttribute('class');
// todo.setAttribute('class', 'todo done');

// todo.classList.remove('done');
// todo.classList.add('done');
todo.classList.toggle('done');

//  CREATING LELEMENTS

const newh2 = document.createElement('h2');
newh2.innerText = 'I like animals';
newh2.classList.add('special');

const section = document.querySelector('section');
section.appendChild(newh2);

const newImg = document.createElement('img');
newImg.src =
  'https://images.unsplash.com/photo-1559899551-4037d17859c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';

document.body.appendChild(newImg);
const newLink = document.createElement('a');
newLink.innerText = 'New img click me';
newLink.href =
  'https://images.unsplash.com/photo-1559899551-4037d17859c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

// const firstP = document.querySelector('p');
// firstP.appendChild(newLink);

const parentUl = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'I AM A NEW LI';
// parentUl.appendChild(newLi);
const firstLI = document.querySelector('li.todo');
parentUl.insertBefore(newLi, firstLI);
const lastTodo = document.querySelectorAll('li.todo')[2];
parentUl.insertBefore(newLi, lastTodo);
const i = document.createElement('i');
i.innerText = 'I AM ITALICS!!!';
const firstP = document.querySelector('p');
firstP.insertAdjacentElement('beforebegin', i);
firstP.insertAdjacentElement('afterend', i);
firstP.insertAdjacentElement('afterbegin', i);
firstP.insertAdjacentElement('beforeend', i);

firstP.append(i, newLi);
firstP.prepend(i, newLi);
firstP.appendChild(i, newLi);

// Remove element

const sectionUL = document.querySelector('section ul');

const removeMe = sectionUL.querySelector('.special');
const deleted = sectionUL.removeChild(removeMe);

const h1 = document.querySelector('h1');
h1.remove();
