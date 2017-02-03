(function (angular) {
  'use strict';

  angular
    .module('First')
    .config(FirstRoute);

  FirstRoute.$inject = ['$stateProvider'];

  function FirstRoute($stateProvider) {

    $stateProvider

      .state('First', {
        url: '/user_data',
        templateUrl: 'app/components/first/first.html',
        controller: 'FirstCtrl',
        controllerAs: 'vm'
      });

  }
})(window.angular);
