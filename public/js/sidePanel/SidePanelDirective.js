(function() {
    'use strict';

    angular
        .module('sidePanel')
        .directive('sidePanel', HeaderBar);

    function HeaderBar(){
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: "templates/sidePanel.html",
            controller: "SidePanelController",
            controllerAs: "sidePanelCtrl"
        }
    }

})();
