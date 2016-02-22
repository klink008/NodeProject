(function() {
    'use strict';

    angular.module('main',['login','header','body','sidePanel','displayPost', 'userModal'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                controller: 'loginController',
                controllerAs: 'loginCtrl',
                templateUrl: 'templates/login/login.html'
            }).
            when('/home', {
               templateUrl: 'templates/home/home.html'
            }).
            when('/createAccount', {
                controller: 'loginController',
                controllerAs: 'loginCtrl',
                templateUrl: 'templates/login/createAccount.html'
            }).
            when('/displayPosts/:postId', {
                    controller: 'displayPostController',
                    controllerAs: 'displayPostCtrl',
                    templateUrl: 'templates/post/displayPost.html'
            }).
            otherwise('/');
        });
})();
