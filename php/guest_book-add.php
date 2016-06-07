<?php
	require_once 'db_connect.php';
	header('Content-Type: application/json');

	$name = mysqli_real_escape_string($dbc, trim($_POST['name']));
	$text = mysqli_real_escape_string($dbc, trim($_POST['text']));

	$query = "INSERT INTO guest_book (name, text) VALUES ('$name', '$text')";
	mysqli_query($dbc, $query);


	$count_query = "SELECT COUNT(*) FROM guest_book";
	$count_con = mysqli_query($dbc, $count_query);
	$count = mysqli_fetch_row($count_con);
	$answer = $count[0];

	echo json_encode($answer);

	mysqli_close($dbc);

?>