app.controller('employeeCtrl', function($scope, $stateParams, $location, projectsFact, employeeFact, $rootScope) {
  $scope.projects = [{
      title: "I need a web site",
      type: "Web Development",
      datestarted: 2017 - 10 - 22,
      description: "I need a web developer to build my Health and Fitness website - Fit Ethos.",
      skills: ['HTML', 'JAVASCRIPT', 'CSS'],
    },
    {
      title: "Invitation Design Needed - For invitation to short film screening",
      type: "Design",
      datestarted: 2017 - 10 - 22,
      description: "I am looking for someone  to design a simple and classic design for an invitation to a film screening in London",
      skills: ['Graphic Design', 'Photoshop'],
    },
    {
      title: "React.js - create a 50 questions test",
      type: "Web Development",
      datestarted: 2017 - 10 - 22,
      description: "We are looking for a person with a high level of knowledge and relevant practical experience to create 50 questions for React.js.",
      skills: ['React.js', 'JavaScript'],
    },
    {
      title: "Angular JS and Laravel PHP UI - small upgrades",
      type: "Angular",
      datestarted: 2017 - 10 - 22,
      description: "We have a running website www.gastro-booking.com and we are searching for a good developer in Laravel and Angular 1 to add new funcionalities",
      skills: ['Angular.js', 'Laravel'],
    }
  ]

  projectsFact.getProjects()
    .then(function(projects) {
      $scope.projects = projects;
    })
    .catch(function(error) {
      console.log(error)
    });




  $scope.showName = $stateParams.showName

  $scope.employees = [];
  employeeFact.getEmployees()
    .then(function(employer) {
      $scope.employers = employer;
    })
    .catch(function(error) {
      console.log(error);
    });



// EVEGENY AND LISE WORK ON THIS IM TOO TIRED
    $scope.addProject = function(index) {
      var id = $scope.projects[index]._id
      alert("Your reqest to join the project will be passed to the employer amd you will recieve answer shortlys")
      var employeeId = $scope.employers[0]._id
      projectsFact.addProjectEmployee(id,employeeId)
    };

});
