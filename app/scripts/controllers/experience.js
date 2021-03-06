'use strict';

/**
 * @ngdoc function
 * @name projetihmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetihmApp
 */
angular.module('projetihmApp')
  .controller('ExperienceCtrl', ['$scope','$http',function($scope,$http){
	$scope.experience = '';
	$http.get('assets/experience.json')
		.success(function(data){
			$scope.experience = data;
			})
		.error(function(error){
			console.log(error);
			});
  }]);
