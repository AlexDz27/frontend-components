// var mutationObserver = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     console.log(mutation);
//     if (mutation.oldValue === null) {
//       mutationObserver.disconnect();
//     }
//   })
// });
//
//
// var simpleDiv = document.querySelector('#simple-div');
// mutationObserver.observe(simpleDiv, {
//   attributes: true,
//   characterData: true,
//   childList: true,
//   subtree: true,
//   attributeOldValue: true,
//   characterDataOldValue: true,
//   attributeFilter: ['class']
// });
//
// simpleDiv.addEventListener('click', function () {
//   simpleDiv.classList.add('test-class-next');
// });

var modal = document.querySelector('.modal');
document.querySelector('.click').addEventListener('click', function () {
  modal.classList.remove('modal--disabled');
  modal.classList.add('modal--active');
});

modal.querySelector('.modal-close-btn').addEventListener('click', function () {
  modal.classList.remove('modal--active');
  modal.classList.add('modal--disabled');
});

document.body.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('click')) return;

  if (evt.target.classList.contains('modal')) {
    modal.classList.remove('modal--active');
    modal.classList.add('modal--disabled');
  }
});