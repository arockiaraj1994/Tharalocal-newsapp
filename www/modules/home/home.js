TharaLocal.controller("HomeController", ['$scope','$http', function($scope, $http) {
    
    $scope.news = [
        {
            header: 'This thara local app',
            content: 'Fsdjhfjs hsdfjhsb isdhfkjsdf jkbsdjbf',
            createdBy : 'siva',
            ts: 'Tue 16:58'
        },
        {
            header: 'This thara local app1',
            content: 'Fsdjhfjs hsdfjhsb isdhfkjsdf jkbsdjbf',
            createdBy : 'siva',
            ts: 'Tue 16:58'
        }
   ]
    
    $scope.getNews = function() {
        $http({
            url: 'http://10.4.59.68:8080/TharaLocalAPI/login',
            method: 'GET'
        });
    }

}])