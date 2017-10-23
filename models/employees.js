const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const projectSchema = require('/models/projects.js').projectSchema;
const imageSchema = new Schema({
    url: String,
    title: String,
    desc: String
});

const projectSchema = new Schema({
    title: String,
    type: String,
    images: [imageSchema],
    description: String,
    // currentProjects: [String],
    // finishedProjects: [String],
    dateJoined : Date,
    skills : [String]
});



const employeeSchema = new Schema({
    username: String,
    name: {
        firstName: String,
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
