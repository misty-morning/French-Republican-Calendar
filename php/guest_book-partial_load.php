<?php
	include 'db_connect.php';
	header('Content-Type: application/json');

	$num = $_POST['num'];
	$step = $_POST['step'];

	$count_query = "SELECT COUNT(*) FROM guest_book";
	$count_con = mysqli_query($dbc, $main_count_query);
	$count = mysqli_fetch_array($count_con);

	$first_page = $count % $step;
	if ($first_page > 0) {
		$index = $first_page + ($count - 1) * $step;
	} else {
		$index = $count * $step;
	}

	//$index = 
	$records_query = "SELECT id, name, text, DATE_FORMAT(time, '%d.%m.%Y %H:%i') time FROM guest_book LIMIT $index $step";
	$records_con = mysqli_query($dbc, $records);

	$records = array();
	while ($row = mysqli_fetch_array($records_con)) {
		array_push($records, $row);
	}
	echo json_encode($records);
	mysqli_close($dbc);
?>