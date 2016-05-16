<?php
	include 'db_connect.php';
	//$action = $_POST['action'];

	//if ($action == 'get_all') {
		$records_query = "SELECT * FROM guest_book";
		$records_result = mysqli_query($dbc, $records_query);
		$records = array();
		class record {
			public $id;
			public $name;
			public $text;
		}
		while ($row = mysqli_fetch_array($records_result)) {
			$tmp = new record();
			$tmp->id = $row['id'];
			$tmp->name = $row['name'];
			$tmp->text = $row['record'];
			array_push($records, $tmp);
		}
		echo json_encode($records);
	//}

	mysqli_close($dbc);
?>