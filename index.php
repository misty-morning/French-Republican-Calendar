<?php 
	require_once 'base.php' 
?>

<?php startblock('head') ?>
	<link rel="stylesheet" type="text/css" href="/styles/index.css">
<?php endblock() ?>

<?php startblock('scripts') ?>
	<script type="text/javascript" src="/js/extended-calendar.js"></script>
	<script type="text/javascript" src="/js/visual-calendar.js"></script>
	<script type="text/javascript" src="/js/calc-calendar.js"></script>
<?php endblock() ?>

<?php startblock('content') ?>
	<div class="welcome">
		<?php get_text_block('index_welcome'); ?>
	</div>
	<div class="row">
		<div class="col-md-3 col-xs-12">
			<?php require 'templates/extended-calendar.php'; ?>
		</div>
		<div class="col-md-9 col-xs-12 visual-calendar-block">
			<?php require 'templates/visual-calendar.php'; ?>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 col-xs-12">
			<?php require 'templates/calc-calendar.php'; ?>
		</div>
	</div>
<?php endblock() ?>

