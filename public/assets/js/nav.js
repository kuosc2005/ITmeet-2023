

(function($) {

	$(document).ready(function() {
		$(".main-nav li:first").addClass("active");
		$('.main-header').css('margin-top', '30px');
		$('#scrollUp').css('display', 'none');
	  });

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200){
			$('.main-header').css('background-color', 'rgba(12, 18, 40, 0)')
			$('.main-header').css('margin-top', '30px')
		} else {
			$('.main-header').css('background-color', 'rgba(12, 18, 40, 1)')
			$('.main-header').css('margin-top', '0px')
		}

		
		if (scroll < 500) {
			$('#scrollUp').css('display', 'none');
		} else {
			$('#scrollUp').css('display', 'block');
		}
	});

	// $(".main-menu, .scroll-to-section").on("click", "a", function (e) {
    //     if ($(e.target).hasClass("external")) {
    //       return;
    //     }
    //     e.preventDefault();
    //     $("#menu").removeClass("active");
    //     showSection($(this).attr("href"), true);
    //   });

	  


})(jQuery);

