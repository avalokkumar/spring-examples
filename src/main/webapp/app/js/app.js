(function(){
	'use strict';
	var amgApp = angular.module('amgApp', ['ngMaterial','ngAnimate','angular-carousel'])
	.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('default')
		    .dark();
	});
	
	
	amgApp.controller('HomeController', ['$scope', function ($scope){
		
		$scope.url = "../images/bcg2.jpg";
		$scope.garageImages = ["../images/garage/Garage_1.jpg","../images/garage/Garage_2.jpg","../images/garage/Garage_3.jpg",
		                       "../images/garage/Garage_4.jpg","../images/garage/Garage_5.jpg","../images/garage/Garage_6.jpg"];
		
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