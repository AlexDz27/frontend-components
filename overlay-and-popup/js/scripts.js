function Popup(overlayEl, popupEl, switchBtn) {
  this.isActive = false;
  this.overlayEl = overlayEl;
  this.popupEl = popupEl;
  this.popupElClose = this.popupEl.querySelector('.popup-close__btn-js');

  this.switchBtn = switchBtn;

  this.togglePopup = function () {
    this.isActive = this.isActive === false ? this.isActive = true : this.isActive = false;

    this.toggleOverlay();
    this.togglePopupModal();
  };
  this.closePopup = function () {
    if (this.isActive === false) {
      return;
    }

    this.togglePopup();
  };

  this.togglePopupModal = function () {
    this.popupEl.classList.toggle('popup--active');
  };
  this.toggleOverlay = function () {
    this.overlayEl.classList.toggle('overlay-js--activated');
  };

  this.init = function () {
    this.switchBtn.addEventListener('click', function () {
      this.togglePopup();
    }.bind(this));

    this.popupElClose.addEventListener('click', function () {
      this.togglePopup();
    }.bind(this));

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        this.closePopup();
      }
    }.bind(this));
  };

  this.init();
}

var popup = new Popup(
  document.querySelector('.overlay-js'),
  document.querySelector('.popup'),
  document.querySelector('button')
);