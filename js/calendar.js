//Revolutionary Calendar

//First day of the calendar is the day of the autumn solstice
var RevolutionaryCalendar = function(date, firstDay) {

	var thisCommonYear = date.getFullYear();

	var firstMonthOfThisYear = 8;

	//var firstDayOfThisYear;

	var thisCommonMonth = date.getMonth();
	var thisCommonDay = date.getDate();

	var firstDayOfThisYear = 22;
	//var lastDay = 22;
	//firstDayOfNextYear = 22;

	var yearForFirstDateCalc;

	 
/*	if ( (thisCommonMonth > firstMonthOfThisYear) || 
		(thisCommonMonth == firstMonthOfThisYear && thisCommonDay > 24) ) {
		yearForFirstDateCalc = thisCommonYear;
	} else if ( (thisCommonMonth < firstMonthOfThisYear) ||
		 (thisCommonMonth == firstMonthOfThisYear && thisCommonDay < 22) ) {
		yearForFirstDateCalc = thisCommonYear - 1;
	} else {


	} 

	console.log("yearForFirstDateCalc", yearForFirstDateCalc);

	for (year in equinoxes) {
		if (parseInt(year) === yearForFirstDateCalc) {
			firstDayOfThisYear = equinoxes[year];
			console.log("found", firstDayOfThisYear);
			break;
		}
	}
	for (year in equinoxes) {
		if (parseInt(year) === yearForFirstDateCalc + 1) {
			firstDayOfNextYear = equinoxes[year];
			console.log("found", firstDayOfNextYear)
			break;
		}
	}	*/

	var firstPart;

	var prevYear = thisCommonYear - 1;
	var nextYear = thisCommonYear + 1;

	var firstDayFromPrevYear = false;

	var tmpThisYearStart = 22;
	var tmpPrevYearStart = 22;
	for (year in equinoxes) {
		if (parseInt(year) === prevYear) {
			tmpPrevYearStart = equinoxes[year];
			console.log("found tmpThisYearStart", tmpPrevYearStart)
			//break;
		}
		if (parseInt(year) === thisCommonYear) {
			tmpThisYearStart = equinoxes[year];
			console.log("found tmpPrevYearStart", tmpThisYearStart)
			//break;
		}
/*		if (parseInt(year) === nextYear) {
			tmpNextYearStart = equinoxes[year];
			console.log("found tmpNextYearStart", tmpNextYearStart)
			break;
		}*/

	}
	//if (tmpThisYearStart) {
		if ( (thisCommonMonth > firstMonthOfThisYear) || 
			(thisCommonMonth == firstMonthOfThisYear && thisCommonDay > 24) ) {
			firstDayOfThisYear = tmpThisYearStart;
			firstPart = true;
			//lastDay = tmpThisYearStart;
		} else if ( (thisCommonMonth < firstMonthOfThisYear) ||
			 (thisCommonMonth == firstMonthOfThisYear && thisCommonDay < 22) ) {
			firstDayOfThisYear = tmpPrevYearStart;
			//lastDay = tmpNextYearStart;
			firstPart = false;

		} else {
			if (thisCommonDay === tmpThisYearStart) {
				firstDayOfThisYear = tmpThisYearStart;
				console.log("=")
				firstPart = true;
			} else if (thisCommonDay < tmpThisYearStart) {
				firstDayOfThisYear = tmpPrevYearStart;
				console.log("<")
				firstDayFromPrevYear = true;
				firstPart = false;
			} else {
				firstDayOfThisYear = tmpThisYearStart;
				console.log(">")
				firstPart = true;
				//lastDay = 
			}

		} 		
	//}



	if (firstDay) {
		console.log("firstDay", firstDay)
		firstDayOfThisYear = firstDay;
	}

	console.log("firstDayOfThisYear", firstDayOfThisYear);
	//console.log("firstDayOfNextYear", firstDayOfNextYear);

	var year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	var leapYear;

	var x400 = thisCommonYear % 400 === 0;
	var x100 = thisCommonYear % 100 === 0;
	var x4 = thisCommonYear % 4 === 0;
	if (x400) {
		leapYear = true;
	} else {
		if (x100) {
			leapYear = false;
		} else {
			if (x4) {
				leapYear = true;
			} else {
				leapYear = false;
			}
		}
	}
	if (leapYear) {
		year[1] = 29;
	}
	var revYear;
	var daysAmount;
	var additionalSansculottide = false;

/*	function calcDays() {
		 var days = year[firstMonthOfThisYear] - firstDayOfThisYear;
		if (thisCommonMonth > firstMonthOfThisYear) {
			for (var i = firstMonthOfThisYear + 1; i < thisCommonMonth; i++) {
				days += year[i];
			}
			days += thisCommonDay;
		}
		else if (thisCommonMonth <= firstMonthOfThisYear) {
			for (var i = firstMonthOfThisYear + 1; i <= 11; i++) {
				days += year[i];
			}
			for (var i = 0; i < thisCommonMonth; i++) {
				days += year[i];
			}
			days += thisCommonDay;
		}
		console.log("days", days)
		return days;
	}

	var daysForLastSansculottide = calcDays();*/

	var daysForLastSansculottide = year[firstMonthOfThisYear] - firstDayOfThisYear;
	for (var i = firstMonthOfThisYear + 1; i <= 11; i++) {
		daysForLastSansculottide += year[i];
	}
	for (var i = 0; i < firstMonthOfThisYear; i++) {
		daysForLastSansculottide += year[i];
	}
	if (firstPart) {

	} else {
		
	}
	daysForLastSansculottide += tmpThisYearStart - 1;
	console.log("daysForLastSansculottide", daysForLastSansculottide);
	if (daysForLastSansculottide == 365) {
		additionalSansculottide = true;
	}


	if ((thisCommonMonth != firstMonthOfThisYear) ||
		(thisCommonMonth === firstMonthOfThisYear && thisCommonDay < firstDayOfThisYear) ||
		(firstDayFromPrevYear && thisCommonMonth === firstMonthOfThisYear) ) {

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
/*		if (daysAmount == 365) {
			additionalSansculottide = true;
			console.log("additionalSansculottide", additionalSansculottide);
		}*/
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
	revolutionaryDate.additionalSansculottide = additionalSansculottide;

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

function renderCommonCalendar(date, $element) {
	$element.html(commonWeekArray[date.getDay()] + ",<br> " + date.getDate() + " " + commonMonthArray[date.getMonth()] + " " + date.getFullYear() + " года.");
}

// Init

var testTime = new Date(1967, 8, 9);

var commonTime = new Date();

var revTime = new RevolutionaryCalendar(commonTime);
//var revTime = new RevolutionaryCalendar(testTime);
