<?php

	$connection = mysqli_connect("localhost", "root", "jaejaebinks88", "wordstory");
	if(mysqli_connect_errno())
	{
		echo("console.log(db connection failed);");
	}
	else{
		$user_id = $_POST['user_id'];
		$query = "SELECT `username` FROM `account` user_id = '$user_id';";
		$sendPost = mysqli_query($connection, $query);
		if(!$sendPost){
            echo("Post was not posted sucessfully");
        }
        else{
			echo(mysqli_fetch_array($sendPost)['username']);
		}
	}

?>