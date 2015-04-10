'use strict';

/**
 * @ngdoc function
 * @name projetihmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetihmApp
 */
angular.module('projetihmApp')
  .controller('EducationCtrl', ['$scope','$http',function($scope,$http){
	$scope.education = '';
	$http.get('assets/education.json')
		.success(function(data){
			$scope.education = data;
			})
		.error(function(error){
			console.log(error);
			});
  }]);

