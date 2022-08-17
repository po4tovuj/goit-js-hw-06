const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listElement = document.querySelector('#ingredients');
if (!listElement) return;
const childElements = ingredients.map((item) => {
  let child = document.createElement('li');
  child.innerHTML = item;
  child.classList.add('item');
  return child;
});
listElement.prepend(...childElements);
