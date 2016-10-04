TharaLocal.controller("LoginController", ['$scope','$location','$http','$rootScope','$stateParams', function($scope, $location, $http, $rootScope, $stateParams) {
    
    var base_url = "http://10.4.59.85:8080/TharaLocalAPI";
    
    $scope.user = {
        username: '',
        password: '',
        gender: ''
    }
    
    $scope.login = function() {
        $http({
        url: base_url + '/login',
        method:'POST',
        data: 
            {
                username: $scope.user.username,
                password: $scope.user.password
            }
        }).then(function successCallback(response) {
            if(response.data !='') {
                $location.path('/home') 
                $rootScope.userId = response.data;
                $scope.errorMessage = ''
            } else {
                $scope.errorMessage = "Username or password is incorrect"
            }
            
                
        }, function errorCallback(response) {
            $scope.errorMessage = "Username or password is incorrect"
        });
        
    }
    
    $scope.signUp = function() {
        if(angular.isUndefined($scope.user.username) || $scope.user.username== '' || angular.isUndefined($scope.user.password) || $scope.user.password == '') {
            $scope.errorMessage = 'Invalid input';
            return;
        } else {
                    
            $http({
                url: base_url + '/signup',
                method:'POST',
                data: 
                    {
                        username: $scope.user.username,
                        password: $scope.user.password
                    }
            }).then(function successCallback(response) {
                    $scope.user = {};
                    $location.path('/home');    
            }, function errorCallback(response) {

            });
    }
    }
    
    $scope.navigateTo = function(path) {
        console.log($rootScope.userId);
        console.log(path)
        if(path == '/postfeed' && !angular.isUndefined($rootScope.userId)) {
            $location.path(path);
        } else if(path == '/home') {
            $location.path('/home')
        }else {
            $location.path('/login');
        }
    }
    
}])