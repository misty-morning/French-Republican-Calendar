<?php 
	require_once $_SERVER['DOCUMENT_ROOT']."/libs/ti.php"; 
	require_once $_SERVER['DOCUMENT_ROOT']."/php/vars.php";

?>
<!DOCTYPE html>
<html>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link href="/libs/bootstrap-3.3.2/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link rel="stylesheet" type="text/css" href="/styles/base.css">
	<title>Французский республиканский календарь</title>

	<?php startblock('head') ?>
	<?php endblock() ?>

</head>

<body>
	<div class="main">

		<?php require "templates/main/header.php"; ?>

		<div class="container main-column">
			<div class="pusher-header"></div>

		<?php startblock('content') ?>
		<?php endblock() ?>

		</div>
	</div>

	<?php require "templates/main/footer.php"; ?>

	<script type="text/javascript" src="/libs/jquery-2.1.3.min.js"></script>
	<script type="text/javascript" src="/libs/bootstrap-3.3.2/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/libs/roman_numerals.js"></script>
	<script type="text/javascript" src="/js/calendar_data.js"></script>
	<script type="text/javascript" src="/js/calendar.js"></script>
	<script type="text/javascript" src="/js/base.js"></script>

	<?php startblock('scripts') ?>
	<?php endblock() ?>

</body>

</html>
