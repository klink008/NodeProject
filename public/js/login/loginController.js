(function() {
    'use strict';

    angular.module('login')
        .controller('loginController', LoginController);

    function LoginController($scope, loginService, $location, $cookies){
        var _this = this;

        _this.validateUser = validateUser;
        _this.createUser = createUser;

        function validateUser(){
            loginService.validateUser(_this.username, _this.password).then(function(data){
                //response from the server with the user data
                $cookies.put('userId', data.id);
                $location.url('/home');
            }, function(error){
                console.log(error)
            });
        }

        function createUser(){
            var params = {
                firstName:   _this.firstName,
                lastName:   _this.lastName,
                username:   _this.username,
                email:      _this.email,
                password:   _this.password
            };
            loginService.createUser(params).then(function(data){
                $location.path('/');
            }, function(error){
                console.log(error);
            });
        }
    }
})();