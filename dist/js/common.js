(function(){
	// header start
	var $htNav = $('.ht-nav'),
		$htLi = $htNav.children("li"),
		ind_nav,
		ind_menu,
		$htMenu = $('.ht-nav-dropdown-menu'),
		$htMenuLi = $htMenu.find('li');

	$htLi.each(function(){
		if($(this).hasClass("active")) {
			ind_nav = $(this).index();
			if (ind_nav != 0) {
				$(this).siblings(".ht-nav-icon").css('transform','translateX('+  130 * ind_nav +'px)');
			}
			return;
		}
	});
	$htMenuLi.each(function(i){
		if($(this).hasClass("active")) {
			ind_menu = $(this).index();
			if (ind_menu != 0) {
				$(this).siblings(".ht-nav-dropdown-menu-bg").css('transform','translateX('+  100 * ind_menu +'px)');
			}
			return;
		}
	});

	$htLi.on('mouseover', function(){
		var translateX = 130 * $(this).index();
  		$(this).siblings(".ht-nav-icon").css('transform','translateX('+  translateX +'px)');
	});
	$htNav.on('mouseleave', function(){
		var translateX = 130 * ind_nav;
  		$(this).find(".ht-nav-icon").css('transform','translateX('+  translateX +'px)');
	});
	$htMenuLi.on('mouseover', function(){
		var translateX = 100 * $(this).index();
  		$(this).siblings(".ht-nav-dropdown-menu-bg").css('transform', 'translateX('+  translateX +'px)');
	});
	$htMenu.on('mouseleave', function(){
		var translateX = 100 * ind_menu;
  		$(this).find(".ht-nav-dropdown-menu-bg").css('transform', 'translateX('+  translateX +'px)');
	});

	// index 处理
	$(".ht-header-index").find(".ht-nav").on('mouseleave', function(){
  		$(this).find(".ht-nav-icon").css('transform','translateX(-100px)');
	});
	// header end

	// 回到顶部 start
	function showBackTop() {
		if($(window).scrollTop() > 300){
			$(".ht-back-top").show();
		} else {
			$(".ht-back-top").hide();
		}
	}
	showBackTop();

	$(window).scroll(function(event) {
		showBackTop();
	});

	$(".ht-back-top").on("click", function(){
		$('body,html').animate({scrollTop:0}, 500);
	});
	// 回到顶部 end

	// tab 切换 start
	$(".ht-tab-header li").on("mouseover", function(){
		var ind = $(this).index(),
			$tabBody = $(this).parent().siblings(".ht-tab-body");

		$(this).addClass("active");
		$(this).siblings().removeClass("active");

		$tabBody.children('section').removeClass('active');
		$tabBody.children('section').eq(ind).addClass('active');
	});
	// tab 切换 end
})();