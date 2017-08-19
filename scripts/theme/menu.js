const toggleMenu = () => {
  const button = document.querySelector('.menu__trigger');
  const menu = document.querySelector('.menu__list');
  const body = document.querySelector('body');

  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('is-active', !expanded);
  body.classList.toggle('is-active', !expanded);
};


(() => {
  const button = document.querySelector('.menu__trigger');
  button.addEventListener('click', toggleMenu);
})();
