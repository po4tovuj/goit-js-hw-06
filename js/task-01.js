(function () {
  const list = document.querySelector('#categories');
  if (list) {
    const firstChildrens = list.children;
    console.log('Number of Categories: ', firstChildrens.length);
    for (let i = 0; i < firstChildrens.length; i++) {
      console.log(`Category: ${firstChildrens[i].firstElementChild.innerHTML}`);
      console.log('Elements ', firstChildrens[i].querySelectorAll('li').length);
    }
  }
})();
