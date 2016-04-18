$(document).ready(function(){
	$("#header_des").hover(
		function(){
			$("#header_des_top").text("resume");
			$("#header_des_bottom").text("前端工程师");
		},
		function(){
			$("#header_des_top").text("丁文丽");
			$("#header_des_bottom").text("个人简历");
		}
	);
    $("#home_head_content").hover(
    	function(){
    		$("#home_photo1").animate({opacity:"0"});
    		$("#home_photo2").animate({opacity:"1"});
    	},
    	function(){
    		$("#home_photo1").animate({opacity:"1"});
    		$("#home_photo2").animate({opacity:"0"});
    	}
    );
    $(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		'navigation': true,
	});

});
