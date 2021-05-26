jQuery(function () {
  if (jQuery(".line").length) {
    jQuery(window).scroll(function () {
      let $lines = $(".line");

      $lines.each(function (i, el) {
        let linePos = jQuery(el).offset().top,
          scroll = jQuery(window).scrollTop() + jQuery(window).height();

        if (scroll > linePos) {
          jQuery(el).addClass("active");
        }
      });
    });
  }
});
