'use strict';

/**
 * @ngdoc function
 * @name projetihmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetihmApp
 */
angular.module('projetihmApp')
  .controller('AboutCtrl', ['$scope','$http',function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
