app.controller('employeeCtrl', function ($scope,$stateParams,$location) {
    $scope.projects = [
        {  title: "I need a web site",type:"Web Development", dateJoined :2017-10-22, description: "I need a web developer to build my Health and Fitness website - Fit Ethos.", skils:['HTML','JAVASCRIPT','CSS'], },
        {  title: "The Lion King", year: 1994, description: "A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days.",price:3 },
        {  title: "Beauty and the Beast", year: 1991, description: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love.", price: 3 },
        {  title: "Beauty and the Beast", year: 2016, description: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad.", price: 3 }
    ]


    $scope.showName=$stateParams.showName

    // $scope.answer=function(msg){
    //     $location.path("/employers/" + msg)
    // }

})