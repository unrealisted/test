(function (angular) {
  'use strict';

  angular
    .module('test')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$log', '$window', '$rootScope'];

  function MainCtrl ($log, $window, $rootScope) {

    $log.log ('MainCtrl');

    var vm = this;

    vm.goStateBack = goStateBack;

    var stateName;
    var stateIndex;
    var backCrumbsLength;

    vm.backCrumbs = ['First', 'Second', 'Third'];


    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

      stateName = toState.name;
      stateIndex = vm.backCrumbs.indexOf(stateName);
      backCrumbsLength = vm.backCrumbs.length;

        if(stateIndex !== -1){
          vm.backCrumbs.splice(stateIndex + 1, backCrumbsLength);
        }
        else{
          vm.backCrumbs.push(stateName);
        }

    });

    function goStateBack(){
      $window.history.back();
    }

  }
})(window.angular);
