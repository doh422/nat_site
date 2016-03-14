var main = function() {
	// toggle between services provided divs
	$('#service1').click(function() {
		$('.description').hide();
		$('#first').show();
	});
	$('#service2').click(function() {
		$('.description').hide();
		$('#second').show();
	});
	$('#service3').click(function() {
		$('.description').hide();
		$('#third').show();
	});
};


$(document).ready(main);