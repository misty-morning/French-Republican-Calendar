<?php
	include 'db_connect.php';
	header('Content-Type: application/json');

	$name = $_POST['name'];
	$text = $_POST['text'];

	$query = "INSERT INTO guest_book (name, text) VALUES ('$name', '$text')";
	mysqli_query($dbc, $query);

/*	$id = mysqli_insert_id($dbc);

	$new_record_query = "SELECT id, name, text, DATE_FORMAT(time, '%d.%m.%Y %H:%i') time FROM guest_book WHERE id=$id LIMIT 1";
	$new_record = mysqli_query($dbc, $new_record_query);
	$new_record_answer = mysqli_fetch_array($new_record);

	echo json_encode($new_record_answer);*/

	$count_query = "SELECT COUNT(*) FROM guest_book";
	$count_con = mysqli_query($dbc, $count_query);
	$count = mysqli_fetch_array($count_con);
	$answer = $count[0];

	echo json_encode($count);

	mysqli_close($dbc);

?>