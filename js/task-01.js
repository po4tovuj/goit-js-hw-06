(function () {
  const list = document.querySelector('#categories');
  if (list) {
    const mainListFirstChildrens = list.children;
    console.log('Number of Categories: ', mainListFirstChildrens.length);
    for (let i = 0; i < mainListFirstChildrens.length; i++) {
      console.group();
      console.log(
        `Category: ${mainListFirstChildrens[i].firstElementChild.innerHTML}`
      );

      console.log(
        'Elements ',
        mainListFirstChildrens[i].querySelectorAll('li').length
      );
      console.groupEnd();
    }
  }
})();
