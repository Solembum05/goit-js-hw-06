// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const fieldInput = document.getElementById('validation-input');
const length = Number(fieldInput.getAttribute('data-length'));

fieldInput.addEventListener('blur', onIputBlur);

function onIputBlur(event) {
  console.dir(event.currentTarget.value.length);
  if (event.currentTarget.value.length === length) {
    fieldInput.classList.add('valid');
    fieldInput.classList.remove('invalid');
  } else {
    fieldInput.classList.add('invalid');
    fieldInput.classList.remove('valid');
  }
}
