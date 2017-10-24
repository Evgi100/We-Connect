app.controller('employersCtrl', function($rootScope, $scope, employerFact, $location, $stateParams, employeeFact, $state, projectsFact) {

  $scope.addNewProjectClicked = false;
  $scope.showAddOption = function() {
    $scope.addNewProjectClicked = !$scope.addNewProjectClicked;
  }

  // $scope.employees = employerFact.allEmployees;

  $scope.showAnswer = $stateParams.showAnswer;

  $scope.skillsArray = [];
  $scope.addToSkillsArray = function(skill) {
    $scope.skillsArray.push(skill);
    $scope.skill = "";
  };

  employeeFact.getEmployees()
    .then(function(employees) {
      $scope.employees = employees;
    })
    .catch(function(error) {
      console.log(error)
    });




  employerFact.getEmployers()
    .then(function(employer) {
      $scope.employers = employer;
    })
    .catch(function(error) {
      console.log(error)
    });

  $scope.addProject = function() {
    alert("Hello, i am the add project function")
    var project = {
      title: $scope.title,
      date: $scope.date,
      description: $scope.description,
      skills: $scope.skillsArray,
      isTaken: false
    }
    projectsFact.addProjectEmployer(project)
      .then(function(project) {
        console.log(project)
      })

      .catch(function(error) {
        console.log(error)
      });
  }
});
