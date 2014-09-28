angular.module('kurukshetra')
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'Homecontrol'
    });



    $stateProvider
  .state('users', {
  url: '/users',
  templateUrl: '/users.html',
  controller: 'Usercontrol'
});

  $urlRouterProvider.otherwise('home');
}])