// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const fieldInput = document.getElementById('name-input');

const output = document.getElementById('name-output');

fieldInput.addEventListener('input', onIputChange);

function onIputChange(event) {
  if (event.currentTarget.value === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = event.currentTarget.value;
  }
}