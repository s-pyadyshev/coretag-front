$(function () {
  $(".js-has-submenu").each(function () {
    let $this = $(this),
      $menuSublist = $this.children(".menu__sublist");

    $this.hover(function () {
      $this.toggleClass("is-expand");
      $menuSublist.slideToggle(100);
    });
  });
  
  $(".js-burger-menu").on("click", function () {
    let $burgerButton = $(this),
      $burgerMenu = $burgerButton.next();

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