// header start
class Header {
	len: number;
	len_menu: number;
	ind: number;
	ind_menu: number;
	seclector: string;
	constructor() {
		var $nav = $('.ht-nav'),
			$nav_li = $nav.children("li"),
			$menu = $('.ht-nav-dropdown-menu'),
			$menu_li = $menu.children('li'),
			len = 130,
			len_menu = 100,
			ind = 0,
			ind_menu = 0,
			seclector = '';

		$nav_li.each(function(){
			if($(this).hasClass("active")) {
				ind = $(this).index();
				if (ind != 0) {
					$(this).siblings(".ht-nav-icon").css('transform','translateX('+  len * ind +'px)');
				}
				return;
			}
		});
		$menu_li.each(function(i){
			if($(this).hasClass("active")) {
				ind_menu = $(this).index();
				if (ind_menu != 0) {
					$(this).siblings(".ht-nav-dropdown-menu-bg").css('transform','translateX('+  len_menu * ind_menu +'px)');
				}
				return;
			}
		});

		$nav_li.on('mouseover', function(i){
			var i = $(this).index();
			var $obj = $(this).siblings(".ht-nav-icon");
			transform( $obj, len, i);
		});
		$menu_li.on('mouseover', function(){
			var i = $(this).index();
			var $obj = $(this).siblings(".ht-nav-dropdown-menu-bg");
			transform($(this), len_menu, i);
		});
		$nav.on('mouseleave', function(){
			var $obj = $(this).siblings(".ht-nav-icon");
			transform($obj, len, ind);
		});
		$nav.on('mouseleave', function(){
			var $obj = $(this).siblings(".ht-nav-dropdown-menu-bg"");
			transform($obj, len_menu, ind_menu);
		});
	}
	transform: function($obj: Object, l: number, i: number ) {
  		$obj.css('transform','translateX('+  l * i +'px)');
	}
}

Header();
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

// 上一篇下一篇分享 start
$(window).scroll(function(){
	if($(this).scrollTop() > 470) {
		$(".ht-article-link").addClass("active");
		$(".ht-article-share").addClass("active");
	} else {
		$(".ht-article-link").removeClass("active");
		$(".ht-article-share").removeClass("active");
	}
});
// 上一篇下一篇分享 end
