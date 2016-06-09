<?php 
	require_once 'base.php' 
?>

<?php startblock('head') ?>
	<link rel="stylesheet" type="text/css" href="/styles/description.css">
<?php endblock() ?>

<?php startblock('scripts') ?>
<?php endblock() ?>

<?php startblock('content') ?>
	<div class="description">
		<?php get_text_block('description_main'); ?>
	</div>
<?php endblock() ?>