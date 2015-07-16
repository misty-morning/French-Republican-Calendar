$(document).ready(function() {
	//Ui
	var $indexCommonCalendar = $("#index--common-calendar");
	var $indexRevCalendar = $("#index--rev-calendar");

	var commonTime = new Date();
	renderCommonCalendar(commonTime, $indexCommonCalendar)
	
	var revTime = new RevolutionaryCalendar(commonTime, 23);
	renderRevCalendar(revTime, $indexRevCalendar);

	// Calculate rev date

	//Ui
	$calcDay = $("#calc--day");
	$calcMonth = $("#calc-month");
	$calcYear = $("#calc--year");
	$calcFirstDay = $("#calc--first-day");
	$calcBnt = $("#calc--btn");
	$calcResult = $("#calc--result");

	$calcBnt.click(function() {
		var date = new Date($calcYear.val(), $calcMonth.val(), $calcDay.val());

		var revDate = new RevolutionaryCalendar(date, $calcFirstDay.val());
		renderRevCalendar(revDate, $calcResult);
	});
});

