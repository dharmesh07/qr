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

  $urlRouterProvider.otherwise('home');
}])