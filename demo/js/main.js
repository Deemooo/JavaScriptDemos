$(function() {

	/*定义鼠标移入函数*/
	function mouseOverShow() {
		$(this).parent().height(325);		
		$(this).find("div.introductionAreaDetail").show();
	}

	function mouseOutHide() {
		$(this).parent().height(100);
		$(this).find("div.introductionAreaDetail").hide();

	}
	$(".introductionArea").mouseover(mouseOverShow);
	$(".introductionArea").mouseout(mouseOutHide);
})