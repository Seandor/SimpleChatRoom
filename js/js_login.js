$(function() {
	//div_msg绑定全局ajaxStart事件
	$("#div_msg").ajaxStart(function() {
		$(this).show().html("正在发送登录请求...");
	});
	$("#div_msg").ajaxStop(function() {
		$(this).html("请求处理已完成。").hide();
	});
	$("#login_btn").click(function() {
		var $name = $("#text_name");
		var $pass = $("#text_pass");
		if ($name.val() != "" && $pass.val() != "") {
			user_login($name.val(), $pass.val());
		} else {
			if ($name.val() === "") {
				alert("用户名不能为空！");
				$name.focus();
				return false;
			} else {
				alert("密码不能为空！");
				$pass.focus();
				return false;
			}
		}
	});
});

function user_login(name, pass) {
	$.ajax( {
		type: "GET",
		url: "index.php",
		data: "action=login&d="+new Date()+"&name="+name+"&pass="+pass,
		success: function(data) {
			if (data == "1") {
				window.location = "chat.html";
			} else {
				alert("用户名密码错误！");
				return false;
			}
		}
	});
}