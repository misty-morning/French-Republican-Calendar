//Revolutionary Calendar

//First day of the calendar is the day of the autumn solstice
var RevolutionaryCalendar = function(date, firstDay) {

	this.data = calendarData;

	var thisCommonYear = date.getFullYear();

	var firstMonthOfThisYear = 8;

	var thisCommonMonth = date.getMonth();
	var thisCommonDay = date.getDate();

	var firstDayOfThisYear = 22;

	var firstPart;

	var prevYear = thisCommonYear - 1;
	var nextYear = thisCommonYear + 1;

	var firstDayFromPrevYear = false;

	var tmpThisYearStart = 22;
	var tmpPrevYearStart = 22;
	var tmpNextYearStart = 22;
	for (year in this.data.equinoxes) {
		if (parseInt(year) === prevYear) {
			tmpPrevYearStart = this.data.equinoxes[year];
			//console.log("found tmpThisYearStart", tmpPrevYearStart)
			//break;
		}
		if (parseInt(year) === thisCommonYear) {
			tmpThisYearStart = this.data.equinoxes[year];
			//console.log("found tmpPrevYearStart", tmpThisYearStart)
			//break;
		}
		if (parseInt(year) === nextYear) {
			tmpNextYearStart = this.data.equinoxes[year];
			//console.log("found tmpNextYearStart", tmpNextYearStart)
			break;
		}

	}

	if ( (thisCommonMonth > firstMonthOfThisYear) || 
		(thisCommonMonth == firstMonthOfThisYear && thisCommonDay > 24) ) {
		firstDayOfThisYear = tmpThisYearStart;
		firstPart = true;
	} else if ( (thisCommonMonth < firstMonthOfThisYear) ||
		 (thisCommonMonth == firstMonthOfThisYear && thisCommonDay < 22) ) {
		firstDayOfThisYear = tmpPrevYearStart;
		firstPart = false;

	} else {
		if (thisCommonDay === tmpThisYearStart) {
			firstDayOfThisYear = tmpThisYearStart;
			//console.log("=")
			firstPart = true;
		} else if (thisCommonDay < tmpThisYearStart) {
			firstDayOfThisYear = tmpPrevYearStart;
			//console.log("<")
			firstDayFromPrevYear = true;
			firstPart = false;
		} else {
			firstDayOfThisYear = tmpThisYearStart;
			//console.log(">")
			firstPart = true;
		}

	} 		

	if (firstDay) {
		console.log("firstDay", firstDay)
		firstDayOfThisYear = firstDay;
	}

	//console.log("firstDayOfThisYear", firstDayOfThisYear);

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

	var daysForLastSansculottide = year[firstMonthOfThisYear] - firstDayOfThisYear;
	for (var i = firstMonthOfThisYear + 1; i <= 11; i++) {
		daysForLastSansculottide += year[i];
	}
	for (var i = 0; i < firstMonthOfThisYear; i++) {
		daysForLastSansculottide += year[i];
	}
	if (firstPart) {
		daysForLastSansculottide += tmpNextYearStart - 1;
	} else {
		daysForLastSansculottide += tmpThisYearStart - 1;
	}
	//console.log("daysForLastSansculottide", daysForLastSansculottide);
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

	this.year = revYear;
	this.month = daysAmount / 30 >> 0;
	this.day = daysAmount % 30 + 1;
	this.decade = daysAmount % 10;
	this.decadeNum = Math.floor(daysAmount / 10) + 1;
	this.mouthDecadeNum = Math.floor(this.day / 10) + 1;
	this.dayName = daysAmount;
	this.additionalSansculottide = additionalSansculottide;

	//console.log("days amount " + daysAmount);

	this.render = function($element) {
		var dayName = this.data.day[this.dayName];
		var revMonth = this.data.month[this.month];
		var revDecade = this.data.decade[this.decade];

		var revDay = this.day;
		var revYear = this.year;

		if (this.dayName < 360) {
			$element.html("День " + dayName +  ".<br>" + revDecade + ", " + revDay + " " + revMonth + " " + revYear + " года.");
		}
		else {
			var	sansculottideNumber = this.dayName - 360;
			$element.html(this.data.sansculottideOrder[sansculottideNumber] + " санкюлотида: " + this.data.sansculottide[sansculottideNumber] + ", " + revYear + " год.");
		}
	}
	this.fullRender = function($element) {
		var romanYear = digconvert(this.year);
		var romanDecade = digconvert(this.decadeNum);
		var romanDay = digconvert(this.day);

		$element.append("<p>"+romanYear+" ("+this.year+") год</p>");
		if (this.dayName < 360) {
			$element.append("<p>"+romanDecade+" ("+this.decadeNum+") декада</p>");
		}
		if (this.dayName < 360) {
			$element.append("<p>"+romanDay+" ("+this.day+") "+this.data.month[this.month]+"</p>");
			$element.append("<p>"+this.data.decade[this.decade]+" "+digconvert(this.mouthDecadeNum)+
				" декады месяца</p>");
			$element.append("<p> День "+this.data.day[this.dayName]+"</p>");

		} else {
			var	sansculottideNumber = this.dayName - 360;
			$element.append("<p> "+this.data.sansculottideOrder[sansculottideNumber] + " санкюлотида: " + this.data.sansculottide[sansculottideNumber]+"</p>");
		}
	}
};

