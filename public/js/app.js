var app = angular.module('weConnectApp', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            // controller: 'mainController',
            // templateUrl: 'index.html'
        })
        .state('employers', {
            url: '/employers',
            templateUrl: 'partial-employers.html',
            controller : "employersCtrl"
        })
        // .state('employer', {
        //     url: '/employer/:id',
        //     templateUrl: '/templates/employer.html',
        //     controller: 'employerController',
        //     params: { employerParams: null }
        // })
    })



    