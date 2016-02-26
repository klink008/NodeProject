describe("BodyController", function () {
    var bodyController,
        bodyService,
        $scope,
        $rootScope,
        $cookies,
        cookiesSpy;

    function SetUpScope(_$rootScope_, _$controller_, _bodyService_, _$cookies_) {
        bodyService = _bodyService_;
        $rootScope = _$rootScope_;
        $cookies = _$cookies_;

        $scope = $rootScope.$new();
        bodyController = _$controller_('bodyController', {
            $scope:$scope
        });
    }

    beforeEach(module('body'));
    beforeEach(inject(SetUpScope));

    beforeEach(function(){
        cookiesSpy = spyOn($cookies, 'get').and.returnValue('userId');
    });

    describe('retrieveAllPosts', function(){
        it('should call bodyService.retrieveAllPosts and set posts', function(){
            var retrieveAllPostsSpy = spyOn(bodyService, 'retrieveAllPosts').and.callFake(function(){
                return{
                    then: function(callback){return callback('test')}
                }
            });

            bodyController.retrieveAllPosts();

            var expectedParams = {
                userId: 'userId'
            };

            expect(retrieveAllPostsSpy).toHaveBeenCalledWith(expectedParams);
            expect(cookiesSpy).toHaveBeenCalledWith('userId');
            expect(bodyController.posts).toBe('test');
        });
    });

    describe("submitPost", function() {
        it("should call bodyService submitPost", function() {
            var validateUserSpy = spyOn(bodyService, 'submitPost').and.callFake(function(){
                return{
                    then: function(callback){return callback()}
                }
            });

            var retrieveAllPostsSpy = spyOn(bodyController, 'retrieveAllPosts');

            var createdDate = new Date();
            bodyController.content = "postContent";
            bodyController.title = "title";
            bodyController.created = createdDate;

            bodyController.submitPost();
            $rootScope.$apply();

            var expectedParams = {
                userId: 'userId',
                title: 'title',
                content: 'postContent',
                created: createdDate
            };

            expect(cookiesSpy).toHaveBeenCalledWith('userId');
            expect(retrieveAllPostsSpy).toHaveBeenCalled();
            expect(validateUserSpy).toHaveBeenCalledWith(expectedParams);
            expect(bodyController.title).toBe('');
            expect(bodyController.content).toBe('');
        });
    });

    describe('retrievePostsForUser',function(){
        it('should call the bodyService.retrievePostsForUser', function(){
            var retrievePostsForUserSpy = spyOn(bodyService, 'retrievePostsForUser').and.callFake(function(){
                return{
                    then: function(callback){return callback('test')}
                }
            });

            bodyController.retrievePostsForUser();

            var expectedParams = {
                userId: 'userId'
            };

            expect(retrievePostsForUserSpy).toHaveBeenCalledWith(expectedParams);
            expect(cookiesSpy).toHaveBeenCalledWith('userId');
            expect(bodyController.posts).toBe('test');
        });
    });

    describe('initializePosts', function(){
        it('should call retrieveAllPosts', function(){
            var retrieveAllPostsSpy = spyOn(bodyController, 'retrieveAllPosts');

            bodyController.initializePosts();

            expect(retrieveAllPostsSpy).toHaveBeenCalled();
        });
    });
});