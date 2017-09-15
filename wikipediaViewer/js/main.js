$(function() {

	//搜索icon动作
	$(
		".glyphicon-search"
	).hover(
		function() {
			$(this).css({
				"font-size": "6em",
				"top": "18%"
			});
		},
		function() {
			$(this).css({
				"font-size": "3.5em",
				"top": "20%"
			});
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
				"top": "20.2%"
			});
		})
	$(
		".glyphicon-remove"
	).click(
		function() {
			$(this).css({
				"marginLeft": "-300px",
				"top": "20.2%"
			}).hide();
			$(
				".glyphicon-search"
			).show();
			$("input").val(
				"").hide();
		})

	//获取wiki搜索结果
	function showFun() {
		var title = $("input").val();
		var api = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=';
		$.ajax({
			dataType: 'jsonp',
			type: 'POST',
			headers: {
				'Api-User-Agent': 'Example/1.0'
			},
			url: (api + title),
			success: function(r) {
				if(typeof r === 'string') {
					r = JSON.parse(r);
				}
				showSearchRes(r);
			},
			error: function(jqXHR) {
				alert(jqXHR.status);
			}
		})
	}
	$("input").keydown(function(e) {
		if(e.which === 13 && $("input").val() != "") {
			showFun();
		}
	})
	
	
	function showSearchRes(r) {
		var resArr = r.query.search;
		var container = "<div class='container'></div>";
		$("body").append(container);
		for(let i = 0, len = resArr.length; i < len; i++) {			

		}
	}
})