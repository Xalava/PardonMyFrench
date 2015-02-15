

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('#more-site').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});





function init() {
			$('.main-title').arctext({radius: 300});

				
			
			};
