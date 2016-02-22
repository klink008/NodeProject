(function() {
    'use strict';

    angular
        .module('displayPost')
        .service('displayPostService', DisplayPostService);

    function DisplayPostService(Restangular){
        var _this = this;

        this.retrievePost = retrievePost;

        function retrievePost(params){
            return Restangular.all('retrievePost').post(params)
        }
    }
})();