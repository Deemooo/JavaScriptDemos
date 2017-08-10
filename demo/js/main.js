$(function() {
	/*鼠标移入效果*/
	function mouseOverShow() {
		$(this).addClass("another")
			.siblings("div.introductionArea").addClass("other");
		$(this).find("div.introductionAreaDetail").stop(true).slideDown(400);
		/*背景图片切换*/
		var index = $(".introductionArea").index(this);
		switch(index) {
			case 0:
				$("#contain").css("background-image", "url(images/pns5.jpg)");
				break;
			case 1:
				$("#contain").css("background-image", "url(images/pns2.jpg)");
				break;
			case 2:
				$("#contain").css("background-image", "url(images/pns4.jpg)");
				break;
			case 3:
				$("#contain").css("background-image", "url(images/pns3.jpg)");
				break;
			default:
				$("#contain").css("background-image", "url(images/pns1.jpg)");
				break;
		}
	}
	/*鼠标移出效果*/
	function mouseOutHide() {
		$(this).removeClass("another other")
			.siblings().removeClass("other");
		$(this).find("div.introductionAreaDetail").hide();
	}

	$("div.introductionArea")
		.mouseover(mouseOverShow)
		.mouseout(mouseOutHide);

})