describe("bodyService", function () {
    var bodyService,
        $rootScope,
        $scope,
        $httpBackend;

    function SetUpScope(_$rootScope_,_$httpBackend_,_bodyService_) {
        bodyService = _bodyService_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

        $scope = $rootScope.$new();
    }

    beforeEach(module("body"));
    beforeEach(inject(SetUpScope));

    describe('submitPost', function(){
        it('should make a call out to submitPost', function(){
            var expectedParams = 'test';
            $httpBackend.expectPOST('/submitPost', expectedParams).respond({});

            bodyService.submitPost('test');

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });

    describe('retrievePostsForUser', function(){
        it('should make a call out to retrievePostsForUser', function(){
            var expectedParams = 'test';
            $httpBackend.expectPOST('/retrievePostsForUser', expectedParams).respond({});

            bodyService.retrievePostsForUser('test');

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });

    describe('retrieveAllPosts', function(){
        it('should make a call out to retrieveAllPosts', function(){
            var expectedParams = 'test';
            $httpBackend.expectPOST('/retrieveAllPosts', expectedParams).respond({});

            bodyService.retrieveAllPosts('test');

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
});