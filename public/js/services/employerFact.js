app.factory('employerFact', function ($http) {

//ALL THE EMPLOYEES PROFIL//
    var allEmployees = [
        { img: "http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg", username: "John", location: "london", skills: ["CSS", "HTML"] },
        { img: "http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg", username: "Sarah", location: "tel aviv", skills: ["Angular", "React"] },
        { img: "http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200", username: "Bob", location: "New York", skills: ["navbar"]  },
        // { img: "http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg", title: "The Sword in the Stone", year: 1963, descrShort: "Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom.", price: 3 },
        // { img: "http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg", title: "Beauty and the Beast", year: 2016, descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad.", price: 3 }
    ];


        //   var data1={};
        //   var data2={};
        //   this.save=function(data1,data2){        
        //        this.data1=data1;
        //        this.data2=data2;
        
        //   };
        
        //   this.getData1=function(){
        
        //     return data1;
        
        //   };
        
        //   this.getData2=function(){
        
        //     return data2;
        
        //   };
        // });







    /////////////////////////////EMPLOYER FUNCTIONS//////////////////////////////
    let getEmployers = function () {
        return $http.get('/employers')
            .then(function (response) {
                return angular.copy(response.data);
            });
    };
    // Adds employee to database after signup
    let addEmployer = function (employer) {
        return $http.post('/employers', employer)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };
    // Gets individual employee object
    let getEmployer = function (id) {
        return $http.get('/employer/' + id)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };
    // Edit the information of an employer

    // Further details below
    /* The data param in the function expects an object with the key and value
    of what needs to be changed according the specifications defined in the schema
    */
    let editEmployer = function (data, id) {
        return $http.put('/employer/' + id + '/update', data)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };
    //Remove an employer
    let removeEmployer = function (id) {
        return $http.get('/employer/' + id)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };
    //////////////////////////////END OF EMPLOYER FUNCTIONS///////////////////////

    return {
        getEmployers: getEmployers,
        addEmployer: addEmployer,
        getEmployer: getEmployer,
        editEmployer: editEmployer,
        removeEmployer: removeEmployer,
        allEmployees: allEmployees
    };

});