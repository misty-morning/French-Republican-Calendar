
$(document).ready(function() {
	//Ui
	var $revCalendarEl = $("[data-js-rev-calendar]");

	var comWeekTag = "[data-js-com-week]"
	var comDayTag = "[data-js-com-day]"
	var comMonthTag = "[data-js-com-month]"
	var comYearTag = "[data-js-com-year]"
	
	var commonTime = new Date();

	//Common Calendar

	var commonWeekArray = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	var commonMonthArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

	$(comWeekTag).html(commonWeekArray[commonTime.getDay()]);
	$(comDayTag).html(commonTime.getDate());
	$(comMonthTag).html(commonMonthArray[commonTime.getMonth()]);
	$(comYearTag).html(commonTime.getFullYear());

	//Revolutionary Calendar

	//Первым днем года будет день, следующий за днем осеннего равноденствия(по ходу, наоборот)
	var RevolutionaryCalendar = function(date, firstDay) {
		var thisCommonMonth = date.getMonth();
		var thisCommonDay = date.getDate();

		var firstDayOfThisYear = firstDay;
		var firstMonthOfThisYear = 8;

		var year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		var daysAmount;


		if ((thisCommonMonth != firstMonthOfThisYear) || (thisCommonMonth === firstMonthOfThisYear && thisCommonDay < firstDayOfThisYear)) {
			
			daysAmount = year[firstMonthOfThisYear] - firstDayOfThisYear;
			if (thisCommonMonth > firstMonthOfThisYear) {
				for (var i = firstMonthOfThisYear + 1; i < thisCommonMonth; i++) {
					daysAmount += year[i];
				}
				daysAmount += thisCommonDay;
			}
			else if (thisCommonMonth <= firstMonthOfThisYear) {
				for (var i = firstMonthOfThisYear + 1; i <= 11; i++) {
					daysAmount += year[i];
				}
				for (var i = 0; i < thisCommonMonth; i++) {
					daysAmount += year[i];
				}
				daysAmount += thisCommonDay;
			}
		}
		else {
			daysAmount = thisCommonDay - firstDayOfThisYear;
			
		}
		
		var revYear;
		var thisCommonYear = date.getFullYear();

		if (thisCommonMonth > 8 || thisCommonMonth == 8 && thisCommonDay >= firstDayOfThisYear) {
			revYear = thisCommonYear - 1791;
		}
		else {
			revYear = thisCommonYear - 1792;
		}

		var revolutionaryDate = {};
		
		revolutionaryDate.year = revYear;
		revolutionaryDate.month = daysAmount / 30 >> 0;	
		revolutionaryDate.day = daysAmount % 30 + 1;
		revolutionaryDate.decade = daysAmount % 10;
		revolutionaryDate.dayName = daysAmount;
		//toDo: переделать из феуции в объект с методами daysAmount, year, month и пр.
		return revolutionaryDate;
	}


	//toDo: render должно быть свойством календаря
	function renderRevCalendar(revolutionaryCalendar, $element) {
		var dayNameArray = [
			// Вандемьер
			"винограда",
			"шафрана",
			"каштана",
			"безвременника",
			"лошади",
			"бальзамина",
			"моркови",
			"амаранта",
			"пастернака",
			"чана",
			"картошки",
			"бессмертника",
			"тыквы обыкновенной",
			"резеды",
			"осла",
			"мирабилиса",
			"тыквы",
			"гречихи",
			"подсолнечника",
			"пресса",
			"конопли",
			"персика",
			"репы",
			"амариллиса",
			"вола",
			"баклажана",
			"красного перца",
			"томата",
			"ячменя",
			"бочки",
			// Брюмер
			"яблока",
			"сельдерея",
			"груши",
			"свеклы",
			"гуся",
			"гелиотропа",
			"инжира",
			"скорцонера",
			"рябины обыкновенной",
			"плуга",
			"козлобородника",
			"рогульника (чилима)",
			"топинамбура",
			"эндивия",
			"индюка",
			"сахарного корня",
			"жерухи обыкновенной",
			"свинчатки",
			"граната",
			"бороны",
			"бакхариса",
			"испанского боярышника",
			"марены",
			"апельсина",
			"фазана",
			"фисташки",
			"чины клубненосной",
			"айвы",
			"рябины крупноплодной",
			"валика",
			//Фример
			"рапунцель",
			"турнепса",
			"цикория",
			"мушмулы",
			"свиньи",
			"валерьяницы",
			"цветной капусты",
			"мёда",
			"можжевельника",
			"кирки",
			"воска",
			"хрена",
			"кедра",
			"ели",
			"косули",
			"утесника",
			"кипариса",
			"плюща",
			"можжевельника казацкого",
			"мотыги",
			"клена сахарного",
			"вереска",
			"тросника",
			"щавеля",
			"сверчка",
			"кедрового ореха",
			"пробки",
			"трюфеля",
			"оливы",
			"лопаты",
			//Нивоз

		];
		var dayName = dayNameArray[revolutionaryCalendar.dayName];

		var revMonthsArray = ["вандемьера", "брюмера", "фримера", "нивоза", "плювиоза", "вантоза", "жерминаля", "флореаля", "прериаля", "мессидора", "термидора", "фрюктидора"];
		var revMonth = revMonthsArray[revolutionaryCalendar.month];

		var decadeArray = ["Примиди", "Дуоди", "Триди", "Квартиди", "Квинтиди", "Секстиди", "Септиди", "Октиди", "Нониди", "Декади"];
		var revDecade = decadeArray[revolutionaryCalendar.decade];

		var revDay = revolutionaryCalendar.day;
		var revYear = revolutionaryCalendar.year;




		if (revolutionaryCalendar.dayName < 360) {
			$element.html(revDecade + ", " + revDay + " " + revMonth + " " + revYear + " года.");
		}
		else {
			var sansculottidesArray = ["День Доблести(Добродетели)", "День Таланта", "День Труда", "День Мнений", "День Наград", "День Революции"];
			var sansculottidesOrderArray = ["Первая", "Вторая", "Третья", "Четвертая", "Пятая", "Шестая"];
			var	sansculottideNumber = revolutionaryCalendar.dayName - 360;

			$element.html(sansculottidesOrderArray[sansculottideNumber] + " санкюлотида: " + sansculottidesArray[sansculottideNumber] + ".");
		}
	}

	var revTime = new RevolutionaryCalendar(commonTime, 23);

	console.log("monthIndex: " + revTime.month);
	console.log("daysAmount: " + revTime.dayName);
	console.log("today: " + commonTime.getDate());

	renderRevCalendar(revTime, $revCalendarEl);

	// Test

	var testTime = new Date(2015, 8, 21);

	var testRevTime = new RevolutionaryCalendar(testTime, 23);

	console.log("testDaysAmount: " + testRevTime.dayName);

	var $test = $("#test1");

	renderRevCalendar(testRevTime, $test);

});