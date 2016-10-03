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
        }).then(function successCallback(response) {
            
        }, function errorCallback(response) {
            
        });
    }
    
    $scope.showCurrenLocationInMap = function(lat, la) {
        var mymap = L.map('map').setView([12.8246045, 80.047388], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(mymap);

        L.marker([12.8246045, 80.047388]).addTo(mymap)

        function onMapClick(e) {
            alert(e.latlng.lat);
        }

        mymap.on('click', onMapClick);

    }

}])