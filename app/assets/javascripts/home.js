$(function(){
	$("#welcome-line-1").fitText();
	$("#welcome-line-2").fitText(2, { minFontSize: '17px', maxFontSize: '54px' });
	$("#description").fitText(3, { minFontSize: '6px', maxFontSize: '24px' });

	$('#intro')
	.css({'height': (($(window).height()))+'px'})
	.css({'padding-top': (($(window).height()/4))+'px'});

	$('#mission')
	.css({'height': (($(window).height())+20)+'px'})
	.css({'padding-top': (($(window).height()/6)-20)+'px'});

	$('#why')
	.css({'height': (($(window).height())+20)+'px'})
	.css({'padding-top': (($(window).height()/6)-20)+'px'});

	$('#proof')
	.css({'height': (($(window).height())+20)+'px'})
	.css({'padding-top': (($(window).height()/6)-20)+'px'});

	$('#services')
	.css({'height': (($(window).height())+20)+'px'})
	.css({'padding-top': (($(window).height()/6)-20)+'px'});

	$('#go')
	.css({'height': (($(window).height())+20)+'px'})
	.css({'padding-top': (($(window).height()/4)-20)+'px'});

	$(window).resize(function(){
		$('#intro')
		.css({'height': ($(window).height())+'px'})
		.css({'padding-top': ($(window).height()/4)+'px'});

		$('#mission')
		.css({'height': (($(window).height())+20)+'px'})
		.css({'padding-top': (($(window).height()/6)-20)+'px'});

		$('#why')
		.css({'height': (($(window).height())+20)+'px'})
		.css({'padding-top': (($(window).height()/6)-20)+'px'});

		$('#proof')
		.css({'height': (($(window).height())+20)+'px'})
		.css({'padding-top': (($(window).height()/6)-20)+'px'});

		$('#services')
		.css({'height': (($(window).height())+20)+'px'})
		.css({'padding-top': (($(window).height()/6)-20)+'px'});

		$('#go')
		.css({'height': (($(window).height())+20)+'px'})
		.css({'padding-top': (($(window).height()/4)-20)+'px'});
	});

	$("#cta").mouseover(
		function(){
			$("#cta-text")
			.addClass('animated fadeOutRight')
			.hide();
			$("#cta-next")
			.show()
			.css({'display': 'table-cell'})
			.addClass('animated fadeInLeft');
		});
	$("#cta").mouseout(
		function(){
			$("#cta-text")
			.removeClass('animated fadeOutRight')
			.show();
			$("#cta-next")
			.hide();
		});

	var easing, e, pos;
	$("#intro-down").on("click", 
		function(){
			$('html, body').animate({
				scrollTop: $("#mission").offset().top
			}, 500);
		});
	$("#mission-down").on("click", 
		function(){
			$('html, body').animate({
				scrollTop: $("#why").offset().top
			}, 500);
		});
	$("#why-down").on("click", 
		function(){
			$('html, body').animate({
				scrollTop: $("#proof").offset().top
			}, 500);
		});
	$("#proof-down").on("click", 
		function(){
			$('html, body').animate({
				scrollTop: $("#services").offset().top
			}, 500);
		});
	$("#services-down").on("click", 
		function(){
			$('html, body').animate({
				scrollTop: $("#go").offset().top
			}, 500);
		});
});