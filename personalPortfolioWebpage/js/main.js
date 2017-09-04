$(function() {
	var nodeList = $("ul.nav").children();
	window.onscroll = scroll;

	function scroll() {
		console.log("检测到页面滚动事件:" + " " + window.pageYOffset);
		// 注意: window.innerWidth 和 window.innerHeight 可以获得页面可见区域的宽和高.
		var scrollY = window.pageYOffset;

		//页面滚动
		if(scrollY >= 0 && scrollY <= 214) {
			nodeList.eq(0).addClass("other")
				.siblings().removeClass("other");
		} else if(scrollY > 214 && scrollY <= 460) {
			nodeList.eq(1).addClass("other")
				.siblings().removeClass("other");
		} else {
			nodeList.eq(2).addClass("other")
				.siblings().removeClass("other");
		}

	}
	//点击按钮
	nodeList.eq(0).click(function() {

		$(this).addClass("other")
			.siblings().removeClass("other");
		window.scroll(0, 0);
	})
	nodeList.eq(1).click(function() {

		$(this).addClass("other")
			.siblings().removeClass("other");
		window.scroll(0, 214);
	})
	nodeList.eq(2).click(function() {

		$(this).addClass("other")
			.siblings().removeClass("other");
		window.scroll(0, 460);
	})

})