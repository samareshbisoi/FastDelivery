function submit_data() {
 
 
        //$("#insert").click(function(){
            var username=$("#username").val();
            var password=$("#password").val();
			
			var res = username.split("_");
			var s = res.length;
			
			var login_dir = res[s-1];
			var login_name = res[0];
			
			$.session.set('session_directory', login_dir);
					
            var dataString="username="+username+"&password="+password+"&mode=login";
			//alert("http://swsinc.in/FBO/phonegap/insert_content_review.php?"+dataString);
            if($.trim(username).length>0 & $.trim(password).length>0 )
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"/"+login_dir+"/phonegp/db_login.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#login").val('Connecting...');},
                    success: function(data){
                        if(data=="authorized")
                        {
                            
                            $("#login").val('submit');
							$("#username").val('') ;
							$("#password").val('') ;
							$.session.set('session_id', username);
							$(location).attr('href', 'db-dashboard.html');
                        }
                        else if(data=="auth_failed")
                        {
                            alert("Invalid Login...Please try again");
							$("#login").val('submit');
							$("#username").val('') ;
							$("#password").val('') ;
                        } 
						
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }