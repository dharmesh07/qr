angular.module('kurukshetra')
.controller('Homecontrol', function($scope) {
  console.log('posts controllers loaded');
    $scope.adduser = function(){
      $scope.round = 3;
  };
})



