$(".tabs6").hide();

$(document).ready(function(){
  htmlobj=$.ajax({url:"homeData.jsp?flag=accordion",async:false});
  $("#accordion").html(htmlobj.responseText);
});

$(document).ready(function(){
  htmlobj=$.ajax({url:"homeData.jsp?flag=page-content",async:false});
  $("#page-content").html(htmlobj.responseText);
});

$(document).ready(function(){
	  htmlobj=$.ajax({url:"homeData.jsp?flag=statistics_chart_home",async:false});
	  $("#statistics_chart_home").html(htmlobj.responseText);
	});

$(document).ready(function(){
	$("#hot_technology").click(function(){
		$("#hot_technology_details").show();
		$("#hot_project_details").hide();
		$("#hot_card_details").hide();
		$("#hot_blog_details").hide();
	  htmlobj=$.ajax({url:"homeData.jsp?flag=hot_technology",async:false});
	  $("#hot_technology_details").html(htmlobj.responseText);
	});
	$("#hot_technology").click();
	});

$(document).ready(function(){
	$("#hot_project").click(function(){
		$("#hot_technology_details").hide();
		$("#hot_project_details").show();
		$("#hot_card_details").hide();
		$("#hot_blog_details").hide();
	  htmlobj=$.ajax({url:"homeData.jsp?flag=hot_project",async:false});
	  $("#hot_project_details").html(htmlobj.responseText);
	});
	});

$(document).ready(function(){
	$("#hot_card").click(function(){
		$("#hot_technology_details").hide();
		$("#hot_project_details").hide();
		$("#hot_card_details").show();
		$("#hot_blog_details").hide();
	  htmlobj=$.ajax({url:"homeData.jsp?flag=hot_card",async:false});
	  $("#hot_card_details").html(htmlobj.responseText);
	});
	});

$(document).ready(function(){
	$("#hot_blog").click(function(){
		$("#hot_technology_details").hide();
		$("#hot_project_details").hide();
		$("#hot_card_details").hide();
		$("#hot_blog_details").show();
	  htmlobj=$.ajax({url:"homeData.jsp?flag=hot_blog",async:false});
	  $("#hot_blog_details").html(htmlobj.responseText);
	});
	});

$(document).ready(function(){
  htmlobj=$.ajax({url:"homeData.jsp?flag=schedule_home",async:false});
  $("#schedule_home").html(htmlobj.responseText);
});

$(document).ready(function(){
	$("#blog_home").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#blog_details").show();
		$("#answer_details").hide();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"blog.jsp",async:false});
		//alert(htmlobj.responseText);
		$("#blog_details").html(htmlobj.responseText);
	});
});

$(document).ready(function(){
	$("#answer_home").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$(".tabs6").show();
		
		$("#blog_details").hide();
		$("#answer_details").show();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"answer.jsp?flag=wait_answer",async:false});
		//alert(htmlobj.responseText);
		$("#answer_details").html(htmlobj.responseText);
	});
});

$(document).ready(function(){
	$("#project_home").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#blog_details").hide();
		$("#answer_details").hide();
		$("#project_details").show();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"project.jsp",async:false});
		//alert(htmlobj.responseText);
		$("#project_details").html(htmlobj.responseText);
	});
});

$(document).ready(function(){
	$("#wait_answer").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#blog_details").hide();
		$("#answer_details").show();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"answer.jsp?flag=wait_answer",async:false});
		//alert(htmlobj.responseText);
		$("#answer_details").html(htmlobj.responseText);
	});
});
$(document).ready(function(){
	$("#already_answer").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#blog_details").hide();
		$("#answer_details").show();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"answer.jsp?flag=already_answer",async:false});
		//alert(htmlobj.responseText);
		$("#answer_details").html(htmlobj.responseText);
	});
});







$(document).ready(function(){
	$("#cloud_source").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#technology_source_details").show();
		$("#blog_details").hide();
		$("#answer_details").hide();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"technology.jsp?flag=cloud_source",async:false});
		//alert(htmlobj.responseText);
		$("#technology_source_details").html(htmlobj.responseText);
	});
});

$(document).ready(function(){
	$("#bigData_source").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#technology_source_details").show();
		$("#blog_details").hide();
		$("#answer_details").hide();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"technology.jsp?flag=bigData_source",async:false});
		//alert(htmlobj.responseText);
		$("#technology_source_details").html(htmlobj.responseText);
	});
});

$(document).ready(function(){
	$("#mobile_source").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#technology_source_details").show();
		$("#blog_details").hide();
		$("#answer_details").hide();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"technology.jsp?flag=mobile_source",async:false});
		//alert(htmlobj.responseText);
		$("#technology_source_details").html(htmlobj.responseText);
	});
});

$(document).ready(function(){
	$("#database_source").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#technology_source_details").show();
		$("#blog_details").hide();
		$("#answer_details").hide();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"technology.jsp?flag=database_source",async:false});
		//alert(htmlobj.responseText);
		$("#technology_source_details").html(htmlobj.responseText);
	});
});

$(document).ready(function(){
	$("#savfty_source").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#technology_source_details").show();
		$("#blog_details").hide();
		$("#answer_details").hide();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"technology.jsp?flag=savfty_source",async:false});
		//alert(htmlobj.responseText);
		$("#technology_source_details").html(htmlobj.responseText);
	});
});

$(document).ready(function(){
	$("#server_source").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#technology_source_details").show();
		$("#blog_details").hide();
		$("#answer_details").hide();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"technology.jsp?flag=server_source",async:false});
		//alert(htmlobj.responseText);
		$("#technology_source_details").html(htmlobj.responseText);
	});
});

$(document).ready(function(){
	$("#ui_source").click(function(){
		$("#main_left").hide();
		$("#main_right").hide();
		
		$("#technology_source_details").show();
		$("#blog_details").hide();
		$("#answer_details").hide();
		$("#project_details").hide();
		$("#bbs_details").hide();
		$("#contact_details").hide();
		htmlobj=$.ajax({url:"technology.jsp?flag=ui_source",async:false});
		//alert(htmlobj.responseText);
		$("#technology_source_details").html(htmlobj.responseText);
	});
});