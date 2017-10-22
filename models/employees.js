const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = require('./models/projects.js');

const employeeSchema = new Schema({
    username: String,
    name: {
        firstNam: String,
        lastName: String
    },
    location : String,
    rank: Number,
    image_url: String,
    description: String,
    // currentProjects: [String],
    // finishedProjects: [String],
    allProjects: [projectSchema],
    isAvail : Boolean,
    dateJoined : Date,
    skills : [String]
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
