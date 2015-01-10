angular.module('pinch.services', [])

.service(
	"pinchService",
	function getPinches(){
		var request = $http({
			method: "GET",
			url: "http://m.pinchfavor.com:9999/api/pinch",
			params: {
				action: "GET"
			}
		})
	}
)