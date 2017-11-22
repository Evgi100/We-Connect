app.controller('mainCtrl', function($scope, employeeFact, employerFact, projectsFact, $localStorage, $sessionStorage) {
  // $scope.$storage = $localStorage;
  //////////////DUMMY DATA SCRIPT////////////////////
  let dummyProjects = [{
      title: "I need a web site",
      type: "Web Development",
      datestarted: 2017 - 10 - 22,
      description: "I need a web developer to build my Health and Fitness website - Fit Ethos.",
      skills: ['HTML', 'JAVASCRIPT', 'CSS'],
    },
    {
      title: "Invitation Design Needed - For invitation to short film screening",
      type: "Design",
      datestarted: 2017 - 10 - 22,
      description: "I am looking for someone  to design a simple and classic design for an invitation to a film screening in London",
      skills: ['Graphic Design', 'Photoshop'],
    },
    {
      title: "React.js - create a 50 questions test",
      type: "Web Development",
      datestarted: 2017 - 10 - 22,
      description: "We are looking for a person with a high level of knowledge and relevant practical experience to create 50 questions for React.js.",
      skills: ['React.js', 'JavaScript'],
    },
    {
      title: "Angular JS and Laravel PHP UI - small upgrades",
      type: "Angular",
      datestarted: 2017 - 10 - 22,
      description: "We have a running website www.gastro-booking.com and we are searching for a good developer in Laravel and Angular 1 to add new funcionalities",
      skills: ['Angular.js', 'Laravel'],
    }
  ]

  









  function initDatabase() {
    function addDummyData() {
      employeeFact.addEmployee({
          // _id: 1,
          username: 'olinsoffer',
          name: 'Olin Soffer',
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
        .then(function(response) {
          $scope.customEmployeeId = response._id;
        })
        .catch(function(error) {
          console.log(error);
        });

      let trumpPic = 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/12/104466932-PE_Color.240x240.jpg?v=1494613853';
      employerFact.addEmployer({
          // _id: 1,
          username: 'donaldtrump',
          name: 'Donald Trump',
          comapanyName: 'Trump',
          location: 'New York',
          image_url: trumpPic,
          description: 'I am the president of the United States',
          // currentProjects: [String],
          // finishedProjects: [String],
          allProjects: [],
          dateJoined: new Date(),
        })
        .then(function(response) {
          $scope.customEmployerId = response._id;
        })
        .catch(function(error) {
          console.log(error);
        });

      function _addDummyProjects() {
        for (let i = 0, N = dummyProjects.length; i < N; i++) {
          let project = dummyProjects[i];
          projectsFact.addProjectEmployer(project, '1');
        }
      }
      _addDummyProjects();


      // function _addDummyEmployees() {
      //   for (let i = 0, N = allEmployees.length; i < N; i++) {
      //     let employee = allEmployees[i];
      //     employeeFact.addEmployee(employee);
      //   }
      // }
      // _addDummyEmployees();
    }

    function emptyDatabase() {
      projectsFact.emptyProjects()
        .catch(function(error) {
          console.log(error);
        });
      employeeFact.emptyEmployees()
        .catch(function(error) {
          console.log(error);
        });
      employerFact.emptyEmployers()
        .catch(function(error) {
          console.log(error);
        });
    }
    emptyDatabase();
    addDummyData();
    $localStorage.sessionInited = true;
  }
  ////////////SOFT INIT/////////////
  if (!$localStorage.sessionInited) {
    initDatabase();
  }
  ////////////////////////////////

  ////UNCOMMENT TO HARD INIT//////
  //  initDatabase();
  ////////////////////////////////


  ////////////////END OF DUMMY DATA SCRIPT/////////////

});













///////////// dont delete /////////////////////////

    // .then(function(response) {
    //   console.log(response.data);
    //   return angular.copy(response.data);
    // });

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
    // let empId = '59ee03ace6acc81c34c486b5';
    // let projId = '59ee10b79cefc42d21158f22';
    // projectsFact.addProjectEmployee(projId, empId);

    // projectsFact.addProjectEmployee();
    // addDummyProjects();
