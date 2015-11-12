(function() {
    'use strict';

    angular.module('body')
        .controller('BodyController', BodyController);

    function BodyController($scope){
        $scope.hello = "Hello Stephen!";
    }
})();