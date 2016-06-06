<?php
	require_once 'db_config.php';

	$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	$charset = mysqli_set_charset($dbc, "utf8");

	function get_text_block($name) {
		global $dbc;

		$block_query = "SELECT content FROM text_blocks WHERE name='$name' LIMIT 1";
		$block_result = mysqli_query($dbc, $block_query);
		$block = mysqli_fetch_assoc($block_result);

		echo $block['content'];

		mysqli_close($dbc);
	}
?>