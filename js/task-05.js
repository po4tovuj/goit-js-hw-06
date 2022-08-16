(function () {
  const inputElement = document.querySelector('#name-input');
  const outPutElement = document.querySelector('#name-output');
  const handleChangeValue = (e) => {
    outPutElement.innerText = e.target.value ? e.target.value : 'Anonymous';
  };
  inputElement.addEventListener('input', handleChangeValue);
})();
