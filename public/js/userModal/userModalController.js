(function() {
    'use strict';

    angular.module('userModal')
        .controller('userModalController', UserModalController);

    function UserModalController(userModalService, $cookies){
        var _this = this;

        this.initUserModalController = initUserModalController;
        this.updateAccount = updateAccount;

        function initUserModalController(){
            userModalService.loadUserData({id: $cookies.get('userId')}).then(function(data) {
                _this.firstName = data.firstName;
                _this.lastName = data.lastName;
                _this.username = data.username;
                _this.email = data.email;
                _this.password = data.password;
            });
        }

        function updateAccount() {
            var params = {
                id: $cookies.get('userId'),
                firstName:_this.firstName,
                lastName:_this.lastName,
                username:_this.username,
                email:_this.email,
                password: _this.password
            };
            userModalService.updateUser(params).then(function(data){
                console.log('account updated');
            });
        }

    }
})();