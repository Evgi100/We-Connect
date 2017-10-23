
app.controller('employersCtrl', function ($rootScope, $scope, employerFact, $location, $stateParams, employeeFact, $state) {
    
    $scope.addNewProjectClicked = false;
    $scope.showAddOption = function () {
        $scope.addNewProjectClicked = !$scope.addNewProjectClicked;
    }

  $scope.employees = employerFact.allEmployees;

  $scope.showAnswer = $stateParams.showAnswer




    employerFact.getEmployers()
        .then(function (employer) {
            $scope.employers = employer;
        })
        .catch(function (error) {
            console.log(error)
        });
    
    $scope.addProject = function () {
        alert("Hello, i am the add project function")
        var project = {
            title: $scope.title,
            type:$scope.type,
            date: $scope.date,
            description: $scope.description,
            skills:['blah']
        }
        projectsFacts.addProjectEmployer(project)
            .then(function(project){
                console.log(project)
            })
        
        .catch(function (error) {
            console.log(error)
        });
    }


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
      }); // dfsfdsf
  }
});
