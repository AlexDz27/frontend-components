var myDiv = document.querySelector('.my-div');
var container = document.querySelector('.test-section');

myDiv.addEventListener('mousedown', function (evt) {
  // myDiv has pos: relative, so if it goes below 0, then it is out of the container
  var maxLeft = 0;
  var maxRight = container.offsetWidth - myDiv.offsetWidth;
  // myDiv has pos: relative, so if it goes above 0, then it is out of the container
  var maxTop = 0;
  var maxBottom = container.offsetHeight - myDiv.offsetHeight;

  var dragStartCoords = {
    x: evt.clientX,
    y: evt.clientY,
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(moveEvt) {
    if (moveEvt.target.classList.contains('my-div__p') || moveEvt.target.classList.contains('my-div__input')) {
      return;
    }

    var shift = {
      x: dragStartCoords.x - moveEvt.clientX,
      y: dragStartCoords.y - moveEvt.clientY
    };

    dragStartCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY,
    };

    var resultYPos = myDiv.offsetTop - shift.y;
    if (resultYPos < maxTop) {
      resultYPos = maxTop;
    }
    if (resultYPos > maxBottom) {
      resultYPos = maxBottom;
    }
    var resultXPos = myDiv.offsetLeft - shift.x;
    if (resultXPos < maxLeft) {
      resultXPos = 0;
    }
    if (resultXPos > maxRight) {
      resultXPos = maxRight;
    }

    myDiv.style.top = resultYPos + 'px';
    myDiv.style.left = resultXPos + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
});