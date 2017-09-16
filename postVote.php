<?php

	$connection = mysqli_connect("localhost", "root", "", "wordstory");
	if(mysqli_connect_errno())
	{
		echo("console.log(db connection failed);");
	}
	else{
		$user_id = $_POST['username'];
		$post_id = $_POST['password'];
		$vote = $_POST['vote'];
		$query = "INSERT INTO `account_vote` (user_id, post_id, vote) VALUES ('$user_id', '$post_id', '$vote');";
		$sendVote = mysqli_query($connection, $query);
		if(!$sendVote){
            echo("console.log(Vote was not posted sucessfully);");
        }
        else{
            echo("console.log(Vote posted sucessfully);");
        }
	}

?>