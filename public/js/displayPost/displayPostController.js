(function() {
    'use strict';

    angular.module('displayPost')
        .controller('displayPostController', DisplayPostController);

    function DisplayPostController($routeParams, displayPostService){
        var _this = this;
        this.postId = $routeParams.postId;

        this.retrievePost = retrievePost;
        this.initialize = initialize;

        this.initialize();

        function initialize(){
            _this.retrievePost();
        }

        function retrievePost(){
            var params = {
                postId: $routeParams.postId
            };
            displayPostService.retrievePost(params).then(function(data){
                _this.post = data;
                console.log(data);
            }, function(err){
                console.log(err)
            })
        }
    }
})();