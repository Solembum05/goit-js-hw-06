const fieldInput = document.getElementById('font-size-control');
const text = document.getElementById('text');
fieldInput.addEventListener('input', onRangeInput);
function onRangeInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
