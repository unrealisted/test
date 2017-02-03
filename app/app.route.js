(function (angular) {
  'use strict';

  angular
    .module('test')
    .config(AppRoute);

  AppRoute.$inject = ['$urlRouterProvider', '$locationProvider'];

  function AppRoute($urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true); //change
    $urlRouterProvider.otherwise('/user_data');

  }
})(window.angular);
