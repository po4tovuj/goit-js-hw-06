function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const parentBox = document.querySelector('#boxes');
document.querySelector('[data-create]').addEventListener('click', addBoxes);
document
  .querySelector('[data-destroy]')
  .addEventListener('click', destroyBoxes);
/*
  this should be an IIF because in other way i will need to create another var with this func call
  and will need to recall it
  const letsCount = countParams();
  and then in addBox count call it as letsCount();
  i don't see any profit for doing in this way
**/
const countParams = (() => {
  let params = 20;
  function innerFunc() {
    params += 10;
    return params;
  }
  return innerFunc;
})();
//** if you want you could comment lines 16-23 and uncomment 25-33 it would work in same way */
// const countParamsFunc = () => {
//   let params = 20;
//   function innerFunc() {
//     params += 10;
//     return params;
//   }
//   return innerFunc;
// };
// const countParams = countParamsFunc();
function addBoxes() {
  const boxesCount = document.querySelector('input').value;
  let elements = '';
  if (!boxesCount) return;

  Array.from(Array(+boxesCount).keys()).forEach(() => {
    let div = document.createElement('div');
    let params = countParams();

    div.style.cssText = `
        width: ${params}px;
        height: ${params}px;
        background-color: ${getRandomHexColor()};
      `;
    elements += div.outerHTML;
  });

  parentBox.insertAdjacentHTML('beforeend', elements);
}
function destroyBoxes() {
  parentBox.innerHTML = '';
}
