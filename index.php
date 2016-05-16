<!DOCTYPE html>
<html>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link href="libs/bootstrap-3.3.2/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link rel="stylesheet" type="text/css" href="styles/base.css">
	<link rel="stylesheet" type="text/css" href="styles/index.css">
	<title>Французский республиканский календарь</title>
</head>

<body>
	<div class="main">
		<header>
			<div class="container header-container">
				<h2>Французский республиканский календарь online</h2>
				<div class="row">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<h4>Сегодня:</h4>
						<p id="index--rev-calendar"></p>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<h4>Григорианский календарь:</h4>
						<p id="index--common-calendar"></p>
					</div>
				</div>
				<div class="row header--menu">
					<div role="group" aria-label="..." class="btn-group"><a href="/index.php" class="btn btn-sm btn-danger">Календарь</a><a href="/description.php" class="btn btn-sm btn-danger">Описание</a><a href="/guest.html" class="btn btn-sm btn-danger">Гостевая книга</a></div>
				</div>
			</div>
		</header>
		<div class="container main-column">
			<div class="pusher-header"></div>
			<div class="welcome">
				<?php include 'php/index_welcome.php'; ?>
			</div>
			<div class="row">
				<div class="col-md-3 col-xs-12">
					<div class="month-img-block">
						<h3 id="month-img-head"></h3><img id="month-img-el" class="month-img-el"></div>
				</div>
				<div class="col-md-9 col-xs-12 visual-calendar-block">
					<h3>Визуальный календарь</h3>
					<div class="vc-wrapper">
						<div id="visual-calendar" class="visual-calendar"></div>
					</div>
					<p class="index--comment">Оригинальный календарь не содержал предписаний по поводу выходных. Однако государственным служащим в период великой французской революции полагался один выходной (декади, 10 день декады). Предложенная здесь система является идеей авторов сайта (спасибо Леше Филиппову). Количество выходных в году здесь примерно соответстует семидневной неделе с двумя выходными. Выходные отмечены желтым.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-xs-12">
					<h3>Узнать дату</h3>
					<p>Введите дату по григоринскому календарю</p>
					<div class="row">
						<div>
							<lable for="calc--day">День</lable>
							<input id="calc--day" type="number" min="1" max="31" class="form-field">
						</div>
						<div>
							<lable for="calc--month">Месяц</lable>
							<select id="calc-month" class="form-field">
								<option value="0">Январь</option>
								<option value="1">Февраль</option>
								<option value="2">Март</option>
								<option value="3">Апрель</option>
								<option value="4">Май</option>
								<option value="5">Июнь</option>
								<option value="6">Июль</option>
								<option value="7">Август</option>
								<option value="8">Сентябрь</option>
								<option value="9">Октябрь</option>
								<option value="10">Ноябрь</option>
								<option value="11">Декабрь</option>
							</select>
						</div>
						<div>
							<lable for="calc--year">Год</lable>
							<input id="calc--year" type="number" min="1792" max="3000" class="form-field">
						</div>
						<div>
							<lable for="calc--first-day">Осеннее равноденствие*</lable>
							<select id="calc--first-day" class="form-field">
								<option>22</option>
								<option>23</option>
								<option>24</option>
							</select>
						</div>
						<p class="index--comment">* - Год во французском республиканском календаре начинается с дня осеннего равноденствия. Благодаря этой особенности он имеет более высокую (по сревнению с григорианским) астрономическую точность. Чтобы точно определить дату, необходимо указать дату предшествующего ей осеннего равноденствия.</p>
					</div>
					<div>
						<button id="calc--btn" class="btn btn-sm btn-danger">Результат</button>
					</div>
					<p id="calc--result"></p>
				</div>
			</div>
		</div>
	</div>
	<footer class="footer">
		<div class="container">Проект на <a href="https://github.com/tov-kaschey/French-Republican-Calendar">gitHub</a>
			<br>Адрес разработчика <a href="">e-mail</a></div>
	</footer>
	<script type="text/javascript" src="libs/jquery-2.1.3.min.js"></script>
	<script src="libs/bootstrap-3.3.2/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/calendar_names.js"></script>
	<script type="text/javascript" src="js/calendar.js"></script>
	<script type="text/javascript" src="js/base.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
</body>

</html>