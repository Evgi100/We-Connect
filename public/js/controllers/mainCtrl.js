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

  let allEmployees = [{
      image_url: "data:image/jpeg;base64,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",
      username: "George Clooney",
      location: "LA",
      skills: ["CSS", "HTML"]
    },
    {
      image_url: "data:image/jpeg;base64,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",
      username: "Mr Bean",
      location: "London",
      skills: ["Angular", "React"]
    },
    {
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtl85V-Y06nmkmsw-Cyg3MJnYgTt2VOq8Blw4K2PTqdPBhdCf",
      username: "Donald Trump",
      location: "New York",
      skills: ["navbar", "building walls"]
    },
    // { image_url: "http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg", title: "The Sword in the Stone", year: 1963, descrShort: "Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom.", price: 3 },
    // { img: "http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg", title: "Beauty and the Beast", year: 2016, descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad.", price: 3 }
  ];









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
          console.log($scope.customEmployeeId);
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
          console.log($scope.customEmployerId);
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


      function _addDummyEmployees() {
        for (let i = 0, N = allEmployees.length; i < N; i++) {
          let employee = allEmployees[i];
          employeeFact.addEmployee(employee);
        }
      }
      _addDummyEmployees();
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
  // initDatabase();
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
