/////////////////////DEPENDENCIES//////////////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/weconnect', function () {
    console.log('WeConnect connection established!!!');
});

const Employee = require('./models/employees.js');
const Employer = require('./models/employers.js');
const Project = require('./models/projects.js').Project;

app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname +'/node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//////////////////////////END OF DEPENDENCIES/////////////////////////////////






//////////////////////////////ROUTES//////////////////////////////////////////
// app.all('*', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });
///////////////////EMPLOYEE ROUTES///////////////////
// Fetches all employees from the database
app.get('/employees', function (req, res, next) {
    Employee.find({}, handler(res, next));
});
// Adds an employee to the employees collection in the database
app.post('/employees', function (req, res, next) {
    Employee.create(req.body, handler(res, next));
});
// Deletes an employee from the database
app.delete('/employee/:employeeId', function (req, res, next) {
    let employeeId = req.params.employeeId;
    Employee.findByIdAndRemove(employeeId, handler(res, next));
});
// Edits an employee in the database
app.put('/employee/:employeeId/update', function (req, res, next) {
    let employeeId = req.params.employeeId,
        key = req.body.key,
        val = req.body.val;
    var updateObject = {};
    updateObject[key] = val;

    Employee.findByIdAndUpdate(employeeId, updateObject, {
        new: true
    }, handler(res, next));
});
// Gets one user from the database
app.get('/employee/:employeeId', function (req, res, next) {
    let employeeId = req.params.employeeId;

    Employee.findById(employeeId, handler(res, next));
});

/////////////////// END OF EMPLOYEE ROUTES////////////








///////////////////////////// EMPTY SPACE//////////////////////////////////////











///////////////////EMPLOYER ROUTES///////////////////
// Fetches all employers from the database
app.get('/employers', function (req, res, next) {
    Employer.find({}, handler(res, next));
});


// Adds an employer to the employers collection in the database
app.post('/employers', function (req, res, next) {
    Employer.create(req.body, function (err, employer) {
        if (err) { return next(err) }
        return res.send(employer);
        res.send('POST!');
    })
});


// Deletes an employer from the database
app.delete('/employer/:employerId', function (req, res, next) {
    let employerId = req.params.employerId;
    Employer.findByIdAndRemove(employerId, handler(res, next));
});
// Edits an employer in the database
app.put('/employer/:employerId/update', function (req, res, next) {
    let employerId = req.params.employerId,
        key = req.body.key,
        val = req.body.val;
    var updateObject = {};
    updateObject[key] = val;

    Employer.findByIdAndUpdate(employerId, updateObject, {
        new: true
    }, handler(res, next));
});
// Gets one user from the database
app.get('/employer/:employerId', function (req, res, next) {
    let employerId = req.params.employerId;

    Employer.findById(employerId, handler(res, next));
});

/////////////////// END OF EMPLOYER ROUTES////////////







//////////////////////////EMPTY SPACE//////////////////////







///////////////////PROJECT ROUTES////////////
// Fetches all projects from the database
app.get('/projects', function (req, res, next) {
    Project.find({}, handler(res, next));
});
// Deletes an project from the database
app.delete('/project/:projectId', function (req, res, next) {
    let projectId = req.params.projectId;
    Project.findByIdAndRemove(projectId, handler(res, next));
});
// Edits an project in the database
app.put('/project/:projectId/update', function (req, res, next) {
    let projectId = req.params.projectId,
        key = req.body.key,
        val = req.body.val;
    var updateObject = {};
    updateObject[key] = val;

    Project.findByIdAndUpdate(projectId, updateObject, {
        new: true
    }, handler(res, next));
});
// Gets one project from the database
app.get('/project/:projectId', function (req, res, next) {
    let projectId = req.params.projectId;

    Project.findById(projectId, handler(res, next));
});
// Create new project and add it to employer allProjects array
app.post('/project/employer/:employerId', function (req, res, next) {
    let employerId = req.params.employerId;
    let project = new Project(req.body);
    project.save();
    let updateObj = { $push: { allProjects: project } };
    Employer.findByIdAndUpdate(employerId, updateObj, { new: true }, handler(res, next));
});
// Add project to employee allProjects array
app.post('/project/employee/:employeeId', function (req, res, next) {
    let employeeId = req.params.employeeId;
    let project = req.body;
    let updateObj = { $push: { allProjects: project } };
    Employer.findByIdAndUpdate(employeeId, updateObj, { new: true }, handler(res, next));
});

/////////////////DEV ROUTES/////////
// Adds an project to the projects collection in the database
app.post('/projects', function (req, res, next) {
    Project.create(req.body, handler(res, next));
});
//////////////////END OF DEV ROUTES///////////

///////////////////END OF PROJECT ROUTES////////////
////////////////////////////END OF ROUTES/////////////////////////////////////







///////////////////////////////HANDLERS///////////////////////////////////////
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

function handler(res, next) {
    return function (err, data) {
        if (err) {
            return next(err);
        }
        console.log(data)
        res.send(data);
    };
}
///////////////////////////////END OF HANDLERS////////////////////////////////







app.listen(8000, function () {
    console.log('yo yo yo, on 8000!!');
});