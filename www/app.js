var TharaLocal = angular.module('TharaLocal', ["ui.router"])

TharaLocal.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    
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
        url:'/news/:postId',
        templateUrl: 'modules/home/news-view.html',
        controller: 'HomeController'
    })
    
    $stateProvider.state('postfeed', {
        url:'/postfeed',
        templateUrl: 'modules/home/feed.html',
        controller: 'HomeController'
    })
})