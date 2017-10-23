app.controller('employersCtrl',function($scope,employerFact,$location,$stateParams){
    $scope.employers = []

    $scope.employees = employerFact.allEmployees;

    // function Cntrl ($scope,$location) {
    //     $scope.changeView = function(view){
    //         $location.path(view); // path not hash
    //     }
    // }


    $scope.passing=function(msg){
        $location.path("/employees/:showName/"+msg)
     }

     $scope.showAnswer=$stateParams.showAnswer

    // // $scope.passing = function() {
    //     employerFact.set("hello");



    // $scope.addEmployers = function() {
    //     alert('hi')
    //     var employerInfo = {
    //     username : $scope.name,
    //     comapanyName : $scope.company,
    //     // allProjects : $scope.project
    //     }
    //     employerFact.addEmployer(employerInfo)
    //     .then(function (employer) {
    //         $scope.employers.push(employer)
    //         console.log($scope.employers)
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     });
    // }
})

