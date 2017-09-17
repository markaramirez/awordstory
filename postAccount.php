<?php

	$connection = mysqli_connect("localhost", "root", "jaejaebinks88", "wordstory");
	if(mysqli_connect_errno())
	{
		echo("console.log(db connection failed);");
	}
	else{
		$username = $_POST['username'];
		$password = $_POST['passcode'];
		$signIn = $_POST['signIn'];
		
		if($signIn == "true"){
			$query = "SELECT * FROM `account` WHERE username = '$username' AND password = '$password';";
			$try_login = mysqli_query($connection, $query);
			if(mysqli_num_rows($try_login) == 1){
				echo(mysqli_fetch_array($try_login)['user_id']);
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
					$query = "SELECT * FROM `account` WHERE username='$username';";
					$uesr_id = mysqli_query($connection, $query);
					echo(mysqli_fetch_array($uesr_id)['user_id']);
				}
			}
		}
	}

	
?>