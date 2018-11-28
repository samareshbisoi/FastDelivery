
function submit_data() {
 
 
        //$("#insert").click(function(){
						
			//var health_worker_id = $.session.get('session_id');
			
			var delivery_boy_id = $.session.get('session_id');
	
	var dir = $.session.get('session_directory');
	
	//var url=BaseURL+"/"+dir+"/phonegp/update_order.php?delivery_boy_id="+delivery_boy_id+"&status=pending" ; 
						
            var order_status=$("#order_status").val();
			var comment=$("#comment").val();
            var order_auto_id=$("#order_auto_id").val();

			
			var txt = "";
					
            var dataString="order_status="+order_status+"&comment="+comment+"&order_auto_id="+order_auto_id+"&delivery_boy_id="+delivery_boy_id+"&mode=save";
			//alert(BaseURL+"edit_patient.php?"+dataString); //return false ;
			
            if($.trim(order_status).length>0  )
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"/"+dir+"/phonegp/update_order.php?"  ,
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#submit22").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert('Your order data is updated');
							
							
							$("#submit").val('submit');
							
							$(location).attr('href', 'db-dashboard.html');
							
                            /*
							$("#uni_reg_no").val('') ;
							$("#password").val('') ;
							$("#email").val('') ;
							$(location).attr('href', 'student-login.html');*/
                        }
                        else if(data=="error")
                        {
                            alert("Invalid Data...Please try again");
							$("#submit").val('submit');
							/*$("#username").val('') ;
							$("#password").val('') ;*/
                        } 
						 /*else if(data=="no")
                        {
                            alert("Sorry Registration No. does not exists in our database.");
							$("#register").val('submit');
							$("#uni_reg_no").val('') ;
							$("#password").val('') ;
							$("#email").val('') ;
                        }*/
						
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }
 
 
 	$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		
		var str = window.location.href;
		var start = str.lastIndexOf("?") + 1;
		var end = str.length;
		//alert(str.substring(start,end));	
		var str = str.replace("#tab2", "");
		var a_id = str.substring(start,end) ;
		var url = "";
		//if($.isNumeric(a_id)){
		//alert(a_id);	
		var delivery_boy_id = $.session.get('session_id');
			//url=BaseURL+"get_patient_details.php?patient_id="+a_id ;
		var dir = $.session.get('session_directory');
	
		var url=BaseURL+"/"+dir+"/phonegp/get_order_details.php?order_auto_id="+a_id+"&delivery_boy_id="+delivery_boy_id ; //alert(url);	
			
			//$("#heading").html('Article');
		//}
		
		
		//alert(url);
		//var url=BaseURL+"article_data.php?cat="+art_cat+"";
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
									
				//alert(field.mothers_name);
	        	$("#customer_name").val(field.customer_name) ;
				$("#order_date").val(field.order_date) ;
				//alert(field.preg_gravida);
				$("#customer_phone").val(field.customer_phone) ;
				$("#order_no_id").val(field.order_no_id) ;
				$("#payment_method").val(field.payment_method) ;
				$("#order_cost").val(field.order_cost) ;
				
				$("#order_address").val(field.order_address) ;
				//$("#prolonged_labour").val(field.prolonged_labour) ;

				
				//$("#metarnal_death").val(field.metarnal_death) ;
				
				$("#order_auto_id").val(field.order_auto_id) ;
				
				var patient_dt=field.patient_dt;
				var type_of_delivery=field.type_of_delivery;
				var patient_id=field.patient_id;
				
				
				
				/* $("#listview").append("<li class='swipeout'><div class='swipeout-content item-content'><div class='post_entry'><div class='post_thumb'><img src='"+img_value+"' width='200' alt='' title='' /></div><div class='post_details'><div class='post_category'><a href='article-details.html?"+ article_id + "'>"+ article_title + "</a></div><h2><a href='article-details.html?"+ article_id + "'>"+ article_body +"</a></h2>By Fresh Box Office on "+post_date+"</div><div class='post_swipe'><img src='images/swipe_more.png' alt='' title='' /></div></div></div></li>");*/
				
	        });
    	});
		
		
	});