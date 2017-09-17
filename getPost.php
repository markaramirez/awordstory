<?php

	$connection = mysqli_connect("http://45.33.116.130/", "root", "jaejaebinks88", "wordstory");
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