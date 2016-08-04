/*
 * header动效
 */

(function(){
	$('.ht-nav').find('li').on('mouseover', function(){
		var translateX = 130 * $(this).index();
  		$(this).siblings(".ht-nav-icon").css('transform','translateX('+  translateX +'px)');
	});
	$('.ht-nav').on('mouseleave', function(){
  		$(this).find(".ht-nav-icon").css('transform','translateX(0)');
	});
	$('.ht-nav-dropdown-menu').find('li').on('mouseover', function(){
		var translateX = 100 * $(this).index();
  		$(this).siblings(".ht-nav-dropdown-menu-bg").css('transform','translateX('+  translateX +'px)');
	});
})();