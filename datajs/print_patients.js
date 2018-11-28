
function view_all_patients() {
	var health_worker_id = $.session.get('session_id');
	var url=BaseURL+"list_patients.php?health_worker_id="+health_worker_id ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var mothers_name=field.mothers_name;
				var patient_dt=field.patient_dt;
				var type_of_delivery=field.type_of_delivery;
				/*var exam_date=field.exam_date;
				var test_type=field.test_type;
				var total_marks=field.total_marks;*/
				
				$("#listview").append('<li class="swipeout"><div class="swipeout-content item-content"><div class="post_entry"><div class="post_thumb"><img src="images/class _assignment.jpg" alt="" title="" /></div><div class="post_details"><div class="post_category"><a href="#">'+mothers_name+' &nbsp; '+patient_dt+'</a></div><h2><a href="#">'+type_of_delivery+' &nbsp; Patient Dt. '+patient_dt+'</a></h2></div><div class="post_swipe"><b>&nbsp;<br />&nbsp;</b></div></div></div></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_patients();
		
	});