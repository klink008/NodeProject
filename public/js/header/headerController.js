(function() {
    'use strict';

    angular.module('header')
        .controller('headerController', HeaderController);

    function HeaderController($scope, headerService, $location, $cookies){
        var _this = this;

        _this.logout = logout;

        _setupHeader();

        function logout(){
            $cookies.remove('userId');
            $location.url('/')
        }

        function _setupHeader(){
            headerService.loadUserData({id: $cookies.get('userId')}).then(function(data) {
                _this.firstName = data.firstName;
            });
        };
    }
})();