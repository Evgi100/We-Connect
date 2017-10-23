app.controller('mainCtrl', function($scope, employeeFact, employerFact, projectsFact) {
  //////////////DUMMY DATA SCRIPT////////////////////
  function dummydata(/*dummyProjectId*/) {
    // console.log('Heeeeeeeeeeeeeeeeeelooooooooooooooo');
    // employeeFact.addEmployee({
    //     username: 'olinsoffer',
    //     name: {
    //       firstName: 'Olin',
    //       lastName: 'Soffer'
    //     },
    //     location: 'Los Angeles',
    //     rank: 0,
    //     image_url: 'https://imgur.com/a/m937i',
    //     description: 'Hello my name is Olin Soffer and I am a junior fullstack dev',
    //     // currentProjects: [String],
    //     // finishedProjects: [String],
    //     allProjects: [],
    //     isAvail: true,
    //     dateJoined: new Date(),
    //     skills: ['String']
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // .then(function(response) {
    //   console.log(response.data);
    //   return angular.copy(response.data);
    // });
    // let trumpPic = 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/12/104466932-PE_Color.240x240.jpg?v=1494613853';
    // employerFact.addEmployer({
    //     username: 'donaldtrump',
    //     name: {
    //       firstName: 'Donald',
    //       lastName: 'Trump'
    //     },
    //     comapanyName: 'Trump',
    //     location: 'New York',
    //     image_url: trumpPic,
    //     description: 'I am the president of the United States',
    //     // currentProjects: [String],
    //     // finishedProjects: [String],
    //     allProjects: [],
    //     dateJoined: new Date(),
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // .then(function(response) {
    //   console.log(response.data);
    //   return angular.copy(response.data);
    // });
    /*projectsFact.addProject*/
    // projectsFact.addProjectEmployer({
    //     title: 'Make a nice website for my business',
    //     type: 'Web Development',
    //     images: [],
    //     description: 'blah blah blah and blah',
    //
    //     // currentProjects: [String],
    //     // finishedProjects: [String],
    //     dateStarted: new Date(),
    //     skills: ['Html', 'Css', 'Javascript', 'Angular'],
    //     EmployerUserName: 'donaldtrump'
    //   }, "59ee03ace6acc81c34c486b6")
    //   .catch(function (error) {
    //     console.log(error + 'This');
    //   });
      let empId = '59ee03ace6acc81c34c486b5';
      let projId = '59ee10b79cefc42d21158f22';
      projectsFact.addProjectEmployee(projId, empId);


    // projectsFact.addProjectEmployee();
  }

  dummydata();

  ////////////////END OF DUMMY DATA SCRIPT/////////////


//EMPLOYER SIGN UP//


//EMPLOYEE SIGN UP//







});
