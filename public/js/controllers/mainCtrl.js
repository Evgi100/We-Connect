app.controller('mainCtrl',function($scope, employeeFact){
    //////////////DUMMY DATA SCRIPT////////////////////
    employeeFact.addEmployee({
        username: 'olinsoffer',
        name: {
            firstName: 'Olin',
            lastName: 'Soffer'
        },
        location : 'Los Angeles',
        rank: 0,
        image_url: 'https://imgur.com/a/m937i',
        description: 'Hello my name is Olin Soffer and I am a junior fullstack dev',
        // currentProjects: [String],
        // finishedProjects: [String],
        allProjects: [{
            title: '',
            type: 'String',
            images: [],
            description: 'String',
            // currentProjects: [String],
            // finishedProjects: [String],
            dateJoined : new Date(),
            skills : ['String']
        }],
        isAvail : true,
        dateJoined : new Date(),
        skills : ['String']
    });
    ////////////////END OF DUMMY DATA SCRIPT/////////////
});