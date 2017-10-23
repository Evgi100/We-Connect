app.controller('employeeCtrl', function ($scope,$stateParams,$location,projectsFact,employeeFact,$rootScope) {
    $scope.projects = [
        {  title: "I need a web site",type:"Web Development", datestarted :2017-10-22, description: "I need a web developer to build my Health and Fitness website - Fit Ethos.", skills:['HTML','JAVASCRIPT','CSS'], },
        {  title: "Invitation Design Needed - For invitation to short film screening",type:"Design", datestarted: 2017-10-22, description: "I am looking for someone  to design a simple and classic design for an invitation to a film screening in London",skills:['Graphic Design','Photoshop'], },
        {  title: "React.js - create a 50 questions test",type:"Web Development", datestarted: 2017-10-22, description: "We are looking for a person with a high level of knowledge and relevant practical experience to create 50 questions for React.js.",skills:['React.js','JavaScript'], },
        {  title: "Angular JS and Laravel PHP UI - small upgrades",type:"Angular", datestarted: 2017-10-22, description: "We have a running website www.gastro-booking.com and we are searching for a good developer in Laravel and Angular 1 to add new funcionalities",skills:['Angular.js','Laravel'], }
    ]

projectsFact.getProject()
    .then(function(project){
        $scope.projects=project;
    })
    .catch(function (error) {
        console.log(error)
    });


    $scope.showName = $stateParams.showName

     $scope.employees = [];
    console.log("hello")
    
        employeeFact.getEmployees()
            .then(function (employer) {
                $scope.employers = employer;
                console.log($scope.employers)
            })
            .catch(function (error) {
                console.log(error);
            });
     
            var employeeInfo = {
                username: $rootScope.username,
                location:$rootScope.location,
                image_url: $rootScope.image,
                skills: $rootScope.skills
            }
            console.log(employeeInfo);

        employeeFact.addEmployee(employeeInfo)
            .then(function (employee) {
                $scope.employees = employee
                console.log($scope.employees)
            })
            .catch(function (error) {
                console.log(error)
            });
            
            // $scope.username = "";
            // $scope.location = "";
            // $scope.image = "";
            // $scope.skills = "";
            
            // employeeFact.addEmployee(employeeInfo)
                


});