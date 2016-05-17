<?php
	include 'db_connect.php';
	header('Content-Type: application/json');

	$name = $_POST['name'];
	$record = $_POST['text'];

	//$query = "INSERT INTO guest_book (name, record) VALUES ('$name', '$record')";
	$query = "INSERT INTO guest_book (name, record) VALUES ('$name', '$record')";

	mysqli_query($dbc, $query);

	$id = mysqli_insert_id($dbc);
	$answer = array('id' => $id);
	//array_push($answer, 'name' => $_POST['name']);
	echo json_encode($answer);
	mysqli_close($dbc);

?>