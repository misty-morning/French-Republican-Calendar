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

/*
	var year = {
		january: 31,
		february: 28,
		march: 31,
		april: 30,
		may: 31,
		june: 30,
		july: 31,
		august: 31,
		september: 30,
		october: 31,
		november: 30,
		december: 31
	};
*/	
	var testTime = new Date(2015, 4, 20);
	var firstDateOfThisYear = new Date(2014, 8, 23);

	
	var thisCommonMonth = commonTime.getMonth();
	var thisCommonDay = commonTime.getDate();

	
	var firstDayOfThisYear = firstDateOfThisYear.getDate();
	var firstMonthOfThisYear = firstDateOfThisYear.getMonth();

	var revTime = {};

	var daysAmount;

	var year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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
	revTime.year = commonTime.getFullYear() - 1791;
	revTime.month = daysAmount / 30 >> 0;	
	revTime.day = daysAmount % 30;
	revTime.decade = daysAmount % 10 - 1;


	console.log("daysAmount: " + daysAmount);
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