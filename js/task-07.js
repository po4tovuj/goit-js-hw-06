(function () {
  const sliderElement = document.getElementById('font-size-control');
  sliderElement.addEventListener('input', changeFontSize);
})();
function changeFontSize({ target: { value } }) {
  const spanElement = document.getElementById('text');
  spanElement.style.fontSize = value + 'px';
}
