const allList = document.querySelector('#categories');
console.log(`Number of categories: ${allList.childElementCount}`);

const items = allList.childNodes;

items.forEach((element) => {
  if (element.nodeName === 'LI') {
    const h2 = element.firstElementChild;
    console.log(`Category: ${h2.textContent}`);

    const ul = element.lastElementChild;
    console.log(`Elements: ${ul.childElementCount}`);
  }
});
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
