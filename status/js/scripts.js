var btn = document.querySelector('button');
var dzStatus = document.querySelector('.dz-status');

btn.addEventListener('click', function () {
  dzStatus.classList.toggle('dz-status--anim-appear');
  dzStatus.classList.toggle('dz-status--anim-disappear');
});