var guestBookApp = angular.module("guestBookApp", []);

guestBookApp.controller("GuestBookControler", function($scope) {
	$scope.records = [
			{
				id: 0,
				name: "vasya",
				text: "ras",
			},
			{
				id: 1,
				name: "petya",
				text: "dva",
			},
			{
				id: 2,
				name: "kolya",
				text: "tri",
			}
		];
});
