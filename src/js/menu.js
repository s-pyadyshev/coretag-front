jQuery(function () {
  jQuery(".js-has-submenu").each(function () {
    let $this = $(this);

    $this.on("mouseenter", function () {
      $this.addClass("is-expand");
    });

    $this.on("mouseleave", function () {
      $this.removeClass("is-expand");
    });
  });

  jQuery(".js-burger-menu").on("click", function () {
    let $burgerButton = jQuery(this);
    let $burgerMenu = $burgerButton.next();

    if ($burgerButton.hasClass("is-expand")) {
      $burgerButton.removeClass("is-expand");
      $burgerMenu.removeClass("is-expand");
      jQuery("body").css("overflow", "");
      $burgerMenu.delay(300).queue(function (next) {
        $burgerMenu.hide();
        next();
      });
    } else {
      jQuery("body").css("overflow", "hidden");
      $burgerButton.addClass("is-expand");
      $burgerMenu.show().addClass("is-expand");
    }
  });
});
