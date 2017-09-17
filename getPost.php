<?php

	$connection = mysqli_connect("localhost", "root", "jaejaebinks88", "wordstory");
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
			$ary = array();
            while($row = mysqli_fetch_array($getPosts)){
				$ary[] = $row;
			}
			echo(json_encode($ary));
        }
	}

?>