// JavaScript Document
//$( "#show_articles" ).load(function() {
  // Handler for .load() called.
//});$( "#sarticle" ).click(function()

function load_more() {
			var v = $("#next_off").val();
			//alert(v);
			
			/*var str = window.location.href;
			var start = str.lastIndexOf("?") + 1;
			var end = str.length;*/
			//alert(str.substring(start,end));	
			//var str = str.replace("#tab2", "");
			/*var a_id = str.substring(start,end) ;
			var url = "";*/
			//var health_worker_id = $.session.get('session_id');
			//url=BaseURL+"list_patients.php?health_worker_id="+health_worker_id+"&open_close=open&offset="+v;
			
			var delivery_boy_id = $.session.get('session_id');
	
	var dir = $.session.get('session_directory');
	
	var url=BaseURL+"/"+dir+"/phonegp/list_orders.php?delivery_boy_id="+delivery_boy_id+"&status=cancelled&offset="+v ; // alert(url);
			
			//var url=BaseURL+"article_data.php?cat="+art_cat+"&offset="+v;
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				if(field.next_offset == -1){
					$("#loadMore").hide();
				}
				if(i==0){
					var next_offset=field.next_offset;
					$("#next_off").val(next_offset);
				} else {
	        	var customer_name=field.customer_name;
				var order_date=field.order_date;
				var customer_phone=field.customer_phone;
				var order_auto_id=field.order_auto_id;
				
				var order_no_id=field.order_no_id;
				var order_address=field.order_address;
				var order_cost=field.order_cost;
				
	            $("#listview").append("<li><div class='feat_small_icon' style='background-color:#CCCCCC; font-size:14px; font-weight:bold; color:#990000; text-align:center;'>"+order_date+"</div><div class='feat_small_details'><h4><a href='order_detail.html?"+order_auto_id+"'>"+customer_name+"&nbsp;&nbsp;Order # "+order_no_id+" &nbsp; &nbsp; Order Cost: Rs."+order_cost+" </a></h4><a href='order_detail.html?"+order_auto_id+"'><strong>Address:</strong> &nbsp; "+order_address+"</a></div></li> ");
				
				}
	        });
    	});	
		}
	
	$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		
		/*var str = window.location.href;
		var start = str.lastIndexOf("?") + 1;
		var end = str.length;*/
		//alert(str.substring(start,end));	
		//var str = str.replace("#tab2", "");
		//var a_id = str.substring(start,end) ;
		//var url = "";
		//if($.isNumeric(a_id)){
		//alert(a_id);	
/*		var health_worker_id = $.session.get('session_id');
			url=BaseURL+"list_patients.php?health_worker_id="+health_worker_id+"&open_close=open";
*/			
			var delivery_boy_id = $.session.get('session_id');
	
	var dir = $.session.get('session_directory');
	
	var url=BaseURL+"/"+dir+"/phonegp/list_orders.php?delivery_boy_id="+delivery_boy_id+"&status=cancelled" ;  //alert(url);
			
			//$("#heading").html('Article');
		/*}
		else {
			url=BaseURL+"article_data.php?cat="+art_cat+"";
			$("#heading").html(art_cat_name);
		}*/
		
		//alert(url);
		//var url=BaseURL+"article_data.php?cat="+art_cat+"";
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				if(field.next_offset == -1){
					$("#loadMore").hide();
				}					
				if(i==0){
					var next_offset=field.next_offset;
					var tot_cnt_data=field.tot;
					$("#next_off").val(next_offset);
					$("#tot_cnt").html(tot_cnt_data); 
				} else {
	        	var customer_name=field.customer_name;
				var customer_phone=field.customer_phone;
				var order_date=field.order_date;
				var order_auto_id=field.order_auto_id;
				
				var order_no_id=field.order_no_id;
				var order_address=field.order_address;
				var order_cost=field.order_cost;
				
				
				 $("#listview").append("<li><div class='feat_small_icon' style='background-color:#CCCCCC; font-size:14px; font-weight:bold; color:#990000; text-align:center;'>"+order_date+"</div><div class='feat_small_details'><h4><a href='order_detail.html?"+order_auto_id+"'>"+customer_name+"&nbsp;&nbsp;Order # "+order_no_id+" &nbsp; &nbsp; Order Cost: Rs."+order_cost+" </a></h4><a href='order_detail.html?"+order_auto_id+"'><strong>Address:</strong> &nbsp; "+order_address+"</a></div></li> ");
				
				/* $("#listview").append("<li class='swipeout'><div class='swipeout-content item-content'><div class='post_entry'><div class='post_thumb'><img src='"+img_value+"' width='200' alt='' title='' /></div><div class='post_details'><div class='post_category'><a href='article-details.html?"+ article_id + "'>"+ article_title + "</a></div><h2><a href='article-details.html?"+ article_id + "'>"+ article_body +"</a></h2>By Fresh Box Office on "+post_date+"</div><div class='post_swipe'><img src='images/swipe_more.png' alt='' title='' /></div></div></div></li>");*/
				}
	        });
    	});
		
		
	});