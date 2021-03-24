$(function () {
  $(".js-has-submenu").each(function () {
    let $this = $(this);

    $this.on("mouseenter mouseleave", function () {
      $this.toggleClass("is-expand");
    });
  });

  $(".js-burger-menu").on("click", function () {
    let $burgerButton = $(this);
    let $burgerMenu = $burgerButton.next();

    if ($burgerButton.hasClass("is-expand")) {
      $burgerButton.removeClass("is-expand");
      $burgerMenu.removeClass("is-expand");
      $("body").css("overflow", "");
      $burgerMenu.delay(300).queue(function (next) {
        $burgerMenu.hide();
        next();
      });
    } else {
      $("body").css("overflow", "hidden");
      $burgerButton.addClass("is-expand");
      $burgerMenu.show().addClass("is-expand");
    }
  });
});
