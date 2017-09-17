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
	document.getElementById("comStoryBtn1").story = "This is the story of the modal";
	$('#storyModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var storyText = button.data('story') // Extract info from data-* attributes
	  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this)
	  modal.find('.modal-title').text('This story info')
	  modal.find('.modal-body input').val(storyText)
	})
	//getAllPosts();
	//
	// Order
	// num/postid/, num/topic, num/text, num/points, num/timestamp (yyyy-mm-dd military_time);
	/*var POSTS = {["postid: 1, topic:Family, points:5, timestamp:2017-09-17"]};
	int numPosts = POSTS.size();
	console.log(POSTS);

	for(int i = 0; i < numPosts; i++) {
				// fill buttons
				var check = document.getElementsById("comStoryBtn" + i);
				//Don't do this if the elment doesn't exist
				if(check.length == 1) {
					var btn = check[0];
					for(int valueIndex = 0; valueIndex < 5; valueIndex++) {
						// Fill the modal & btn with information
						btn.innerHTML = POSTS[i]["postid"];


					}
				}
	}*/

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
		postPost(document.getElementById("wordoftheday").innerHTML, document.getElementById("storyTextArea").value, localStorage.getItem("user_id"));
	}
}

function anonToggle(){
	document.getElementById("anon").style.display = "none";
	document.getElementById("signin").style.display = "block";
}

function submitAnon(){
	postPost(document.getElementById("wordoftheday").innerHTML, document.getElementById("storyTextArea").value, -1);
}
