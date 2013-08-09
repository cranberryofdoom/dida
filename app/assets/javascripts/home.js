$(function(){
	$(".welcome-line-1").fitText();
	$(".welcome-line-2").fitText(2, { minFontSize: '17px', maxFontSize: '56px' });
	$(".description").fitText(3, { minFontSize: '8px', maxFontSize: '23px' });

	$('.intro')
	.css({'height': (($(window).height()))+'px'})
	.css({'padding-top': (($(window).height()/4))+'px'});

	$('.why')
	.css({'height': (($(window).height())+20)+'px'})
	.css({'padding-top': (($(window).height()/4)-20)+'px'})

	$(window).resize(function(){
		$('.intro')
		.css({'height': ($(window).height())+'px'})
		.css({'padding-top': ($(window).height()/4)+'px'})

		$('.why')
		.css({'height': (($(window).height())+20)+'px'})
		.css({'padding-top': (($(window).height()/4)-20)+'px'})
	});

	$(".cta").mouseover(
		function(){
			$(".cta-text")
			.addClass('animated fadeOutRight')
			.hide();
			$(".cta-next")
			.show()
			.css({'display': 'table-cell'})
			.addClass('animated fadeInLeft');
		});
	$(".cta").mouseout(
		function(){
			$(".cta-text")
			.removeClass('animated fadeOutRight')
			.show();
			$(".cta-next")
			.hide();
		});

	var easing, e, pos;
	$("#intro-down").on("click", 
		function(){
			pos = $(window).height();
			$("body").css({
				"margin-top": pos+"px",
				"overflow-y": "scroll",
			});
			$(window).scrollTop(pos);
			$("body").css("transition", "all 1s ease");
			$("body").css("margin-top", "0");
			$("body").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", 
				function(){
					$("body").css("transition", "none");
				});
		});
});