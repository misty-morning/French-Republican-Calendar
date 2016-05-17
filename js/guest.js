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


guestBookApp.controller("GuestBookControler", function($scope, $http) {

	$http.get("php/guest_book-get.php").then(function(response) {
		$scope.records = response.data;
	});

	$scope.sortparam = '-id';

	$scope.newRecord = function() {
		var tmpRecord = 
		$http.post("php/guest_book-add.php", {
			name: $scope.newName,
			text: $scope.newText
		}).then(function(response) {
			//console.log("added", response.data);
			$scope.records.push({
				id: response.data.id,
				name: response.data.name,
				text: response.data.text,
			});
			$scope.newName = "";
			$scope.newText = "";
		});


	}
});