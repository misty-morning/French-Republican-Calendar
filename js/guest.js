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
guestBookApp.factory('load', function() {
	return {
		part: function(num, recordsOnPage) {
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


guestBookApp.controller("GuestBookControler", function($scope, $http) {

	// Models

	$scope.recordsOnPage = 3;
	$scope.recordsOnPageOpt = [3, 5, 10];
	//$scope.pageBtnCount = 3;
	$scope.recordsCount = 0;

	$scope.showNRBBtnShown = true;
	$scope.newRecBlockShown = false;

	$scope.$watchGroup(['recordsCount', 'recordsOnPage'], function(arr) {
		var recordsCount = arr[0];
		var recordsOnPage = arr[1];

		$scope.pagesCount = Math.ceil(recordsCount / recordsOnPage);
		console.log($scope.pagesCount);
		$scope.partialLoad($scope.pagesCount);
	});
/*	$scope.$watch('pagesCount', function(pagesCount) {
		$scope.pagesArr = [];
		for (var i = 0; i < $scope.pagesCount; i++) {
			$scope.pagesArr.push({id: i + 1, active: false});	
		}
		$scope.partialLoad($scope.pagesArr);
	});*/

	// Init

	$http.get("php/guest_book-get.php").then(function(response) {
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
			$scope.partialLoad($scope.pagesCount);

		});
	}
	$scope.pageBtnHandler = function(num)  {

		$scope.partialLoad(num);
	}
	$scope.partialLoad = function(num) {
		if (num > 0) {
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

	}
});

guestBookApp.directive("vmPageDivider", function() {
	return {
		restrict: 'E',
		 scope: {
			num: '=',
			step: '=',
			//max: '=',
			handler: '&func',
		},
		template: "<div class='vm-page-divider'>" + 
		"<a href='javascript:void(0);' ng-show='shownBack' ng-click='back()'>< </a>" + 
		"<a href='javascript:void(0);' " + 
		"ng-repeat='page in shownPagesArr | orderBy:id:true' ng-click='clickPage(page)' " + 
		"class='page' ng-class='{page_active:page.active}'>{{page.id}}</a>" + 
		"<a href='javascript:void(0);' ng-show='shownForward' ng-click='forward()'> ></a></div>",
		// replace: true,
		link: function(scope, element, attrs) {
			console.log("scope", scope);
			console.log("attrs", attrs);

			scope.shownForward = false;
			scope.shownBack = false;

			//scope.shownPagesArr = [];
			var max = parseInt(attrs.max);
			//scope.activeId = 0; 

			function getActiveId() {
				var activeId;
				for (var i = 0; i < scope.pagesArr.length; i++) {
					if (scope.pagesArr[i].active) {
						activeId = i;
						console.log('for', activeId);
						break;
					}
				}	
				return activeId;
			}

			scope.firstLoad = true;
			scope.$watchGroup(['num', 'step'], function(arr) {
				var num = arr[0];
				var step = arr[1];
				

				scope.pagesAmount = Math.ceil(num / step);
				scope.pagesArr = [];

				for (var i = 0; i < scope.pagesAmount; i++) {
					scope.pagesArr.push({id: i + 1, active: false});	
				}
				if (num > 0) {
					scope.pagesArr[scope.pagesArr.length - 1].active = true;
					//console.log(scope.pagesArr);
					scope.firstLoad = false;
				}
				if (scope.pagesAmount > max) {
					//scope.shownForward = true;
					var activeId = getActiveId();

					//console.log('activeId', activeId);
					//console.log('activeId - max', activeId - max);
					scope.shownPagesArr = scope.pagesArr.slice(activeId - max + 1, activeId + 1);

				} else {
					//scope.shownForward = false;
					//scope.shownBack = false;
					scope.shownPagesArr = scope.pagesArr;
				}

/*				if (num > 0) {
					scope.pagesArr[scope.pagesArr.length - 1].active = true;
					//console.log(scope.pagesArr);
					scope.firstLoad = false;
				}*/
			}); 
/*			scope.$watch('pagesArr', function(pagesArr) {
				if (scope.pagesArr) {
					for (var i = 0; i < scope.pagesArr.length; i++) {
						if (scope.pagesArr[i].active) {
							scope.activeId = i;
							console.log('scope.activeId', scope.activeId);
							break;
						}
					}					
				}
			});*/
			scope.clickPage = function(page) {
				for (var i = 0; i < scope.pagesArr.length; i++) {
					scope.pagesArr[i].active = false;
				}
				page.active = true;
				scope.handler({num: page.id});
			}
			scope.forward = function() {
				var firstElId = scope.shownPagesArr[0].id;
				var startInx = firstElId - 2;
				var endInx = firstElId + max - 2;
				console.log('startInx', startInx);
				console.log('endInx', endInx);

				scope.shownPagesArr = scope.pagesArr.slice(startInx, endInx);

			}

			scope.back = function() {
				//var lastElId = scope.shownPagesArr[scope.shownPagesArr.length - 1].id;
				var lastElId = scope.shownPagesArr[0].id;
				var startInx = lastElId;
				var endInx = lastElId + max;
				console.log('startInx', startInx);
				console.log('endInx', endInx);

				scope.shownPagesArr = scope.pagesArr.slice(startInx, endInx);
			}
			scope.$watch('shownPagesArr', function(shownPagesArr) {
				scope.shownForward = true;
				scope.shownBack = true;
				if (shownPagesArr && shownPagesArr.length > 0) {
					if (shownPagesArr[0].id === 1) {
						scope.shownForward = false;
					}
					if (shownPagesArr[shownPagesArr.length -1].id === scope.pagesAmount) {
						scope.shownBack = false;
					}						
			
				}


			});
		},
	}
});