(function() {
    'use strict';

    angular.module('myApp.services').factory('moviesService', ['$http', moviesService]);

    function moviesService($http) {
        var _moviesUrl = '/api/movies'


        function getMovies() {
            return $http({ method: 'GET', url: _moviesUrl});
        }

        return {
            getMovies : getMovies
        }
    }

})();