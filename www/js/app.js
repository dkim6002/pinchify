
angular.module('pinch', ['ionic', 'pinch.controllers', 'pinch.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  .state('tab.home', {
    url: "/home",
    views: {
      'home': {
        templateUrl: 'templates/home.html'
      }
    }
  })
  .state('tab.results', {
    url: "/results",
    views: {
      'results': {
        templateUrl: 'templates/results.html',
        controller: 'ResultsCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/tab/home');
})
