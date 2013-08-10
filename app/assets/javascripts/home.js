$(function(){
	$("#welcome-line-1").fitText();
	$("#welcome-line-2").fitText(2, { minFontSize: '17px', maxFontSize: '54px' });
	$("#description").fitText(3, { minFontSize: '6px', maxFontSize: '24px' });

	$('#intro')
	.css({'height': (($(window).height()))+'px'})
	.css({'padding-top': (($(window).height()/4))+'px'});

	$('#mission')
	.css({'height': (($(window).height())-25)+'px'})
	.css({'padding-top': (($(window).height()/6)-25)+'px'});

	$('#why')
	.css({'height': (($(window).height())-25)+'px'})
	.css({'padding-top': (($(window).height()/6)-25)+'px'});

	$('#proof')
	.css({'height': (($(window).height())-25)+'px'})
	.css({'padding-top': (($(window).height()/6)-25)+'px'});

	$('#services')
	.css({'height': (($(window).height())-25)+'px'})
	.css({'padding-top': (($(window).height()/6)-25)+'px'});

	$('#go')
	.css({'height': (($(window).height())-25)+'px'})
	.css({'padding-top': (($(window).height()/4)-25)+'px'});

	$(window).resize(function(){
		$('#intro')
		.css({'height': ($(window).height())+'px'})
		.css({'padding-top': ($(window).height()/4)+'px'});

		$('#mission')
		.css({'height': (($(window).height())-25)+'px'})
		.css({'padding-top': (($(window).height()/6)-25)+'px'});

		$('#why')
		.css({'height': (($(window).height())-25)+'px'})
		.css({'padding-top': (($(window).height()/6)-25)+'px'});

		$('#proof')
		.css({'height': (($(window).height())-25)+'px'})
		.css({'padding-top': (($(window).height()/6)-25)+'px'});

		$('#services')
		.css({'height': (($(window).height())-25)+'px'})
		.css({'padding-top': (($(window).height()/6)-25)+'px'});

		$('#go')
		.css({'height': (($(window).height())-25)+'px'})
		.css({'padding-top': (($(window).height()/4)-25)+'px'});
	});

	var missionTextHeight;
	missionTextHeight = $("#mission-text").height();
	$('#mission-subhero').css({'height': missionTextHeight});
	$('#mission-subhero-text').css({'line-height': missionTextHeight + 'px'});

	if( $('.collapse').hasClass('in') ) {
			$('.mission-bullet').transition({ rotate:'90deg' });
	};

	$(".down").mouseover(
		function(){
			$(this).transition({ y: 25 }, 500, 'ease');
		});
	$(".down").mouseout(
		function(){
			$(this).transition({ y: 0 }, 500, 'ease');
		});

	$("#go-link-wrapper").mouseover(
		function(){
			$(this).transition({ x: 25 }, 500, 'ease');
		});
	$("#go-link-wrapper").mouseout(
		function(){
			$(this).transition({ x: 0 }, 500, 'ease');
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