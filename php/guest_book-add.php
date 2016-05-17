<?php
	include 'db_connect.php';
	header('Content-Type: application/json');

	$name = $_POST['name'];
	$record = $_POST['text'];

	$query = "INSERT INTO guest_book (name, record) VALUES ('$name', '$record')";
	mysqli_query($dbc, $query);

	$id = mysqli_insert_id($dbc);

	$new_record_query = "SELECT * FROM guest_book WHERE id=$id";
	$new_record = mysqli_query($dbc, $new_record_query);
	//$records = array();
	class record {
		public $id;
		public $name;
		public $text;
	}
	while ($row = mysqli_fetch_array($new_record)) {
		$tmp = new record();
		$tmp->id = $row['id'];
		$tmp->name = $row['name'];
		$tmp->text = $row['record'];
		//array_push($records, $tmp);
	}

	echo json_encode($tmp);
	mysqli_close($dbc);

?>