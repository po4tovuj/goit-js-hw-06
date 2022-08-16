function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const parentBox = document.querySelector('#boxes');
document.querySelector('[data-create]').addEventListener('click', addBoxes);
document
  .querySelector('[data-destroy]')
  .addEventListener('click', destroyBoxes);

const countParams = (() => {
  let params = 20;
  function innerFunc() {
    params += 10;
    return params;
  }
  return innerFunc;
})();
function addBoxes() {
  const boxesCount = document.querySelector('input').value;
  let elements = '';
  if (!boxesCount) return;

  for (let i = 1; i <= boxesCount; i++) {
    let div = document.createElement('div');
    let params = countParams();

    div.style.cssText = `
        width: ${params}px;
        height: ${params}px;
        background-color: ${getRandomHexColor()};
      `;

    elements += div.outerHTML;
  }
  parentBox.insertAdjacentHTML('beforeend', elements);
}
function destroyBoxes() {
  parentBox.innerHTML = '';
}
