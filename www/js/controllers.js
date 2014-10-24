angular.module('controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('CategoriesCtrl', function($scope, ParisApi ) {
  	
  	ParisApi.getCategories().then( function(response){

 		var categories  = response.data;
 		console.log("categories",categories);
 		$scope.categories = categories.data;
 	});

})

.controller('ActivitiesCtrl', function($scope, $stateParams, ParisApi) {



  ParisApi.getActivities($stateParams.activitiesId).then( function(response){

 		var activities  = response.data;
 		console.log("activities",activities);
 		$scope.activities = activities.data;
 	});

})

.controller('ActivityCtrl',[ '$scope' ,'$stateParams', 'ParisApi','$ionicModal','$sce', function($scope,$stateParams, ParisApi, $ionicModal ,$sce) {

	 ParisApi.getActivity($stateParams.activityId).then( function(response){
 		var activity  = response.data;
 		console.log("activity",activity);
 		$scope.activity = activity.data;
 	});
/*
	 GoogleMapApi.then(function(maps) {
	 	console.log("api loaded");
        	});
*/
	// Load the modal from the given template URL
    	$ionicModal.fromTemplateUrl('templates/description-modal.html', function($ionicModal) {
              $scope.descriptionModal = $ionicModal;
    	}, {
              scope: $scope,
        	animation: 'slide-in-up'
    	});  

      $ionicModal.fromTemplateUrl('templates/contact-modal.html', function($ionicModal) {
              $scope.contactModal = $ionicModal;
      }, {
            scope: $scope,
            animation: 'slide-in-up'
      });

      $ionicModal.fromTemplateUrl('templates/schedule-modal.html', function($ionicModal) {
              $scope.scheduleModal = $ionicModal;
      }, {
            scope: $scope,
            animation: 'slide-in-up'
      });    

            $ionicModal.fromTemplateUrl('templates/location-modal.html', function($ionicModal) {
              $scope.locationModal = $ionicModal;
      }, {
            scope: $scope,
            animation: 'slide-in-up'
      });    

	$scope.loadDescription = function() {
             $scope.name = $scope.activity[0].name;
             $scope.description = $sce.trustAsHtml($scope.activity[0].description);
             console.log($scope.description );
		$scope.descriptionModal.show();
	}

      $scope.loadContact = function() {
                    $scope.url = $sce.trustAsHtml($scope.activity[0].websiteUrl);
                    $scope.contactModal.show();
      }


      $scope.loadSchedule = function() {
                    $scope.scheduleModal.show();
      }

      $scope.loadLocation = function() {

                    $scope.lat = $scope.activity[0].lat;
                    $scope.lon = $scope.activity[0].lon;
                    $scope.locationModal.show();

                     var mapOptions = {
                                     center: new google.maps.LatLng($scope.lat, $scope.lon),
                                     zoom: 19,
                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                          }

                    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
                    console.log($scope.map);
           
            }  

}]);
