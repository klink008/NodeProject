(function() {
    'use strict';

    angular
        .module('userModal')
        .service('userModalService', UserModalService);

    function UserModalService(Restangular){
        var _this = this;

        this.loadUserData = loadUserData;
        this.updateUser = updateUser;

        function loadUserData(id){
            return Restangular.all('loadUserData').post(id);
        }

        function updateUser(params){
            return Restangular.all('updateUser').post(params);
        }
    }

})();