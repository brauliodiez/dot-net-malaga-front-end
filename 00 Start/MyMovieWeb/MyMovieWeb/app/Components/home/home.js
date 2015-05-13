angular.module('myApp.home', []);

(function () {
    'use strict';

    angular.module('myApp.home')
    .controller('HomeController', [homeController]);

    function homeController() {
        var vm = this;    
    }
})();

