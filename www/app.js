var TharaLocal = angular.module('TharaLocal', [""])

TharaLocal.config($urlProvider, $locationProvider, $stateProvider) {
    $urlProvider.otherWise('/home');
    
    $stateProvider.state('/')
}