'use strict';

/**
 * @ngdoc function
 * @name projetihmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetihmApp
 */
angular.module('projetihmApp')
  .controller('ContactCtrl', ['$scope','$http',function($scope,$http){
	$scope.competence = '';
	$http.get('assets/competence.json')
		.success(function(data){
			$scope.competence = data;
			})
		.error(function(error){
			console.log(error);
			});
  }]);
