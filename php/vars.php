<?php
	require_once 'db_config.php';
	//seo
	$seo = array();
	$seo['title'] = "Французский революцоннный календарь online";
	$seo['description'] = "Французский революцоннный календарь online";
	$seo['keywords'] = "Французский революцоннный календарь online";

	function get_text_block($name) {
		$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
		$charset = mysqli_set_charset($dbc, "utf8");

		$block_query = "SELECT content FROM text_blocks WHERE name='$name' LIMIT 1";
		$block_result = mysqli_query($dbc, $block_query);
		$block = mysqli_fetch_row($block_result);

		echo $block[0];

		mysqli_close($dbc);
	}

?>