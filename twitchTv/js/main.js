$(function() {
	//直播账户列表
	var countArr = ["freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"]
	//获取数据
	countArr.forEach(function(item) {
		var api = 'https://wind-bow.glitch.me/twitch-api/channels/' + item + '/?callback=?';
		$.ajax({
			dataType: 'jsonp',
			type: 'GET',
			url: api,
			success: function(data) {
				if(typeof data === 'string') {
					data = JSON.parse(data);
				}
				showFun(data);
			},
			error: function(jqXHR) {
				alert(jqXHR.status);
			}
		})
	})
	//处理获取的数据 
	function showFun(data) {
		var game,
			status;
		if(data.stream === null) {
			game = "Offline";
			status = "offline";
		} else if(data.stream === undefined) {
			game = "Account Closed";
			status = "offline";
		} else {
			game = data.stream.game;
			status = "online";
		};
		var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
			name = data.display_name != null ? data.display_name : channel,
			description = status === "online" ? ': ' + data.status : "";
		var html = '<div class="channel-one ' +
			status + '"><span class="imgContainer"><img src="' +
			logo + '" class="logo"></span><div class="channel-content-status">' + data.status + '</div><span class="channel-content"><a href="' +
			data.url + '" target="_blank">' +
			name + '</a></span><span class="channel-content">' +
			status + '<span class="channel-content">' +
			description + '</span></span></div>';
		status === "online" ? $("#display").prepend(html) : $("#display").append(html);
	}
	// “all、online、offline”按钮点击事件
	$("#channel-list-one").click(function() {
		$(this).addClass("other").find(".circle").css("backgroundColor", "#FFFFFF");
		$(this).siblings().removeClass("other").find(".circle").css("backgroundColor", "#888888");
		$(".channel-one").show();
	});
	$("#channel-list-two").click(function() {
		$(this).addClass("other").find(".circle").css("backgroundColor", "#FFFFFF");
		$(this).siblings().removeClass("other").find(".circle").css("backgroundColor", "#888888");
		$("[class*=offline]").hide();
		$("[class*=online]").show();
	});
	$("#channel-list-three").click(function() {
		$(this).addClass("other").find(".circle").css("backgroundColor", "#FFFFFF");
		$(this).siblings().removeClass("other").find(".circle").css("backgroundColor", "#888888");
		$("[class*=online]").hide();
		$("[class*=offline]").show();
	});
})