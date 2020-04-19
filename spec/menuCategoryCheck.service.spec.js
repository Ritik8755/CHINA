describe('menuitem', function () {

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
        var url = ApiPath + '/menu_items/' + shortName.toUpperCase() + '.json';

