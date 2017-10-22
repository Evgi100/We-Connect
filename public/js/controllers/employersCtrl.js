app.controller('employersCtrl',function($scope,employerFact){
    $scope.employers = []

    $scope.employees = employerFact.allEmployees;

    $scope.addEmployers = function() {
        alert('hi')
        var employerInfo = {
        username : $scope.name,
        comapanyName : $scope.company,
        // allProjects : $scope.project
        }
        employerFact.addEmployer(employerInfo)
        .then(function (employer) {
            $scope.employers.push(employer)
            console.log($scope.employers)
        })
        .catch(function (error) {
            console.log(error)
        });
    }
})

