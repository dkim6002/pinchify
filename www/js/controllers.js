angular.module('pinch.controllers', [])

.controller('ResultsCtrl',function($scope, $http) {

	$http.get('http://m.pinchfavor.com:9999/api/pinch').then(function(resp){
				console.log(resp.data)
				$scope.pinches = resp.data.pinches;
		})
})

.controller('HomeCtrl', function($scope, $http) {

	$scope.pinchInput = {};

	$scope.pinchSubmit = function() {
		$http.put('http://m.pinchfavor.com:9999/api/pinch', $scope.pinchInput)
	}
});

