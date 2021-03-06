// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'controllers', 'services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


  /*GoogleMapApi.configure({
            key: 'AIzaSyD0uoLPP_RFVTNdVSu5DYOTk-zHUSCxXVw',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
  });   */

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack

    .state('tab.categories', {
      url: '/categories',
      views: {
        'tab-categories': {
          templateUrl: 'templates/tab-categories.html',
          controller: 'CategoriesCtrl'
        }
      }
    })

    .state('tab.activities', {
      url: '/activities/:activitiesId',
      views: {
        'tab-activities': {
          templateUrl: 'templates/tab-activities.html',
          controller: 'ActivitiesCtrl'
        }
      }
    })

    .state('tab.activity', {
      url: '/activity/:activityId',
      views: {
        'tab-activity': {
          templateUrl: 'templates/tab-activity.html',
          controller: 'ActivityCtrl'
        }
      }
    })

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/categories');

}]);
/*.config(['GoogleMapApiProvider'.ns(), function (GoogleMapApi) {
        GoogleMapApi.configure({
            //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }]);
*/
