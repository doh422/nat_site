var main = function() {
	// toggle between services provided divs
	$('#tab1').click(function() {
		$('.tab-content').hide();
		$('#first').show();
	});
	$('#tab2').click(function() {
		$('.tab-content').hide();
		$('#second').show();
	});
	$('#tab3').click(function() {
		$('.tab-content').hide();
		$('#third').show();
	});

	// have sticky fixed nav appear
	$(window).on('scroll', function() {
		var scrolltop = $(this).scrollTop();

		if(scrolltop >= 215) {
			$('#fixed-nav').fadeIn(250);
		}

		else if(scrolltop <= 210) {
			$('#fixed-nav').fadeOut(250);
		}
	});
};


$(document).ready(main);