$(document).ready(function() {


	// Calculate rev date

	//Ui
	$calcDay = $("#calc--day");
	$calcMonth = $("#calc-month");
	$calcYear = $("#calc--year");
	$calcFirstDay = $("#calc--first-day");
	$calcBnt = $("#calc--btn");
	$calcResult = $("#calc--result");

	$imgHead = $("#mouth-img-head");
	$imgEl = $("#mouth-img-el");

	var revTime = new RevolutionaryCalendar(commonTime, currentFirstDay);

	$calcDay.val(commonTime.getDate());
	$calcMonth.val(commonTime.getMonth());
	$calcYear.val(commonTime.getFullYear());
	$calcFirstDay.val(currentFirstDay);

	$calcBnt.click(function() {
		var date = new Date($calcYear.val(), $calcMonth.val(), $calcDay.val());

		var revDate = new RevolutionaryCalendar(date, $calcFirstDay.val());
		renderRevCalendar(revDate, $calcResult);
	});

	// Mouth Image

	var revMouthIndex = revTime.month;

	$imgHead.html("Месяц " + calendarNames.monthCommon[revMouthIndex]);

});

