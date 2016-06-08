<?php require_once 'base.php' ?>

<?php startblock('head') ?>
	<link rel="stylesheet" type="text/css" href="/styles/description.css">
<?php endblock() ?>

<?php startblock('scripts') ?>
<?php endblock() ?>

<?php startblock('content') ?>
	<div class="description">
		<?php require_once $_SERVER['DOCUMENT_ROOT'].'/php/description.php'; ?>
	</div>
<?php endblock() ?>