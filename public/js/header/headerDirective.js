(function() {
    'use strict';

    angular
        .module('header')
        .directive('headerBar', HeaderBar);

    function HeaderBar(){
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: "templates/home/header.html",
            controller: "headerController",
            controllerAs: "headerCtrl"
        }
    }

})();
