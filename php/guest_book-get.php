<?php
	include 'db_connect.php';

	$records_query = "SELECT id, name, text, DATE_FORMAT(time, '%d.%m.%Y %H:%i') time FROM guest_book";

	$records_result = mysqli_query($dbc, $records_query);
	$records = array();
	while ($row = mysqli_fetch_array($records_result)) {
		array_push($records, $row);
	}
	echo json_encode($records);

	mysqli_close($dbc);
?>