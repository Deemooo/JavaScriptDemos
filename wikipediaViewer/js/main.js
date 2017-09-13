$(function() {

	//搜索icon事件
	$(".glyphicon-search").hover(function() {
		$(this).css("font-size", "5em");
	}, function() {
		$(this).css("font-size", "3em");
	})
	$(".glyphicon-search").click(function() {
		$(this).hide();
		$("input").show();
		$(".glyphicon-remove").show().css({
			"marginLeft": "-130px",
			"top": "255px"
		});
	})
	$(".glyphicon-remove").click(function() {
		$(this).css({
			"marginLeft": "-300px",
			"top": "250px"
		}).hide();
		$(".glyphicon-search").show();
		$("input").hide();
	})
})