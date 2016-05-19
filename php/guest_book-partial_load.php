<?php
	include 'db_connect.php';
	header('Content-Type: application/json');

	$num = $_POST['num'];
	$step = $_POST['step'];

	$count_query = "SELECT COUNT(*) FROM guest_book";
	$count_con = mysqli_query($dbc, $count_query);
	$count = mysqli_fetch_array($count_con);
	$count = $count[0];
	$first_page = $count % $step;
	if ($first_page > 0) {
		if ($num == 1) {
			$records_query = "SELECT id, name, text, DATE_FORMAT(time, '%d.%m.%Y %H:%i') time FROM guest_book LIMIT 0, $first_page";
		} else {
			$index = $first_page + ($num - 1) * $step - $step;
			$records_query = "SELECT id, name, text, DATE_FORMAT(time, '%d.%m.%Y %H:%i') time FROM guest_book LIMIT $index, $step";
		}
	} else {
		$index = $num * $step - $step;
		$records_query = "SELECT id, name, text, DATE_FORMAT(time, '%d.%m.%Y %H:%i') time FROM guest_book LIMIT $index, $step";
	}

	$records_con = mysqli_query($dbc, $records_query);

	$records = array();
	while ($row = mysqli_fetch_array($records_con)) {
		array_push($records, $row);
	}
	//echo json_encode(array("records" => $records, "num" => $num, "step" => $step, "index" => $index);
	$answer = array("records" => $records, "num" => $num, "index" => $index, "count" => $count);
	echo json_encode($answer);
	mysqli_close($dbc);
?>