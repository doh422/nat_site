var main = function() {
	// toggle between services provided divs
	$('#tab1').click(function() {
		$('.tab-content').hide();
		$('#first').show();
	});
	$('#tab2').click(function() {
		$('.tab-content').hide();
		$('#second').show().css('display', 'flex');
	});
	$('#tab3').click(function() {
		$('.tab-content').hide();
		$('#third').show();
	});
	$('#tab4').click(function() {
		$('.tab-content').hide();
		$('#fourth').show().css('display', 'flex');
	});

	// stick nav
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 100) {
			$('#main-nav').addClass('sticky');
		} else {
			$('#main-nav').removeClass('sticky');
		}
	});

	// scrolling animation function
	function scrollToDiv(element, navheight) {
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop - navheight;
		$('body, html').animate({
			scrollTop: totalScroll
		}, 1000);
	}

	$('#main-nav .nav li .link').click(function() {
		// store href value in el variable
		var el = $(this).attr('href');
		// wrap variable so we can use jQuery
		var elWrapped = $(el);

		// use scroll function
		scrollToDiv(elWrapped,100);

		// return false so link doesn't go directly to page without animation
		return false;
	});

	$('#main-nav .nav li:nth-child(1)').on('click', function() {
		event.preventDefault();
		$(this).siblings().slideToggle();
	});

};


$(document).ready(main);