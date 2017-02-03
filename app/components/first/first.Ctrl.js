(function (angular) {
  'use strict';

  angular
    .module('First')
    .controller('FirstCtrl', FirstCtrl);

  FirstCtrl.$inject = ['$log', '$window', '$state'];

  function FirstCtrl($log, $window, $state) {

    $log.log('FirstCtrl');

    var vm = this;

    vm.submit = submit;

    var storage = $window.localStorage;

    vm.ctrlData = JSON.parse(storage.getItem('First')) || {};

    function submit(){
      storage.setItem('First', JSON.stringify(vm.ctrlData));
      $state.go('Second');
    }

  }
})(window.angular);