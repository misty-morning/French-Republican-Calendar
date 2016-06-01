$(document).ready(function() {
	
	// Calculate rev date

	//Ui
	$imgHead = $("#month-img-head");
	$imgEl = $("#month-img-el");

	$visualCalendar = $("#visual-calendar");

	// Mouth Image

	//var revTime = new RevolutionaryCalendar(commonTime, currentFirstDay);

	var revMouthIndex = revTime.month;
	//console.log(revMouthIndex);

	if (revMouthIndex < 12) {
		$imgHead.html("Месяц " + calendarNames.monthCommon[revMouthIndex]);
		$imgEl.attr("src", calendarNames.monthImgUrls[revMouthIndex]);
	}
	else {
		$imgEl.css("border", "none");
	}

	// Visual calendar

	$visualCalendar.append("<div id='vc--months'></div>");
	for (var i = 0; i < 12; i++) {
		$("#vc--months").append("<div data-id='" + i + "' class='vc--month-btn'>"+ calendarNames.monthCommon[i] +"</div>");
	};
	$("#vc--months").append("<div data-id='12' data-month-btn class='vc--month-btn'>Санкюлотиды</div>");

	$("#vc--months [data-id='" + revMouthIndex + "']").addClass("__current-month").attr("title", "Текущий месяц");

	$visualCalendar.append("<div id='vc--current-month'></div>");

	$(".vc--month-btn").click(function() {
		$(".vc--month-btn").removeClass("__active-month");
		$(this).addClass("__active-month");
		$("#vc--current-month").removeClass("__sansculottide");

		$("#vc--current-month").empty();
		var activeMonthFirstDay = $(this).data("id") * 30 - 1;
		//console.log(activeMonthFirstDay);	
		if (activeMonthFirstDay + 1 < 360) {
			$("#vc--current-month").append("<div id='vc--head-row'></div>");
			for(var i = 0; i < 10; i++) {
				$("#vc--head-row").append("<div class='vc--head-cell'><div class='vc--head-text'>"+ 
									calendarNames.decade[i] +"</div></div>");
			}

			
			var vcId = 1;
			for(var i = 0; i < 3; i++) {
				$("#vc--current-month").append("<div data-id='" + i + "' class='vc-row'></div>");
				for(var j = 0; j < 10; j++) {
					$(".vc-row[data-id='" + i + "']").append("<div data-id='" + vcId + 
								"' class='vc-cell' data-toggle='tooltip' data-placement='bottom' title='День "+ 
								calendarNames.day[activeMonthFirstDay + vcId] +"'><div>"+ vcId +
								"</div><div class='vc-cell-day-name'>День<br>"+ calendarNames.day[activeMonthFirstDay + vcId] +
								"</div></div>");
					if (j === 3 || j === 8 || j === 9) {
						$(".vc-cell[data-id='" + vcId + "']").addClass("__holyday");
					}
					vcId++;
				}
			}
		}
		else {
			$("#vc--current-month").addClass("__sansculottide");
			var sansculottideAmount = 5;
			if (revTime.additionalSansculottide) {
				sansculottideAmount = 6;
			}

			for (var i = 0; i < sansculottideAmount; i++) {
				$("#vc--current-month").append("<div data-id='" + (i + 1) + 
					"' class='vc-cell __sansculottide' data-toggle='tooltip' data-placement='bottom' title='"+ 
					calendarNames.sansculottide[i] +"'><div class='sansculottide-day'>"+ calendarNames.sansculottideOrder[i] + 
					" санкюлотида:</div><div class='vc-cell-day-name'><br>"+ calendarNames.sansculottide[i] +"</div></div>");
			};
		}

		if ($(this).data("id") == revMouthIndex) {
			$(".vc-cell[data-id='" + revTime.day + "']").addClass("__active-cell");
		}

	});
	$(".vc--month-btn[data-id='" + revMouthIndex + "']").trigger("click");

	// Date calculation

	$calcDay = $("#calc--day");
	$calcMonth = $("#calc-month");
	$calcYear = $("#calc--year");
	$calcFirstDay = $("#calc--first-day");
	$calcBnt = $("#calc--btn");
	$calcResult = $("#calc--result");
	$firstDayStuff = $(".first-day-stuff");

	$calcDay.val(commonTime.getDate());
	$calcMonth.val(commonTime.getMonth());
	$calcYear.val(commonTime.getFullYear());
	$calcFirstDay.val(currentFirstDay);

	$calcFirstDay.hide();

	function yearChangeHandler() {
		var val = parseInt($calcYear.val());
		//console.log(val);
		var found = false;
		for (year in equinoxes) {
			//console.log(year);
			if (val == parseInt(year)) {
				//$calcFirstDay.hide();
				found = true
			}
		}
		if (found) {
			$firstDayStuff.hide();
		} else {
			$firstDayStuff.show();
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
		var date = new Date($calcYear.val(), $calcMonth.val(), $calcDay.val());
		//var revDate = new RevolutionaryCalendar(date, $calcFirstDay.val());
		var revDate = new RevolutionaryCalendar(date);
		renderRevCalendar(revDate, $calcResult);
	});

});

