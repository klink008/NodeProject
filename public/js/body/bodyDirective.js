(function() {
    'use strict';

    angular
        .module('body')
        .directive('postBody', Body);

    function Body(){
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: "templates/home/body.html",
            controller: "bodyController",
            controllerAs: "bodyCtrl",
            link: function(scope,elem,attr){
                scope.bodyCtrl.initializePosts();
            }
        }
    }

})();
