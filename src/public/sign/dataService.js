(function () {
    "use strict";

    angular.module('public')
    .service('DataService', DataService);

    //DataService.$inject = ['$http', 'ApiPath'];
    function DataService() {
        var service = this;

        service.info = {};

        service.setInfos = function(informations){
            service.info = informations;
        }
        service.getInfos = function () {
            return service.info;
        }
    }

})();
