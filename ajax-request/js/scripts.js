var url = 'http://test.au/ajax.php?qwe=asd';

var form = document.querySelector('form');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var formData = new FormData(this);
  console.log(formData);

  window.ajax.request(
    url,
    // 'POST',
    'GET',
    function () {
      console.log(this.response);
    },
    function () {
      console.error('Error');
    },
    formData
  );
});

console.log(window.some);