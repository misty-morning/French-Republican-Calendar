<?php
	include 'db_connect.php';

	$records_query = "SELECT id, name, text, DATE_FORMAT(time, '%d.%m.%Y %H:%i') time FROM guest_book";

	$records_result = mysqli_query($dbc, $records_query);
	$count = mysqli_num_rows($records_result);

	$records = array();
	while ($row = mysqli_fetch_array($records_result)) {
		array_push($records, $row);
	}
	
	$answer = array("records" => $records, "count" => $count);
	echo json_encode($answer);

	mysqli_close($dbc);
?>