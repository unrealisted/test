(function (angular) {
  'use strict';

  angular
    .module('Third')
    .controller('ThirdCtrl', ThirdCtrl);

  ThirdCtrl.$inject = ['$log', '$window'];

  function ThirdCtrl($log, $window) {

    $log.log('ThirdCtrl');

    var vm = this;

    vm.submit = submit;

    var storage = $window.localStorage;

    vm.ctrlData = JSON.parse(storage.getItem('Third')) || {};

    function submit(){
      storage.setItem('Third', JSON.stringify(vm.ctrlData));
    }

  }
})(window.angular);