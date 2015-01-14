angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            // home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .when('/nerds', {
                templateUrl: 'views/nerd.html',
                controller: 'NerdController'
            })
            .when('/geeks', {
                templateUrl: 'views/geek.html',
                controller: 'GeekController'
            })
            .when('/tanks', {
                templateUrl: 'views/tank.html',
                controller: 'TankController'
            });

        $locationProvider.html5Mode(true);
    }
]);