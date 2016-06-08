<?php require_once 'base.php' ?>

<?php startblock('head') ?>
	<link rel="stylesheet" type="text/css" href="/styles/index.css">
<?php endblock() ?>

<?php startblock('scripts') ?>
	<script type="text/javascript" src="/js/index.js"></script>
<?php endblock() ?>

<?php startblock('content') ?>
	<div class="welcome">
		<?php require_once 'php/index_welcome.php'; ?>
	</div>
	<div class="row">
		<div class="col-md-3 col-xs-12">
			<div class="month-img-block">
				<h3 id="month-img-head"></h3><img id="month-img-el" class="month-img-el">
				<div id="index__rev-date" class="index__rev-date"></div>
			</div>
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
					<input id="calc--day" type="number" min="1" max="31" class="form-field bigger-field">
				</div>
				<div>
					<lable for="calc--month">Месяц</lable>
					<select id="calc-month" class="form-field bigger-field">
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
					<input id="calc--year" type="number" min="1792" max="3000" class="form-field bigger-field">
				</div>
				<div>
					<lable for="calc--first-day" class="first-day-stuff">Осеннее равноденствие*</lable>
					<select id="calc--first-day" class="form-field bigger-field first-day-stuff">
						<option>22</option>
						<option>23</option>
						<option>24</option>
					</select>
				</div>
				<p id="calc__wrong-year" class="check-warn">Келендарь начинается с 1972 года.</p>
				<p class="index--comment first-day-stuff">* - Год во французском республиканском календаре начинается с дня осеннего равноденствия. Благодаря этой особенности он имеет более высокую (по сревнению с григорианским) астрономическую точность. Чтобы точно определить дату, необходимо указать дату предшествующего ей осеннего равноденствия.</p>
			</div>
			<div>
				<button id="calc--btn" class="btn btn-sm btn-danger">Результат</button>
			</div>
			<p id="calc--date"></p>
			<p id="calc--result"></p>
		</div>
	</div>
<?php endblock() ?>

