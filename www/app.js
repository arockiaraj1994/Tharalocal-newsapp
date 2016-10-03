var TharaLocal = angular.module('TharaLocal', ["ui.router","vsGoogleAutocomplete"])

TharaLocal.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider.state('home', {
        url: '/home',
        templateUrl:'modules/home/home.html',
        controller: 'HomeController'
    });
    
    $stateProvider.state('login', {
        url: '/login',
        templateUrl:'modules/login/login.html',
        controller: 'LoginController'
    });
})