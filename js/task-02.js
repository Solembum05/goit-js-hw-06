const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allList = document.getElementById('ingredients');

const ingridienList = ingredients.map((item) => {
  const newEl = document.createElement('li');
  newEl.classList.add('item');

  const h2 = document.createElement('h2');
  h2.textContent = item;
  newEl.appendChild(h2);
  return newEl;
});

allList.append(...ingridienList);
