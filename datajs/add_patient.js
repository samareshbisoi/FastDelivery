
function open_divA() {
	
	if(document.getElementById('evacuated_yes').checked == true) {
			  // radio button is checked
			 document.getElementById('label_evacuated_if_yes').style.visibility = "visible";
			  //document.getElementById('frmDiv_evacuated_if_yes').style.visibility = "visible";
			} else {
				 document.getElementById('label_evacuated_if_yes').style.visibility = "hidden";
			 // document.getElementById('frmDiv_evacuated_if_yes').style.visibility = "hidden";
			}
	
}

function open_divMM() {
	
	if(document.getElementById('metarnal_morbidity_yes').checked == true) {
			  // radio button is checked
			 document.getElementById('metarnal_morbidity_if_yes').style.visibility = "visible";
			} else {
				 document.getElementById('metarnal_morbidity_if_yes').style.visibility = "hidden";
			}
	
}

function openTB(val) {
	
	if(val == "Institution") {
			  // radio button is checked
			 document.getElementById('frmDiv_place_if_yes').style.visibility = "visible";
			} else {
				 document.getElementById('frmDiv_place_if_yes').style.visibility = "hidden";
			}
	
}

function submit_data() {
 
 
        //$("#insert").click(function(){
						
			var health_worker_id = $.session.get('session_id');			
						
            var mothers_name=$("#mothers_name").val();
			var patient_dt=$("#patient_dt").val();
            var preg_gravida=$("#preg_gravida").val();
			var preg_living=$("#preg_living").val();
			
			var preg_para=$("#preg_para").val();
			var preg_abortion=$("#preg_abortion").val();
            var anc_visit=$("#anc_visit").val();
			
			var ans_1 = "";
			var ans_2 = "";
			var ans_3 = "";
			var ans_4 = "";
			var ans_5 = "";
			
			if($.trim(mothers_name).length == 0) {
				alert("Please enter name.");
				return false;
			}
			
			if($.trim(patient_dt).length == 0) {
				alert("Please enter date.");
				return false;
			}
			
			//var eval_q = document.forms['eval_frm'] ;
			var prolonged_labour = "";
			if(document.getElementById('prolonged_labour_yes').checked) {
			  // radio button is checked
			  var prolonged_labour = "yes";
			}
			
			if(document.getElementById('prolonged_labour_no').checked) {
			  // radio button is checked
			  var prolonged_labour = "no";
			}
			
			var evacuated = "";
			if(document.getElementById('evacuated_yes').checked) {
			  // radio button is checked
			  var evacuated = "yes";
			}
			
			if(document.getElementById('evacuated_no').checked) {
			  // radio button is checked
			  var evacuated = "no";
			}
			
			var if_yes_evacuated=$("#if_yes_evacuated").val();
			var no_of_moves=$("#no_of_moves").val();
			var place_of_delivery=$("#place_of_delivery").val();
			
			var if_institution = "";
			
			if(document.getElementById('if_institution_g').checked) {
			  // radio button is checked
			  var if_institution = "Govt.";
			}
			
			if(document.getElementById('if_institution_p').checked) {
			  // radio button is checked
			  var if_institution = "Private";
			}
			
			var type_of_delivery=$("#type_of_delivery").val();
			
			var no_of_pnc_visit=$("#no_of_pnc_visit").val();
			
			 var fistula_cases_identified = "";
			if(document.getElementById('fistula_cases_identified_yes').checked) {
			  // radio button is checked
			  var fistula_cases_identified = "yes";
			}
			
			if(document.getElementById('fistula_cases_identified_no').checked) {
			  // radio button is checked
			  var fistula_cases_identified = "no";
			}
			
			var fistula_case_reffered = "";
			if(document.getElementById('fistula_case_reffered_yes').checked) {
			  // radio button is checked
			  var fistula_case_reffered = "yes";
			}
			
			if(document.getElementById('fistula_case_reffered_no').checked) {
			  // radio button is checked
			  var fistula_case_reffered = "no";
			}
			
			var psychological = "";
			if(document.getElementById('psychological_yes').checked) {
			  // radio button is checked
			  var psychological = "yes";
			}
			
			if(document.getElementById('psychological_no').checked) {
			  // radio button is checked
			  var psychological = "no";
			}
			
			var metarnal_morbidity = "";
			if(document.getElementById('metarnal_morbidity_yes').checked) {
			  // radio button is checked
			  var metarnal_morbidity = "yes";
			}
			
			if(document.getElementById('metarnal_morbidity_no').checked) {
			  // radio button is checked
			  var metarnal_morbidity = "no";
			}
			
			var if_yes_problem=$("#if_yes_problem").val();
			
			var metarnal_death = "";
			if(document.getElementById('metarnal_death_yes').checked) {
			  // radio button is checked
			  var metarnal_death = "yes";
			}
			
			if(document.getElementById('metarnal_death_no').checked) {
			  // radio button is checked
			  var metarnal_death = "no";
			}
			
			var txt = "";
					
            var dataString="health_worker_id="+health_worker_id+"&mothers_name="+mothers_name+"&patient_dt="+patient_dt+"&preg_gravida="+preg_gravida+"&preg_living="+preg_living+"&preg_para="+preg_para+"&preg_abortion="+preg_abortion+"&anc_visit="+anc_visit+"&prolonged_labour="+prolonged_labour+"&evacuated="+evacuated+"&if_yes_evacuated="+if_yes_evacuated+"&no_of_moves="+no_of_moves+"&place_of_delivery="+place_of_delivery+"&if_institution="+if_institution+"&type_of_delivery="+type_of_delivery+"&no_of_pnc_visit="+no_of_pnc_visit+"&fistula_cases_identified="+fistula_cases_identified+"&fistula_case_reffered="+fistula_case_reffered+"&psychological="+psychological+"&metarnal_morbidity="+metarnal_morbidity+"&if_yes_problem="+if_yes_problem+"&metarnal_death="+metarnal_death+"&mode=save";
			//alert(BaseURL+"add_patient.php?"+dataString); //return false ;
			
            if($.trim(mothers_name).length>0  )
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"add_patient.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#submit22").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert('Your patient data is saved');
							
							
							$("#submit").val('submit');
							
							$(location).attr('href', 'anm-dashboard.html');
							
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