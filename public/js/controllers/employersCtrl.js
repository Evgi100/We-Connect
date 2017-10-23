app.controller('employersCtrl', function ($scope, employerFact, $location, $stateParams,projectsFact) {
    $scope.employers = []

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

    $scope.addEmployers = function () {
        alert('hi')
        var employerInfo = {
            username: $scope.name,
            companyName: $scope.company,
            image_url: $scope.image,
            currentProject: $scope.project
        }
        $scope.name = "";
        $scope.company = "";
        $scope.company = "";
        console.log($scope.name)
        employerFact.addEmployer(employerInfo)
            .then(function (employer) {
                // $scope.employers = employer
                console.log($scope.employers)
            })
            .catch(function (error) {
                console.log(error)
            });
    }
});

