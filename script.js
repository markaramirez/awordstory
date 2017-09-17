function showWrite(){
	document.getElementById('write_nav').className = 'nav-item active';
	document.getElementById('Community_nav').className = 'nav-item';
	document.getElementById('Profile_nav').className = 'nav-item';
	document.getElementById('About_nav').className = 'nav-item';
	
	document.getElementById("write").style.display = 'block';
	document.getElementById("Community").style.display = 'none';
	document.getElementById("Profile").style.display = 'none';
	document.getElementById("About").style.display = 'none';
}

function showCommunity(){
	
	document.getElementById('write_nav').className = 'nav-item';
	document.getElementById('Community_nav').className = 'nav-item active';
	document.getElementById('Profile_nav').className = 'nav-item';
	document.getElementById('About_nav').className = 'nav-item';
	
	document.getElementById("write").style.display = 'none';
	document.getElementById("Community").style.display = 'block';
	document.getElementById("Profile").style.display = 'none';
	document.getElementById("About").style.display = 'none';
}

function showProfile(){
	
	document.getElementById('write_nav').className = 'nav-item';
	document.getElementById('Community_nav').className = 'nav-item';
	document.getElementById('Profile_nav').className = 'nav-item active';
	document.getElementById('About_nav').className = 'nav-item';
	
	document.getElementById("write").style.display = 'none';
	document.getElementById("Community").style.display = 'none';
	document.getElementById("Profile").style.display = 'block';
	document.getElementById("About").style.display = 'none';
}

function showAbout(){
	document.getElementById('write_nav').className = 'nav-item';
	document.getElementById('Community_nav').className = 'nav-item';
	document.getElementById('Profile_nav').className = 'nav-item';
	document.getElementById('About_nav').className = 'nav-item active';
	
	document.getElementById("write").style.display = 'none';
	document.getElementById("Community").style.display = 'none';
	document.getElementById("Profile").style.display = 'none';
	document.getElementById("About").style.display = 'block';
}

var signIn = true;
function toggleLogin(){
	if(document.getElementById("sign-in").className === "text-muted"){
		document.getElementById("sign-in").className = "";
		document.getElementById("register").className = "text-muted";
		signIn = true;
	}
	else{
		document.getElementById("register").className = "";
		document.getElementById("sign-in").className = "text-muted";
		signIn = false;
	}
}
function loginRegister(){
	console.log(document.getElementById("InputEmail1").value + document.getElementById("InputPassword1").value + signIn);
	var returnValue = postAccount(document.getElementById("InputEmail1").value, document.getElementById("InputPassword1").value, signIn);
	if(returnValue === "Login Successful"){
		console.log(returnValue);
	}
	else{
		document.getElementById("signinreply").innerHTML = returnValue;
	}
}

function submitPost(){
	console.log(localStorage.getItem("user_id"));
	if(localStorage.getItem("user_id") === "-1"){
		document.getElementById("anon").style.display = "block";
		document.getElementById("submitbtn").style.display = "none";
	}
	else{
		
	}
}