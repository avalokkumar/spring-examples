(function(){
	'use strict';
	var amgApp = angular.module('amgApp', ['ngMaterial']);
	/*.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('altTheme')
		.primaryPalette('green');
	});*/
	
	
	amgApp.controller('HomeController', ['$scope', function ($scope){
		
		$scope.desc = "Ashok Motor Garage was estb. in Aug, 1990. Initially, it used to do the fixing of bus's and truck's engine." +
				"But now, it only focuses on trucks. It also works on installing and fixing of Heavy trucks ABS brakes.";
		$scope.addPost = function(){
			return "";
		};
		
		$scope.posts = [{
					title : "Random Post",
					link : "http://github.com/avalokkumar/spring-examples",
					upvotes : 10
				},
				{
					title : "Random Post 2",
					link : "http://github.com/avalokkumar/spring-core",
					upvotes : 7
				}];
	}]);
})();