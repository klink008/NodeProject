(function() {
    'use strict';

    angular
        .module('login')
        .service('loginService', LoginService);

    function LoginService(Restangular, $q){
        var _this = this;
        _this.userId = "";

        _this.validateUser = validateUser;
        _this.createUser = createUser;

        function validateUser(username, password){
            var params = {
                username: username,
                password: password
            };
            return Restangular.all('validateUser').post(params)
        }

        function createUser(params){
            var deferred = $q.defer();
            Restangular.all('createUser').post(params).then(function(data){
                _this.userId = data.id;
                deferred.resolve();
            }, function() {
                deferred.reject();
            });

            return deferred.promise;
        }
    }
})();