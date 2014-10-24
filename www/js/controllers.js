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

.controller('ActivityCtrl',[ '$scope' ,'$stateParams', 'ParisApi', function($scope,$stateParams, ParisApi) {

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
}]);
