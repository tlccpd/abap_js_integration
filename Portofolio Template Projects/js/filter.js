$(function(){
	
	$("#filter li").click(function(){
		
		var category = $(this).html();
		
		$("#filter li").removeClass("active");
		
//		console.log(category); 
		
		$(this).addClass("active");
		
//		$("#portfolio li").fadeOut();
		
		$("#portfolio li").hide();
		
		$("#portfolio li").each(function(){
			
//			var test = $(this).html();	
//			console.log(test);
			
			if($(this).hasClass(category))
				{
//				$(this).fadeIn();
				$(this).show();
				}
		});
		
	});
});


