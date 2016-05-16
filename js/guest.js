var guestBookApp = angular.module("guestBookApp", []);

guestBookApp.controller("GuestBookControler", function($scope, $http) {

	$http.get("php/get_guest_book.php").then(function(response) {
		$scope.records = response.data;
	});

	$scope.newRecord = function() {
		$scope.records.push({
			name: $scope.newName,
			text: $scope.newText
		});
		$scope.newName = "";
		$scope.newText = "";
	}
});