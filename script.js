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
};


$(document).ready(main);