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

       function loadItems (items){
                        var notEmptyItems = [];
                        for(var i = 0;i< items.length; i++){
                          console.log("in");
                          if(items[i] !== ""){
                              notEmptyItems.push(items[i]);
                          }
                        }
                        return notEmptyItems;
      };

}]);
