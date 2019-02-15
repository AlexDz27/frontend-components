;(function () {

  function Ajax() {
    this.request = function (params) {
      if (params.requestData === undefined) {
        params.requestData = null;
      }

      var request = new XMLHttpRequest();

      request.addEventListener('load', params.onLoad);
      request.addEventListener('error', params.onError);

      sendRequest(request, params.method, params.url, params.requestData);
    };

    function sendRequest(request, method, url, requestData) {
      if (method === 'GET') {
        url = buildUrl(url, requestData);
      }

      request.open(method, url);
      handleMethod(request, method, requestData);

      request.send(requestData);
    }

    function buildUrl(url, requestData) {
      if (requestData === null) {
        return url;
      }
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