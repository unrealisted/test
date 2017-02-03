(function (angular) {
  'use strict';

  angular
    .module('Third')
    .config(ThirdRoute);

  ThirdRoute.$inject = ['$stateProvider'];

  function ThirdRoute($stateProvider) {

    $stateProvider

      .state('Third', {
        url: '/credit_card_details',
        templateUrl: 'app/components/third/third.html',
        controller: 'ThirdCtrl',
        controllerAs: 'vm'
      });

  }
})(window.angular);
