app.controller('employersCtrl', function($rootScope, $scope, employerFact, $location, $stateParams, employeeFact, $state) {

  // $scope.employers = []

  $scope.employees = employerFact.allEmployees;

  $scope.showAnswer = $stateParams.showAnswer



  employerFact.getEmployers()
    .then(function(employers) {
      $scope.employers = employers;
      console.log($scope.employers)
    })
    .catch(function(error) {
      console.log(error)
    });


  // employerFact.getEmployers()
  //   .then(function(employer) {
  //     $scope.employers = employer;
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   });

  $scope.addProject = function() {
    alert("Hello, i am the add project function")
    var project = {
      title: $scope.title,
      date: $scope.date,
      description: $scope.description,
      skills: ['blah'],
      isTaken: false
    }
    projectsFacts.addProjectEmployer(project)
      .then(function(project) {
        console.log(project)
      })

      .catch(function(error) {
        console.log(error)
      });
  }
});
