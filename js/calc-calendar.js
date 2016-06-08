$(document).ready(function() {
	// Date calculation

	$calcDay = $("#calc--day");
	$calcMonth = $("#calc-month");
	$calcYear = $("#calc--year");
	$calcFirstDay = $("#calc--first-day");
	$calcBnt = $("#calc--btn");
	$calcResult = $("#calc--result");
	$calcDate = $("#calc--date");
	$firstDayStuff = $(".first-day-stuff");
	$yearWarn = $("#calc__wrong-year");

	$calcDay.val(commonTime.getDate());
	$calcMonth.val(commonTime.getMonth());
	$calcYear.val(commonTime.getFullYear());
	$calcFirstDay.val(currentFirstDay);


	$calcFirstDay.hide();

	var addFirstDay = false;

	function yearChangeHandler() {
		$yearWarn.hide();
		var val = parseInt($calcYear.val());
		//console.log(val);
		var showFirstDayOpt = false;
		if (val < 1792) {
			showFirstDayOpt = true;
		}
		for (year in revTime.data.equinoxes) {
			//console.log(year);
			if (val == parseInt(year)) {
				//$calcFirstDay.hide();
				showFirstDayOpt = true;
			}
		}
		if (showFirstDayOpt) {
			$firstDayStuff.hide();
			addFirstDay = false;
		} else {
			$firstDayStuff.show();
			addFirstDay = true;
		}
	}

	yearChangeHandler();

	$calcYear.change(function() {
		yearChangeHandler();
	});
	$calcYear.keyup(function() {
		yearChangeHandler();
	});

	$calcBnt.click(function() {
		$calcResult.empty();
		$calcDate.empty();
		if ($calcYear.val() >= 1792) {
			var date = new Date($calcYear.val(), $calcMonth.val(), $calcDay.val());
			if (addFirstDay) {
				var revDate = new RevolutionaryCalendar(date, $calcFirstDay.val());
			} else {
				var revDate = new RevolutionaryCalendar(date);
			}
			renderCommonCalendar(date, $calcDate);
			revDate.render($calcResult);
		} else {
			$yearWarn.show();
		}

	});
});