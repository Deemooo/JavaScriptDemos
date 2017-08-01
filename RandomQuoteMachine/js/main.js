$(function() {
	function showFun() {
		$.ajax({
			headers: {
				"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
				Accept: "application/json",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
			success: function(r) {
				if(typeof r === 'string') {
					r = JSON.parse(r);
				}
				$(".panelbodyQuote").text('\"' + r.quote + '\"');
				$(".panelbodyAuthor").text("- " + r.author);
			},
			error: function(jqXHR) {
				console.log(jqXHR.status);
			}
		})
	}
	showFun();
	$("input").click(showFun);
	/*微博分享按鈕*/
	$(".fa").hover(function(){
		$(".sharePrompt").show();
	},function(){
		$(".sharePrompt").hide();
	});
	$("a.fa:first-child").click(function(){
		var weiboShareCon = $(".panelbodyQuote").text() + $(".panelbodyAuthor").text();
		var shareUrl = "http://service.weibo.com/share/share.php?appkey=&title="+weiboShareCon+"&url=&pic=&searchPic=false&style=simple";
		var newStr = shareUrl.replace(/\"+/,"");
		console.log(newStr);
		$(this).attr("href",newStr);
	});
})