document.querySelectorAll('*').forEach(el => {
  if (el.querySelector(':scope > .interface')) {
    el.classList.add('has-interface');
  }
});
