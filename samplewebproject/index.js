document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const { value } = document.querySelector('input');

  const header = document.querySelector('h2');
  if (value.includes('@')) {
    header.innerHTML = 'Looks good!';
  } else {
    header.innerHTML = 'Invalid email!';
  }
});
