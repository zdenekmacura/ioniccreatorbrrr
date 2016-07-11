angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.pIhlSitSe', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pIhlSitSe.html',
        controller: 'pIhlSitSeCtrl'
      }
    }
  })

  .state('menu.zaregistrovatSe', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/zaregistrovatSe.html',
        controller: 'zaregistrovatSeCtrl'
      }
    }
  })

  .state('menu.uvodnStrNka', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/uvodnStrNka.html',
        controller: 'uvodnStrNkaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('//page6')

  

});