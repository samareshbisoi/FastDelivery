
function get_all_details() {
	var delivery_boy_id = $.session.get('session_id');
	
	var dir = $.session.get('session_directory');
	
	var url=BaseURL+"/"+dir+"/phonegp/get_dboy_details.php?delivery_boy_id="+delivery_boy_id ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var desig_name='Designation - Delivery Boy' ;
				var delivery_boy_name='Name - ' + field.delivery_boy_name;
				var delivery_boy_address='Address - ' + field.delivery_boy_address;
				var delivery_boy_phone='Phone - ' + field.delivery_boy_phone;
				/*var test_type=field.test_type;
				var total_marks=field.total_marks;*/
				$("#h_name").html(delivery_boy_name);
	            $("#h_desig").html(desig_name);
				$("#h_district").html(delivery_boy_address);
				$("#h_gender").html(delivery_boy_phone);
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		get_all_details();
		
	});