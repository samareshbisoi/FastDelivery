function submit_data() {
 
 
        //$("#insert").click(function(){
            var feedback_value=$("#feedback_value").val();
			var ContactName=$("#ContactName").val();
            var phone=$("#phone").val();
			var identity=$("#identity").val();
			
						
			if($.trim(ContactName).length == 0) {
				alert("Please enter name.");
				return false;
			}
			
			if($.trim(identity).length == 0) {
				alert("Please enter identity.");
				return false;
			}
			
			//var eval_q = document.forms['eval_frm'] ;
			
						
			var txt = "";
					
            var dataString="feedback_value="+feedback_value+"&ContactName="+ContactName+"&phone="+phone+"&identity="+identity+"&mode=save";
			alert(BaseURL+"feedback_register.php?"+dataString); //return false ;
			
            if($.trim(eval_date).length>0 & $.trim(ContactName).length>0  )
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"feedback_register.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#submit").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert('Thanks for sharing the feedback.');
							
							$(location).attr('href', 'index.html');
														
							$("#submit").val('submit');
							
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