function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector('.change-color');
const spanElement = document.querySelector('.color');
const bodyEl = document.querySelector('body');
btn.addEventListener('click', changeColor);
function changeColor() {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanElement.innerHTML = newColor;
}
