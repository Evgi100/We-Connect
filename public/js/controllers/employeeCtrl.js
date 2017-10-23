app.controller('employeeCtrl', function ($scope, $stateParams, employeeFact) {



    $scope.projects = [
        { title: "I need a web site", type: "Web Development", dateJoined: 2017 - 10 - 22, description: "I need a web developer to build my Health and Fitness website - Fit Ethos.", skils: ['HTML', 'JAVASCRIPT', 'CSS'], },
        { title: "Invitation Design Needed - For invitation to short film screening", dateJoined: 2017 - 10 - 22, description: "I am looking for someone  to design a simple and classic design for an invitation to a film screening in London", skils: ['Graphic Design', 'Photoshop'], },
        { title: "React.js - create a 50 questions test", dateJoined: 2017 - 10 - 22, description: "We are looking for a person with a high level of knowledge and relevant practical experience to create 50 questions for React.js.", skils: ['React.js', 'JavaScript'], },
        { title: "Angular JS and Laravel PHP UI - small upgrades", dateJoined: 2017 - 10 - 22, description: "We have a running website www.gastro-booking.com and we are searching for a good developer in Laravel and Angular 1 to add new funcionalities", skils: ['Angular.js', 'Laravel'], }
    ]


    $scope.showName = $stateParams.showName

     $scope.employees = []
    
    
        employeeFact.getEmployees()
            .then(function (employer) {
                $scope.employers = employer;
                console.log($scope.employers)
            })
            .catch(function (error) {
                console.log(error)
            });
    
        $scope.addEmployee = function () {
            alert('hi')
            var employeeInfo = {
                username: $scope.username,
                location: $scope.location,
                image_url: $scope.image,
                skills: $scope.skills
            }
            $scope.username = "";
            $scope.location = "";
            $scope.image = "";
            $scope.skills = "";
            console.log(employeeInfo);
            employeeFact.addEmployee(employeeInfo)
                .then(function (employee) {
                    $scope.employees = employee
                    console.log($scope.employees)
                })
                .catch(function (error) {
                    console.log(error)
                });
        }


})