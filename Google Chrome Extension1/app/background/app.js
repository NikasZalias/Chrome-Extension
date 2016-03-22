angular.module('app', ['ngRoute'])
    .run(function ($rootScope) {
        $rootScope.message = "Hello Angular again!";
    })
    //.config(function ($routeProvider, $locationProvider) {
    //    $routeProvider
	//		.when('/login', {
	//		    controller: 'LoginController',
	//		    templateUrl: 'views/test.html'
	//		});

    //    $locationProvider.html5Mode(true);
    //})
    


