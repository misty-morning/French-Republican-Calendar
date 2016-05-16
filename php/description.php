<?php
	include 'db_connect.php';

	$welcome_query = "SELECT * FROM text_blocks WHERE name='main_description'";
	$welcome_result = mysqli_query($dbc, $welcome_query);
	while ($row = mysqli_fetch_array($welcome_result)) {
		echo $row['content'];
	}
	mysqli_close($dbc);
?>