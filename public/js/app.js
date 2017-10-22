var app = angular.module('weConnectApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('employers', {
            url: '/employers',
            templateUrl: 'employers.html',
            controller : "employersCtrl"
        })
        .state('employees', {
            url: '/employees',
            templateUrl: '/templates/employees.html',
            controller: 'employeeController',
            params: { employParams: null }
        })
        // .state('employee', {
        //     url: '/employee/:id',
        //     templateUrl: '/templates/employee.html',
        //     controller: 'employeeController',
        //     params: { employParams: null }
        // })   
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
}]);

