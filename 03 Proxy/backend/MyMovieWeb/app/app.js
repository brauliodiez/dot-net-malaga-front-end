var app = angular.module('myApp', ['ngNewRouter', 'myApp.home', 'myApp.movies','myApp.services'])


.controller('AppController', ['$router', AppController]);

function AppController($router) {
    $router.config([
        {path: '/', redirectTo: 'home' },
        {path: '/home', component: 'home' },
        {path: '/movies', component: 'movies'}
        ]);
}

