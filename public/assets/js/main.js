

(function ($) {

	$(document).ready(function () {
		$('body').addClass('js');
		var $menu = $('#menu'),
			$menulink = $('.menu-link');

		$menulink.click(function () {
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
			return false;
		});
	});



	videoPopup();

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			550: {
				items: 2
			},
			750: {
				items: 3
			},
			1200: {
				items: 4
			},
			1300: {
				items: 5
			}
		}
	})


	$(".Modern-Slider").slick({
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		pauseOnDotsHover: true,
		cssEase: 'fade',
		// fade:true,
		draggable: false,
		prevArrow: '<button class="PrevArrow"></button>',
		nextArrow: '<button class="NextArrow"></button>',
	});


	$("div.features-post").hover(
		function () {
			$(this).find("div.content-hide").slideToggle("medium");
		},
		function () {
			$(this).find("div.content-hide").slideToggle("medium");
		}
	);



	$("#tabs").tabs();


	(function init() {
		function getTimeRemaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}

		function initializeClock(endtime) {
			var timeinterval = setInterval(function () {
				var t = getTimeRemaining(endtime);
				document.querySelector(".days > .value").innerText = t.days;
				document.querySelector(".hours > .value").innerText = t.hours;
				document.querySelector(".minutes > .value").innerText = t.minutes;
				document.querySelector(".seconds > .value").innerText = t.seconds;
				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}, 1000);
		}
		initializeClock(((new Date()).getFullYear()) + "/8/13")
	})()




	$(function () {
		$("#scrollUp").bind("click", function () {
			$("html, body").animate({ scrollTop: 0 }, 500);
			return false;
		});
	});

	$(function () {
		$("#form-submit").bind("click", function () {
			var nameVal = document.forms["cform"]["name"].value;
			var emailVal = document.forms["cform"]["email"].value;
			var messageVal = document.forms["cform"]["message"].value;
			if (
				!(
					nameVal == null ||
					nameVal == "" ||
					emailVal == null ||
					emailVal == "" ||
					messageVal == null ||
					messageVal == ""
				)
			) {
				$(".thanks-div").show();
				setTimeout(function () {
					$(".thanks-div").hide();
				}, 2000);
			}
		});
	});

	//according to loftblog tut


	var showSection = function showSection(section, isAnimate) {
		var direction = section.replace(/#/, ""),
			reqSection = $(".section").filter(
				'[data-section="' + direction + '"]'
			),
			reqSectionPos = reqSection.offset().top - 0;

		if (isAnimate) {
			$("body, html").animate(
				{
					scrollTop: reqSectionPos,
				},
				1200
			);
		} else {
			$("body, html").scrollTop(reqSectionPos);
		}
	};

	var checkSection = function checkSection() {
		$(".section").each(function () {
			var $this = $(this),
				topEdge = $this.offset().top - 80,
				bottomEdge = topEdge + $this.height(),
				wScroll = $(window).scrollTop();
			if (topEdge < wScroll && bottomEdge > wScroll) {
				var currentId = $this.data("section"),
					reqLink = $("a").filter("[href*=\\#" + currentId + "]");
				reqLink
					.closest("li")
					.addClass("active")
					.siblings()
					.removeClass("active");
			}
		});
	};



	$(window).scroll(function () {
		checkSection();
	});


})(jQuery);

