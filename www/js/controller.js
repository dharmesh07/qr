angular.module('kurukshetra')
.controller('Homecontrol',
function($scope, user){
     $scope.user = user;
})

.controller('Usercontrol', [
function($scope, user){
	$scope.user = user;

}])


