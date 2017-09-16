<?php

	$connection = mysqli_connect("localhost", "root", "", "wordstory");
	if(mysqli_connect_errno())
	{
		echo("console.log(db connection failed);");
	}
	else{
		$username = $_POST['username'];
		$password = $_POST['password'];
		$signIn = $_POST['signIn'];
		
		if($signIn == true){
			$query = "SELECT * FROM `account` WHERE username = '$username' AND password = '$password';";
			$try-login = mysqli_query($connection, $query);
			if(mysqli_num_rows($try-login) == 1){
				
				echo(mysqli_fetch_array($try-login)[0]['user_id']);
			}
			else{
				echo("Wrong Username or Password");
			}
		}
		else{
			$query = "SELECT * FROM `account` WHERE username = '$username';";
			$existCheck = mysqli_query($connection, $query);
			if(mysqli_num_rows($existCheck) > 0){
				echo('Username already exists');
			}
			else{
				$query = "INSERT INTO `account` (username, password) VALUES ('$username', '$password');";
				$sendAccount = mysqli_query($connection, $query);
				if(!$sendAccount){
					echo("Account was not created");
				}
				else{
					echo("Account created");
				}
			}
		}
	}

	
?>