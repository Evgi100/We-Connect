app.controller('mainCtrl', function($scope, employeeFact, employerFact) {
  //////////////DUMMY DATA SCRIPT////////////////////

  function dummydata() {
    employeeFact.addEmployee({
        username: 'olinsoffer',
        name: {
          firstName: 'Olin',
          lastName: 'Soffer'
        },
        location: 'Los Angeles',
        rank: 0,
        image_url: 'https://imgur.com/a/m937i',
        description: 'Hello my name is Olin Soffer and I am a junior fullstack dev',
        // currentProjects: [String],
        // finishedProjects: [String],
        allProjects: [],
        isAvail: true,
        dateJoined: new Date(),
        skills: ['String']
      })
      // .then(function(response) {
      //   console.log(response.data);
      //   return angular.copy(response.data);
      // });
    let trumpPic = 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/12/104466932-PE_Color.240x240.jpg?v=1494613853';
    employerFact.addEmployer({
        username: 'donaldtrump',
        name: {
          firstName: 'Donald',
          lastName: 'Trump'
        },
        comapanyName: 'Trump',
        location: 'New York',
        image_url: trumpPic,
        description: 'I am the president of the United States',
        // currentProjects: [String],
        // finishedProjects: [String],
        allProjects: [],
        dateJoined: new Date(),
      })
      // .then(function(response) {
      //   console.log(response.data);
      //   return angular.copy(response.data);
      // });
    // projectsFact.addProjectEmployer();
    // projectsFact.addProjectEmployee();
  }
  dummydata();
  ////////////////END OF DUMMY DATA SCRIPT/////////////

});
