(function(){
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
		$('body,html').animate({scrollTop:0},1500);
	});
})();