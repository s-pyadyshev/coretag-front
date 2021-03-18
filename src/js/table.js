$(function () {
    if ($(".line").length) {
        $(window).scroll(function () {

            let $lines = $(".line");  
    
            $lines.each(function (i,el) {

                let linePos = $(el).offset().top,
                    scroll = $(window).scrollTop() + $(window).height();

                if (scroll > linePos) {
                    $(el).addClass('active');
                }
            });
        });
    }
});
  