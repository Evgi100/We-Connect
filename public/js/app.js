var app = angular.module('weConnectApp', ['ui-router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
<<<<<<< HEAD
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



    
=======
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
>>>>>>> 9be218655fe9d9ba028a36b9bb667b1f30bf5866
