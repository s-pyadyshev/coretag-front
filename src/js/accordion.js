$(function () {
    if ($('.js-acc').length) {
  
        $('.js-acc-header').on('click', function () {
    
            var $this = $(this);
    
            $this.toggleClass('is-expand').next().slideToggle(300, 'linear');
            $this.hasClass('is-expand') && $('html').animate({
                scrollTop: $this.offset().top - $('header')[0].offsetHeight
            }, 300,'linear');
        });
    }
});