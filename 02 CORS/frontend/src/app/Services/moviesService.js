(function() {
    'use strict';

    angular.module('myApp.services').factory('moviesService', ['$http', moviesService]);

    function moviesService($http) {
        var _baseUrl = 'http://localhost:10048'; // place this in a common settings file or const
        var _moviesUrl = _baseUrl + '/api/movies'



        function getMovies() {            
            return $http({ method: 'GET', url: _moviesUrl});
        }

        return {
            getMovies : getMovies
        }
    }

})();