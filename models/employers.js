const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = require('./models/projects.js');

// const companySchema = new Schema({});

const employerSchema = new Schema({
    username: String,
    name: {
        firstNam: String,
        lastName: String
    },
    comapanyName : String,
    location : String,
    image_url: String,
    description: String,
    // currentProjects: [String],
    // finishedProjects: [String],
    allProjects: [projectSchema],
    dateJoined : Date,
});

const Employer = mongoose.model('Employee', employerSchema);

module.exports = Employer;
