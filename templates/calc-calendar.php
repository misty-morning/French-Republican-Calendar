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