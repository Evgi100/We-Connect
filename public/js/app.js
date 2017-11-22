var app = angular.module('weConnectApp', ['ui.router', 'ngStorage']);

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller : "homeCtrl",
        })

        .state('employers', {
            url: '/employers',
            templateUrl: 'templates/employers.html',
            controller : "employersCtrl",
        })
        .state('employee', {
            url: '/employee',
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
        .state('employer-signup', {
            url: '/employer-signup',
            templateUrl: '/templates/employer-signup.html',
            controller: function($scope, employerFact) {
              $scope.addEmployers = function() {
                let employerInfo = {
                  name: $scope.name,
                  username: $scope.username,
                  companyName: $scope.companyName,
                  image_url: $scope.image,
                  location: $scope.location
                  // currentProject: $scope.project
                };
                console.log(employerInfo);
                employerFact.addEmployer(employerInfo)
                  .then(function(employer) {
                    $scope.employers = employer
                    console.log($scope.employers);
                  })
                  .catch(function(error) {
                    console.log(error);
                  });
              };
            }
        })
        .state('employee-signup', {
            url: '/employee-signup',
            templateUrl: '/templates/employee-signup.html',
            controller: function($scope, employeeFact) {
              $scope.skillsArray = [];
              $scope.addToSkillsArray = function(skill) {
                $scope.skillsArray.push(skill);
                $scope.skill = "";
              };

              $scope.addEmployee = function() {
                let employeeInfo = {
                  username: $scope.username,
                  name: $scope.name,
                  location: $scope.location,
                  image_url: $scope.image,
                  skills: $scope.skillsArray
                };
                employeeFact.addEmployee(employeeInfo)
                  .then(function(employee) {
                    $scope.employees = employee;
                    console.log($scope.employees);
                  })
                  .catch(function(error) {
                    console.log(error);
                  });
              };

              $scope.skillsArray = [];
              $scope.addToSkillsArray = function(skill) {
                $scope.skillsArray.push(skill);
                $scope.skill = "";
              };
              // $scope.changeView = function() {
              //   $rootScope.username = $scope.username;
              //   $rootScope.location = $scope.location;
              //   $rootScope.image = $scope.image;
              //   $rootScope.skills = $scope.skills;
              //
              //   // console.log($scope.username,$scope.location,$scope.image,$scope.skills)
              //   console.log('hey');
              //   $state.go("employees");
              //
              //   $scope.addEmployee(employeeInfo);
              // };
            }
        })
        .state('employer-signin', {
            url: '/employer-signin',
            templateUrl: '/templates/employer-signin.html'
            // controller: function() {
            //
            // }
        })
        .state('employee-signin', {
            url: '/employee-signin',
            templateUrl: '/templates/employee-signin.html'
            // controller: function() {
            //
            // }
        });

    $urlRouterProvider.otherwise('/home');
    // $locationProvider.html5Mode(true);
}]);
