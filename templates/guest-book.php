<div ng-app="guestBookApp" ng-controller="GuestBookControler" ng-cloak class="guest-book">
	<div class="top">
		<h3>Гостевая книга</h3>
		<button ng-click="showAddRecord()" ng-show="showNRBBtnShown" class="btn btn-sm btn-danger">Новая запись</button>
	</div>
	<div ng-show="newRecBlockShown" class="add-record"><i ng-click="hideAddRecord()" class="add-record__hide glyphicon glyphicon-remove"></i>
		<lable for="add-record__name">Имя: </lable>
		<div class="clear"></div>
		<input type="text" ng-model="newName" maxlength="30" id="add-record__name" class="form-field">
		<p ng-show="shownWarn.noName" class="check-warn">Введите имя</p>
		<div class="clear"></div>
		<lable for="add-record__text">Текст:</lable>
		<div class="clear"></div>
		<textarea ng-model="newText" placeholder="Текст вашей записи..." id="add-record__text" class="form-field"></textarea>
		<p ng-show="shownWarn.noText" class="check-warn">Запись слишком короткая</p>
		<p ng-show="shownWarn.tooMuchText" class="check-warn">Запись слишком длинная</p>
		<div class="clear"></div>
		<button ng-click="addRecord()" class="btn btn-sm btn-danger">Добавить запись</button>
	</div>
	<div class="records">
		<div ng-repeat="record in records | orderBy:id:true" data-record-id="{{record.id}}" class="record">
			<div class="record__name">{{record.name}}</div>
			<div ng-bind-html="sce.trustAsHtml(record.text)" class="record__text"></div>
			<div class="record__time">{{record.time}}</div>
		</div>
	</div>
	<div class="menage">Показывать по:
		<select ng-model="recordsOnPage" ng-options="opt for opt in recordsOnPageOpt" class="menage__show-num form-field"></select>
	</div>
	<vm-page-divider num="recordsCount" step="recordsOnPage" max="10" func="pageBtnHandler(num)"></vm-page-divider>
</div>