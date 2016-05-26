//Revolutionary Calendar

//First day of the calendar is the day of the autumn solstice
var RevolutionaryCalendar = function(date, firstDay) {
	var firstMonthOfThisYear = 8;

	var firstDayOfThisYear;

	if (!firstDay) {
		firstDayOfThisYear = 22;
	}
	else {
		firstDayOfThisYear = firstDay;
	}

	//firstDayOfThisYear -= 1;

	var thisCommonMonth = date.getMonth();
	var thisCommonDay = date.getDate();

	var year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	var revYear;
	var thisCommonYear = date.getFullYear();

	var leapYear = thisCommonYear % 4 === 0;

	if (leapYear) {
		year[1] = 29;
	}

	var daysAmount;

	if ((thisCommonMonth != firstMonthOfThisYear) ||
		(thisCommonMonth === firstMonthOfThisYear && thisCommonDay < firstDayOfThisYear)) {

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



	if (thisCommonMonth > 8 || thisCommonMonth == 8 && thisCommonDay >= firstDayOfThisYear) {
		revYear = thisCommonYear - 1791;
	}
	else {
		revYear = thisCommonYear - 1792;
	}

	var revolutionaryDate = {};

	revolutionaryDate.year = revYear;
	revolutionaryDate.month = daysAmount / 30 >> 0;
	revolutionaryDate.day = daysAmount % 30 + 1;
	revolutionaryDate.decade = daysAmount % 10;
	revolutionaryDate.dayName = daysAmount;

	console.log("days amount " + daysAmount);

	return revolutionaryDate;
};

function renderRevCalendar(revolutionaryCalendar, $element) {
	var dayName = calendarNames.day[revolutionaryCalendar.dayName];
	var revMonth = calendarNames.month[revolutionaryCalendar.month];
	var revDecade = calendarNames.decade[revolutionaryCalendar.decade];

	var revDay = revolutionaryCalendar.day;
	var revYear = revolutionaryCalendar.year;

	if (revolutionaryCalendar.dayName < 360) {
		$element.html("День " + dayName +  ".<br>" + revDecade + ", " + revDay + " " + revMonth + " " + revYear + " года.");
	}
	else {
		var	sansculottideNumber = revolutionaryCalendar.dayName - 360;
		$element.html(calendarNames.sansculottideOrder[sansculottideNumber] + " санкюлотида: " + calendarNames.sansculottide[sansculottideNumber] + ", " + revYear + " год.");
	}
}

var currentFirstDay = 23;

// Common calendar

var testTime = new Date(2015, 0, 1);

var commonTime = new Date();

function renderCommonCalendar(date, $element) {
	$element.html(commonWeekArray[date.getDay()] + ",<br> " + date.getDate() + " " + commonMonthArray[date.getMonth()] + " " + date.getFullYear() + " года.");
}
