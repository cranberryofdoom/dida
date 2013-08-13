$(function(){

	$(window).on('popstate', function(){
		$('#choose-project')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/4))+'px'});
		$('#basic-info')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/6))+'px'});
		$('#project-medium')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/6))+'px'});
		$('#project-details')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/16))+'px'});
		$('#project-logistics')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/6))+'px'});
	});

	$(window).resize(
		function(){
			$('#choose-project')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/4))+'px'});
			$('#basic-info')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/6))+'px'});
			$('#project-medium')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/6))+'px'});
			$('#project-details')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/6))+'px'});
			$('#project-logistics')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/6))+'px'});
		});

	$("#input-cell").mask("(999) 999-9999");
	$("#input-cell").keypress(
		function(e) {
			var a = [];
			var k = e.which;
			for (i = 48; i < 58; i++)
				a.push(i);
			if (!(a.indexOf(k)>=0))
				e.preventDefault();
		});
	$("#input-fundcode").mask("999-9999");
	$("#input-fundcode").keypress(
		function(e) {
			var a = [];
			var k = e.which;
			for (i = 48; i < 58; i++)
				a.push(i);
			if (!(a.indexOf(k)>=0))
				e.preventDefault();
		});

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
			$('#choose-project-header').text("You have chosen");
			$('#form-print-container')
			.removeClass('col-lg-4 col-sm-4')
			.addClass('animated bounceInLeft col-lg-12 col-sm-12');
			$('#choose-project-next')
			.show()
			.addClass('animated bounceInUp');
			$('#choose-project-back')
			.show()
			.addClass('animated bounceInUp');			
			$('#form-plaza-container').hide();
			$('#form-web-container').hide();
			$('#basic-info').show()
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/6))+'px'});
			$('#basic-info-next').click(
				function(){
					$('#basic-form').parsley('validate');
					if ($('#basic-form').parsley('isValid')) {
						$('#project-medium').show();
						$('html, body').animate({
							scrollTop: $("#project-medium").offset().top
						}, 500);
					}
				});
			$(window).scroll(function() {
				if($(window).scrollTop() + $(window).height() <= $(window).height() && $('#basic-info').is(":visible")) {
					$("#progress-bar")
					.addClass('animated fadeOutDown')
					.hide();
				}
				else {
					$("#progress-bar")
					.removeClass('fadeOutDown')
					.show();
					$("#step-1").addClass('teal-1');
					$("#step-2").addClass('teal-2');
					$("#step-3").addClass('teal-3');
				}
			});
			$("#project-medium-next").click(
				function(){
					$('#project-medium').parsley('validate');
					if($('#medium-form').parsley('isValid')) {
						$('#project-details').show();
						$('html, body').animate({
							scrollTop: $("#project-details").offset().top
						}, 500);
					}
				});
		});
$('#form-plaza-selector').click(
	function(){
		$('#choose-project-header').text("You have chosen");
		$('#form-plaza-container')
		.removeClass('col-lg-4 col-sm-4')
		.addClass('animated bounce col-lg-12 col-sm-12');
		$('#choose-project-next')
		.show()
		.addClass('animated bounceInUp');
		$('#choose-project-back')
		.show()
		.addClass('animated bounceInUp');			
		$('#form-print-container').hide();
		$('#form-web-container').hide();
		$('#basic-info').show()
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/6))+'px'});
		$('#basic-info-next').click(
			function(){
				$('#basic-form').parsley('validate');
				if ($('#basic-form').parsley('isValid')) {
					$('#project-details').show();
					$('html, body').animate({
						scrollTop: $("#project-detaisl").offset().top
					}, 500);
				}
			});
		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() <= $(window).height() && $('#basic-info').is(":visible")) {
				$("#progress-bar")
				.addClass('animated fadeOutDown')
				.hide();
			}
			else {
				$("#progress-bar")
				.removeClass('fadeOutDown')
				.show();
				$("#step-1").addClass('coral-1');
				$("#step-2").addClass('coral-2');
				$("#step-3").addClass('coral-3');
			}
		});
	});
$('#form-web-selector').click(
	function(){
		$('#choose-project-header').text("You have chosen");
		$('#form-web-container')
		.removeClass('col-lg-4 col-sm-4')
		.addClass('animated bounceInRight col-lg-12 col-sm-12');
		$('#choose-project-next')
		.show()
		.addClass('animated bounceInUp');
		$('#choose-project-back')
		.show()
		.addClass('animated bounceInUp');			
		$('#form-plaza-container').hide();
		$('#form-print-container').hide();
		$('#basic-info').show()
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/6))+'px'});
		$('#basic-info-next').click(
			function(){
				$('#basic-form').parsley('validate');
				if ($('#basic-form').parsley('isValid')) {
					$('#project-details').show();
					$('html, body').animate({
						scrollTop: $("#project-detaisl").offset().top
					}, 500);
				}
			});
		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() <= $(window).height() && $('#basic-info').is(":visible")) {
				$("#progress-bar")
				.addClass('animated fadeOutDown')
				.hide();
			}
			else {
				$("#progress-bar")
				.removeClass('fadeOutDown')
				.show();
				$("#step-1").addClass('green-1');
				$("#step-2").addClass('green-2');
				$("#step-3").addClass('green-3');
			}
		});
	});
$('#choose-project-back').click(
	function(){
		if ($('#form-print-selector').is(":visible")){
			$('#choose-project-header').text("Pick a project type");
			$('#form-print-container')
			.removeClass('animated bounceInLeft col-lg-12 col-sm-12')
			.addClass('col-lg-4 col-sm-4');
			$('#form-plaza-container').show();
			$('#form-web-container').show();
			$('#choose-project-next')
			.hide()
			.removeClass('animated bounceInUp');
			$('#choose-project-back')
			.hide()
			.removeClass('animated bounceInUp');
		}
		if ($('#form-plaza-selector').is(":visible")){
			$('#choose-project-header').text("Pick a project type");
			$('#form-plaza-container')
			.removeClass('animated bounceInLeft col-lg-12 col-sm-12')
			.addClass('col-lg-4 col-sm-4');
			$('#form-print-container').show();
			$('#form-web-container').show();
			$('#choose-project-next')
			.hide()
			.removeClass('animated bounceInUp');
			$('#choose-project-back')
			.hide()
			.removeClass('animated bounceInUp');
		}
		if ($('#form-web-selector').is(":visible")){
			$('#choose-project-header').text("Pick a project type");
			$('#form-web-container')
			.removeClass('animated bounceInLeft col-lg-12 col-sm-12')
			.addClass('col-lg-4 col-sm-4');
			$('#form-plaza-container').show();
			$('#form-print-container').show();
			$('#choose-project-next')
			.hide()
			.removeClass('animated bounceInUp');
			$('#choose-project-back')
			.hide()
			.removeClass('animated bounceInUp');
		}
	});

$("#choose-project-next").on("click", 
	function(){
		$('html, body').animate({
			scrollTop: $("#basic-info").offset().top
		}, 500);
		$('#progress-bar').show();
	});

$(document).ready(
	function(){
		$('input').iCheck({
			checkboxClass: 'icheckbox_flat-yellow',
			radioClass: 'iradio_flat-yellow'
		});
	});
});