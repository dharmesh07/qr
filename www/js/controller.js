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
function($scope, user ,$ionicLoading,$location){
	$scope.user = user;
	$scope.insert = function(){
		$ionicLoading.show({template: 'Loading...'});
    var data ={
        event_type : document.getElementById('test_event_type').value,
        event_name : document.getElementById('test_event_name').value,
        round : document.getElementById('test_round').value,
        place : document.getElementById('test_place').value,
        participant_type : document.getElementById('test_participant_type').value,
        teamname : document.getElementById('test_teamname').value,
        qr1 : document.getElementById('test_qr1').value,
        qr2 : document.getElementById('test_qr2').value,
        qr3 : document.getElementById('test_qr3').value,
        qr4 : document.getElementById('test_qr4').value,
        qr5 : document.getElementById('test_qr5').value,
    }
    
    console.log(data);
    $.ajax({
        type: 'POST',
        data: {postData: JSON.stringify(data)},
        jsonp: "callback",
        dataType: 'jsonp',
        url: 'http://www.techteam.kurukshetra.org.in/qr.php',
        success: function(data){
        	$ionicLoading.hide();
        	console.log(data);
            alert('Your data was successfully added');
            $location.path('/home');
        },
        error: function(data,error){
            $ionicLoading.hide();
            console.log(error);
            alert('There was an error adding your data');
        }
    });
    
    return false;
};
	
})









