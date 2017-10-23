var app = angular.module('weConnectApp', ['ui.router']);

app.filter('currentdate',['$filter',  function($filter) {
    return function() {
        return $filter('date')(new Date(), 'yyyy-MM-dd');
    };
}])

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller : "employersCtrl",
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

    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
}]);

