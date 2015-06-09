'use strict';

angular.module('textAnalysis', ['ngRoute', 'ngAnimate', 'd3'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './components/home/home.view.html',
                controller: 'homeCtrl'
            })
            .when('/tweets/:handle', {
                templateUrl: './components/tweets/tweets.view.html',
                controller: 'tweetCtrl'
            })
            .when('/results/:handle/', {
                templateUrl: './components/results/results.view.html',
                controller: 'resultsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
