const checkValid = ({ target, target: { value } }) => {
  const valueLength = value.length;
  const inputLength = target.getAttribute('data-length');

  switch (true) {
    case valueLength == inputLength && target.classList.contains('invalid'):
      target.classList.add('valid');
      target.classList.remove('invalid');

      break;
    case valueLength != inputLength && target.classList.contains('valid'):
      target.classList.add('invalid');
      target.classList.remove('valid');
      break;
    case valueLength != inputLength:
      target.classList.add('invalid');
      break;
    default:
      target.classList.add('valid');

      break;
  }
};
(function () {
  const inputElement = document.querySelector('#validation-input');
  inputElement.addEventListener('blur', checkValid);
})();
