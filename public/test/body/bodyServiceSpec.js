describe("bodyService", function () {
    var bodyService,
        $httpBackend;

    function SetUpScope(_$httpBackend_,_bodyService_) {
        bodyService = _bodyService_;
        $httpBackend = _$httpBackend_;
    }

    beforeEach(module("body"));
    beforeEach(inject(SetUpScope));

    describe('retrieveAllPosts', function(){
        it('should make a call out to retrieveAllPosts', function(){
            $httpBackend.whenPOST('/retrieveAllPosts').respond({});

            bodyService.retrieveAllPosts('test');

            $httpBackend.flush();

            var expectedParams = 'test';
            $httpBackend.expectPOST('/retrieveAllPosts', expectedParams);
            $httpBackend.verifyNoOutstandingRequest();
        });
    });

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
});