TharaLocal.controller("HomeController", ['$scope','$http','$location','$state','$stateParams','$rootScope', function($scope, $http, $location, $state, $stateParams, $rootScope) {
    
    var base_url = "http://10.4.59.85:8080/TharaLocalAPI";
    
    $scope.getinitialdata = function() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    
    var onSuccess = function(position){
        $scope.showCurrenLocationInMap(position.coords.latitude, position.coords.longitude);
        $scope.getNews();
    }
    var onError = function(error){
        $scope.showCurrenLocationInMap("12.823920000000001", "80.04514");
        $scope.getNews();
    }
    
    $scope.getNews = function() {
       /* $scope.lat = "12.823920000000001";
        $scope.lan = "80.04514"*/
        $http({
            url: base_url + '/getFeeds?lati=' + $scope.lat + '&longi=' + $scope.lan,
            method: 'GET'
        }).then(function successCallback(response) {
            $scope.news = response.data;
        }, function errorCallback(response) {
            
        });
    }
    
    $scope.share = function(news){
        var options = {
  message: 'Your Friend has shared an information for you!!', 
  subject: news, 
  files: ['', ''], 
  url: '',
  chooserTitle: '' 
}
        window.plugins.socialsharing.shareWithOptions(options, shareSucess, shareError);
    }
    
    var shareSucess = function(position){
        alert("Done");
    }
    var shareError = function(error){
        alert("Share Failed");
    }
    
    $scope.redirectToViewPage = function(id) {
        $state.go("viewPosts", { postId: id });
    }
    
    $scope.showCurrenLocationInMap = function(lat, la) {
        var mymap = L.map('map').setView([lat, la], 13);
        $scope.lat = lat;
        $scope.lan = la;
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(mymap);

        var marker = L.marker([lat, la]).addTo(mymap);

        function onMapClick(e) {
            mymap.setView(L.latLng(e.latlng.lat, e.latlng.lng));
            mymap.removeLayer(marker);
            marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
            $scope.lat = e.latlng.lat;
            $scope.lan = e.latlng.lng;
            $scope.getNews();
        }

        mymap.on('click', onMapClick);
    }
    
    $scope.postFeeds = function() {
         $http({
            url: base_url + '/postFeed',
            method: 'POST',
            data: {
                "user": $rootScope.userId,
                "news": $scope.content,
                "lat": $scope.lat,
                "longi":$scope.lan,
                "area":"Thambaram",
                "title":$scope.title
            }
        }).then(function successCallback(response) {
             $scope.content = '';
             $scope.title = '';
             $location.path('/home')
        }, function errorCallback(response) {
            
        }); 
    }
    
        
    $scope.getFeed = function() {
        $http({
            url: base_url + '/getFeeds?messageId=' + $stateParams.postId,
            methd: 'GET',
        }).then(function successCallback(response){
            $scope.post = response.data;
            
        }, function erroCallback(result) {
            
        })
    }
    
    

}])