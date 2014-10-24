angular.module('services', [])

/**
 * A simple example service that returns some data.
 */
.service('ParisApi',['$http', function($http) {

var connUrl = 'https://api.paris.fr/api/data/1.0/Equipements/get_categories/?token=686efe970f9fb6920124478a79cf3f6144ba313b0efc650154c5c3d5fe0192e8';

var connUrl1 = 'https://api.paris.fr/api/data/1.0/Equipements/get_equipements/?token=686efe970f9fb6920124478a79cf3f6144ba313b0efc650154c5c3d5fe0192e8&cid=';
var listLength = '&offset=0&limit=1000';

var connUrl2 = 'https://api.paris.fr/api/data/1.0/Equipements/get_equipement/?token=686efe970f9fb6920124478a79cf3f6144ba313b0efc650154c5c3d5fe0192e8&id=';

  function getCategories(){
       return $http.get(connUrl).
          success(function(data, status, headers, config) {
             console.log('data:',data);
              //return data;
             
          }).
          error(function(data, status, headers, config) {
              console.log('i fucked up');
             
          });
          
  }

  function getActivities(activitiesId){
      return $http.get(connUrl1+activitiesId+listLength).
          success(function(data, status, headers, config) {
             console.log('data:',data);
              //return data;
             
          }).
          error(function(data, status, headers, config) {
              console.log('i fucked up');
             
          });
  }

   function getActivity(activityId){
       return $http.get(connUrl2+activityId).
          success(function(data, status, headers, config) {
             console.log('data:',data);
              //return data;
             
          }).
          error(function(data, status, headers, config) {
              console.log('i fucked up');
             
          });
          
  }

  return {
    getCategories:getCategories,
    getActivities: getActivities,
    getActivity: getActivity
  }
}]);
