(function (angular) {
  'use strict';

  angular
    .module('Second')
    .config(SecondRoute);

  SecondRoute.$inject = ['$stateProvider'];

  function SecondRoute($stateProvider) {

    $stateProvider

      .state('Second', {
        url: '/address',
        templateUrl: 'app/components/second/second.html',
        controller: 'SecondCtrl',
        controllerAs: 'vm'
      });

  }
})(window.angular);
