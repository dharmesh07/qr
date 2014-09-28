angular.module('kurukshetra')
.controller('Homecontrol', [
'$scope',
'users',
function($scope, users){
	$scope.users = [
	{event_type : $scope.event_type , event_name : $scope.event_name , round : $scope.round , participant_type : $scope.participant_type}
	]
	$scope.add = function(){
		$scope.users = users.users;
		alert($scope.event_type);
	}
      
}])



.controller('Usercontrol', [
'$scope',
'$stateParams',
'users',
function($scope, $stateParams, users){
  $scope.detail = function(){

  }

}])


