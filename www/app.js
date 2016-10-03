var TharaLocal = angular.module('TharaLocal', ["ui.router"])

TharaLocal.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home', {
        url: '/home',
        templateUrl:'modules/home/home.html',
        controller: 'HomeController'
    });
})