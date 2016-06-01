Data base configuration should be put in "php/db_config.php" file. Example:
	<?php
		const DB_HOST = "localhost";
		const DB_USER = "root";
		const DB_PASSWORD = "root";
		const DB_NAME = "calendar";
	?>
Data base should contain two tables: text_blocks, guest_book.
For roman numerals calculations code from here http://ph0enix.ru/romannums/ was used.