function NavMenu(menu, btn, overlay, closeBtn) {
    this.isActive = false;

    this.menu = menu;
    this.btn = btn;
    this.overlay = overlay;
    this.closeBtn = closeBtn;

    this.toggle = function () {
        this.isActive = !this.isActive;

        this.toggleOverlay();
        this.toggleMenu();
    };

    this.toggleOverlay = function () {
        this.overlay.classList.toggle('nav-overlay-js--activated');
    };
    this.toggleMenu = function () {
        this.menu.classList.toggle('site-nav--active');
    };

    this.init = function () {
        this.btn.addEventListener('click', function () {
            this.toggle();
        }.bind(this));

        this.closeBtn.addEventListener('click', function () {
            this.toggle();
        }.bind(this));

        document.addEventListener('keydown', function (evt) {
          if (!this.isActive) {
              return;
          }

          if (evt.key === 'Escape') {
            this.toggle();
          }
        }.bind(this));

        this.overlay.addEventListener('click', function (evt) {
            if (this.overlay === evt.target) {
                this.toggle();
            }
        }.bind(this));
    };

    this.init();
}

var navMenu = new NavMenu(
  document.querySelector('.site-nav'),
  document.querySelector('.nav-menu-btn'),
  document.querySelector('.nav-overlay-js'),
  document.querySelector('.site-nav-close-js')
);