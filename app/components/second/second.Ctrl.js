(function (angular) {
  'use strict';

  angular
    .module('Second')
    .controller('SecondCtrl', SecondCtrl);

  SecondCtrl.$inject = ['$log', '$window', '$state'];

  function SecondCtrl($log, $window, $state) {

    $log.log('SecondCtrl');

    var vm = this;

    vm.submit = submit;

    var storage = $window.localStorage;

    vm.ctrlData = JSON.parse(storage.getItem('Second')) || {};

    function submit(){
      storage.setItem('Second', JSON.stringify(vm.ctrlData));
      $state.go('Third');
    }

  }

})(window.angular);