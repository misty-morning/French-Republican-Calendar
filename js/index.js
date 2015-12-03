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

	$visualCalendar = $("#visual-calendar");

	// Mouth Image

	var revTime = new RevolutionaryCalendar(commonTime, currentFirstDay);

	var revMouthIndex = revTime.month;

	$imgHead.html("Месяц " + calendarNames.monthCommon[revMouthIndex]);
	$imgEl.attr("src", calendarNames.monthImgUrls[revMouthIndex]);

	// Visual calendar

	$visualCalendar.append("<div id='vc--head-row'></div>");
	for(var i = 0; i < 10; i++) {
		$("#vc--head-row").append("<div class='vc--head-cell'><div class='vc--head-text'>"+ calendarNames.decade[i] +"</div></div>");
	}

	var vcId = 1;
	for(var i = 0; i < 3; i++) {
		$visualCalendar.append("<div data-id='" + i + "' class='vc-row'></div>");
		for(var j = 0; j < 10; j++) {
			$(".vc-row[data-id='" + i + "']").append("<div data-id='" + vcId + "' class='vc-cell' title='День "+ calendarNames.day[revMouthIndex * 30 + vcId - 1] +"'><div>"+ vcId +"</div><div class='vc-cell-day-name'>День<br>"+ calendarNames.day[revMouthIndex * 30 + vcId - 1] +"</div></div>");
			if (j === 3 || j === 8 || j === 9) {
				$(".vc-cell[data-id='" + vcId + "']").addClass("__holyday");
			}
			vcId++;
		}
	}

	$(".vc-cell[data-id='" + revTime.day + "']").addClass("__active-cell");


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

