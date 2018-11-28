function submit_data() {
 
 
        //$("#insert").click(function(){
            var eval_date=$("#eval_date").val();
			var ContactName=$("#ContactName").val();
            var phone=$("#phone").val();
			var identity=$("#identity").val();
			
			var ans_1 = "";
			var ans_2 = "";
			var ans_3 = "";
			var ans_4 = "";
			var ans_5 = "";
			
			if($.trim(ContactName).length == 0) {
				alert("Please enter name.");
				return false;
			}
			
			if($.trim(identity).length == 0) {
				alert("Please enter identity.");
				return false;
			}
			
			//var eval_q = document.forms['eval_frm'] ;
			
			if(document.getElementById('q_1_opt_1').checked) {
			  // radio button is checked
			  var ans_1 = "1";
			}
			
			if(document.getElementById('q_1_opt_2').checked) {
			  // radio button is checked
			  var ans_1 = "2";
			}
			
			if(document.getElementById('q_1_opt_3').checked) {
			  // radio button is checked
			  var ans_1 = "3";
			}
			
			if(document.getElementById('q_1_opt_4').checked) {
			  // radio button is checked
			  var ans_1 = "4";
			}
			
			// question2
			if(document.getElementById('q_2_opt_1').checked) {
			  // radio button is checked
			  var ans_2 = "1";
			}
			
			if(document.getElementById('q_2_opt_2').checked) {
			  // radio button is checked
			  var ans_2 = "2";
			}
			
			if(document.getElementById('q_2_opt_3').checked) {
			  // radio button is checked
			  var ans_2 = "3";
			}
			
			if(document.getElementById('q_2_opt_4').checked) {
			  // radio button is checked
			  var ans_2 = "4";
			}
			
			// question3
			if(document.getElementById('q_3_opt_1').checked) {
			  // radio button is checked
			  var ans_3 = "1";
			}
			
			if(document.getElementById('q_3_opt_2').checked) {
			  // radio button is checked
			  var ans_3 = "2";
			}
			
			if(document.getElementById('q_3_opt_3').checked) {
			  // radio button is checked
			  var ans_3 = "3";
			}
			
			if(document.getElementById('q_3_opt_4').checked) {
			  // radio button is checked
			  var ans_3 = "4";
			}
			
			// question4
			if(document.getElementById('q_4_opt_1').checked) {
			  // radio button is checked
			  var ans_4 = "1";
			}
			
			if(document.getElementById('q_4_opt_2').checked) {
			  // radio button is checked
			  var ans_4 = "2";
			}
			
			if(document.getElementById('q_4_opt_3').checked) {
			  // radio button is checked
			  var ans_4 = "3";
			}
			
			if(document.getElementById('q_4_opt_4').checked) {
			  // radio button is checked
			  var ans_4 = "4";
			}
			
			// question5
			if(document.getElementById('q_5_opt_1').checked) {
			  // radio button is checked
			  var ans_5 = "1";
			}
			
			if(document.getElementById('q_5_opt_2').checked) {
			  // radio button is checked
			  var ans_5 = "2";
			}
			
			if(document.getElementById('q_5_opt_3').checked) {
			  // radio button is checked
			  var ans_5 = "3";
			}
			
			if(document.getElementById('q_5_opt_4').checked) {
			  // radio button is checked
			  var ans_5 = "4";
			}
			
			var txt = "";
					
            var dataString="eval_date="+eval_date+"&ContactName="+ContactName+"&phone="+phone+"&identity="+identity+"&ans_1="+ans_1+"&ans_2="+ans_2+"&ans_3="+ans_3+"&ans_4="+ans_4+"&ans_5="+ans_5+"&mode=save";
			//alert(BaseURL+"evaluation_register.php?"+dataString); //return false ;
			
            if($.trim(eval_date).length>0 & $.trim(ContactName).length>0  )
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"evaluation_register.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#submit").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert('Thanks for answering the questionaire.');
							
							if(ans_1 != "2") {
								txt = txt + "Ans - 1 is wrong.\n";
							}
							
							if(ans_2 != "4") {
								txt = txt + "Ans - 2 is wrong.\n";
							}
							
							if(ans_3 != "3") {
								txt = txt + "Ans - 3 is wrong.\n";
							}
							
							if(ans_4 != "4") {
								txt = txt + "Ans - 4 is wrong.\n";
							}
							
							if(ans_5 != "4") {
								txt = txt + "Ans - 5 is wrong.\n";
							}
							
							if(txt == "") {
								alert("Congratulations! you have given all correct answers.");
							} else {
								alert(txt);
							}
							
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