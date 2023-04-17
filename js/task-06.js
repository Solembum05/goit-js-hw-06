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
