<?php
	include 'db_config.php';

	$dbc = mysqli_connect($db_host, $db_user, $db_password, $db_name);
	$charset = mysqli_set_charset($dbc, "utf8");

	function get_text_block($name, $dbc) {
		$block_query = "SELECT * FROM text_blocks WHERE name='".$name."'";
		$block_result = mysqli_query($dbc, $block_query);
		$block = mysqli_fetch_array($block_result);

		echo $block['content'];

		mysqli_close($dbc);
	}
?>