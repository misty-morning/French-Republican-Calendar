//Ui
var revDecadeTag = "[data-js-decade]"
var revDayTag = "[data-js-day]"
var revMonthTag = "[data-js-month]"
var revYearTag = "[data-js-year]"

var comWeekTag = "[data-js-com-week]"
var comDayTag = "[data-js-com-day]"
var comMonthTag = "[data-js-com-month]"
var comYearTag = "[data-js-com-year]"

$(document).ready(function() {
	var commonTime = new Date();

	var commonWeek
	switch (commonTime.getDay()) {
		case 0:
			commonWeek = "Воскресенье"
			break;
		case 1:
			commonWeek = "Понедельник"
			break;
		case 2:
			commonWeek = "Вторник"
			break;
		case 3:
			commonWeek = "Среда"
			break;
		case 4:
			commonWeek = "Четверг"
			break;
		case 5:
			commonWeek = "Пятница"
			break;
		case 6:
			commonWeek = "Суббота"
			break;
	}
	var commonMonth
	switch (commonTime.getMonth()) {
		case 0:
			commonMonth = "января"
			break;
		case 1:
			commonMonth = "февраля"
			break;
		case 2:
			commonMonth = "марта"
			break;
		case 3:
			commonMonth = "апреля"
			break;
		case 4:
			commonMonth = "мая"
			break;
		case 5:
			commonMonth = "июня"
			break;
		case 6:
			commonMonth = "июля"
			break;
		case 7:
			commonMonth = "августа"
			break;
		case 8:
			commonMonth = "сентября"
			break;
		case 9:
			commonMonth = "октября"
			break;
		case 10:
			commonMonth = "ноября"
			break;
		case 11:
			commonMonth = "декабря"
			break;
	}

	$(comWeekTag).html(commonWeek);
	$(comDayTag).html(commonTime.getDate());
	$(comMonthTag).html(commonMonth);
	$(comYearTag).html(commonTime.getFullYear());
})