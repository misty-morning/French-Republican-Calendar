<?php
	include 'db_connect.php';
	header('Content-Type: application/json');

	$name = $_POST['name'];
	$text = $_POST['text'];

	$query = "INSERT INTO guest_book (name, text) VALUES ('$name', '$text')";
	mysqli_query($dbc, $query);


	$count_query = "SELECT COUNT(*) FROM guest_book";
	$count_con = mysqli_query($dbc, $count_query);
	$count = mysqli_fetch_array($count_con);
	$answer = $count[0];

	echo json_encode($count);

	mysqli_close($dbc);

?>