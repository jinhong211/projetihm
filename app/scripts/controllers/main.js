'use strict';

/**
 * @ngdoc function
 * @name projetihmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetihmApp
 */
angular.module('projetihmApp')
  .controller('MainCtrl', ['$scope','$http',function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.main = '';
	$http.get('assets/main.json')
		.success(function(data){
			$scope.main = data;
			})
		.error(function(error){
			console.log(error);
			});
  }]);
