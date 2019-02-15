;(function () {

  function Ajax() {
    // this.request = function (url, method, onLoad, onError, requestData) {
    this.request = function (params) {
      var request = new XMLHttpRequest();

      request.addEventListener('load', params.onLoad);
      request.addEventListener('error', params.onError);

      sendRequest(request, params.method, params.url, params.requestData);
    };

    function sendRequest(request, method, url, requestData) {
      url = buildUrlIfGet(url, requestData);
      console.log(url);
      
      request.open(method, url);
      handleMethod(request, method, requestData);

      request.send(requestData);
    }

    function buildUrlIfGet(url, requestData) {
      if (url.indexOf('?') > -1) {
        return url;
      }
      
      var requestDataString = convertRequestDataToString(requestData);
      url = url + requestDataString;

      return url;
    }

    function handleMethod(request, method, requestData) {
      if (method === 'GET') {}

      if (method === 'POST') {
        handlePost(request, requestData);
      }
    }

    function handlePost(request, requestData) {
      if (handleJsonIfJson(request, requestData)) {
        return;
      }

      handleStringIfString(request, requestData);
    }

    function handleJsonIfJson(request, requestData) {
      var isJsonHandled = false;
      try {
        JSON.parse(requestData);
        isJsonHandled = true;
      } catch (exception) {
        return isJsonHandled;
      }

      request.setRequestHeader("Content-Type", "application/json");

      return isJsonHandled;
    }

    function handleStringIfString(request, requestData) {}

    function convertRequestDataToString(requestData) {
      var string = '?';

      for (var prop in requestData) {
        string += prop + '=' + requestData[prop] + '&';
      }

      return string;
    }
  }

  window.ajax = new Ajax();

})();