var POSTS = new Array();

var db_functions = (function($){
	var postPosts = function(topic, body, user_id){
		return $.ajax({
			type:"POST",
			url:"postPost.php",
			data: {topic:topic, body:body, user_id:user_id},
			success: function(response){
                console.log(response);
			},
			error: function(response){
                console.log(response);
			}
		});
	}
	
	var postAccount = function(username, passcode, signIn){
		return $.ajax({
			type:"POST",
			url:"./postAccount.php",
			data: {username:username, passcode:passcode, signIn:signIn},
			success: function(response){
                console.log(response);
				if(Number.isInteger(parseInt(response))){
					localStorage.setItem("user_id", response);
					document.getElementById("signin").style.display = "none";
				}
				else{
					document.getElementById("signinreply").innerHTML = response;
				}
			},
			error: function(response){
                console.log(response);
			}
		});
	}
	
	var postVotes = function(user_id, post_id, vote){
		return $.ajax({
			type:"POST",
			url:"postVote.php",
			data: {user_id:user_id, post_id:post_id, vote:vote},
			success: function(response){
                console.log(response);
			},
			error: function(response){
                console.log(response);
			}
		});
	}
	
	var getAllPosts = function(){
		return $.ajax({
			type:"POST",
			url:"getPost.php",
			data: {},
			success: function(response){
                POSTS = eval(response);
			},
			error: function(response){
                console.log(response);
			}
		});
	}
	
	var getUserPosts = function(user_id){
		return $.ajax({
			type:"POST",
			url:"getUserPoints.php",
			data: {user_id: user_id},
			success: function(response){
                POSTS = eval(response);
			},
			error: function(response){
                console.log(response);
			}
		});
	}
	
	return{
		postPosts: postPosts,
		postAccount: postAccount,
		postVotes: postVotes,
		getAllPosts: getAllPosts,
		getUserPosts: getUserPosts
	}
}(jQuery));

function postPost(topic, body, user_id){
	$.when(db_functions.postPosts(topic, body, user_id)).done(function(){
		console.log("postPost finish");
	});
}

function postAccount(username, passcode, signIn){
	$.when(db_functions.postAccount(username, passcode, signIn)).done(function(){
		console.log("postAccount finish");
	});
}

function postVotes(user_id, post_id, vote){
	$.when(db_functions.postVotes(user_id, post_id, vote)).done(function(){
		console.log("postVotes finish");
	});	
}

function getAllPosts(){
	$.when(db_functions.getAllPosts()).done(function(){
		console.log("getAllPosts finish");
	});
	return POSTS;
}

function getUserPosts(user_id){
	$.when(db_functions.getUserPosts(user_id)).done(function(){
		console.log("getUserPosts finish");
	});
	return POSTS;
}