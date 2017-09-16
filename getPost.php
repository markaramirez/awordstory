<?php

	$connection = mysqli_connect("localhost", "root", "", "wordstory");
	if(mysqli_connect_errno())
	{
		echo("console.log(db connection failed);");
	}
	else{
		$query = "SELECT * FROM `post`;";
		$getPosts = mysqli_query($connection, $query);
		if(!$getPosts){
            echo("console.log(Posts failed to be retreived);");
        }
        else{
            echo("console.log(Retrieved the posts sucessfully);");
			echo(json_encode(mysqli_fetch_assoc($getPosts)));
        }
	}

?>