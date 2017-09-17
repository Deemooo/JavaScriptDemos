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
			$(".results").empty();
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
				console.log(r.query.search);
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

	var arrResults = [];
	var html = '';

	function showSearchRes(r) {

		// First we clear the children from our class to make sure no previous results are showing.
		$('.results').empty();

		// Then we also clear the array with the results before providing new information.
		arrResults.length = 0;
		var resArr = r.query.search;

		//For each result, generate the html data.
		for(var i in resArr) {

			html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + resArr[i].title + '"target="_blank"><h3>' + resArr[i].title + '</h3><p>' + resArr[i].snippet + '</p></a></div>';

			// Displays the elements to the page
			$('.results').append(html);
		}
	}

})