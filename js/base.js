$(document).ready(function() {
	console.log("base");
	//Ui
	var $indexCommonCalendar = $("#index--common-calendar");
	var $indexRevCalendar = $("#index--rev-calendar");

	$('[data-toggle="tooltip"]').tooltip();

	renderCommonCalendar(commonTime, $indexCommonCalendar);

	var revTime = new RevolutionaryCalendar(commonTime);
	//var revTime = new RevolutionaryCalendar(testTime);
	renderRevCalendar(revTime, $indexRevCalendar);
});