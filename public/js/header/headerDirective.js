(function() {
    'use strict';

    angular
        .module('header')
        .directive('headerBar', HeaderBar);

    function HeaderBar(){
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: "templates/header.html",
            controller: "HeaderController",
            controllerAs: "headerCtrl"
        }
    }

})();
