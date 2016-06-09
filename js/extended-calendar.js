$(document).ready(function() {
	// Calender with Img

	$imgHead = $("#ext-cal__head");
	$imgEl = $("#ext-cal__img");
	$revDate = $("#ext-cal__date");

	//console.log(revTime.month);

	var monthImgUrls = ["img/months/Vandemiaire.jpg", "img/months/Brumaire.jpg", "img/months/Frimaire.jpg", "img/months/Nivose.jpg", "img/months/Pluviose.jpg", "img/months/Ventose.jpg", "img/months/Germinal.jpg", "img/months/Floreal.jpg", "img/months/Prairial.jpg", "img/months/Messidor.jpg", "img/months/Thermidor.jpg", "img/months/Fructidor.jpg"];

	if (revTime.month < 12) {
		$imgHead.html("Месяц " + revTime.data.monthCommon[revTime.month]);
		$imgEl.attr("src", monthImgUrls[revTime.month]);
	}
	else {
		$imgEl.css("border", "none");
	}

	revTime.fullRender($revDate);
});