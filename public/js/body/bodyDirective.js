(function() {
    'use strict';

    angular
        .module('body')
        .directive('postBody', Body);

    function Body(){
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: "templates/body.html",
            controller: "BodyController",
            controllerAs: "bodyCtrl"
        }
    }

})();
