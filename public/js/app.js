var app = angular.module('weConnectApp', ['ui-router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'mainController',
            templateUrl: '/templates/home.html'
        })
        .state('employees', {
            url: '/employees',
            templateUrl: '/templates/employees.html',
            controller: 'employeeController',
            params: { employParams: null }
        })
        .state('employee', {
            url: '/employee/:id',
            templateUrl: '/templates/employee.html',
            controller: 'employeeController',
            params: { employParams: null }
        })
        .state('employers', {
            url: '/employers',
            templateUrl: '/templates/employers.html',
            controller: 'employerController',
            params: { employerParams: null }
        })   
        .state('employer', {
            url: '/employer/:id',
            templateUrl: '/templates/employer.html',
            controller: 'employerController',
            params: { employerParams: null }
        })
        .state('projects', {
            url: '/projects',
            templateUrl: '/projects.html',
            controller: 'projectsController'
        })
        .state('project', {
            url: '/project/:id',
            templateUrl: '/project.html',
            controller: 'projectsController'
        });
    $urlRouterProvider.otherwise('/home');
}]);