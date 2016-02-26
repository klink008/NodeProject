(function() {
    'use strict';

    angular.module('body')
        .controller('bodyController', BodyController);

    function BodyController(bodyService, $rootScope, $cookies){
        var _this = this;

        this.initializePosts = initializePosts;
        this.submitPost = submitPost;
        this.retrievePostsForUser = retrievePostsForUser;
        this.retrieveAllPosts = retrieveAllPosts;

        function initializePosts(){
            _this.retrieveAllPosts();
        }

        function submitPost(){
            var params = {
                userId: $cookies.get('userId'),
                title: _this.title,
                content: _this.content,
                created: new Date()
            };
            bodyService.submitPost(params).then(function(data){
                _this.title = "";
                _this.content = "";
                _this.retrieveAllPosts();
            }, function(){
                console.log('unsuccessful post');
            });
        }

        function retrievePostsForUser(){
            var params = {
                userId: $cookies.get('userId')
            };
            bodyService.retrievePostsForUser(params).then(function(data){
                _this.posts = data;
            },function(err){
                console.log('error retrieving posts')
            })
        }

        function retrieveAllPosts(){
            var params = {
                userId: $cookies.get('userId')
            };
            bodyService.retrieveAllPosts(params).then(function(data){
                _this.posts = data;
            },function(err){
                console.log('error retrieving all posts: ' + err)
            });
        }
    }
})();