$(document).ready(function() {


	// Calculate rev date

	//Ui
	$calcDay = $("#calc--day");
	$calcMonth = $("#calc-month");
	$calcYear = $("#calc--year");
	$calcFirstDay = $("#calc--first-day");
	$calcBnt = $("#calc--btn");
	$calcResult = $("#calc--result");

	$imgHead = $("#month-img-head");
	$imgEl = $("#month-img-el");

	// Mouth Image

	var revTime = new RevolutionaryCalendar(commonTime, currentFirstDay);

	var revMouthIndex = revTime.month;

	$imgHead.html("Месяц " + calendarNames.monthCommon[revMouthIndex]);
	$imgEl.attr("src", calendarNames.monthImgUrls[revMouthIndex]);

	// Date calculation

	$calcDay.val(commonTime.getDate());
	$calcMonth.val(commonTime.getMonth());
	$calcYear.val(commonTime.getFullYear());
	$calcFirstDay.val(currentFirstDay);

	$calcBnt.click(function() {
		var date = new Date($calcYear.val(), $calcMonth.val(), $calcDay.val());

		var revDate = new RevolutionaryCalendar(date, $calcFirstDay.val());
		renderRevCalendar(revDate, $calcResult);
	});



});

