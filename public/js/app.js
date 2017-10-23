var app = angular.module('weConnectApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
        .state('employers', {
            url: '/employers',
            templateUrl: 'templates/employers.html',
            controller : "employersCtrl",
        })
        .state('employees', {
            url: '/employees',
            templateUrl: 'templates/employee.html',
            controller: 'employeeCtrl',
        })
        .state('employeesAll', {
            url: '/employees/:showName?',
            templateUrl: 'templates/employee.html',
            controller: 'employeeCtrl',

        })
        .state('employersAll', {
            url: '/employers/:showAnswer?',
            templateUrl: '/templates/employers.html',
            controller: 'employersCtrl',
        })   




        // .state('employer', {
        //     url: '/employer/:id',
        //     templateUrl: '/templates/employer.html',
        //     controller: 'employerController',
        //     params: { employerParams: null }
        // })
        // .state('projects', {
        //     url: '/projects',
        //     templateUrl: '/projects.html',
        //     controller: 'projectsController'
        // })
        // .state('project', {
        //     url: '/project/:id',
        //     templateUrl: '/project.html',
        //     controller: 'projectsController'
        // });
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
}]);

