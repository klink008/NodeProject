(function() {
    'use strict';

    angular
        .module('userModal')
        .directive('userModalFun', UserModal);

    function UserModal(){
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: "templates/home/userModal.html",
            controller: "userModalController",
            controllerAs: "userModalCtrl",
            link: function(scope,elem,attr){
                scope.userModalCtrl.initUserModalController();
            }
        }
    }

})();
