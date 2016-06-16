<?php require_once 'base.php'; ?>

<?php startblock('head') ?>
	<link rel="stylesheet" type="text/css" href="/styles/guest-book.css">
<?php endblock() ?>

<?php startblock('scripts') ?>
	<script type="text/javascript" src="libs/angular.min.js"></script>
	<script type="text/javascript" src="js/vmNg.js"></script>
	<script type="text/javascript" src="js/guest-book.js"></script>
<?php endblock() ?>

<?php startblock('content') ?>
	<?php require "templates/guest-book.php"; ?>
<?php endblock() ?>