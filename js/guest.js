var guestBookApp = angular.module("guestBookApp", []);

guestBookApp.controller("GuestBookControler", function($scope, $http) {

	$http.get("php/guest_book-get.php").then(function(response) {
		$scope.records = response.data;
	});

	$scope.newRecord = function() {
		var tmpRecord = 
		$http.post("php/guest_book-add.php", {
			name: $scope.newName,
			text: $scope.newText
		}).then(function(response) {
			console.log("added", response.data);
			$scope.records.push({
				name: $scope.newName,
				text: $scope.newText
			});
			$scope.newName = "";
			$scope.newText = "";
		});


	}
});