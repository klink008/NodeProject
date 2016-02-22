(function() {
    'use strict';

    angular.module('login',['ngRoute','restangular', 'ngCookies'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                controller: 'loginController',
                controllerAs: 'loginCtrl',
                templateUrl: 'templates/login.html'
            });
        });
})();
