/*
 * header动效
 */

(function(){
	var $htNav = $('.ht-nav'),
		$htLi = $htNav.find("li"),
		ind;
	$htLi.each(function(i){
		if($(this).hasClass("active")) {
			ind = i;
			if (ind != 0) {
				$(this).siblings(".ht-nav-icon").css('transform','translateX('+  130 * ind +'px)');
			}
			return;
		}
	});

	$htLi.on('mouseover', function(){
		var translateX = 130 * $(this).index();
  		$(this).siblings(".ht-nav-icon").css('transform','translateX('+  translateX +'px)');
	});
	$htNav.on('mouseleave', function(){
		var translateX = 130 * ind;
  		$(this).find(".ht-nav-icon").css('transform','translateX('+  translateX +'px)');
	});
	$('.ht-nav-dropdown-menu').find('li').on('mouseover', function(){
		var translateX = 100 * $(this).index();
  		$(this).siblings(".ht-nav-dropdown-menu-bg").css('transform','translateX('+  translateX +'px)');
	});
	$('.ht-nav-dropdown-menu').on('mouseleave', function(){
  		$(this).find(".ht-nav-dropdown-menu-bg").css('transform','translateX(0)');
	});
})();