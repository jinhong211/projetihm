'use strict';

/**
 * @ngdoc overview
 * @name projetihmApp
 * @description
 * # projetihmApp
 *
 * Main module of the application.
 */
angular
  .module('projetihmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/education/formation', {
        templateUrl: 'views/education/formation.html',
        controller: 'EducationCtrl'
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/competence', {
        templateUrl: 'views/competence.html',
        controller: 'CompetenceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
