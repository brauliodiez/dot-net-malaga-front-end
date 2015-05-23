var app = angular.module('myApp', ['ngNewRouter', 'myApp.home', 'myApp.movies','myApp.services'])

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])

.controller('AppController', ['$router', AppController]);

function AppController($router) {
    $router.config([
        {path: '/', redirectTo: 'home' },
        {path: '/home', component: 'home' },
        {path: '/movies', component: 'movies'}
        ]);
}

