(function() {
    'use strict';

    angular
        .module('sidePanel')
        .directive('sidePanel', sidePanel);

    function sidePanel(){
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: "templates/home/sidePanel.html",
            controller: "sidePanelController",
            controllerAs: "sidePanelCtrl"
        }
    }

})();
