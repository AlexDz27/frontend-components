var myDiv = document.querySelector('.my-div');

myDiv.addEventListener('mousedown', function (evt) {
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

    myDiv.style.top = (myDiv.offsetTop - shift.y) + 'px';
    myDiv.style.left = (myDiv.offsetLeft - shift.x) + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
});