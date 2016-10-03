TharaLocal.controller("LoginController", ['$scope','$location','$http', function($scope, $location, $http) {
    
    var base_url = "http://10.4.59.85:8080/TharaLocalAPI";
    
    $scope.user = {
        username: '',
        password: '',
        gender: ''
    }
    
    $scope.login = function() {
        $location.path('/home')
    }
    
    $scope.signUp = function() {
        
        $http({
            url: base_url + '/signup',
            method:'POST',
            data: 
                {
                    username: $scope.user.username,
                    password: $scope.user.password
                }
            
            
        }).then(function successCallback(response) {
                $location.path('/login');    
        }, function errorCallback(response) {
            
        });
    }
    
}])