let counterValue = 0;
const incrementCounter = () => {
  counterValue++;

  document.querySelector('#value').innerText = counterValue;
};
const decrementCounter = () => {
  counterValue--;

  document.querySelector('#value').innerText = counterValue;
  //
};
(function () {
  // on practice its better to check are this elements exist
  document
    .querySelector('[data-action="decrement"]')
    .addEventListener('click', decrementCounter);

  document
    .querySelector('[data-action="increment"]')
    .addEventListener('click', incrementCounter);
})();
