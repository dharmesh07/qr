angular.module('kurukshetra')
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/login.html',
      controller: 'Logincontrol'
    });


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
  controller: 'Userscontrol'
  });

  $stateProvider
  .state('user', {
  url: '/user',
  templateUrl: '/user.html',
  controller: 'Usercontrol'
  });

  $stateProvider
  .state('confirm', {
  url: '/confirm',
  templateUrl: '/confirm.html',
  controller: 'confirmcontrol'
  });

  $urlRouterProvider.otherwise('login');
}])