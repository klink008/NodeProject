(function() {
    'use strict';

    angular
        .module('header')
        .service('headerService', HeaderService);

    function HeaderService(Restangular){
        var _this = this;

        _this.loadUserData = loadUserData;

        function loadUserData(id){
            return Restangular.all('loadUserData').post(id);
        }
    }
})();