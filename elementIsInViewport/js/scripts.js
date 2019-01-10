var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();

  return bounding.bottom >= 0 && bounding.top <= window.innerHeight;
};

var myDiv = document.querySelector('.my-div');
var myDivCheckbox = document.querySelector('input[type="checkbox"][name="my-div"]');

window.addEventListener('load', function (evt) {
  myDivCheckbox.checked = isInViewport(myDiv);
});
window.addEventListener('scroll', function (evt) {
  myDivCheckbox.checked = isInViewport(myDiv);
});