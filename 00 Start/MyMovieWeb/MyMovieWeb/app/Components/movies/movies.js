angular.module('myApp.movies', ['myApp.services']);

(function () {
    'use strict';

    angular.module('myApp.movies')
    .controller('MoviesController', ['moviesService', moviesController]);

    function moviesController(moviesService) {
        var vm = this;        
        vm.movies = [{title: "test title"}];

        function initialize() {
           

            moviesService.getMovies().then(function (results) {
                vm.movies = results.data;
            }
            );
        }

        initialize();            
    }
})();