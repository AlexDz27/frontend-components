var url = 'http://test.au/ajax.php';
// var url = 'https://jsonplaceholder.typicode.com/todos/1';

var form = document.querySelector('form');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var formData = new FormData(this);
  console.log(formData);

  window.ajax.request({
    url: url,
    method: 'GET',
    onLoad: function () {
      console.log(this.response);
    },
    onError: function () {
      console.error('Error requesting data from server. Try again later');
    },
    requestData: {foo: 'bar', baz: 'qwe'}
    // requestData: null -> for GET requests (i.e. for requests with no data needed)
  });
});