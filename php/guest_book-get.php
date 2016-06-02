<?php
	require 'db_connect.php';

	$count_query = "SELECT COUNT(*) FROM guest_book";
	$count_con = mysqli_query($dbc, $count_query);
	$count = mysqli_fetch_row($count_con);
	$answer = $count[0];

	echo json_encode($count);

	mysqli_close($dbc);
?>