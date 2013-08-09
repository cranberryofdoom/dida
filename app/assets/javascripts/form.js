$(function(){
	$('[data-toggle=tooltip]').tooltip();
	
	$('.form-selector').mouseover(
		function(){
			$(this).addClass('animated pulse');
		});
	$('.form-selector').mouseout(
		function(){
			$(this).removeClass('animated pulse');
		});
	$('#form-print-selector').click(
		function(){
			$('#form-print-container')
			.removeClass('col-lg-10 col-sm-10')
			.addClass('animated bounceInLeft col-lg-12 col-sm-12');
			$('#choose-project-next')
			.show()
			.addClass('animated bounceInUp');
			$('#choose-project-back')
			.show()
			.addClass('animated bounceInUp');			
			$('#form-plaza-container').hide();
			$('#form-web-container').hide();
			$('.basic-info').show();
		});
});