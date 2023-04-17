const body = document.querySelector('body');
const currentColor = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');

changeBtn.addEventListener('click', onChange);

function onChange() {
  currentColor.textContent = getRandomHexColor();
  body.style.backgroundColor = currentColor.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
