angular.module('kurukshetra')

.controller('Homecontrol',
function($scope, user){
     $scope.user = user;
})

.controller('Usercontrol',
function($scope, user){
	$scope.user = user;
	$scope.startscan = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			user.qr = result.text ;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}

})


