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
