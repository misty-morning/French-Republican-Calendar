var guestBookApp = angular.module("guestBookApp", [], function($httpProvider) {
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

/*
guestBookApp.factory('page', function() {
	return {
		load: function(num, recordsOnPage) {
			console.log(num);
			$http.post("php/guest_book-partial_load.php", {
				num: num,
				step: recordsOnPage
			}).then(function(response) {
				console.log(response.data);
				return response.data.records;
			});
		}
	}
})*/
guestBookApp.factory("pageCount", function() {
	return {
		calc: function(num, step) {
			return Math.ceil(num / step);
		} 
	}
});

guestBookApp.controller("GuestBookControler", function($scope, $http) {

	//$scope.page = page;

	$scope.recordsOnPage = 3;
	$scope.recordsOnPageOpt = [3, 5, 10];
	$scope.recordsCount = 0;

	$scope.showNRBBtnShown = true;
	$scope.newRecBlockShown = false;

	$http.get("php/guest_book-get.php").then(function(response) {
		var tmp = parseInt(response.data[0]);
		$scope.recordsCount = tmp;
		$scope.partialLoad($scope.pagesCount());
	});

	$scope.showAddRecord = function() {
		$scope.showNRBBtnShown = false;
		$scope.newRecBlockShown = true;
	}
	$scope.hideAddRecord = function() {
		$scope.showNRBBtnShown = true;
		$scope.newRecBlockShown = false;
	}

	$scope.newRecord = function() {
		$http.post("php/guest_book-add.php", {
			name: $scope.newName,
			text: $scope.newText
		}).then(function(response) {
			console.log("added", response.data);
			$scope.newName = "";
			$scope.newText = "";
			var tmp = parseInt(response.data[0]);
			$scope.recordsCount = tmp;
			$scope.partialLoad($scope.pagesCount());

		});
	}
	$scope.pagesCount = function() {
		return Math.ceil($scope.recordsCount / $scope.recordsOnPage);
	}
	$scope.pageBtnNum = function() {
		var btnArr = [];
		for (var i = $scope.pagesCount() - 1; i >= 0; i--) {
			btnArr.push(i + 1);
		}
		return btnArr;
	}
	$scope.pageBtnHandler = function(num)  {

		$scope.partialLoad(num);
	}
	$scope.partialLoad = function(num) {
		console.log(num);
		$http.post("php/guest_book-partial_load.php", {
			num: num,
			step: $scope.recordsOnPage
		}).then(function(response) {
			console.log(response.data);
			$scope.records = response.data.records;
			$scope.hideAddRecord();

		});
	}
});

guestBookApp.directive("vmPageDivider", function() {
	return {
		restrict: 'E',
		 scope: {
			num: '=',
			step: '=',
			handler: '&func',
		},
		template: "<div><a href='javascript:void(0);' " + 
		"ng-repeat='page in pagesArr' ng-click='handler({num: page})' " + 
		"class='mv-page'>{{page}}</a></div>",
		replace: true,
		link: function(scope, element, attrs) {
			console.log("scope", scope);
			scope.$watchGroup(['num', 'step'], function(arr) {
				//console.log("watchGroup dir", arr);
				scope.pagesAmount = Math.ceil(arr[0] / arr[1]);
				//console.log("pagesAmount dir", scope.pagesAmount);
				scope.pagesArr = [];
				for (var i = scope.pagesAmount - 1; i >= 0; i--) {
					scope.pagesArr.push(i + 1);
				}
			}); 
		},
	}
});