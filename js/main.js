

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



// var $arc1   = $('.main-title').hide();

function init() {
			$arc1.show().arctext({radius: 300, dir: 1});

				
			
			};
