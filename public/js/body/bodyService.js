(function() {
    'use strict';

    angular
        .module('body')
        .service('bodyService', BodyService);

    function BodyService(Restangular){
        var _this = this;

        this.submitPost = submitPost;
        this.retrievePostsForUser = retrievePostsForUser;
        this.retrieveAllPosts = retrieveAllPosts;

        function retrieveAllPosts(params){
            return Restangular.all('retrieveAllPosts').post(params)
        }

        function submitPost(params){
            return Restangular.all('submitPost').post(params)
        }

        function retrievePostsForUser(params){
            return Restangular.all('retrievePostsForUser').post(params)
        }
    }
})();