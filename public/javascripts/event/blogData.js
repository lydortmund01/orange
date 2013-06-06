
//$(document).ready(function(){
//  htmlobj=$.ajax({url:"homeData.jsp?flag=accordion",async:false});
//  $("#accordion").html(htmlobj.responseText);
//});


$(document).ready(function(){
	$("#mobile").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=移动开发"

		});
	});
	$("#web").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=Web前端"

		});
	});
	$("#architecture").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=企业架构"

		});
	});
	$("#language").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=编程语言"

		});
	});
	$("#internet").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=互联网"

		});
	});
	$("#opensource").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=开源软件"

		});
	});
	$("#os").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=操作系统"

		});
	});
	$("#database").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=数据库"

		});
	});
	$("#develop").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=研发管理"

		});
	});
	$("#industry").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=行业应用"

		});
	});
	$("#other").click(function(){
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:3003/blog",
			data: "blogtype=非技术"

		});
	});
});
