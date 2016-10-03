var TharaLocal = angular.module('TharaLocal', ["ui.router"])

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
    
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'modules/login/sign-up.html',
        controller: 'LoginController'
    })
    
    $stateProvider.state('viewPosts', {
        url:'/news',
        templateurl: 'modules/home/news-view.html',
        controller: 'HomeController'
    })
})