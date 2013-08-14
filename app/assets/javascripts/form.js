$(function(){

	$(window).on('popstate', function(){
		$('form-success').hide();
		$('#choose-project')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/4))+'px'});
		$('#basic-info')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/16))+'px'});
		$('#project-medium')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/16))+'px'});
		$('#project-details')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/16))+'px'});
		$('#form-success')
		.css({'height': (($(window).height()))+'px'})
		.css({'padding-top': (($(window).height()/4))+'px'});
	});

	$(window).resize(
		function(){
			$('#choose-project')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/4))+'px'});
			$('#basic-info')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/16))+'px'});
			$('#project-medium')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/16))+'px'});
			$('#project-details')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/16))+'px'});
			$('#form-success')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/4))+'px'});
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

	$('.form-selector').hover(
		function(){ 
			$(this).addClass('animated pulse');
			if(!$(this).hasClass('active')) {
				$(this).next().show(1,
					function() {
						$(this).addClass('animated fadeIn')
					});
			}
		},
		function(){ 
			$(this).removeClass('animated pulse');
			$(this).next().hide(1,
				function() {
					$(this).removeClass('animated fadeIn')
				});
		});


	$('#form-print-selector').click(
		function(){
			$( '#basic-form' ).parsley( 'removeItem', '#input-fundcode' );
			$(this).addClass('active');
			$(this).next().hide();
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
			$('#basic-info').show();
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
				if($(window).scrollTop() <= 0) {
					$("#progress-print").addClass('animated fadeOutDown');
				}
				else {
					$('#progress-bar').show();
					$("#progress-plaza").hide();
					$("#progress-web").hide();
					$("#progress-print")
					.show(1, function() {
						$(this).addClass('fadeIn');
					})
					.removeClass('fadeOutDown');
				}
			});
			$("#project-medium-next").click(
				function(){
					$('#project-medium').parsley('validate');
					if($('#medium-form').parsley('isValid')) {
						$('#project-details').show();
						$('html, body').animate(
							{scrollTop: $("#project-details").offset().top}, 500);
					}
				});
		});
$('#form-plaza-selector').click(
	function(){
		$(this).addClass('active');
		$(this).next().hide();
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
		$('#basic-info').show();
		$('#plaza-fundcode').show();
		$('#basic-info-next').click(
			function(){
				$('#basic-form').parsley('validate');
				if ($('#basic-form').parsley('isValid')) {
					$('#label-project-direction').text("How do you want your ad board to look?");
					$('#label-project-details').text("What do you want your ad board to say?");
					$('#logistics-agreement').text("I understand DiDA has a 2 week (10 business day) minimum turnaround for Plaza Board requests.")
					$('#project-details').show();
					$('html, body').animate({
						scrollTop: $("#project-details").offset().top
					}, 500);
				}
			});
		$(window).scroll(function() {
			if($(window).scrollTop() <= 0) {
				$("#progress-plaza").addClass('animated fadeOutDown');
			}
			else {
				$('#progress-bar').show();
				$("#progress-print").hide();
				$("#progress-web").hide();
				$("#progress-plaza")
				.show()
				.removeClass('fadeOutDown');
			}
		});
	});
$('#form-web-selector').click(
	function(){
		$( '#basic-form' ).parsley( 'removeItem', '#input-fundcode' );
		$(this).addClass('active');
		$(this).next().hide();
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
		$('#basic-info').show();
		$('#basic-info-next').click(
			function(){
				$('#basic-form').parsley('validate');
				if ($('#basic-form').parsley('isValid')) {
					$('#label-project-direction').text("How do you want your ad board to look?");
					$('#label-project-details').text("What do you want your ad board to say?");
					$('#logistics-agreement').text("I understand DiDA has a 2 week (10 business day) minimum turnaround for slight design alterations and a 4 week (20 business day) minimum turnaround for full Web requests.")
					$('#project-details').show();
					$('html, body').animate({
						scrollTop: $("#project-details").offset().top
					}, 500);
				}
			});
		$(window).scroll(function() {
			if($(window).scrollTop() <= 0) {
				$("#progress-web").addClass('animated fadeOutDown');
			}
			else {
				$('#progress-bar').show();
				$("#progress-print").hide();
				$("#progress-plaza").hide();
				$("#progress-web")
				.show()
				.removeClass('fadeOutDown');
			}
		});
	});
$('#choose-project-back').click(
	function(){
		$('.form-selector').removeClass('active');
		$('#choose-project-header').text("Pick a project type");
		$('#choose-project-next')
		.hide()
		.removeClass('animated bounceInUp');
		$('#choose-project-back')
		.hide()
		.removeClass('animated bounceInUp');
		$('#form-plaza-container')
		.removeClass('bounceInLeft')
		.removeClass('bounceInRight');
		$('#form-print-container').removeClass('bounceInLeft');
		$('#form-web-container').removeClass('bounceInRight');
		$("#basic-info").hide();
		$("#project-medium").hide();
		$("#project-details").hide();
		if ($('#form-print-selector').is(":visible") && $('#form-plaza-selector').is(":hidden") && $('#form-web-selector').is(":hidden")){
			$('#form-print-container')
			.removeClass('animated bounceInLeft col-lg-12 col-sm-12')
			.addClass('col-lg-4 col-sm-4');
			$('#form-plaza-container').show(10, function() {
				$(this).addClass('animated bounceInRight');
			});
			$('#form-web-container').show(10, function() {
				$(this).addClass('animated bounceInRight');
			});
		}
		if ($('#form-plaza-selector').is(":visible")  && $('#form-print-selector').is(":hidden") && $('#form-web-selector').is(":hidden")){
			$('#form-plaza-container')
			.removeClass('animated bounceInLeft col-lg-12 col-sm-12')
			.addClass('col-lg-4 col-sm-4');
			$('#form-print-container').show(10, function() {
				$(this).addClass('animated bounceInLeft');
			});
			$('#form-web-container').show(10, function() {
				$(this).addClass('animated bounceInRight');
			});
		}
		if ($('#form-web-selector').is(":visible")  && $('#form-print-selector').is(":hidden") && $('#form-plaza-selector').is(":hidden")){
			$('#form-web-container')
			.removeClass('animated bounceInLeft col-lg-12 col-sm-12')
			.addClass('col-lg-4 col-sm-4');
			$('#form-plaza-container').show(10, function() {
				$(this).addClass('animated bounceInLeft');
			});
			$('#form-print-container').show(10, function() {
				$(this).addClass('animated bounceInLeft');
			});
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

$("#form-submit").click(
	function(){
		$("#form-new").hide();
		$("#form-success").show();
	})
});