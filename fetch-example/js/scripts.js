var result = null;

fetch('http://test-wp.au/wp-api/posts')
  .then(function (response) {
    return response.json();
  })
  .then(function (responseJson) {
    result = responseJson;
    console.log(result);
  })
  .catch(function (error) {
    console.error('Error:', error);
  })
;