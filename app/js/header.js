/*
 * header动效
 */

(function(){
	var $htNav = $('.ht-nav'),
		$htLi = $htNav.children("li"),
		ind;
	$htLi.each(function(i){
		if($(this).hasClass("active")) {
			ind = i;
			console.log(i, ind);
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

	// index 处理
	$(".ht-header-index").find(".ht-nav").on('mouseleave', function(){
  		$(this).find(".ht-nav-icon").css('transform','translateX(-100px)');
	});
})();