const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   alert('Submitted the form');
//   console.log('cc', creditCardInput.value);
//   console.log('terms', termsCheckbox.checked);
//   console.log('veggieSelect', veggieSelect.value);
//   //  send form data to db
//   //  append something to page using form data
// });

const formData = {};
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener('change', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
}
// for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
//   input.addEventListener('input', ({ target }) => {
//     const { name, type, value, checked } = target;
//     formData[name] = type === 'checkbox' ? checked : value;
//   });
// }
// creditCardInput.addEventListener('input', (e) => {
//   console.log('CC Changed', e);
//   formData['cc'] = e.target.value;
// });
// veggieSelect.addEventListener('input', (e) => {
//   console.log('Veggie Changed', e);
//   formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//   console.log('CHECKBOX', e);
//   formData['agreeToTerms'] = e.target.checked;
// });
