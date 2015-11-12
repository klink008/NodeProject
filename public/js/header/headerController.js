(function() {
    'use strict';

    angular.module('header')
        .controller('HeaderController', HeaderController);

    function HeaderController($scope){
        $scope.template = 'This is a template!'
    }
})();