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