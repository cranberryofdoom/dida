$(function(){
	$("#welcome-line-1").fitText(1, { minFontSize: '17px', maxFontSize: '111px' });
	$("#welcome-line-2").fitText(2, { minFontSize: '17px', maxFontSize: '57px' });
	$("#description").fitText(3, { minFontSize: '6px', maxFontSize: '24px' });

	$(window).load(
		function(){
			$('#intro')
			.css({'height': (($(window).height()))+'px'})
			.css({'padding-top': (($(window).height()/4))+'px'});

			$('#why')
			.css({'height': (($(window).height())-25)+'px'})
			.css({'padding-top': (($(window).height()/6)-25)+'px'});

			$('#services')
			.css({'height': (($(window).height())-25)+'px'})
			.css({'padding-top': (($(window).height()/8)-25)+'px'});

			$('#go')
			.css({'height': (($(window).height())-25)+'px'})
			.css({'padding-top': (($(window).height()/4)-25)+'px'});
		});

	$(window).resize(function(){
		$('#intro')
		.css({'height': ($(window).height())+'px'})
		.css({'padding-top': ($(window).height()/4)+'px'});

		$('#why')
		.css({'height': (($(window).height())-25)+'px'})
		.css({'padding-top': (($(window).height()/6)-25)+'px'});

		$('#services')
		.css({'height': (($(window).height())-25)+'px'})
		.css({'padding-top': (($(window).height()/8)-25)+'px'});

		$('#go')
		.css({'height': (($(window).height())-25)+'px'})
		.css({'padding-top': (($(window).height()/4)-25)+'px'});
	});

	var missionTextHeight;
	missionTextHeight = $("#mission-text").height();
	$('#mission-subhero').css({'height': missionTextHeight});
	$('#mission-subhero-text').css({'line-height': missionTextHeight + 'px'});

	$(".accordion-body").on('show.bs.collapse', 
		function () {
			$(this).parent("div").find(".mission-bullet").transition({ rotate:'90deg', x: -10, y: -10 }, 200, 'ease');
		});
	$(".accordion-body").on('hide.bs.collapse', 
		function () {
			$(this).parent("div").find(".mission-bullet").transition({ rotate:'0deg', x: 0, y: 0 }, 200, 'ease');
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
				scrollTop: $("#why").offset().top
			}, 500);
		});
	$("#why-down").on("click", 
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

	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
			$("#cta").addClass('animated fadeOutUp');
		}
		else {
			$("#cta").removeClass('fadeOutUp')
		}
	});
});