const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger__bar--change');
});