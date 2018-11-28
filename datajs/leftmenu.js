function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}

// <li><a href="faculty-registermynewmobile.html" class="close-panel"><img src="images/icons/red/mobile.png" alt="" title="" /><span>Register My New Mobile</span></a></li>

$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="english-home.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="english-what-is-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/what.png" alt="" title="" /><span>What is Obstetric Fistula ?</span></a></li><li><a href="english-types-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/types.png" alt="" title="" /><span>Types of Obstetric Fistula</span></a></li><li><a href="english-symptoms-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/symptoms.png" alt="" title="" /><span>Symptoms of Obstetric Fistula</span></a></li><li><a href="english-epidemiology-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/epidemiology.png" alt="" title="" /><span>Epidemiology of Obstetric Fistula</span></a></li><li><a href="english-causes-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/causes.png" alt="" title="" /><span>Causes of Obstetric Fistula</span></a></li><li><a href="english-identification-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/obstetric.png" alt="" title="" /><span>Identification of Obstetric Fistula</span></a></li><li><a href="english-management-prevention-of-of.html" class="close-panel"><img src="images/icons/red/management.png" alt="" title="" /><span>Management & Prevention of OF</span></a></li><li><a href="english-complication-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/complication.png" alt="" title="" /><span>Complication of Obstetric Fistula</span></a></li><li><a href="english-patient-info.html" class="close-panel"><img src="images/icons/red/patient.png" alt="" title="" /><span>Patient Info</span></a></li><li><a href="english-evaluation-questionnaires.html" class="close-panel"><img src="images/icons/red/questionnaires.png" alt="" title="" /><span>Evaluation Questionnaires</span></a></li><li><a href="english-anm-login.html" class="close-panel"><img src="images/icons/red/login.png" alt="" title="" /><span>ANM Login</span></a></li><li><a href="english-resources.html" class="close-panel"><img src="images/icons/red/resources.png" alt="" title="" /><span>Resources</span></a></li><li><a href="english-contact.html" class="close-panel"><img src="images/icons/red/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
		/*var RIGHTmenu = '<li><a href="#" class="close-panel"><img src="images/icons/red/settings.png" alt="" title="" /><span>Account Settings</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/briefcase.png" alt="" title="" /><span>My Account</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/message.png" alt="" title="" /><span>Notice</span><strong>12</strong></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/love.png" alt="" title="" /><span>Class</span><strong>5</strong></a></li><li><a href="logout.html" class="close-panel"><img src="images/icons/red/lock.png" alt="" title="" /><span>Logout</span></a></li>';
		
		$("#rightmenu").append(RIGHTmenu);*/
		
	});