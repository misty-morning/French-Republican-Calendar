<?php
	include 'db_connect.php';

	$name = $_POST['name'];
	$record = $_POST['text'];

	$query = "INSERT INTO guest_book (name, record) VALUES ('".$name."', '".$record."')";
	mysqli_query($dbc, $query);

	$id = mysqli_insert_id($dbc);
	$answer = array('id' => $id);

	echo json_encode($answer);
	mysqli_close($dbc);

?>