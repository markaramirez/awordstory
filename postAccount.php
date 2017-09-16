<?php

	$connection = mysqli_connect("localhost", "root", "", "wordstory");
	if(mysqli_connect_errno())
	{
		echo("console.log(db connection failed);");
	}
	else{
		$username = $_POST['username'];
		$password = $_POST['password'];
		$query = "INSERT INTO `account` (username, password) VALUES ('$username', '$password');";
		$sendAccount = mysqli_query($connection, $query);
		if(!$sendAccount){
            echo("console.log(Account was not posted sucessfully);");
        }
        else{
            echo("console.log(Account posted sucessfully);");
        }
	}

	
?>