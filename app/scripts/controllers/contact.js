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
	$scope.contact = '';
	$http.get('assets/contact.json')
		.success(function(data){
			$scope.contact = data;
			})
		.error(function(error){
			console.log(error);
			});
  }]);
