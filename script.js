function showWrite(){
    document.getElementById('write').style.display = 'block';
	document.getElementById('Community').style.display = 'none';
	document.getElementById('Profile').style.display = 'none';
	document.getElementById('About').style.display = 'none';
	
	document.getElementById('write_nav').innerHTML = 'Write<span class="sr-only">(current)</span>';
	document.getElementById('Community_nav').innerHTML = 'Community';
	document.getElementById('Profile_nav').innerHTML = 'Profile';
	document.getElementById('About_nav').innerHTML = 'About';
}

function showCommunity(){
	document.getElementById('write').style.display = 'none';
	document.getElementById('Community').style.display = 'block';
	document.getElementById('Profile').style.display = 'none';
	document.getElementById('About').style.display = 'none';
	
	document.getElementById('write_nav').innerHTML = 'Write';
	document.getElementById('Community_nav').innerHTML = 'Community<span class="sr-only">(current)</span>';
	document.getElementById('Profile_nav').innerHTML = 'Profile';
	document.getElementById('About_nav').innerHTML = 'About';
}

function showProfile(){
	document.getElementById('write').style.display = 'none';
	document.getElementById('Community').style.display = 'none';
	document.getElementById('Profile').style.display = 'block';
	document.getElementById('About').style.display = 'none';
	
	document.getElementById('write_nav').innerHTML = 'Write';
	document.getElementById('Community_nav').innerHTML = 'Community';
	document.getElementById('Profile_nav').innerHTML = 'Profile<span class="sr-only">(current)</span>';
	document.getElementById('About_nav').innerHTML = 'About';
}

function showAbout(){
	document.getElementById('write').style.display = 'none';
	document.getElementById('Community').style.display = 'none';
	document.getElementById('Profile').style.display = 'none';
	document.getElementById('About').style.display = 'block';
	
	document.getElementById('write_nav').innerHTML = 'Write';
	document.getElementById('Community_nav').innerHTML = 'Community';
	document.getElementById('Profile_nav').innerHTML = 'Profile';
	document.getElementById('About_nav').innerHTML = 'About<span class="sr-only">(current)</span>';
}

