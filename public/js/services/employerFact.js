app.factory('employerFact', function ($http) {

 var allMovies = [
                { img: "http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg", title: "Tarzan", year: 1999, descrShort: "The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan.", price: 3 },
                { img: "http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg", title: "The Lion King", year: 1994, descrShort: "A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days.", price: 3 },
                { img: "http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200", title: "Beauty and the Beast", year: 1991, descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love.", price: 3 },
                { img: "http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg", title: "The Sword in the Stone", year: 1963, descrShort: "Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom.", price: 3 },
                { img: "http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg", title: "Beauty and the Beast", year: 2016, descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad.", price: 3 }
            ];







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
        removeEmployer: removeEmployer
    };

});