(function() {
    'use strict';

    angular.module('header',['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'templates/main.html'
            });
        });
})();
