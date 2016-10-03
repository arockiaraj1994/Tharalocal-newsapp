TharaLocal.controller("LoginController", ['$scope','$location','$http', function($scope, $location, $http) {
    
    $scope.user = {
        username: '',
        password: '',
        gender: ''
    }
    
    $scope.login = function() {
        $location.path('/home')
    }
    
    $scope.signUp = function() {
        $location.path('/login')
//        $http({
//            url: '',
//            method:'POST',
//            
//        }).then(function successCallback(response) {
//            
//        }, function errorCallback(response) {
//            
//        });
    }
    
}])