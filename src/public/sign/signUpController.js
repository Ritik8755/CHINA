(function () {
    "use strict";

    angular.module('public')
    .controller('SignController', SignController);

    SignController.$inject = ['DataService'];
    function SignController(DataService) {
        var controller = this;
        var service = DataService;

        controller.info = service.getInfos();
        console.log(controller.info);

    }


})();
