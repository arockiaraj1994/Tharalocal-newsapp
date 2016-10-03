TharaLocal.controller("LoginController", ['$scope','$location','$http', function($scope, $location, $http) {

    $scope.login = function() {
        $location.path('/home')
    }
    
    $scope.signUp = function() {
        $http({
            url: '',
            method:'POST',
            
        }).then(function successCallback(response) {
            
        }, function errorCallback(response) {
            
        });
    }
    
}])