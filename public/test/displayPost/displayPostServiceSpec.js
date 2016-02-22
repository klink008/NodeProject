describe("DisplayPostService", function () {
    var displayPostService,
        $rootScope,
        $scope,
        $httpBackend;

    function SetUpScope(_$rootScope_,_$httpBackend_,_displayPostService_) {
        displayPostService = _displayPostService_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

        $scope = $rootScope.$new();
    }

    beforeEach(module("displayPost"));
    beforeEach(inject(SetUpScope));

    describe('submitPost', function(){
        it('should make a call out to retrievePost', function(){
            var expectedParams = 'test';
            $httpBackend.expectPOST('/retrievePost', expectedParams).respond({});

            displayPostService.retrievePost('test');

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
});