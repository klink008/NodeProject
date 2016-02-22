(function() {
    'use strict';

    angular.module('header',['ngRoute','restangular', 'ngCookies'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                controller: 'headerController',
                controllerAs: 'headerCtrl',
                templateUrl: 'templates/header.html'
            });
        });
})();
