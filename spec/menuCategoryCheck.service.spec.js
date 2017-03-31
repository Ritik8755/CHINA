describe('menucategory', function () {

    var service;
    var $httpBackend;
    var ApiPath;

    beforeEach(function () {
        module('common');

        inject(function ($injector) {
            service = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            ApiPath = $injector.get('ApiPath');
        });
    });

    it('should return an error', function () {
        var shortName = 'ss';
        var url = ApiPath + '/categories/' + shortName.toUpperCase() + '.json';

        $httpBackend.whenGET(url).respond({ status: '500', error: 'Internal Server Error' });
        service.getCategory(shortName).then(function (response) {
            console.log('getCategory');
            console.log(response);
            expect(response.data.status).toBe('500');
        });
        $httpBackend.flush();
    });
    it('should return a category', function () {
        var shortName = 'l';
        var url = ApiPath + '/categories/' + shortName.toUpperCase() + '.json';

        $httpBackend.whenGET(url).respond({ id: '1', short_name: 'L', name: 'Lunch', special_instructions: '', created_at: '2017-03-29T14:21:56.701Z', updated_at: '2017-03-29T14:21:56.701Z' });
        service.getCategory(shortName).then(function (response) {
            console.log('getCategory');
            console.log(response);
            expect(response.data.status).toBe(undefined);
        });
        $httpBackend.flush();
    });

});
