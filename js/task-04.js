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
// on practice its better to check are this elements exist
const decBtn = document.querySelector('[data-action="decrement"]');

decBtn.addEventListener('click', decrementCounter);
const incBtn = document.querySelector('[data-action="increment"]');
incBtn.addEventListener('click', incrementCounter);
