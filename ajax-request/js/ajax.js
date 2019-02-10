;(function () {

  function Ajax() {
    this.request = function (url, method, onLoad, onError, requestData) {
      var request = new XMLHttpRequest();

      request.addEventListener('load', onLoad);
      request.addEventListener('error', onError);

      sendRequest(request, method, url, requestData);
    };

    function sendRequest(request, method, url, requestData) {
      request.open(method, url);
      handleMethod(request, method, requestData);

      request.send(requestData);
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
        return;
      }

      request.setRequestHeader("Content-Type", "application/json");

      return isJsonHandled;
    }

    function handleStringIfString(request, requestData) {}
  }

  window.ajax = new Ajax();

  // window.ajax = {
  //   request: function (url, method, onLoad, onError, requestData) {
  //     var request = new XMLHttpRequest();
  //
  //     request.addEventListener('load', onLoad);
  //     request.addEventListener('error', onError);
  //
  //     this.sendRequest(request, method, url, requestData);
  //   },
  //
  //   sendRequest: function (request, method, url, requestData) {
  //     request.open(method, url);
  //     this.handleMethod(request, method, requestData);
  //
  //     request.send(requestData);
  //   },
  //
  //   handleMethod: function (request, method, requestData) {
  //     if (method === 'GET') {}
  //
  //     if (method === 'POST') {
  //       this.handlePost(request, requestData);
  //     }
  //   },
  //
  //   handlePost: function (request, requestData) {
  //     if (this.handleJsonIfJson(request, requestData)) {
  //       return;
  //     }
  //
  //     this.handleStringIfString(request, requestData);
  //   },
  //
  //   handleJsonIfJson: function (request, requestData) {
  //     var isJsonHandled = false;
  //     try {
  //       JSON.parse(requestData);
  //       isJsonHandled = true;
  //     } catch (exception) {
  //       return;
  //     }
  //
  //     request.setRequestHeader("Content-Type", "application/json");
  //
  //     return isJsonHandled;
  //   },
  //
  //   handleStringIfString: function (request, requestData) {}
  // };

  window.some = new Some();

  function Some() {
    this.qwe = true;
  }

})();