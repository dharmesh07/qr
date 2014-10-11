angular.module('kurukshetra')

.controller('Homecontrol',
function($scope, user){
     $scope.user = user;
     $scope.nextpage = function(){
     	if(user.participant_type == "Individual")
     		location.href = "#/user";
     	else
     		location.href = "#/users";

     }
})

.controller('Userscontrol',
function($scope, user){
	$scope.user = user;
	$scope.startscan1 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr1 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}
	$scope.startscan2 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr2 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}
	$scope.startscan3 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr3 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}
	$scope.startscan4 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr4 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}
	$scope.startscan5 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr5 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}

})



.controller('Usercontrol',
function($scope, user){
	$scope.user = user;
	$scope.startscan1 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr1 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}

})


.controller('confirmcontrol',
function($scope, user){
	$scope.user = user;
	$scope.check = function(){
		if($scope.password)
			alert("pass");
		else   
			alert("fail");
		}
	
})





