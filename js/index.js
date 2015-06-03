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

	//Common Calendar

	var commonWeekArray = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	var commonMonthArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

	$(comWeekTag).html(commonWeekArray[commonTime.getDay()]);
	$(comDayTag).html(commonTime.getDate());
	$(comMonthTag).html(commonMonthArray[commonTime.getMonth()]);
	$(comYearTag).html(commonTime.getFullYear());

	//Revolutionary Calendar

	function revolutionaryCalendar(firstDayDate, date) {
		var thisCommonMonth = date.getMonth();
		var thisCommonDay = date.getDate();

		var firstDayOfThisYear = firstDayDate.getDate();
		var firstMonthOfThisYear = firstDayDate.getMonth();

		var year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		var daysAmount;

		if ((thisCommonMonth != firstMonthOfThisYear) || (thisCommonMonth === firstMonthOfThisYear && thisCommonDay < firstDayOfThisYear)) {
			daysAmount = year[firstMonthOfThisYear] - firstDayOfThisYear;
			if (thisCommonMonth > firstMonthOfThisYear) {
				for (var i = firstMonthOfThisYear + 1; i < thisCommonMonth; i++) {
					daysAmount += year[i];
				}
				daysAmount += thisCommonDay;
			}
			else if (thisCommonMonth <= firstMonthOfThisYear) {
				for (var i = firstMonthOfThisYear + 1; i <= 11; i++) {
					daysAmount += year[i];
				}
				for (var i = 0; i < thisCommonMonth; i++) {
					daysAmount += year[i];
				}
				daysAmount += thisCommonDay;
			}
		}
		else {
			daysAmount = thisCommonDay - firstDayOfThisYear;
		}
		//daysAmount += 1;

		var revolutionaryDate = {};
		
		revolutionaryDate.year = date.getFullYear() - 1791;
		revolutionaryDate.month = daysAmount / 30 >> 0;	
		revolutionaryDate.day = daysAmount % 30;
		revolutionaryDate.decade = daysAmount % 10 - 1;

		console.log("daysAmount: " + daysAmount);

		return revolutionaryDate;
	}

	var testTime = new Date(2015, 4, 20);
	var firstDateOfThisYear = new Date(2014, 8, 23);

	var revTime = revolutionaryCalendar(firstDateOfThisYear, commonTime);

	console.log("monthIndex: " + revTime.month);

	var revMonthsArray = ["вандемьера", "брюмера", "фримера", "нивоза", "плювиоза", "вантоза", "жерминаля", "флореаля", "прериаля", "мессидора", "термидора", "фрюктидора"];
	var revMonth = revMonthsArray[revTime.month];

	var decadeArray = ["Примиди", "Дуоди", "Триди", "Квартиди", "Квинтиди", "Секстиди", "Септиди", "Октиди", "Нониди", "Декади"];
	var revDecade = decadeArray[revTime.decade];

	var revDay = revTime.day;
	var revYear = revTime.year;

	$(revDecadeTag).html(revDecade);
	$(revDayTag).html(revDay);
	$(revMonthTag).html(revMonth);
	$(revYearTag).html(revYear);
});