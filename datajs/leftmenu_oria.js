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
		var menu = '<li><a href="odia-home.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="odia-what-is-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/what.png" alt="" title="" /><span>ଅବଷ୍ଟେଟ୍ରିକ୍ ଫିଷ୍ଟୁଲା କଣ ଅଟେ ?</span></a></li><li><a href="odia-types-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/types.png" alt="" title="" /><span>ଅବଷ୍ଟେଟ୍ରିକ୍ ଫିଷ୍ଟୁଲାର ପ୍ରକାର ଭେଦ</span></a></li><li><a href="odia-symptoms-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/symptoms.png" alt="" title="" /><span>ଅବଷ୍ଟେଟ୍ରିକ୍ ଫିଷ୍ଟୁଲାର ଚିହ୍ନ ଓ ଲକ୍ଷଣ</span></a></li><li><a href="odia-epidemiology-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/epidemiology.png" alt="" title="" /><span>ଅବଷ୍ଟେଟ୍ରିକ୍ ଫିଷ୍ଟୁଲାର ମହାମାରୀ ରୂପ</span></a></li><li><a href="odia-causes-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/causes.png" alt="" title="" /><span>ଅବଷ୍ଟେଟ୍ରିକ୍ ଫିଷ୍ଟୁଲାର କାରଣ</span></a></li> <li><a href="odia-identification-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/obstetric.png" alt="" title="" /><span>ଅବଷ୍ଟେଟ୍ରିକ୍ ଫିଷ୍ଟୁଲାର ଚିହ୍ନଟୀକରଣ</span></a></li><li><a href="odia-management-prevention-of-of.html" class="close-panel"><img src="images/icons/red/management.png" alt="" title="" /><span>ଅବଷ୍ଟେଟ୍ରିକ୍ ଫିଷ୍ଟୁଲାର ପରିଚାଳନ ଓ ନିବାରଣ</span></a></li><li><a href="odia-complication-of-obstetric-fistula.html" class="close-panel"><img src="images/icons/red/complication.png" alt="" title="" /><span>ଅବଷ୍ଟେଟ୍ରିକ୍ ଫିଷ୍ଟୁଲାସହ ଜଡ଼ିତ ଅସୁବିଧା</span></a></li><li><a href="odia-patient-info.html" class="close-panel"><img src="images/icons/red/patient.png" alt="" title="" /><span>Patient Info</span></a></li><li><a href="odia-evaluation-questionnaires.html" class="close-panel"><img src="images/icons/red/questionnaires.png" alt="" title="" /><span>Evaluation Questionnaires</span></a></li><li><a href="odia-anm-login.html" class="close-panel"><img src="images/icons/red/login.png" alt="" title="" /><span>ANM Login</span></a></li><li><a href="odia-resources.html" class="close-panel"><img src="images/icons/red/resources.png" alt="" title="" /><span>Resources</span></a></li><li><a href="odia-contact.html" class="close-panel"><img src="images/icons/red/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
		/*var RIGHTmenu = '<li><a href="#" class="close-panel"><img src="images/icons/red/settings.png" alt="" title="" /><span>Account Settings</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/briefcase.png" alt="" title="" /><span>My Account</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/message.png" alt="" title="" /><span>Notice</span><strong>12</strong></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/love.png" alt="" title="" /><span>Class</span><strong>5</strong></a></li><li><a href="logout.html" class="close-panel"><img src="images/icons/red/lock.png" alt="" title="" /><span>Logout</span></a></li>';
		
		$("#rightmenu").append(RIGHTmenu);*/
		
	});