$(function() {

	//搜索icon动作
	$(
		".glyphicon-search"
	).hover(
		function() {
			$(this).css(
				"font-size",
				"5em");
		},
		function() {
			$(this).css(
				"font-size",
				"3em");
		})
	$(
		".glyphicon-search"
	).click(
		function() {
			$(this).hide();
			$("input").show();
			$(
				".glyphicon-remove"
			).show().css({
				"marginLeft": "140px",
				"top": "255px"
			});
		})
	$(
		".glyphicon-remove"
	).click(
		function() {
			$(this).css({
				"marginLeft": "-300px",
				"top": "250px"
			}).hide();
			$(
				".glyphicon-search"
			).show();
			$("input").val(
				"").hide();
		})
	//获取wiki搜索结果
	var title = $("input").val();
	var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
	//	var cb = '&callback=JSON_CALLBACK';
	var page = 'https://en.wikipedia.org/?curid=';

	function showFun() {
		$.ajax({
			headers: {
				'Api-User-Agent': 'https://www.baidu.com/; yibiluo@gmail.com'
			},
			url: (api + title),
			dataType: 'json',
			type: 'POST',
			success: function(r) {
				if(typeof r === 'string') {
					r = JSON.parse(r);
				}
				alert(r);
			},
			error: function(jqXHR) {
				console.log(jqXHR.status);
			}
		})
	}
	$("input").keydown(function(e) {
		if(e.which === 13) {
			showFun();
		}
	})
})