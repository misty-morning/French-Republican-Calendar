var guestBookApp = angular.module("guestBookApp", ["vmNg"], function($httpProvider) {
	// this function is angularjs $http fix for php

	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.transformRequest = [function(data) {
		var param = function(obj) {
			var query = '';
			var name, value, fullSubName, subValue, innerObj, i;
			for (name in obj) {
				value = obj[name];
				if (value instanceof Array) {
					for (i = 0; i < value.length; ++i) {
						subValue = value[i];
						fullSubName = name + '[' + i + ']';
						innerObj = {};
						innerObj[fullSubName] = subValue;
						query += param(innerObj) + '&';
					}
				} else if (value instanceof Object) {
					for (subName in value) {
						subValue = value[subName];
						fullSubName = name + '[' + subName + ']';
						innerObj = {};
						innerObj[fullSubName] = subValue;
						query += param(innerObj) + '&';
					}
				} else if (value !== undefined && value !== null) {
					query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
				}
			}
			return query.length ? query.substr(0, query.length - 1) : query;
		};
		return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	}];
});

guestBookApp.controller("GuestBookControler", function($scope, $http, $sce) {
	// Models
	$scope.sce = $sce;

	$scope.recordsOnPage = 5;
	$scope.recordsOnPageOpt = [3, 5, 10, 30];
	$scope.recordsCount = 0;

	$scope.showNRBBtnShown = true;
	$scope.newRecBlockShown = false;

	$scope.shownWarn = {
		noName: false,
		noText: false,
		tooMuchText: false,
	};

	$scope.$watchGroup(['recordsCount', 'recordsOnPage'], function(arr) {
		var recordsCount = arr[0];
		var recordsOnPage = arr[1];

		$scope.pagesCount = Math.ceil(recordsCount / recordsOnPage);
		$scope.partialLoad($scope.pagesCount);
	});

	// Init

	$http.get("/php/guest_book-get.php").then(function(response) {
		var tmp = parseInt(response.data[0]);
		$scope.recordsCount = tmp;
		$scope.partialLoad($scope.pagesCount);
	});

	// Func

	$scope.showAddRecord = function() {
		$scope.showNRBBtnShown = false;
		$scope.newRecBlockShown = true;
	}
	$scope.hideAddRecord = function() {
		$scope.showNRBBtnShown = true;
		$scope.newRecBlockShown = false;
	}
	$scope.addRecord = function() {
		$scope.shownWarn.noName = false;
		$scope.shownWarn.noText = false;
		$scope.shownWarn.tooMuchText = false;

		var add = true;
		if (!$scope.newName) {
			$scope.shownWarn.noName = true;
			add = false;
		} 
		if (!$scope.newText || $scope.newText.length < 5) {
			$scope.shownWarn.noText = true;
			add = false;
		} 
		if ($scope.newText && $scope.newText.length > 2000) {
			$scope.shownWarn.tooMuchText = true;
			add = false;
		} 
		if (add) {
			$scope.newRecord();
		}
	}
	$scope.newRecord = function() {
		$http.post("/php/guest_book-add.php", {
			name: $scope.newName,
			text: $scope.newText
		}).then(function(response) {
			//console.log("added", response.data);
			$scope.newName = "";
			$scope.newText = "";
			var tmp = parseInt(response.data);
			$scope.recordsCount = tmp;
			$scope.partialLoad($scope.pagesCount);

		});
	}
	$scope.pageBtnHandler = function(num)  {

		$scope.partialLoad(num);
	}
	$scope.partialLoad = function(num) {
		if (num > 0) {
			$http.get("/php/guest_book-partial_load.php", { params: {
					num: num,
					step: $scope.recordsOnPage
				}
			}).then(function(response) {
				//console.log(response.data);
				$scope.records = response.data.records;
				$scope.hideAddRecord();

			});	
		}
	}
});