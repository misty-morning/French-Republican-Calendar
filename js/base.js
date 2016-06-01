var currentFirstDay = 22;

// Common calendar

function renderCommonCalendar(date, $element) {
	$element.html(commonWeekArray[date.getDay()] + ",<br> " + date.getDate() + " " + commonMonthArray[date.getMonth()] + " " + date.getFullYear() + " года.");
}

// Init

var testTime = new Date(2018, 8, 22);

var commonTime = new Date();

var revTime = new RevolutionaryCalendar(commonTime);
//var revTime = new RevolutionaryCalendar(testTime);

$(document).ready(function() {
	
	//Ui
	var $indexCommonCalendar = $("#index--common-calendar");
	var $indexRevCalendar = $("#index--rev-calendar");

	$('[data-toggle="tooltip"]').tooltip();

	renderCommonCalendar(commonTime, $indexCommonCalendar);

	revTime.render($indexRevCalendar);
});