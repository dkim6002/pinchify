angular.module('pinch.controllers', [])

.controller('ResultsCtrl',function($scope, $http) {

		$http.get('http://m.pinchfavor.com:9999/api/pinch').then(function(resp){
					console.log(resp.data)
					$scope.pinches = resp.data.pinches;
			})

});

