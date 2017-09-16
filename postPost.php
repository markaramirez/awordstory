<?php

	$connection = mysqli_connect("localhost", "root", "", "wordstory");
	if(mysqli_connect_errno())
	{
		echo("console.log(db connection failed);");
	}
	else{
		$topic = $_POST['topic'];
		$text = $_POST['body'];
		$query = "INSERT INTO `post` (topic, text, points) VALUES ('$topic', '$text', '0');";
		$sendPost = mysqli_query($connection, $query);
		if(!$sendPost){
            echo("console.log(Post was not posted sucessfully);");
        }
        else{
            echo("console.log(Post posted sucessfully);");
			
			$user_id = $_POST['user_id'];
			if($user_id != -1){
				$query = "SELECT post_id FROM `post` WHERE text = '$text';";
				$post = mysqli_query($connection, $query);
				if(!$post){
					echo("console.log(Failed to retreive post id);");
				}
				else{
					$post_id = 0;
					while($row = mysqli_fetch_assoc($post)){
						$post_id = $row['post_id'];
					}
					$query = "INSERT INTO `account_post` (user_id, post_id) VALUES ('$user_id', '$post_id');";
					$linker = mysqli_query($connection, $query);
					if(!$linker){
						echo("console.log(failed to post to account_post);" . $post_id);
					}
					else{
						echo("console.log(account_post posted sucessfully);");
					}
				}
			}
		}
	}

?>