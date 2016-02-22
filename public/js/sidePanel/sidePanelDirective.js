(function() {
    'use strict';

    angular
        .module('sidePanel')
        .directive('sidePanel', SidePanel);


    function SidePanel(){
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: "templates/sidePanel.html",
            controller: "sidePanelController",
            controllerAs: "sidePanelCtrl"
        }
    }

})();
