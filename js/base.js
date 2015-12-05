$(document).ready(function() {
	//Ui
	var $indexCommonCalendar = $("#index--common-calendar");
	var $indexRevCalendar = $("#index--rev-calendar");

	$('[data-toggle="tooltip"]').tooltip();

	renderCommonCalendar(commonTime, $indexCommonCalendar)

	var revTime = new RevolutionaryCalendar(commonTime, currentFirstDay);
	renderRevCalendar(revTime, $indexRevCalendar);
});