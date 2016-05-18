<?php
	include 'db_connect.php';

	//$records_query = "SELECT * FROM guest_book ORDER BY id DESC";
	$records_query = "SELECT id, name, record, DATE_FORMAT(time, '%d.%m.%Y %H:%i') time FROM guest_book";

	$records_result = mysqli_query($dbc, $records_query);
	$records = array();
	class record {
		public $id;
		public $time;
		public $name;
		public $text;
	}
	while ($row = mysqli_fetch_array($records_result)) {
		$tmp = new record();
		$tmp->id = $row['id'];
		$tmp->time = $row['time'];
		$tmp->name = $row['name'];
		$tmp->text = $row['record'];
		array_push($records, $tmp);
	}
	echo json_encode($records);

	mysqli_close($dbc);
?>