TharaLocal.controller("HomeController", ['$scope','$http','$location','$state','$stateParams', function($scope, $http, $location, $state, $stateParams) {
    
    var base_url = "http://10.4.59.85:8080/TharaLocalAPI";
    
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
            url: base_url + '/getFeeds',
            method: 'GET'
        }).then(function successCallback(response) {
            $scope.news = response.data;
        }, function errorCallback(response) {
            
        });
    }
    
    $scope.redirectToViewPage = function() {
        
        $state.go("viewPosts", { postId: '234243234' })
    }
    
    $scope.showCurrenLocationInMap = function(lat, la) {
        var mymap = L.map('map').setView([12.8246045, 80.047388], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(mymap);

        var marker = L.marker([12.8246045, 80.047388]).addTo(mymap);

        function onMapClick(e) {
            mymap.setView(L.latLng(e.latlng.lat, e.latlng.lng));
            mymap.removeLayer(marker);
            marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
        }

        mymap.on('click', onMapClick);
    }
    
        
    $scope.getFeed = function() {
        $http({
            url: base_url + '/getNews/' + $stateParams.postId,
            methd: 'GET',
        }).then(function successCallback(response){
            $scope.feed = response.data;
            
        }, function erroCallback(result) {
            
        })
    }
    
    

}])